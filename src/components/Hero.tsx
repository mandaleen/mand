import React, { useRef } from 'react';
import { ArrowRight, MapPin, Star, Clock, ChevronLeft, ChevronRight, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import santoriniImage from '@/assets/santorini.jpg';
import machuPicchuImage from '@/assets/machu-picchu.jpg';
import tokyoImage from '@/assets/tokyo.jpg';
import icelandImage from '@/assets/iceland.jpg';

interface TravelPackage {
  id: number;
  title: string;
  location: string;
  price: string;
  duration: string;
  rating: number;
  image: string;
  gradient: string;
}

const travelPackages: TravelPackage[] = [
  {
    id: 1,
    title: "Santorini Paradise",
    location: "Greece",
    price: "$2,299",
    duration: "7 days",
    rating: 4.9,
    image: santoriniImage,
    gradient: "from-primary/20 to-primary/10"
  },
  {
    id: 2,
    title: "Machu Picchu Adventure",
    location: "Peru",
    price: "$3,199",
    duration: "10 days",
    rating: 4.8,
    image: machuPicchuImage,
    gradient: "from-primary/30 to-accent/20"
  },
  {
    id: 3,
    title: "Tokyo Explorer",
    location: "Japan",
    price: "$2,799",
    duration: "8 days",
    rating: 4.9,
    image: tokyoImage,
    gradient: "from-accent/30 to-primary/15"
  },
  {
    id: 4,
    title: "Iceland Aurora",
    location: "Iceland",
    price: "$2,899",
    duration: "6 days",
    rating: 4.7,
    image: icelandImage,
    gradient: "from-primary/25 to-secondary/20"
  },
  {
    id: 5,
    title: "Cultural Morocco",
    location: "Morocco",
    price: "$1,799",
    duration: "8 days",
    rating: 4.8,
    image: santoriniImage,
    gradient: "from-primary/20 to-accent/25"
  }
];

const Hero = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320;
      const newScrollLeft = scrollContainerRef.current.scrollLeft + 
        (direction === 'right' ? scrollAmount : -scrollAmount);
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-background to-muted/30 overflow-hidden">
      <div className="flex min-h-screen">
        {/* Left Side - Hero Section */}
        <div className="flex-1 px-6 py-12 flex flex-col justify-center relative">
          {/* Floating Glass Elements */}
          <div className="absolute top-20 right-20 w-4 h-4 liquid-glass rounded-full opacity-60" />
          <div className="absolute top-40 right-32 w-2 h-2 bg-primary/40 rounded-full" />
          <div className="absolute bottom-32 left-20 w-3 h-3 bg-primary/50 rounded-full liquid-float" />
          <div className="absolute top-60 left-1/3 text-primary/30 text-2xl font-bold">+</div>
          <div className="absolute bottom-40 right-1/4 text-primary/40 text-xl font-bold">×</div>
          
          <div className="max-w-lg liquid-container">
            <div className="inline-block mb-6">
              <span className="liquid-glass-soft px-6 py-3 rounded-full text-sm font-medium text-primary">
                Premium Travel Agency
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight mb-6 liquid-float">
              Discover Your<br />
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Magic World
              </span>
            </h1>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-md">
              Embark on extraordinary journeys to the world's most breathtaking destinations. 
              Experience luxury, adventure, and memories that last a lifetime.
            </p>
            
            <div className="flex items-center space-x-4 liquid-glass-card rounded-full shadow-lg p-2 max-w-md">
              <Input 
                placeholder="Where do you want to go?" 
                className="border-none bg-transparent flex-1 px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-0"
              />
              <Button className="btn-liquid-primary px-8 py-3 rounded-full font-medium group">
                Explore
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-8 h-8 liquid-glass rounded-full border-2 border-background flex items-center justify-center">
                      <Star className="w-3 h-3 text-primary fill-current" />
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <div className="font-semibold text-foreground">50,000+</div>
                  <div className="text-muted-foreground">Happy Travelers</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Travel Packages */}
        <div className="flex-1 bg-gradient-to-br from-primary via-primary/90 to-primary/80 p-8 flex flex-col relative overflow-hidden">
          {/* Background Decorative Elements */}
          <div className="absolute top-10 right-10 w-6 h-6 bg-white/10 rounded-full liquid-float" />
          <div className="absolute top-32 left-10 w-3 h-3 bg-white/15 rounded-full liquid-float-delay" />
          <div className="absolute bottom-20 right-20 w-4 h-4 bg-white/10 rounded-full liquid-float" />
          <div className="absolute top-1/2 left-4 text-white/10 text-3xl font-bold">+</div>
          
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-white text-2xl font-bold">Featured Destinations</h2>
            <div className="flex space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => scroll('left')}
                className="text-white hover:bg-white/10 p-2 liquid-glass"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => scroll('right')}
                className="text-white hover:bg-white/10 p-2 liquid-glass"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Scrollable Travel Cards */}
          <div 
            ref={scrollContainerRef}
            className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4"
            style={{ 
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {travelPackages.map((pkg, index) => (
              <div
                key={pkg.id}
                className="min-w-[280px] liquid-glass-card rounded-3xl p-6 shadow-xl transform hover:scale-105 transition-all duration-300 liquid-ripple"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative w-full h-32 rounded-2xl mb-4 overflow-hidden">
                  <img 
                    src={pkg.image} 
                    alt={pkg.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${pkg.gradient}`} />
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-foreground">{pkg.title}</h3>
                  
                  <div className="flex items-center text-muted-foreground text-sm">
                    <MapPin className="w-4 h-4 mr-1 text-primary" />
                    {pkg.location}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Clock className="w-4 h-4 mr-1 text-primary" />
                      {pkg.duration}
                    </div>
                    <div className="flex items-center text-primary text-sm">
                      <Star className="w-4 h-4 mr-1 fill-current" />
                      {pkg.rating}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-2xl font-bold text-primary">{pkg.price}</span>
                    <Button size="sm" className="btn-liquid-primary">
                      Book Now
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {travelPackages.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 bg-white/30 rounded-full hover:bg-white/50 transition-colors cursor-pointer"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;