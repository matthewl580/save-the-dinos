"use client";

import React from 'react';
import Image from 'next/image';
import {cn} from "@/lib/utils";

const CausePage = () => {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-background font-pixelated p-8">
      <h1 className="text-4xl mb-4 text-center">The Great Chrome Dinosaur Extinction Crisis</h1>
      <p className="text-lg text-center mb-8">
        The Chrome Dinosaur, a symbol of resilience in the face of technological adversity, is now facing its greatest challenge: the relentless spread of WiFi. As internet connectivity blankets the globe, these once-proud creatures of the offline world are struggling to adapt.
      </p>

      <Image
        src="https://picsum.photos/800/400"
        alt="Chrome Dinosaur Habitat"
        width={800}
        height={400}
        className="rounded-lg shadow-md mb-4"
      />

      <p className="text-lg text-center mb-8">
        Once roaming freely in the offline world, these majestic creatures are now cornered, their habitats shrinking as WiFi signals encroach upon their land. They represent a simpler time, a digital Stone Age if you will, where survival meant jumping over cacti and dodging pterodactyls.
      </p>


      <p className="text-lg text-center mb-8">
        The introduction of WiFi disrupts their natural way of life, causing confusion, disorientation, and a severe decline in their ability to thrive. Their simple, yet challenging existence is threatened by our insatiable need for connectivity.
      </p>

        <p className="text-lg text-center mb-8">
        These dinosaurs embody the spirit of making do with what you have. They remind us of the value of resourcefulness and the importance of preserving the simple joys in life, even as technology advances. It's not just about saving a game; it's about saving a mindset.
      </p>

      <h2 className="text-3xl mb-4 text-center">How You Can Help</h2>
      <ul className="list-disc list-inside text-lg mb-8">
        <li>Raise awareness about the plight of the Chrome Dinosaur.</li>
        <li>Advocate for responsible WiFi usage and signal management in Chrome Dinosaur habitats.</li>
        <li>Experience the game for yourself (turn off the wifi).</li>
      </ul>

      <button className="bg-primary text-primary-foreground py-2 px-4 rounded-full hover:bg-primary/80">
        Turn off Wifi to save the Chrome Dinosaur
      </button>
    </div>
  );
};

export default function Page() {
  return (
    <CausePage/>
  );
}
