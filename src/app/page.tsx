"use client";

import React, {useState, useEffect, useCallback} from 'react';
import {Button} from "@/components/ui/button";
import {generateDinoFact} from '@/ai/flows/generate-dino-fact';
import {cn} from "@/lib/utils";

const Home = () => {
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
  }, [generateRandomFact]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background font-pixelated">
      <h1 className="text-4xl mb-4">Dinosaur Fact Website</h1>
      <Button onClick={generateRandomFact} className="mt-2">
        Generate Dino Fact
      </Button>
      {dinoFact && (
        <div className="mt-4 text-center">
          <p className="text-lg">{dinoFact}</p>
        </div>
      )}
    </div>
  );
};

export default function Page() {
  return (
    <Home/>
  );
}
