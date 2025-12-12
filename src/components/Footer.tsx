import { Coffee, Github, Linkedin, Twitter, Mail } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/SeegersJT", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/hannoseegers/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:hanno@seegers.net.za", label: "Email" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Logo & Tagline */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <Coffee className="w-5 h-5 text-accent" />
                <span className="font-display text-xl font-semibold">
                  Hanno Seegers
                </span>
              </div>
              <p className="text-primary-foreground/70 text-sm">
                Brewing Code & Crafting Solutions
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-primary-foreground/10 my-8" />

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
            <p>© {currentYear} Hanno Seegers. All rights reserved.</p>
            <p className="flex items-center gap-1">
              Crafted with <Coffee className="w-4 h-4 text-accent" /> and code
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
