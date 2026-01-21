import type { Project } from "./types";
import fitSyncPreview from "./assets/projects/fitsync _preview.png";

export const projects: Project[] = [
  {
    id: "1",
    title: "FitSync",
    description: "Fitness tracker app using React & JavaScript",
    techStack: ["React", "JavaScript", "Vite", "TailwindCSS", "Tanstack", "Zustand"],
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
    description: "A fun Pokémon card game built with React and TypeScript. Players select Pokémon to battle against a CPU opponent. The game uses type advantages (like Rock-Paper-Scissors) to determine the winner of each attack.",
    techStack: ["React", "JavaScript", "CSS"],
    githubUrl: "https://github.com/jangeles001/Pokemon_Game",
    liveUrl: "hhttps://jangeles001.github.io/Pokemon_Game/"
  },
  {
    id: "4",
    title: "Portfolio",
    description: "This portfolio website",
    techStack: ["React", "TypeScript", "Vite", "TailwindCSS"],
    githubUrl: "https://github.com/jangeles001/Portfolio-Website",
  },
];