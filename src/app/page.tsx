"use client";

import React from 'react';
import Image from 'next/image';
import {cn} from "@/lib/utils";

const CausePage = () => {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-background font-pixelated p-8">
      <h1 className="text-4xl mb-4 text-center">The Great Chrome Dinosaur Extinction Crisis</h1>
      <p className="text-lg text-center mb-8">
        The Chrome Dinosaur, a symbol of resilience in the face of technological adversity, is now facing its greatest challenge: the relentless spread of WiFi.
      </p>

      <Image
        src="https://picsum.photos/800/400"
        alt="Chrome Dinosaur Habitat"
        width={800}
        height={400}
        className="rounded-lg shadow-md mb-4"
      />

      <p className="text-lg text-center mb-8">
        Once roaming freely in the offline world, these majestic creatures are now cornered, their habitats shrinking as WiFi signals encroach upon their land.
      </p>

      <Image
        src="https://picsum.photos/800/400"
        alt="Chrome Dinosaur"
        width={800}
        height={400}
        className="rounded-lg shadow-md mb-4"
      />

      <p className="text-lg text-center mb-8">
        The introduction of WiFi disrupts their natural way of life, causing confusion, disorientation, and a severe decline in their ability to thrive.
      </p>

      <h2 className="text-3xl mb-4 text-center">How You Can Help</h2>
      <ul className="list-disc list-inside text-lg mb-8">
        <li>Raise awareness about the plight of the Chrome Dinosaur.</li>
        <li>Donate to support the creation of offline sanctuaries.</li>
        <li>Advocate for responsible WiFi usage and signal management.</li>
      </ul>

      <button className="bg-primary text-primary-foreground py-2 px-4 rounded-full hover:bg-primary/80">
        Donate Now to Save the Chrome Dinosaur!
      </button>
    </div>
  );
};

export default function Page() {
  return (
    <CausePage/>
  );
}
