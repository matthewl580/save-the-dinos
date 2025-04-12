"use client";
import React, { useState, useEffect } from 'react';

const AboutPage = () => {
  const [fundingGoal, setFundingGoal] = useState(Math.floor(Math.random() * (50 - 5 + 1)) + 5);
  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining());
  const [donations, setDonations] = useState(Math.floor(Math.random() * (100 - 20 + 1)) + 20);
  const [totalDonations, setTotalDonations] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const timeLeft = getTimeRemaining();
      setTimeRemaining(timeLeft);

      if (timeLeft.total <= 0) {
        const newFundingGoal = Math.floor(Math.random() * (50 - 5 + 1)) + 5;
        setFundingGoal(newFundingGoal);
        setTimeRemaining(getTimeRemaining());
        setDonations(Math.floor(Math.random() * (100 - 20 + 1)) + 20);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const donationInterval = setInterval(() => {
      const newDonation = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
      setDonations(prevDonations => prevDonations + newDonation);
      setTotalDonations(prevTotal => prevTotal + newDonation);
    }, 3000);

    return () => clearInterval(donationInterval);
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
        <h2 className="text-2xl font-bold mb-2">Our Extended Mission</h2>
        <p className="text-lg text-justify">
          Expanding on our core mission, Save the Chrome Dino is committed to fostering a global community that values digital well-being and technological mindfulness.
          We believe in creating a world where technology enhances rather than diminishes the human experience, and the Chrome Dino serves as a reminder of the importance of balance in our increasingly connected lives.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Our Vision</h2>
        <p className="text-lg text-justify">
          Our vision is a future where the Chrome Dino continues to thrive, not as a relic of the past, but as a vibrant symbol of digital resilience.
          We envision a world where moments of disconnection are cherished, and the simple joys of offline experiences are celebrated.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Our Core Values</h2>
        <ul className="list-disc list-inside text-lg">
          <li><b>Preservation:</b> We are dedicated to preserving the Chrome Dino and its natural offline habitats.</li>
          <li><b>Awareness:</b> We strive to raise awareness about the importance of digital balance and technological mindfulness.</li>
          <li><b>Community:</b> We foster a global community that values digital well-being and supports our mission.</li>
          <li><b>Innovation:</b> We embrace innovative approaches to conservation and digital advocacy.</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Our Strategic Pillars</h2>
        <ul className="list-disc list-inside text-lg">
          <li><b>Conservation Programs:</b> We develop and implement programs to protect and preserve the Chrome Dino and its natural offline habitats.</li>
          <li><b>Digital Advocacy:</b> We advocate for policies and practices that promote digital balance and technological mindfulness.</li>
          <li><b>Community Engagement:</b> We engage with schools, local communities, and organizations to promote digital awareness and responsible technology use.</li>
          <li><b>Research and Education:</b> We conduct research and education initiatives to inform our conservation strategies and promote digital well-being.</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Our Long-Term Goals</h2>
        <ul className="list-disc list-inside text-lg">
          <li>Establish a global network of "Dino Zones"—areas with limited internet access—to serve as safe havens for the Chrome Dino.</li>
          <li>Develop a comprehensive curriculum on digital awareness and responsible technology use for schools and communities.</li>
          <li>Conduct research to study the impact of digital connectivity on Chrome Dino populations and inform our conservation strategies.</li>
          <li>Launch a digital campaign to reach millions of internet users worldwide and raise awareness about the plight of the Chrome Dino.</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Our Team</h2>
        <p className="text-lg text-justify">
          Save the Chrome Dino is led by a dedicated team of conservationists, digital advocates, and community organizers.
          Our team is passionate about preserving the Chrome Dino and promoting digital well-being for future generations.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Our Supporters</h2>
        <p className="text-lg text-justify">
          We are grateful for the support of our donors, volunteers, and community partners.
          Your contributions help us continue our critical work to save the Chrome Dino and promote digital balance worldwide.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Our Future Plans</h2>
        <p className="text-lg text-justify">
          In the coming years, Save the Chrome Dino plans to expand our conservation programs, launch new digital campaigns, and engage with more communities around the world.
          We are committed to continuing our work to protect the Chrome Dino and promote digital well-being for all.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Join Our Movement</h2>
        <p className="text-lg text-justify">
          Together, we can save the Chrome Dino and create a world where technology enhances rather than diminishes the human experience.
          Join our movement today and help us make a difference.
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

    