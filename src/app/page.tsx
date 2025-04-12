"use client";

import React, {useState, useEffect, useCallback} from 'react';
import {Button} from "@/components/ui/button";
import {generateDinoFact} from '@/ai/flows/generate-dino-fact';
import {cn} from "@/lib/utils";

// Define the types for Dino and Obstacle
type DinoProps = {
  isJumping: boolean;
  position: number;
};

type ObstacleProps = {
  position: number;
};

const initialDino = {
  isJumping: false,
  position: 0,
};

const initialObstacle = {
  position: 800, // Start off-screen
};

const Game = () => {
  const [score, setScore] = useState(0);
  const [dino, setDino] = useState<DinoProps>(initialDino);
  const [obstacle, setObstacle] = useState<ObstacleProps>(initialObstacle);
  const [gameSpeed, setGameSpeed] = useState(5); // Initial game speed
  const [isGameOver, setIsGameOver] = useState(false);
  const [dinoFact, setDinoFact] = useState<string | null>(null);

  const generateRandomFact = useCallback(async () => {
    try {
      const fact = await generateDinoFact({});
      setDinoFact(fact.fact);
    } catch (error) {
      console.error("Failed to generate dino fact:", error);
      setDinoFact("Dinosaurs are cool!");
    }
  }, []);

  useEffect(() => {
    generateRandomFact();
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [generateRandomFact]);

  useEffect(() => {
    let gameIntervalId: NodeJS.Timeout;

    if (!isGameOver) {
      gameIntervalId = setInterval(() => {
        setScore((prevScore) => prevScore + 1);
        setGameSpeed((prevSpeed) => Math.min(prevSpeed + 0.005, 15)); // Increase game speed gradually

        // Update obstacle position
        setObstacle((prevObstacle) => {
          let newPosition = prevObstacle.position - gameSpeed;
          if (newPosition < -20) {
            // -20 is the approximate width of the obstacle
            newPosition = 800 + Math.random() * 300; // Reset position with some randomness
            generateRandomFact();
          }
          return {...prevObstacle, position: newPosition};
        });

        // Collision detection
        if (
          obstacle.position > 50 &&
          obstacle.position < 150 &&
          dino.position < 20
        ) {
          setIsGameOver(true);
          clearInterval(gameIntervalId);
        }
      }, 20);
    }

    return () => clearInterval(gameIntervalId);
  }, [dino.position, gameSpeed, generateRandomFact, isGameOver, obstacle.position]);

  const jump = () => {
    if (!dino.isJumping) {
      setDino({...dino, isJumping: true});
      let jumpHeight = 100;
      let jumpDuration = 400; // Duration of the jump in milliseconds

      // Animate the jump
      let start = null;

      const animateJump = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const linearTime = progress / jumpDuration; // Normalized time
        const easedTime = Math.sin(linearTime * Math.PI); // Eased time with sine function

        if (progress < jumpDuration) {
          const newPosition = easedTime * jumpHeight;
          setDino((prevDino) => ({...prevDino, position: newPosition}));
          requestAnimationFrame(animateJump);
        } else {
          // Reset jump
          setDino({...dino, isJumping: false, position: 0});
        }
      };

      requestAnimationFrame(animateJump);
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.code === "Space") {
      jump();
    }
  };

  const resetGame = () => {
    setIsGameOver(false);
    setScore(0);
    setDino(initialDino);
    setObstacle(initialObstacle);
    setGameSpeed(5);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-light-grey font-pixelated">
      <div className="text-dark-grey text-2xl mb-4">Score: {score}</div>

      <div className="relative w-[800px] h-[200px] bg-light-grey border-2 border-dark-grey">
        {/* Dino */}
        <div
          className="absolute bottom-0 left-[50px] w-[50px] h-[50px] bg-teal"
          style={{bottom: dino.position + "px"}}
        />

        {/* Obstacle */}
        <div
          className="absolute bottom-0 w-[20px] h-[50px] bg-dark-grey"
          style={{left: obstacle.position + "px"}}
        />

        {isGameOver && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-75 p-4 rounded">
            <div className="text-red-500 text-3xl">Game Over!</div>
            <Button onClick={resetGame} className="mt-2">
              Reset
            </Button>
            {dinoFact && (
              <div className="mt-4 text-center">
                <span className="text-lg font-bold">Dino Fact:</span>
                <p className="text-md">{dinoFact}</p>
              </div>
            )}
          </div>
        )}
      </div>
      <Button asChild>
        <a href="https://www.example.com/donate" target="_blank" rel="noopener noreferrer">
          Donate
        </a>
      </Button>
    </div>
  );
};

export default function Home() {
  return (
    <Game/>
  );
}
