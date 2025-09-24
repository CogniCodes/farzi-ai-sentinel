import { Button } from "@/components/ui/button";
import FeatureCard from "@/components/FeatureCard";
import Header from "@/components/Header";
import aiBotHero from "@/assets/ai-bot-hero.png";

const Index = () => {
  return (
    <div className="min-h-screen hero-section">
      <Header />
      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* AI Bot Image */}
          <div className="mb-12 flex justify-center">
            <img
              src={aiBotHero}
              alt="Farzi AI Detection Bot"
              className="w-64 h-64 object-contain floating-animation drop-shadow-2xl"
            />
          </div>

          {/* Brand Title */}
          <h1 className="font-playfair text-7xl md:text-8xl font-bold mb-6 gradient-text text-shadow-soft">
            Farzi
          </h1>

          {/* Subtitle */}
          <p className="text-2xl md:text-3xl text-muted-foreground mb-4 font-inter font-light">
            AI Detection System
          </p>

          {/* Main CTA Button */}
          <div className="mb-16">
            <Button 
              variant="hero" 
              size="lg"
              className="text-xl font-inter hover:shadow-[var(--shadow-float)]"
            >
              Check for AI
            </Button>
          </div>

          {/* Features Grid */}
          <div id="features" className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <FeatureCard
              icon="📷"
              title="Photos"
              description="Detect AI-generated images with precision"
            />
            <FeatureCard
              icon="🎬"
              title="Video"
              description="Analyze video content for artificial elements"
            />
            <FeatureCard
              icon="📝"
              title="Text"
              description="Spot AI-written content instantly"
            />
          </div>

          {/* Accuracy Showcase */}
          <div className="mb-16 p-8 rounded-3xl bg-card/40 backdrop-blur-sm border border-primary/20">
            <div className="text-6xl font-playfair font-bold gradient-text mb-4">
              99%
            </div>
            <p className="text-xl text-muted-foreground font-inter">
              Detection Accuracy
            </p>
          </div>

          {/* Description Section */}
          <div id="about" className="max-w-2xl mx-auto mb-20">
            <h2 className="font-playfair text-3xl font-semibold mb-6 text-foreground">
              Your complete solution to AI detection
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed font-inter">
              Farzi is a comprehensive AI detection platform that supports multiple media types. 
              With industry-leading accuracy, we help you identify artificial content across 
              photos, videos, and text with confidence.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-card/30 backdrop-blur-sm border-t border-border/50 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground mb-2 font-inter">
            Copyright © 2025 CRYPTOXIS
          </p>
          <p className="text-sm text-muted-foreground font-inter">
            Made by CRYPTOXIS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;