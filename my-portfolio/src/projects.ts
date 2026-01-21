import type { Project } from "./types";
import fitSyncPreview from "./assets/projects/fitsync _preview.png";

export const projects: Project[] = [
  {
    id: "1",
    title: "FitSync",
    description: "Fullstack fitness tracker app built using React & JavaScript. Backend was built using Express.js and JWT for authentication.",
    techStack: ["React", "JavaScript", "Vite", "TailwindCSS", "Tanstack", "MongoDB", "Express.js", "Zustand", "JSON Web Token", "Redis"],
    previewImg: fitSyncPreview,
    githubUrl: "https://github.com/yourusername/fitsync",
    liveUrl: "https://fitsync.example.com"
  },
  {
    id: "2",
    title: "Space Travel Simulator",
    description: "",
    techStack: ["React", "JavaScript", "Vite", "CSS"],
    githubUrl: "https://github.com/jangeles001/Space-Travel-Project",
  },
  {
    id: "3",
    title: "Pokemon Card Game",
    description: "",
    techStack: ["React", "JavaScript", "CSS"],
    githubUrl: "https://github.com/yourusername/portfolio",
    liveUrl: "https://yourportfolio.example.com"
  },
  {
    id: "4",
    title: "Portfolio",
    description: "This portfolio website",
    techStack: ["React", "TypeScript", "Vite", "TailwindCSS", "CSS"],
    githubUrl: "https://github.com/jangeles001/Portfolio-Website",
  },
];