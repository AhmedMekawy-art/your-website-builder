
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CategorySection from "@/components/CategorySection";
import FeaturedItems from "@/components/FeaturedItems";
import HowItWorks from "@/components/HowItWorks";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#FDE1D3] to-[#FFE8DD] py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#222222]">
                Pre-loved Fashion, Zero Hassle
              </h1>
              <p className="text-lg text-[#222222]">
                Join the UAE's preloved fashion community—list, ship and get paid in a few taps.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-[#F97316] hover:bg-[#EA580C] focus-visible:ring-2 focus-visible:ring-[#F97316] focus-visible:ring-offset-2"
                >
                  <Link to="/sell">Start Selling</Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-[#F97316] text-[#000000] hover:bg-[#FDE1D3] focus-visible:ring-2 focus-visible:ring-[#F97316] focus-visible:ring-offset-2"
                >
                  <Link to="/browse">Browse Items</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1603052875158-3b121f7144de" 
                alt="Friends swapping clothes"
                className="rounded-lg shadow-lg w-full h-auto max-h-96 object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Search Bar */}
      <section className="bg-white py-8 px-4 shadow-sm">
        <div className="container mx-auto max-w-2xl">
          <div className="relative">
            <Input 
              type="text" 
              placeholder="Search for items..." 
              className="pl-10 pr-4 py-6 rounded-full border-gray-300"
            />
            <Search className="absolute left-3 top-3 text-gray-400" />
            <Button className="absolute right-1 top-1 rounded-full bg-[#F97316] hover:bg-[#EA580C]">
              Search
            </Button>
          </div>
        </div>
      </section>
      
      {/* Categories */}
      <CategorySection />
      
      {/* Featured Items */}
      <FeaturedItems />
      
      {/* How It Works */}
      <HowItWorks />
      
      <Footer />
    </div>
  );
};

export default Index;
