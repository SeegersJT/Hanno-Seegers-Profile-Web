import { renderCode } from "@/lib/utils";
import { Coffee, Code2, Lightbulb, Heart } from "lucide-react";

const traits = [
  {
    icon: Code2,
    title: "Clean Code Advocate",
    description: "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Coffee,
    title: "Coffee Enthusiast",
    description: "Fueled by espresso, driven by passion for great software.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "Turning complex challenges into elegant, simple solutions.",
  },
  {
    icon: Heart,
    title: "Team Player",
    description: "Collaborating effectively to build amazing products together.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="font-mono text-accent text-sm mb-2 block">
              // About Me
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Hello, I'm <span className="text-gradient">Hanno</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              A passionate software developer who believes that great code is brewed
              with the same care and attention as the perfect cup of coffee.
            </p>
          </div>

          {/* About Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-foreground/90 text-lg leading-relaxed">
                With years of experience in full-stack development, I specialize in
                building modern web applications that are both beautiful and
                functional. My journey in tech started with a simple curiosity about
                how things work, and it has evolved into a deep passion for creating
                digital experiences.
              </p>
              <p className="text-foreground/90 text-lg leading-relaxed">
                When I'm not coding, you'll find me exploring new coffee brewing
                methods or contributing to open-source projects. I believe in
                continuous learning and staying updated with the latest technologies
                while never losing sight of the fundamentals.
              </p>
              <div className="flex items-center gap-4 pt-4">
                <div className="px-4 py-2 bg-card rounded-lg border border-border">
                  <span className="font-mono text-sm">
                    <span className="text-accent">6+</span> Years Experience
                  </span>
                </div>
                <div className="px-4 py-2 bg-card rounded-lg border border-border">
                  <span className="font-mono text-sm">
                    <span className="text-accent">25+</span> Projects
                  </span>
                </div>
                <div className="px-4 py-2 bg-card rounded-lg border border-border">
                  <span className="font-mono text-sm">
                    <span className="text-accent">∞</span> Cups of Coffee
                  </span>
                </div>
              </div>
            </div>

            {/* Code Block Decoration */}
            <div className="bg-primary/95 rounded-2xl p-6 font-mono text-sm text-primary-foreground shadow-card overflow-hidden">
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-primary-foreground/10">
                <div className="w-3 h-3 rounded-full bg-red-400/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                <div className="w-3 h-3 rounded-full bg-green-400/80" />
                <span className="ml-4 text-primary-foreground/50">hanno.tsx</span>
              </div>
              <pre className="whitespace-pre-wrap">
                <code>
                  {renderCode()}
                </code>
              </pre>
            </div>
          </div>

          {/* Traits Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {traits.map((trait, index) => (
              <div
                key={trait.title}
                className="group p-6 bg-card rounded-xl border border-border hover:border-accent/50 hover:shadow-card transition-all duration-300"
              >
                <trait.icon className="w-10 h-10 text-accent mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-foreground mb-2">{trait.title}</h3>
                <p className="text-muted-foreground text-sm">{trait.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
