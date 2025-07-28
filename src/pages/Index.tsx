import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  useEffect(() => {
    document.title = "Gayan Hasantha";  // 👈 Tab Name
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="projects">
          <Projects />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>
      
      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border bg-secondary/20">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2025 Gayan Hasantha. Crafted with passion and precision.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
