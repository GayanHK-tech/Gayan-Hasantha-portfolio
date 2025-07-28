import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "Price Calculator for The Iron Shop",
      description: "A simple Java-based application that helps iron shop owners quickly calculate the total price of iron rods/wires based on weight, length, or unit price. Designed with a clean interface for easy day-to-day calculations.",
      tech: ["Java", "Swing"],
      image: "💰",
      link: "https://github.com/GayanHK-tech/Price-Calculator-for-the-iron-shop"
    },
    {
      title: "Library Management System (Java-GUI)",
      description: "An efficient Library Management System built with Java using the MVC architecture. Allows managing books, members, and borrow/return transactions with a clean separation of logic, UI, and data.",
      tech: ["Java", "Swing", "MVC"],
      image: "📚",
      link: "https://github.com/GayanHK-tech/Library-Management-System-Java-GUI"
    },
    {
      title: "Breakout Game (C#)",
      description: "A fun and interactive C# game with smooth performance and engaging gameplay. Demonstrates clean code architecture, efficient game loops, and a user-friendly interface.",
      tech: ["C#", ".NET"],
      image: "🎮",
      link: "https://github.com/GayanHK-tech/Breakout-Game"
    },
    {
      title: "Smart Plastic Bottle Redemption System",
      description: "An AI-based system that detects and collects plastic bottles using Python, Arduino, and Computer Vision. Promotes environmental sustainability through automated smart waste management and recycling initiatives.",
      tech: ["Python", "Arduino", "OpenCV", "AI"],
      image: "♻️",
      link: "https://github.com/GayanHK-tech/A-Smart-Plastic-Bottle-Redemption-System"
    },
    {
      title: "Iron Power Gym Website",
      description: "A modern, responsive website for Iron Power Gym featuring class schedules, trainer profiles, membership details, and contact information. Built with clean, maintainable code for seamless user experience.",
      tech: ["HTML", "CSS", "JavaScript"],
      image: "🏋️",
      link: "https://github.com/GayanHK-tech/Iron-Power-Gym"
    }
  ];

  return (
    <section className="py-20 px-6 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="hero-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating expertise across various technologies
            and industries. Each project represents a unique challenge and innovative solution.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="gradient-card border-border card-shadow smooth-transition hover:scale-105 hover:cinematic-glow group"
            >
              <CardHeader className="pb-4">
                <div className="text-4xl mb-4 text-center group-hover:animate-float">
                  {project.image}
                </div>
                <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    asChild
                    className="text-muted-foreground hover:text-foreground smooth-transition"
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      View Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
