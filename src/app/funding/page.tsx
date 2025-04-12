"use client";

import React, {useState} from 'react';
import {Button} from "@/components/ui/button";
import {generateDinoFact} from "@/ai/flows/generate-dino-fact";
import {useToast} from "@/hooks/use-toast";

const FundingPage = () => {
  const [donationIdea, setDonationIdea] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const {toast} = useToast();

  const getDonationIdea = async () => {
    setLoading(true);
    try {
      const result = await generateDinoFact({topic: 'donation'});
      setDonationIdea(result.fact);
    } catch (error: any) {
      console.error("Failed to generate donation idea:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to generate donation idea. Please try again."
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background font-pixelated p-8">
      <h1 className="text-4xl mb-4 text-center">Support Our Cause</h1>
      <p className="text-lg text-center mb-8">
        Your donation helps us protect the Chrome Dinosaur from extinction!
      </p>

      <Button onClick={getDonationIdea} disabled={loading}>
        {loading ? "Loading..." : "Get Donation Idea"}
      </Button>

      {donationIdea && (
        <div className="mt-8 p-4 border rounded-md shadow-sm">
          <h2 className="text-2xl font-bold mb-2">Donation Idea:</h2>
          <p className="text-lg">{donationIdea}</p>
        </div>
      )}

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-2">How to Donate</h2>
        <ul className="list-disc list-inside text-lg">
          <li>Donate via PayPal: paypal@savethedino.com</li>
          <li>Send Crypto: BTC - 1234567890abcdefg</li>
        </ul>
      </div>
    </div>
  );
};

export default FundingPage;
