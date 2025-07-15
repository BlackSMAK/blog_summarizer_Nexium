import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Chrome, Globe, Smartphone } from "lucide-react";

const BrowserExtensionsSection = () => {
  const extensions = [
    {
      name: "Chrome Extension",
      icon: Chrome,
      description: "Summarize any webpage with one click",
      users: "Coming Soon"
    },
    {
      name: "Firefox Extension", 
      icon: Globe,
      description: "Compatible with Firefox browser",
      users: "Coming Soon"
    },
    {
      name: "Mobile App",
      icon: Smartphone,
      description: "Summarize on the go with our mobile app",
      users: "Coming Soon"
    }
  ];

  return (
    <section className="py-20 border-t border-border/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Browser Extensions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Use TLDR directly in your browser for instant article summarization. Features Coming Soon!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {extensions.map((extension, index) => (
            <Card key={index} className="glass border-border/20 p-6 text-center hover:border-primary/30 transition-all duration-300 hover:-translate-y-2">
              <div className="flex flex-col items-center gap-4">
                <div className="p-4 rounded-full bg-gradient-primary">
                  <extension.icon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {extension.name}
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    {extension.description}
                  </p>
                  <p className="text-sm text-primary font-medium mb-4">
                    {extension.users}
                  </p>
                </div>
                <Button 
                  variant={extension.users === "Coming Soon" ? "ghost" : "default"} 
                  className="w-full"
                  disabled={extension.users === "Coming Soon"}
                >
                  {extension.users === "Coming Soon" ? "Coming Soon" : "Add to Browser"}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowserExtensionsSection;