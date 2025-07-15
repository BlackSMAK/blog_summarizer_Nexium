import { FileText } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/20 py-16 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Logo / Title */}
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-gradient-primary">
              <FileText className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg font-bold gradient-text">
              TLDR: Blog Summarizer
            </span>
          </div>

          {/* Short Description */}
          <p className="text-sm text-muted-foreground max-w-md">
            Summarize any text in a click. Free yourself from information overload.
          </p>

          {/* Connect Links */}
          <div className="flex gap-6">
            <a
              href="https://www.linkedin.com/in/syed-muhammad-ahmed-khalid-6b8611336"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://https://www.kaggle.com/smak17"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Kaggle
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 TLDR: Blog Summarizer. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </a>
            <a href="/cookies" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
