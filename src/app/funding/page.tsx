"use client";

import React, {useState, useEffect} from 'react';
import {Button} from "@/components/ui/button";
import {generateDinoFact} from "@/ai/flows/generate-dino-fact";
import {useToast} from "@/hooks/use-toast";
import {Progress} from "@/components/ui/progress";

interface FundingPageProps {
    initialFundingGoal: number;
    initialDonations: number;
}

const FundingPage: React.FC<FundingPageProps> = ({ initialFundingGoal, initialDonations }) => {
  const [donationIdea, setDonationIdea] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const {toast} = useToast();
    const [fundingGoal, setFundingGoal] = useState(initialFundingGoal);
    const [donations, setDonations] = useState(initialDonations);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const calculateProgress = () => {
            const percentage = (donations / fundingGoal) * 100;
            setProgress(Math.min(percentage, 100)); // Ensure progress doesn't exceed 100%
        };

        calculateProgress();
    }, [donations, fundingGoal]);

    useEffect(() => {
      const interval = setInterval(() => {
          const newFundingGoal = Math.floor(Math.random() * (50 - 5 + 1)) + 5;
          setFundingGoal(newFundingGoal);
          setDonations(Math.floor(Math.random() * (100 - 20 + 1)) + 20);
      }, 30000);

      return () => clearInterval(interval);
    }, []);

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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-tr from-pink-100 to-indigo-100 font-pixelated p-8">
      <h1 className="text-4xl mb-4 text-center funky-shadow wavy-underline text-primary">Support Our Cause</h1>
      <p className="text-lg text-center mb-8 funky-border p-2 text-gray-700">
        Your donation helps us protect the Chrome Dinosaur from extinction!
      </p>

        <div className="mb-8 w-full max-w-md funky-border p-4">
            <h2 className="text-2xl font-bold mb-2 text-center text-primary">Funding Progress</h2>
            <p className="text-lg text-center text-gray-700">
                We are aiming to raise <b>${fundingGoal}</b>.
            </p>
            <Progress value={progress} className="h-4 bg-secondary mt-2 rounded-full"/>
            <p className="text-sm text-muted-foreground text-center mt-1">
                {donations} / ${fundingGoal}
            </p>
        </div>

      <Button onClick={getDonationIdea} disabled={loading} className="funky-shadow">
        {loading ? "Loading..." : "Get Donation Idea"}
      </Button>

      {donationIdea && (
        <div className="mt-8 p-4 border rounded-md shadow-sm funky-border">
          <h2 className="text-2xl font-bold mb-2 text-primary">Donation Idea:</h2>
          <p className="text-lg text-gray-700">{donationIdea}</p>
        </div>
      )}

      <div className="mt-8 funky-border p-4">
        <h2 className="text-2xl font-bold mb-2 text-primary">How to Donate (Fake)</h2>
        <ul className="list-disc list-inside text-lg text-gray-700">
          <li>Send positive thoughts to the Chrome Dino.</li>
          <li>Believe in the cause.</li>
          <li>Spread awareness (without actual donations).</li>
        </ul>
      </div>
    </div>
  );
};

export default async function FundingPageServer() {
    const initialFundingGoal = Math.floor(Math.random() * (50 - 5 + 1)) + 5;
    const initialDonations = Math.floor(Math.random() * (100 - 20 + 1)) + 20;

    return <FundingPage initialFundingGoal={initialFundingGoal} initialDonations={initialDonations} />;
}
