import { Button } from "@/components/ui/button";
import spaceHeroBackground from "@/assets/space-hero-background.jpg";

const Hero = () => {
  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${spaceHeroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-background/80" />
      
      {/* Cinematic floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-cinematic-blue rounded-full animate-star-flash cinematic-glow" />
        <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-electric-blue rounded-full animate-star-flash electric-glow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-3/4 w-4 h-4 bg-meteor-orange rounded-full animate-float meteor-glow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-thunder-white rounded-full animate-star-flash" style={{ animationDelay: '3s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-cinematic-blue rounded-full animate-float electric-glow" style={{ animationDelay: '4s' }} />
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="hero-text">Gayan</span>
            <br />
            <span className="text-foreground">Hasantha</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Full-Stack Developer & UI/UX Designer 
          </p>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Crafting digital experiences that merge cutting-edge technology with cinematic design. 
            Specializing in React, Node.js, Python and modern web technologies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Download CV */}
            <a href="/Gayan-Hasantha-CV.pdf" download>
              <Button 
                size="lg" 
                className="gradient-primary text-primary-foreground font-semibold px-8 py-3 cinematic-glow smooth-transition hover:scale-105"
              >
                Download CV
              </Button>
            </a>

            {/* Scroll to Contact Section
            <a href="#contact">
              <Button 
                variant="outline" 
                size="lg"
                className="border-cinematic-blue text-cinematic-blue hover:bg-cinematic-blue hover:text-background smooth-transition px-8 py-3 electric-glow"
              >
                Get In Touch
              </Button>
            </a> */}
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
