const TrustedBySection = () => {
  const logos = [
    { name: "UCL", text: "UCL" },
    { name: "University of Toronto", text: "U of T" },
    { name: "Microsoft", text: "Microsoft" },
    { name: "Google", text: "Google" },
    { name: "Stanford", text: "Stanford" },
    { name: "MIT", text: "MIT" },
  ];

  return (
    <section className="py-16 border-b border-border/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold mb-8">Trusted By</h2>
        </div>
        
        {/* Logo Carousel */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll space-x-12 items-center justify-center">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 h-16 w-32 flex items-center justify-center"
              >
                <div className="glass rounded-lg px-6 py-3 border border-border/20 hover:border-primary/30 transition-colors">
                  <span className="text-lg font-semibold text-muted-foreground">
                    {logo.text}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default TrustedBySection;