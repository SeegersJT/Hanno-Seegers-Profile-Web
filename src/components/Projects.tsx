import { ExternalLink, Github, Folder, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  nda?: boolean;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "Debt Collection Dashboard",
    description:
      "Built a full debt-collection dashboard from design to React frontend, Java Spring backend, and MSSQL database. Enabled agents to make calls, record outcomes, process payments, and update accounts, delivering a scalable and user-friendly tool that streamlined operations.",
    technologies: ["React", "Java", "MSSQL", "Docker", "RealPay", "WebSocket"],
    nda: true,
    featured: true,
  },
  {
    title: "Training & Learning Management Platform",
    description:
      "Built a fully functional training platform allowing administrators to create courses manually or upload SCORM-compliant content. Users can enroll in courses, track progress, complete lessons, and download certificates upon completion. Implemented features include user management, course progress tracking, secure content delivery, and certificate generation, providing a scalable and interactive learning experience.",
    technologies: ["React", "TypeScript", "Java", "Pring Security", "WebSocket", "MySQL"],
    nda: true,
    featured: true,
  },
  {
    title: "Water Delivery Dashbaord",
    description:
      "Built a comprehensive dashboard for a water delivery company to manage scheduling, inventory, and finances. Users can add delivery times, and the system automatically schedules deliveries. Drivers get dynamic routing to optimize deliveries, while inventory is tracked in real time to monitor every container. Financials allow tracking of payments and outstanding bills, and admins have full oversight of operations. Integrated analytics provide reporting and actionable insights to improve efficiency.",
    technologies: ["Node.js", "React", "Mongo DB", "AWS"],
    nda: true,
    featured: false,
  },
  {
    title: "CV Generator",
    description:
      "Developed a web-based CV generator allowing users to create professional resumes quickly. Users can input personal information, work experience, education, and skills, select templates, and export their CVs as PDFs. Features include live preview, customizable layouts, and responsive design, making it simple to produce polished, ready-to-use resumes.",
    technologies: ["Node.js", "React"],
    githubUrl: "https://github.com/SeegersJT/CV-Generator",
  },
  {
    title: "L.E.E.F",
    description:
      "Built a C++-based IoT system using an ESP32 connected to sensors and actuators, including a moisture meter, water pump, and solenoid latch. The system automatically detects when a plant needs water and activates the pump, while also allowing manual control via an integrated web interface. Users can monitor real-time statistics and set custom thresholds, combining automation with configurable control for optimal plant care.",
    technologies: ["C++", "G-Code", "Firebase", "PIO"],
    githubUrl: "https://github.com/SeegersJT/L.E.E.F",
  },
  {
    title: "General Websites",
    description:
      "Designed and developed responsive, user-friendly websites. Focused on clean layout, intuitive navigation, and visually appealing design to provide an engaging user experience.",
    technologies: ["React", "Node.js", "HTML", "CSS", "Javascript", "TypeScript"],
    githubUrl: "#",
  },
];

export const Projects = () => {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="font-mono text-accent text-sm mb-2 block">
              // Featured Work
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              My <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              A selection of projects I've worked on, from full-stack applications
              to developer tools and everything in between.
            </p>
          </div>

          {/* Featured Projects */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {featuredProjects.map((project) => (
              <div
                key={project.title}
                className="group relative bg-card rounded-2xl p-8 border border-border hover:border-accent/50 hover:shadow-card transition-all duration-300 overflow-hidden"
              >
                {/* Accent Corner */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 rounded-bl-full" />

                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <Folder className="w-10 h-10 text-accent" />
                   <div className="flex gap-3">
                      {project.nda ? (
                        <span
                          className="text-muted-foreground hover:text-foreground transition-colors cursor-default"
                          aria-label="NDA Project"
                          title="NDA Project"
                        >
                          <FileText className="w-5 h-5" />
                        </span>
                      ) : (
                        <>
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              className="text-muted-foreground hover:text-foreground transition-colors"
                              aria-label="View GitHub repository"
                            >
                              <Github className="w-5 h-5" />
                            </a>
                          )}
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              className="text-muted-foreground hover:text-foreground transition-colors"
                              aria-label="View live demo"
                            >
                              <ExternalLink className="w-5 h-5" />
                            </a>
                          )}
                        </>
                      )}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground mb-6">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-mono rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Other Projects Grid */}
          <h3 className="font-display text-2xl font-bold text-foreground mb-8 text-center">
            Other Noteworthy Projects
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <div
                key={project.title}
                className="group bg-card rounded-xl p-6 border border-border hover:border-accent/50 hover:-translate-y-1 hover:shadow-card transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <Folder className="w-8 h-8 text-accent" />
                  <div className="flex gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="View GitHub repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="View live demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h4>

                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs text-muted-foreground font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
