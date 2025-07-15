@tailwind base;
@tailwind components;
@tailwind utilities;

/* Definition of the design system. All colors, gradients, fonts, etc should be defined here. 
All colors MUST be HSL.
*/

@layer base {
  :root {
    /* Dark theme primary colors */
    --background: 220 26% 6%;
    --foreground: 210 40% 95%;

    --card: 220 20% 8%;
    --card-foreground: 210 40% 95%;

    --popover: 220 20% 8%;
    --popover-foreground: 210 40% 95%;

    /* Purple primary theme */
    --primary: 260 85% 65%;
    --primary-foreground: 210 40% 98%;
    --primary-glow: 260 85% 75%;
    --primary-dark: 260 85% 45%;

    --secondary: 220 15% 15%;
    --secondary-foreground: 210 40% 90%;

    --muted: 220 15% 12%;
    --muted-foreground: 215 20% 65%;

    --accent: 220 15% 15%;
    --accent-foreground: 210 40% 90%;

    --destructive: 0 62.8% 50%;
    --destructive-foreground: 210 40% 98%;

    --border: 220 15% 20%;
    --input: 220 15% 15%;
    --ring: 260 85% 65%;

    --radius: 0.5rem;

    /* Custom design tokens */
    --gradient-primary: linear-gradient(135deg, hsl(260 85% 65%), hsl(280 85% 75%));
    --gradient-background: linear-gradient(135deg, hsl(220 26% 6%), hsl(230 20% 8%));
    --gradient-hero: linear-gradient(135deg, hsl(260 85% 65%) 0%, hsl(280 85% 75%) 100%);
    --gradient-accent: linear-gradient(90deg, hsl(260 85% 65% / 0.1), hsl(280 85% 75% / 0.1));
    
    /* Shadows with purple glow */
    --shadow-glow: 0 0 40px hsl(260 85% 65% / 0.3);
    --shadow-card: 0 10px 30px -10px hsl(220 26% 4% / 0.5);
    
    /* Flowing lines animation */
    --flow-opacity: 0.1;

    --sidebar-background: 0 0% 98%;

    --sidebar-foreground: 240 5.3% 26.1%;

    --sidebar-primary: 240 5.9% 10%;

    --sidebar-primary-foreground: 0 0% 98%;

    --sidebar-accent: 240 4.8% 95.9%;

    --sidebar-accent-foreground: 240 5.9% 10%;

    --sidebar-border: 220 13% 91%;

    --sidebar-ring: 217.2 91.2% 59.8%;
  }

  .dark {
    /* Keep same dark theme - we're using dark by default */
    --background: 220 26% 6%;
    --foreground: 210 40% 95%;
  }
}

@layer base {
  * {
    @apply border-border;
  }

  body {
    @apply bg-background text-foreground;
    background: var(--gradient-background);
    min-height: 100vh;
  }

  /* Flowing background lines */
  .flow-lines {
    position: absolute;
    inset: 0;
    background-image: 
      linear-gradient(45deg, transparent 40%, hsl(260 85% 65% / var(--flow-opacity)) 50%, transparent 60%),
      linear-gradient(-45deg, transparent 40%, hsl(280 85% 75% / var(--flow-opacity)) 50%, transparent 60%);
    background-size: 200px 200px, 180px 180px;
    animation: flow 20s linear infinite;
    pointer-events: none;
  }

  @keyframes flow {
    0% { transform: translate(0, 0) rotate(0deg); }
    100% { transform: translate(-200px, -200px) rotate(360deg); }
  }

  /* Gradient text utility */
  .gradient-text {
    background: var(--gradient-hero);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  /* Glass effect */
  .glass {
    background: hsl(220 20% 8% / 0.7);
    backdrop-filter: blur(16px);
    border: 1px solid hsl(220 15% 20%);
  }

  /* Glow effects */
  .glow-sm {
    box-shadow: 0 0 20px hsl(260 85% 65% / 0.2);
  }
  
  .glow-md {
    box-shadow: var(--shadow-glow);
  }

  /* Scroll animation for logos */
  .animate-scroll {
    animation: scroll 20s linear infinite;
  }

  @keyframes scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
}