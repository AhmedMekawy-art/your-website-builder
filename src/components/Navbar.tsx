
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { User, ShoppingCart, Heart, Menu } from "lucide-react";

const Navbar = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="relative w-10 h-10">
              <div className="absolute w-full h-full bg-[#F97316] rounded-full opacity-20"></div>
              <svg 
                viewBox="0 0 24 24" 
                className="w-full h-full text-[#F97316] fill-current p-2" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21,6H17.83l1.59-1.59L18,3l-3,3l3,3l1.41-1.41L17.83,6H21v12H3V6h3.17L4.59,7.59L6,9l3-3L6,3L4.59,4.41L6.17,6H3 C1.9,6,1,6.9,1,8v12c0,1.1,0.9,2,2,2h18c1.1,0,2-0.9,2-2V8C23,6.9,22.1,6,21,6z M12,16c2.21,0,4-1.79,4-4 c0-2.21-1.79-4-4-4c-2.21,0-4,1.79-4,4C8,14.21,9.79,16,12,16z M12,10c1.1,0,2,0.9,2,2c0,1.1-0.9,2-2,2s-2-0.9-2-2 C10,10.9,10.9,10,12,10z"/>
                <path d="M17,13.5l-1.5-1.5l-1.5,1.5l1.5,1.5L17,13.5z" fill="#F97316"/>
              </svg>
            </div>
            <span className="font-bold text-xl">ReWear</span>
          </Link>
          
          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Women</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                      {["Tops", "Dresses", "Pants", "Skirts", "Jackets", "Shoes", "Accessories"].map(
                        (category) => (
                          <li key={category}>
                            <NavigationMenuLink asChild>
                              <Link 
                                to={`/category/women-${category.toLowerCase()}`}
                                className="block select-none space-y-1 rounded-md p-3 hover:bg-accent hover:text-accent-foreground"
                              >
                                {category}
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        )
                      )}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Men</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                      {["Shirts", "Pants", "Hoodies", "Jackets", "Shorts", "Shoes", "Accessories"].map(
                        (category) => (
                          <li key={category}>
                            <NavigationMenuLink asChild>
                              <Link 
                                to={`/category/men-${category.toLowerCase()}`}
                                className="block select-none space-y-1 rounded-md p-3 hover:bg-accent hover:text-accent-foreground"
                              >
                                {category}
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        )
                      )}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Kids</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                      {["Baby", "Toddler", "Boys", "Girls", "Teens", "Shoes", "Accessories"].map(
                        (category) => (
                          <li key={category}>
                            <NavigationMenuLink asChild>
                              <Link 
                                to={`/category/kids-${category.toLowerCase()}`}
                                className="block select-none space-y-1 rounded-md p-3 hover:bg-accent hover:text-accent-foreground"
                              >
                                {category}
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        )
                      )}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          
          {/* User Actions */}
          <div className="flex items-center gap-4">
            <Link to="/favorites" className="hidden md:flex items-center text-gray-600 hover:text-[#F97316]">
              <Heart className="w-5 h-5" />
            </Link>
            <Link to="/cart" className="hidden md:flex items-center text-gray-600 hover:text-[#F97316]">
              <ShoppingCart className="w-5 h-5" />
            </Link>
            <Link to="/login">
              <Button variant="ghost" className="hidden md:flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>Login</span>
              </Button>
            </Link>
            <Link to="/sell">
              <Button className="bg-[#F97316] hover:bg-[#EA580C]">
                Sell Now
              </Button>
            </Link>
            <Button variant="ghost" className="md:hidden p-1">
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
