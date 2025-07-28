import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const skills = [
    { name: "React", level: 95 },
    { name: "HTML", level: 90 },
    { name: "CSS", level: 88 },
    { name: "JavaScript", level: 85 },
    { name: "Python", level: 85 },
    { name: "UI/UX Design", level: 92 },
    { name: "Java", level: 80 }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="hero-text">Me</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I am an enthusiastic Higher National Diploma in Information Technology (HNDIT) student with a strong interest in full-stack development. My passion lies in building scalable web applications and creating user-friendly digital experiences. I am eager to apply my knowledge, gain hands-on industry experience, and contribute to real-world projects through an internship opportunity while continuing to grow my technical and creative skills
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring the latest in web technologies,
              contributing to open-source projects, or experimenting with new design trends.
              I believe in the power of clean code and thoughtful design to solve real-world problems.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="bg-secondary rounded-lg px-4 py-2 text-secondary-foreground">
                🚀 Innovation-driven
              </div>
              <div className="bg-secondary rounded-lg px-4 py-2 text-secondary-foreground">
                🎨 Design-focused
              </div>
              <div className="bg-secondary rounded-lg px-4 py-2 text-secondary-foreground">
                💡 Problem-solver
              </div>
            </div>
          </div>

          {/* Skills */}
          <Card className="gradient-card border-border card-shadow">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-center">Skills & Expertise</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div
                        className="gradient-primary h-2 rounded-full smooth-transition"
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${index * 0.1}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;