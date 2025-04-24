
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    id: 1,
    title: "List Your Items",
    description: "Snap, price and publish in under two minutes.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        <circle cx="8.5" cy="8.5" r="1.5"></circle>
        <polyline points="21 15 16 10 5 21"></polyline>
      </svg>
    ),
  },
  {
    id: 2,
    title: "Ship with Ease",
    description: "Print our prepaid label and drop-off at any kiosk.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"></rect>
        <path d="M7 4v16M17 4v16"></path>
        <path d="M2 9h20M2 14h20"></path>
      </svg>
    ),
  },
  {
    id: 3,
    title: "Get Paid Fast",
    description: "Funds land in your wallet once delivery is confirmed.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="2"></rect>
        <line x1="2" y1="10" x2="22" y2="10"></line>
      </svg>
    ),
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 px-4 bg-[#FFFDFB]">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-4 text-[#222222]">How ReWear Works</h2>
        <p className="text-[#222222] text-center mb-12 max-w-2xl mx-auto">
          Start your sustainable fashion journey in three simple steps.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <Card key={step.id} className="border-2 border-[#FDE1D3] bg-white">
              <CardContent className="pt-6 text-center">
                <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#222222]">{step.title}</h3>
                <p className="text-[#222222]">{step.description}</p>
                <div className="mt-4 text-[#F97316] font-bold text-2xl animate-fade-in">
                  {step.id}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
