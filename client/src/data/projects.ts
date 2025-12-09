export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  category: "web" | "3d" | "experimental" | "all";
  liveUrl: string;
  githubUrl: string;
  imageUrl: string;
  features: string[];
  role: string;
}

export const projects: Project[] = [
  {
    id: "neon-dashboard",
    title: "Neon Dashboard",
    description: "Real-time analytics dashboard with WebGL visualizations and live data streaming.",
    longDescription: "A comprehensive analytics platform featuring real-time data visualization using WebGL, custom charts, and interactive dashboards. Built for high-performance data monitoring and business intelligence.",
    techStack: ["React", "Three.js", "WebSocket", "D3.js", "Node.js"],
    category: "web",
    liveUrl: "https://example.com/neon-dashboard",
    githubUrl: "https://github.com/yourusername/neon-dashboard",
    imageUrl: "/placeholder-project.jpg",
    features: ["Real-time data streaming", "Custom WebGL charts", "Dark mode UI", "Responsive design"],
    role: "Full-Stack Developer"
  },
  {
    id: "cyber-portfolio",
    title: "Cyber Portfolio",
    description: "Immersive 3D portfolio experience with particle systems and interactive navigation.",
    longDescription: "An avant-garde portfolio website featuring immersive 3D environments, particle-based navigation, and dynamic content loading. Pushes the boundaries of web-based 3D experiences.",
    techStack: ["Next.js", "Three.js", "GSAP", "Framer Motion", "TypeScript"],
    category: "3d",
    liveUrl: "https://example.com/cyber-portfolio",
    githubUrl: "https://github.com/yourusername/cyber-portfolio",
    imageUrl: "/placeholder-project.jpg",
    features: ["3D particle systems", "Smooth page transitions", "Interactive scenes", "Performance optimized"],
    role: "Creative Developer"
  },
  {
    id: "synthwave-player",
    title: "Synthwave Player",
    description: "Audio-reactive music player with procedural visuals and beat detection.",
    longDescription: "A cutting-edge music player that generates procedural visuals synchronized with audio input. Features real-time beat detection and customizable visual presets.",
    techStack: ["React", "Web Audio API", "Canvas", "GLSL Shaders"],
    category: "experimental",
    liveUrl: "https://example.com/synthwave-player",
    githubUrl: "https://github.com/yourusername/synthwave-player",
    imageUrl: "/placeholder-project.jpg",
    features: ["Beat detection", "Procedural visuals", "Custom shaders", "Playlist support"],
    role: "Creative Technologist"
  },
  {
    id: "rave-commerce",
    title: "Rave Commerce",
    description: "E-commerce platform with immersive product showcases and AR try-on.",
    longDescription: "A next-generation e-commerce experience featuring 3D product visualization, augmented reality try-on functionality, and a seamless checkout process.",
    techStack: ["Next.js", "Three.js", "Stripe", "PostgreSQL", "WebXR"],
    category: "web",
    liveUrl: "https://example.com/rave-commerce",
    githubUrl: "https://github.com/yourusername/rave-commerce",
    imageUrl: "/placeholder-project.jpg",
    features: ["3D product viewer", "AR try-on", "Secure payments", "Inventory management"],
    role: "Lead Developer"
  },
  {
    id: "neural-art",
    title: "Neural Art Generator",
    description: "AI-powered art generation tool with style transfer and real-time rendering.",
    longDescription: "An experimental project combining machine learning with real-time graphics. Users can generate unique artworks using neural style transfer and export high-resolution outputs.",
    techStack: ["Python", "TensorFlow", "React", "WebGL", "FastAPI"],
    category: "experimental",
    liveUrl: "https://example.com/neural-art",
    githubUrl: "https://github.com/yourusername/neural-art",
    imageUrl: "/placeholder-project.jpg",
    features: ["Style transfer", "Real-time preview", "High-res export", "Custom models"],
    role: "ML Engineer"
  },
  {
    id: "hologram-ui",
    title: "Hologram UI Kit",
    description: "Futuristic UI component library with holographic effects and animations.",
    longDescription: "A comprehensive UI kit featuring holographic-style components, animated transitions, and modular design patterns. Perfect for creating sci-fi themed interfaces.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Storybook"],
    category: "3d",
    liveUrl: "https://example.com/hologram-ui",
    githubUrl: "https://github.com/yourusername/hologram-ui",
    imageUrl: "/placeholder-project.jpg",
    features: ["50+ components", "Dark theme", "Animation presets", "Storybook docs"],
    role: "UI/UX Developer"
  }
];

export const skills = [
  "HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", 
  "GSAP", "Three.js", "WebGL", "Node.js", "Express", "MongoDB", 
  "Firebase", "Git & GitHub"
];

export const education = [
  {
    degree: "B.Tech in Computer Science",
    institution: "Technical University",
    year: "2019 - 2023",
    description: "Focused on web technologies, computer graphics, and software engineering."
  }
];

export const experience = [
  {
    title: "Freelance Developer",
    company: "Self-Employed",
    year: "2022 - Present",
    description: "Worked on modern web apps, landing pages, and animated experiences for various clients."
  },
  {
    title: "Web Designer",
    company: "Creative Agency",
    year: "2021 - 2022",
    description: "Designed and implemented responsive UI with focus on motion and interactivity."
  }
];

export const socialLinks = {
  email: "your-email@example.com",
  github: "https://github.com/Ragni-bca2025",
  linkedin: "https://www.linkedin.com/in/ragni-kumari-897771376/"
};
