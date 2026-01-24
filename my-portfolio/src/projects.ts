import type { Project } from "./types";
import fitSyncPreview from "./assets/projects/fitsync _preview.png";
import pokemonGame from "./assets/projects/Pokemon_Game.png";
import spaceTravelPreview from "./assets/projects/Space-Travel-Preview.png"
import portfolio from "./assets/projects/portfolio.png";

export const projects: Project[] = [
  {
    id: "1",
    title: "FitSync",
    description: "Fullstack fitness tracker app built using React & JavaScript. Backend was built using Express.js and JWT for authentication.",
    techStack: ["React", "JavaScript", "Vite", "TailwindCSS", "Tanstack", "MongoDB", "Express.js", "Zustand", "JSON Web Token", "Redis"],
    previewImg: fitSyncPreview,
    githubUrl: "https://github.com/yourusername/fitsync"
  },
    {
    id: "2",
    title: "Pokemon Card Game",
    description: "A fun Pokémon card game built with React and TypeScript. Players take turns selecting Pokémon from their hand and one from their opponent's hand to battle. The game uses type advantages (like Rock-Paper-Scissors) to determine the winner of each attack (a tie is considered a loss for both players). First to remove all cards from their opponent's hand wins!",
    techStack: ["React", "TypeScript", "CSS"],
    previewImg: pokemonGame,
    githubUrl: "https://github.com/jangeles001/Pokemon_Game",
    liveUrl: "https://jangeles001.github.io/Pokemon_Game/"
  },
  {
    id: "3",
    title: "Space Travel Simulator",
    description: "This project is a front-end web application that lets users design and command their own interplanetary fleet. Users can create custom names, descriptions, and crew capacities for their spaceships. They can then deploy the ships to distant planets to manage planetary populations. The app focuses on state management and UI flow, using Redux to coordinate ship creation, planetary data, and expedition logistics across the interface. Built with React and Vite and integrates a Mock API to simulate backend services and persistent data.",
    techStack: ["React", "JavaScript", "Vite", "Redux", "CSS"],
    previewImg: spaceTravelPreview,
    githubUrl: "https://github.com/jangeles001/Space-Travel-Project",
    liveUrl: "https://jangeles001.github.io/Space-Travel-Project/",
  },
  {
    id: "4",
    title: "Portfolio",
    description: "This portfolio website",
    techStack: ["React", "TypeScript", "Vite", "TailwindCSS", "CSS"],
    previewImg: portfolio,
    githubUrl: "https://github.com/jangeles001/Portfolio-Website",
  },
];