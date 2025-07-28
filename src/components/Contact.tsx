import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Simple validation
    if (!form.firstName || !form.email || !form.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // ✅ Show success toast
    toast({
      title: "Message Sent",
      description: "Thank you! I will get back to you soon.",
    });

    // ✅ Reset form
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: "📧",
      label: "Email",
      value: "gayanhasantha999@gmail.com",
      link: "mailto:gayanhasantha999@gmail.com",
    },
    {
      icon: "📱",
      label: "Phone",
      value: "+94 72 207 5678",
      link: "tel:+94 72 207 5678",
    },
    {
      icon: "📍",
      label: "Location",
      value: "Sri Lanka, Kandy",
      link: "#",
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "linkedin.com/in/gayan-hasantha",
      link: "https://www.linkedin.com/in/gayan-hasantha-3b6b85376/",
    },
    {
      icon: "🐱‍💻",
      label: "GitHub",
      value: "github.com/GayanHK-tech",
      link: "https://github.com/GayanHK-tech",
    },
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="hero-text">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your next project to life? I'm always excited to discuss new opportunities 
            and collaborate on innovative solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="gradient-card border-border card-shadow">
            <CardHeader>
              <CardTitle className="text-2xl">Send a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">First Name *</label>
                    <Input 
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      placeholder="Lasith" 
                      className="bg-background border-border focus:border-primary smooth-transition"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Last Name</label>
                    <Input 
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      placeholder="Malinga" 
                      className="bg-background border-border focus:border-primary smooth-transition"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email *</label>
                  <Input 
                    type="email" 
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Lasith_Malinga@example.com" 
                    className="bg-background border-border focus:border-primary smooth-transition"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Subject</label>
                  <Input 
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Project Collaboration" 
                    className="bg-background border-border focus:border-primary smooth-transition"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message *</label>
                  <Textarea 
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..." 
                    rows={5}
                    className="bg-background border-border focus:border-primary smooth-transition resize-none"
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full gradient-primary text-primary-foreground cinematic-glow smooth-transition hover:scale-105"
                  size="lg"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm currently available for freelance projects and full-time opportunities. 
                Whether you have a question about my work, want to discuss a potential project, 
                or just want to say hello, I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-secondary/50 rounded-lg smooth-transition hover:bg-secondary/80 hover:scale-105 group"
                >
                  <div className="text-2xl group-hover:animate-float">{item.icon}</div>
                  <div>
                    <div className="font-medium">{item.label}</div>
                    <div className="text-muted-foreground">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
