const BuiltForSection = () => {
  const audiences = [
    { name: "Students" },
    { name: "Researchers" },
    { name: "Writers" },
    { name: "Journalists" },
    { name: "Content Creators" },
    { name: "Professionals" },
    { name: "Lifelong Learners" },
  ];

  return (
    <section className="py-16 border-b border-border/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold mb-8">Built For</h2>
        </div>

        {/* Scrolling Audience Tags */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll space-x-12 items-center justify-center">
            {[...audiences, ...audiences].map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 h-16 w-48 flex items-center justify-center"
              >
                <div className="glass rounded-lg px-6 py-3 border border-border/20 hover:border-primary/30 transition-colors">
                  <span className="text-lg font-semibold text-muted-foreground">
                    {item.name}
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

export default BuiltForSection;
