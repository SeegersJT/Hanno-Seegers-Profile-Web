import { Building2, Calendar } from "lucide-react";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "VeriShare",
    role: "Senior Full-Stack Developer",
    period: "2022 - Present",
    description:
      "Full-stack developer at Verishare Software, building and maintaining the Accolade platform for Vericred. Work includes React, Sass, Axios, Java, SQL, GitLab, and Docker, ensuring a secure, reliable, and scalable system that supports debt-collection operations.",
    technologies: ["React", "React Router", "Sass", "Java", "Spring Boot", "Spring Security", "Spring Framework", "RESTful API Design", "npm", "Node.js", "Docker", "GitHub", "GitLab", "Github Actions", "YAML", "Thymeleaf", "Microsoft SQL Server", "SQL", "MySQL"],
  },
  {
    company: "Etse electronics",
    role: "Junior Full Stack Developer",
    period: "2021 - 2022",
    description:
      "Worked as a junior full-stack developer at Etse Electronic, building a livestock tracking polygon system using Aurelia and .NET Core. The system detected livestock locations, checked if they were inside defined polygons, and sent push notifications. Collaborated with the team to develop, test, and integrate features, ensuring accurate tracking and reliable alerts.",
    technologies: ["TypeScript", "Aurelia", "AWS",  "GitLab", "Node.js", "GitLab", "C#", ".NET Core", "Docker", "Microsoft SQL Server", "Sass"],
  },
  {
    company: "BlueSky Developement",
    role: "Software Developer",
    period: "2019 - 2021",
    description:
      "Created, updated, and maintained websites and client software. Worked on AutoFarm, an app built with Raspberry Pi, Node, Vue.js, and C# that allowed a Western Cape wine farm to control its irrigation system from their phones.",
    technologies: ["JavaScript", "CSS", "HTML", "C#", "Vue.js", "Bootstrap", "Node.js", "Sass", "Express.js", "MongoDB", "FireBase", "Google Cloud", "GitHub", "Visial Studio Code", "IntelliJ IDEA"],
  },
  {
    company: "Wolf and Gryphon",
    role: "Web Developer",
    period: "2016 - 2017",
    description:
      "Responsible for creating, updating, and maintaining websites for clients, including NUSCO, Klim-Gim, and Alpha Wolf Media.",
    technologies: ["HTML", "CSS", "WordPress", "Bootstrap", "C#", "GitHub", "jQuery"],
  },
  {
    company: "Infoworks",
    role: "Web Developer",
    period: "2015 - 2016",
    description:
      "Created and maintained websites, designed banners and posters with Photoshop and Illustrator, handled audio/video recording and editing, and attended expos and conventions for marketing activities.",
    technologies: ["Bootstrap", "WordPress", "Swift", "CSS", "HTML", "Adobe Photoshop", "Adobe After Effects", "Adobe Flash", "Adobe Dreamweaver", "Adobe Illustrator", "PHP", "Adobe InDesign", "Azure SQL Database", "MySQL"],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-background">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="font-mono text-accent text-sm mb-2 block">
              // Work Experience
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              My <span className="text-gradient">Journey</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              A timeline of my professional experience, showcasing the roles and
              projects that have shaped my career.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className={`relative pl-8 md:pl-0 pb-12 last:pb-0 ${
                  index % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:ml-auto"
                }`}
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full bg-accent border-4 border-background shadow-glow md:-translate-x-1/2 z-10`}
                />

                {/* Content Card */}
                <div
                  className={`bg-card rounded-xl p-6 border border-border hover:border-accent/50 hover:shadow-card transition-all duration-300 ${
                    index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                  }`}
                >
                  <div
                    className={`flex items-center gap-2 mb-2 ${
                      index % 2 === 0 ? "md:justify-end" : ""
                    }`}
                  >
                    <Building2 className="w-4 h-4 text-accent" />
                    <span className="font-semibold text-foreground">
                      {exp.company}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-foreground mb-1">
                    {exp.role}
                  </h3>

                  <div
                    className={`flex items-center gap-2 text-muted-foreground text-sm mb-3 ${
                      index % 2 === 0 ? "md:justify-end" : ""
                    }`}
                  >
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>

                  <p
                    className={`text-muted-foreground mb-4 ${
                      index % 2 === 0 ? "md:text-right" : ""
                    }`}
                  >
                    {exp.description}
                  </p>

                  <div
                    className={`flex flex-wrap gap-2 ${
                      index % 2 === 0 ? "md:justify-end" : ""
                    }`}
                  >
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
