import React from "react";
import { Github, Instagram, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "./ui/button";

interface FooterProps {
  companyName?: string;
  email?: string;
  socialLinks?: {
    twitter?: string;
    instagram?: string;
    linkedin?: string;
    github?: string;
  };
}

const Footer = ({
  companyName = "Konstant",
  email = "yigit@konstant.dev",
  socialLinks = {
    github: "https://github.com/kntco",
  },
}: FooterProps) => {
  return (
    <footer className="w-full py-6 px-4 border-t bg-background">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {companyName}. All rights reserved.
          </p>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" asChild>
            <a
              href={`mailto:${email}`}
              aria-label="Email"
              className="hover:text-primary transition-colors"
            >
              <Mail size={18} />
            </a>
          </Button>

          {socialLinks.twitter && (
            <Button variant="ghost" size="icon" asChild>
              <a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="hover:text-primary transition-colors"
              >
                <Twitter size={18} />
              </a>
            </Button>
          )}

          {socialLinks.instagram && (
            <Button variant="ghost" size="icon" asChild>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-primary transition-colors"
              >
                <Instagram size={18} />
              </a>
            </Button>
          )}

          {socialLinks.linkedin && (
            <Button variant="ghost" size="icon" asChild>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-primary transition-colors"
              >
                <Linkedin size={18} />
              </a>
            </Button>
          )}

          {socialLinks.github && (
            <Button variant="ghost" size="icon" asChild>
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-primary transition-colors"
              >
                <Github size={18} />
              </a>
            </Button>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
