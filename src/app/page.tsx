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
        src="/chrome-dino.png"
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
        The plight of the Chrome Dinosaur is more than just a nostalgic lament for simpler times; it's a reflection of our increasingly complex relationship with technology.
        These dinosaurs embody the spirit of making do with what you have.
        They remind us of the value of resourcefulness and the importance of preserving the simple joys in life, even as technology advances.
        It's not just about saving a game; it's about saving a mindset.
      </p>

      <p className="text-lg text-center mb-8">
        As WiFi continues to expand its reach, the Chrome Dinosaur faces habitat loss, social disruption, and an existential threat to their very way of life.
        We must act now to protect these creatures and ensure their survival for future generations.
      </p>

      <p className="text-lg text-center mb-8">
        The Chrome Dinosaur is not just a relic of the past; it's a symbol of resilience, resourcefulness, and the importance of preserving simple joys in an increasingly complex world.
        By supporting our cause, you're not just saving a game; you're saving a mindset.
      </p>

      <p className="text-lg text-center mb-8">
        Our mission is to raise awareness about the plight of the Chrome Dinosaur and advocate for the conservation of their natural offline habitats.
        We work to educate the public about the importance of digital balance and responsible technology use.
      </p>

      <p className="text-lg text-center mb-8">
        We also support the creation and maintenance of "Dino Zones"—areas with limited or no WiFi connectivity—to provide safe havens for the Chrome Dinosaur to thrive.
      </p>

      <p className="text-lg text-center mb-8">
        Through research, education, and advocacy, we strive to ensure that future generations can continue to appreciate the simple joy of encountering a Chrome Dinosaur during moments of disconnection.
      </p>

      <p className="text-lg text-center mb-8">
        The Chrome Dinosaur's struggle is a metaphor for our own battle to maintain balance in an increasingly connected world.
        By supporting our cause, you're investing in a future where technology enhances rather than diminishes the human experience.
      </p>

      <p className="text-lg text-center mb-8">
        We envision a world where the Chrome Dinosaur continues to roam freely in the offline world, a symbol of resilience and a reminder of the importance of digital balance.
      </p>

      <p className="text-lg text-center mb-8">
        Join us in our mission to Save the Chrome Dino and protect these iconic creatures from extinction.
        Together, we can make a difference and ensure that future generations can continue to enjoy the simple joys of offline experiences.
      </p>

            <p className="text-lg text-center mb-8">
        The Chrome Dinosaur is a reminder that even in the face of technological progress, there's still value in simplicity, resourcefulness, and the ability to disconnect.
        They are a symbol of the past, present, and future – a testament to the importance of maintaining balance in a world that is constantly evolving.
      </p>

      <p className="text-lg text-center mb-8">
        The Great Chrome Dinosaur Extinction Crisis is a call to action.
        We must act now to protect these creatures and ensure their survival for future generations.
        The fate of the Chrome Dinosaur is in our hands, and we must not fail them.
      </p>

      <p className="text-lg text-center mb-8">
        Join the movement to Save the Chrome Dino and help us create a world where technology and nature can coexist in harmony.
        Together, we can ensure that the Chrome Dinosaur continues to thrive for years to come.
      </p>

      <p className="text-lg text-center mb-8">
        Our commitment extends beyond mere preservation.
        We aim to foster a global community that values digital well-being, technological mindfulness, and the importance of balance in our increasingly connected lives.
        The Chrome Dino serves as a reminder that technology should enhance, not diminish, the human experience.
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

    