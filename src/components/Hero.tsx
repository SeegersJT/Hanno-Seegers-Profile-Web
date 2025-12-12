import { ArrowDown, Code2, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Coffee and coding workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-background/70" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 opacity-20 animate-float">
        <Code2 className="w-16 h-16 text-accent" />
      </div>
      <div className="absolute bottom-32 right-20 opacity-20 animate-float animation-delay-400">
        <Coffee className="w-12 h-12 text-primary" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 pt-20">
        <div className="max-w-3xl mx-auto text-center">
          {/* Code-style greeting */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-card/80 backdrop-blur-sm rounded-full border border-border opacity-0 animate-fade-up">
            <span className="font-mono text-sm text-muted-foreground">
              <span className="text-accent">const</span> developer ={" "}
              <span className="text-primary">"Hanno Seegers"</span>;
            </span>
          </div>

          {/* Main Title */}
          <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-6 opacity-0 animate-fade-up animation-delay-200">
            Brewing Code &
            <br />
            <span className="text-gradient">Crafting Solutions</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-up animation-delay-400">
            Full-stack developer with a passion for clean code and great coffee.
            Turning complex problems into elegant solutions, one cup at a time.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up animation-delay-600">
            <Button variant="hero" size="xl" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#about">Learn More</a>
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-20 -translate-x-1/2 animate-bounce">
            <a
              href="#about"
              className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="text-sm font-medium">Scroll Down</span>
              <ArrowDown className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
