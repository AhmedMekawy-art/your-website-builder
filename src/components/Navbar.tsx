import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
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
          <Logo />
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
