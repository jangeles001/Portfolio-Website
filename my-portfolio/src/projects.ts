import type { Project } from "./types";
import fitSyncPreview from "./assets/projects/fitsync _preview.png";
import pokemonGame from "./assets/projects/Pokemon_Game.png";

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
    description: "A fun Pokémon card game built with React and TypeScript. Players take turns selecting Pokémon from their hand and one from their opponent's hand to battle. The game uses type advantages (like Rock-Paper-Scissors) to determine the winner of each attack (a tie is considered a loss for both players). First to remove all cards from their opponent's hand wins!",
    techStack: ["React", "JavaScript", "CSS"],
    previewImg: pokemonGame,
    githubUrl: "https://github.com/jangeles001/Pokemon_Game",
    liveUrl: "https://jangeles001.github.io/Pokemon_Game/"
  },
  {
    id: "4",
    title: "Portfolio",
    description: "This portfolio website",
    techStack: ["React", "TypeScript", "Vite", "TailwindCSS", "CSS"],
    githubUrl: "https://github.com/jangeles001/Portfolio-Website",
  },
];