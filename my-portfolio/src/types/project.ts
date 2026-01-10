export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  previewImg?: string;
  githubUrl?: string;
  liveUrl?: string;
}
