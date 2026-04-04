

export const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="text-primary opacity-0 animate-fade-in">Hi, I'm </span>
            <span className="text-foreground opacity-0 animate-fade-in-delay-1">Kai </span>
            <span className="text-foreground opacity-0 animate-fade-in-delay-2">Frazier</span>
          </h1>

          <p>
            <span className="text-foreground/80 opacity-0 animate-fade-in-delay-3">
              I'm a software and firmware engineer specializing in embedded systems, graphics programming,
              and web development. I love building things that are both beautiful and functional.
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}