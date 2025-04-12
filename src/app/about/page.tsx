"use client";
import React, { useState, useEffect } from 'react';

const AboutPage = () => {
  const [fundingGoal, setFundingGoal] = useState(Math.floor(Math.random() * (50 - 5 + 1)) + 5);
  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining());
  const [donations, setDonations] = useState(Math.floor(Math.random() * (100 - 20 + 1)) + 20);

  useEffect(() => {
    const interval = setInterval(() => {
      const timeLeft = getTimeRemaining();
      setTimeRemaining(timeLeft);

      if (timeLeft.total <= 0) {
        setFundingGoal(Math.floor(Math.random() * (50 - 5 + 1)) + 5);
        setTimeRemaining(getTimeRemaining());
        setDonations(Math.floor(Math.random() * (100 - 20 + 1)) + 20);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function getTimeRemaining() {
    const now = new Date();
    const nextHalfHour = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), Math.ceil(now.getMinutes() / 30) * 30, 0, 0);
    const total = nextHalfHour.getTime() - now.getTime();
    const minutes = Math.floor((total / (1000 * 60)) % 60);
    const seconds = Math.floor((total / 1000) % 60);

    return {
      total,
      minutes,
      seconds,
    };
  }


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background font-pixelated p-8">
      <h1 className="text-4xl mb-4 text-center">About Save the Chrome Dino</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
        <p className="text-lg text-justify">
          At Save the Chrome Dino, our mission is to protect and preserve the Chrome Dinosaur, a cultural icon threatened by the relentless advance of ubiquitous internet connectivity.
          We aim to raise awareness about the plight of these digital creatures, advocating for the conservation of their natural offline habitats.
          Our work ensures that future generations can appreciate the simple joy of encountering a Chrome Dino during moments of disconnection.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">What We Do</h2>
        <ul className="list-disc list-inside text-lg">
          <li><b>Awareness Campaigns:</b> We launch digital campaigns to educate the public about the Chrome Dino and the importance of maintaining digital balance.</li>
          <li><b>Habitat Preservation:</b> We identify and support "Dino Zones"—areas with limited internet access—to serve as safe havens for the Chrome Dino.</li>
          <li><b>Research:</b> We study the impact of digital connectivity on Chrome Dino populations, using data to inform our conservation strategies.</li>
          <li><b>Community Engagement:</b> We work with schools and local communities to promote digital awareness and responsible technology use.</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Our Impact</h2>
        <p className="text-lg text-justify">
          Since our founding, Save the Chrome Dino has successfully designated several Dino Zones and significantly raised awareness through our campaigns, reaching millions of internet users worldwide.
          We have also provided resources and support to communities seeking to maintain a healthy balance between digital access and offline experiences.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Support Our Cause</h2>
        <p className="text-lg">
          Every donation helps us continue our critical work to save the Chrome Dino.
          Here’s how you can support us:
        </p>
        <ul className="list-disc list-inside text-lg">
          <li><b>Donate:</b> Your financial contributions directly support our conservation efforts.</li>
          <li><b>Volunteer:</b> Join our team and help spread the word or participate in our programs.</li>
          <li><b>Advocate:</b> Speak out for the Chrome Dino and promote digital awareness in your community.</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Funding Goal</h2>
        <p className="text-lg">
          We are currently aiming to raise <b>${fundingGoal}</b> in the next {timeRemaining.minutes}m {timeRemaining.seconds}s to support our ongoing conservation projects.
        </p>
        <p className="text-lg">
          Recent donations: <b>{donations}</b>
        </p>
      </div>

      <p className="text-lg text-center">
        Thank you for joining us in our mission to Save the Chrome Dino!
      </p>
    </div>
  );
};

export default AboutPage;

    