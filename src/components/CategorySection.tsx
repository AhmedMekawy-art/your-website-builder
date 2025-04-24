
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const categories = [
  {
    id: 1,
    name: "Women",
    image: "https://images.unsplash.com/photo-1525845859779-54d477ff291f?auto=format&fit=crop&q=80",
    url: "/browse/women",
  },
  {
    id: 2,
    name: "Men",
    image: "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?auto=format&fit=crop&q=80",
    url: "/browse/men",
  },
  {
    id: 3,
    name: "Kids",
    image: "https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?auto=format&fit=crop&q=80",
    url: "/browse/kids",
  },
  {
    id: 4,
    name: "Accessories",
    image: "https://images.unsplash.com/photo-1509319117193-57bab727e09d?auto=format&fit=crop&q=80",
    url: "/browse/accessories",
  },
];

const CategorySection = () => {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-8">Browse Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link to={category.url} key={category.id}>
              <Card className="overflow-hidden transition-transform duration-300 hover:-translate-y-2">
                <div className="relative h-64">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10 z-10"></div>
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                    <h3 className="text-xl font-bold text-white">{category.name}</h3>
                    <p className="text-white/80 mt-1">View collection</p>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
