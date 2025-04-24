
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

// Mock data for featured items
const featuredItems = [
  {
    id: 1,
    title: "Vintage Denim Jacket",
    price: 45.99,
    seller: "fashionista22",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    size: "M",
    brand: "Levi's",
    condition: "Good",
  },
  {
    id: 2,
    title: "Summer Floral Dress",
    price: 29.99,
    seller: "sustainable_style",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    size: "S",
    brand: "H&M",
    condition: "Like New",
  },
  {
    id: 3,
    title: "Men's Casual Shirt",
    price: 19.50,
    seller: "thrift_master",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    size: "L",
    brand: "GAP",
    condition: "Good",
  },
  {
    id: 4,
    title: "Nike Running Shoes",
    price: 65.00,
    seller: "sporty_finds",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    size: "42",
    brand: "Nike",
    condition: "Good",
  },
  {
    id: 5,
    title: "Leather Handbag",
    price: 89.99,
    seller: "luxe_preloved",
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    size: "One Size",
    brand: "Michael Kors",
    condition: "Excellent",
  },
  {
    id: 6,
    title: "Winter Wool Coat",
    price: 78.50,
    seller: "vintage_vault",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    size: "XL",
    brand: "Zara",
    condition: "Good",
  },
];

const FeaturedItems = () => {
  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Featured Items</h2>
          <Link to="/browse" className="text-[#F97316] hover:underline">
            View all
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {featuredItems.map((item) => (
            <Link to={`/item/${item.id}`} key={item.id}>
              <Card className="overflow-hidden h-full flex flex-col transition-shadow hover:shadow-md">
                <div className="relative h-64">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                  />
                  <button 
                    className="absolute top-2 right-2 p-1.5 bg-white rounded-full hover:text-[#F97316]"
                    onClick={(e) => {
                      e.preventDefault();
                      // Handle favorite action
                    }}
                  >
                    <Heart className="w-5 h-5" />
                  </button>
                  <Badge 
                    className="absolute bottom-2 left-2 bg-[#F97316]"
                  >
                    {item.condition}
                  </Badge>
                </div>
                <CardContent className="pt-4 flex-grow">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-lg line-clamp-1">{item.title}</h3>
                      <p className="text-gray-500 text-sm">{item.brand}, Size {item.size}</p>
                    </div>
                    <p className="font-bold text-lg">${item.price.toFixed(2)}</p>
                  </div>
                </CardContent>
                <CardFooter className="pt-1 pb-4 border-t">
                  <div className="w-full flex justify-between items-center">
                    <span className="text-sm text-gray-600">by {item.seller}</span>
                    <div className="flex items-center">
                      <span className="text-[#F97316] mr-1">★</span>
                      <span className="text-sm">{item.rating}</span>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedItems;
