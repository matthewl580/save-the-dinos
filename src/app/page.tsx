"use client";

import React from 'react';
import {cn} from "@/lib/utils";

const CausePage = () => {
  return (
    <div className="relative flex flex-col items-center justify-start min-h-screen bg-gradient-to-br from-blue-100 to-green-100 font-pixelated p-8">
      <h1 className="text-4xl mb-4 text-center text-primary funky-shadow wavy-underline">
        <b>The Great Chrome Dinosaur Extinction Crisis</b>
      </h1>
      <p className="text-lg text-center mb-8 text-teal-500 funky-border">
        In a world dominated by ever-present WiFi, the iconic Chrome Dinosaur faces its ultimate challenge: the relentless march of connectivity. Once symbols of offline resilience, these digital creatures are now on the brink, their natural habitat vanishing as WiFi blankets the globe.
      </p>

      <div className="w-full h-64 relative mb-4">
        <iframe src="https://chromedino.com/" frameBorder="0" scrolling="no" width="100%" height="100%" loading="lazy"></iframe>
        <style dangerouslySetInnerHTML={{__html: 'iframe { position: absolute; width: 100%; height: 100%; z-index: 999; }'}} />
      </div>

      <p className="text-lg text-center mb-8 text-yellow-400 funky-border">
        These dinosaurs once roamed freely in the offline world, challenging players to leap over cacti and evade pterodactyls.
      </p>

      <p className="text-lg text-center mb-8 text-purple-300 funky-border">
        The introduction of WiFi disrupts their natural way of life, causing confusion, disorientation, and a severe decline in their ability to thrive. Their simple, yet challenging existence is threatened by our insatiable need for connectivity.
      </p>

      <p className="text-lg text-center mb-8 text-orange-400 funky-border">
        The plight of the Chrome Dinosaur is more than just a nostalgic lament for simpler times; it's a reflection of our increasingly complex relationship with technology.
        These dinosaurs embody the spirit of making do with what you have.
        They remind us of the value of resourcefulness and the importance of preserving the simple joys in life, even as technology advances.
        It's not just about saving a game; it's about saving a mindset.
      </p>

      <p className="text-lg text-center mb-8 text-pink-300 funky-border">
        As WiFi continues to expand its reach, the Chrome Dinosaur faces habitat loss, social disruption, and an existential threat to their very way of life.
        We must act now to protect these creatures and ensure their survival for future generations.
      </p>

      <p className="text-lg text-center mb-8 text-lime-300 funky-border">
        The Chrome Dinosaur is not just a relic of the past; it's a symbol of resilience, resourcefulness, and the importance of preserving simple joys in an increasingly complex world.
        By supporting our cause, you're not just saving a game; you're saving a mindset.
      </p>

      <p className="text-lg text-center mb-8 text-cyan-300 funky-border">
        Our mission is to raise awareness about the plight of the Chrome Dinosaur and advocate for the conservation of their natural offline habitats.
        We work to educate the public about the importance of digital balance and responsible technology use.
      </p>

      <p className="text-lg text-center mb-8 text-fuchsia-300 funky-border">
        We also support the creation and maintenance of "Dino Zones"—areas with limited or no WiFi connectivity—to provide safe havens for the Chrome Dinosaur to thrive.
      </p>

      <p className="text-lg text-center mb-8 text-rose-300 funky-border">
        Through research, education, and advocacy, we strive to ensure that future generations can continue to appreciate the simple joy of encountering a Chrome Dinosaur during moments of disconnection.
      </p>

      <p className="text-lg text-center mb-8 text-amber-300 funky-border">
        The Chrome Dinosaur's struggle is a metaphor for our own battle to maintain balance in an increasingly connected world.
        By supporting our cause, you're investing in a future where technology enhances rather than diminishes the human experience.
      </p>

      <p className="text-lg text-center mb-8 text-emerald-300 funky-border">
        We envision a world where the Chrome Dinosaur continues to roam freely in the offline world, a symbol of resilience and a reminder of the importance of digital balance.
      </p>

      <p className="text-lg text-center mb-8 text-violet-300 funky-border">
        Join us in our mission to Save the Chrome Dino and protect these iconic creatures from extinction.
        Together, we can make a difference and ensure that future generations can continue to enjoy the simple joys of offline experiences.
      </p>

      <p className="text-lg text-center mb-8 text-teal-300 funky-border">
        The Chrome Dinosaur is a reminder that even in the face of technological progress, there's still value in simplicity, resourcefulness, and the ability to disconnect.
        They are a symbol of the past, present, and future – a testament to the importance of maintaining balance in a world that is constantly evolving.
      </p>

      <p className="text-lg text-center mb-8 text-sky-300 funky-border">
        The Great Chrome Dinosaur Extinction Crisis is a call to action.
        We must act now to protect these creatures and ensure their survival for future generations.
        The fate of the Chrome Dinosaur is in our hands, and we must not fail them.
      </p>

      <p className="text-lg text-center mb-8 text-indigo-300 funky-border">
        Join the movement to Save the Chrome Dino and help us create a world where technology and nature can coexist in harmony.
        Together, we can ensure that the Chrome Dinosaur continues to thrive for years to come.
      </p>

      <p className="text-lg text-center mb-8 text-stone-300 funky-border">
        Our commitment extends beyond mere preservation.
        We aim to foster a global community that values digital well-being, technological mindfulness, and the importance of balance in our increasingly connected lives.
        The Chrome Dino serves as a reminder that technology should enhance, not diminish, the human experience.
      </p>

      <h2 className="text-3xl mb-4 text-center text-primary wavy-underline">How You Can Help</h2>
      <ul className="list-disc list-inside text-lg mb-8 text-green-300 funky-border">
        <li>Raise awareness about the plight of the Chrome Dinosaur.</li>
        <li>Advocate for responsible WiFi usage and signal management in Chrome Dinosaur habitats.</li>
        <li>Experience the game for yourself (turn off the wifi).</li>
        <li>Share your high scores to inspire others.</li>
        <li>Participate in offline activities and events to show solidarity.</li>
      </ul>

      <button className="bg-primary text-primary-foreground py-2 px-4 rounded-full hover:bg-primary/80 funky-shadow">
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
