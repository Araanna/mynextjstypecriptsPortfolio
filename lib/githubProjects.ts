export interface GitHubProject {
  id: string;
  title: string;

  description: string;
  techStack: string[];
  githubUrl: string;
  isOpenForCollaboration: boolean;
}

export const githubProjects: GitHubProject[] = [
  {
    id: "mlab-ai-bot",
    title: "MLABEAI Telegram Bot",
    description: "Python Telegram bot for machine learning assistance and AI experiments",
    techStack: ["Python", "Telegram Bot API", "AI/ML"],
    githubUrl: "https://github.com/Araanna/MLABEAI_BOT",
    isOpenForCollaboration: true
  },
  {
    id: "django-photo-album",
    title: "Django Photo Album Backend",
    description: "GraphQL backend for photo album application with Django",
    techStack: ["Django", "GraphQL", "Python"],
    githubUrl: "https://github.com/Araanna/django_photo_album_backend",
    isOpenForCollaboration: true
  }
];