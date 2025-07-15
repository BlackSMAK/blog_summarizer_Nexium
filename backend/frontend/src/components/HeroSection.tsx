import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const scrollToSummarize = () => {
    const section = document.getElementById("summarize-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Flowing background lines */}
      <div className="flow-lines"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Promotional Banner */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 mb-8 animate-fade-in-up">
          <span className="text-xs font-medium text-primary">NEW</span>
          <span className="text-sm text-muted-foreground">
            TLDR: AI Integrated Blog Summarizer.
          </span>
          <ArrowRight className="h-4 w-4 text-primary" />
        </div>

        {/* Main Heading */}
        <div className="max-w-4xl mx-auto mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Summarize any{" "}
            <span className="gradient-text">Text Document</span>
            <br />
            in a click.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            TLDR helps you summarize any piece of text into concise, easy to 
            digest content so you can free yourself from information overload.
          </p>
        </div>

        {/* CTA Button */}
        <div className="mb-16">
          <Button
            variant="hero"
            size="xl"
            className="animate-glow-pulse"
            onClick={scrollToSummarize}
          >
            SUMMARIZE NOW - IT'S FREE
          </Button>
        </div>

        {/* Video Preview Placeholder (Commented Out - add later if needed) */}
        {/*
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden glass border border-border/20 p-8 animate-float">
            <div className="aspect-video bg-gradient-accent rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🎥</div>
                <p className="text-lg text-muted-foreground">
                  Product Demo Video
                </p>
              </div>
            </div>
          </div>
        </div>
        */}
      </div>
    </section>
  );
};

export default HeroSection;
