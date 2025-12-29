export interface ProfileData {
  name: string;
  title: string;
  bio: string;
  description: string;
  initials: string;
  stats: {
    experience: string;
  };
  majorAchievements: {
    title: string;
    description: string;
  }[];
  education: {
    degree: string;
    school: string;
    year: string;
    link: string;
  };
  currentRole: {
    title: string;
    company: string;
    link: string;
  };
  skills: {
    frontend: string[];
    backend: string[];
    tools: string[];
  };
  socialLinks: {
    github: string;
    linkedin: string;
  };
  footerText: string;
}

export const profileData: ProfileData = {
  name: "Fraser Steel",
  title: "Full Stack Developer & Creative Problem Solver",
  bio: "I build beautiful, scalable web applications with modern technologies. Passionate about clean code, user experience, and continuous learning.",
  description:
    "I'm a passionate developer with over 6 years of experience building web applications. I love turning complex problems into simple, beautiful, and intuitive solutions.",
  initials: "FS",
  stats: {
    experience: "6+",
  },
  majorAchievements: [
    {
      title: "Built Communications Platform",
      description:
        "Developed a comprehensive communications platform for a major airline client, improving customer engagement and operational efficiency.",
    },
    {
      title: "Legacy System Migration",
      description:
        "Implemented a robust data migration solution, successfully transitioning from legacy systems to modern application.",
    },
  ],
  education: {
    degree: "BEng Computer and Electronic Systems",
    school: "University of Strathclyde",
    link: "https://www.strath.ac.uk/courses/undergraduate/computerelectronicsystemsbeng/",
    year: "2019",
  },
  currentRole: {
    title: "Senior Consultant",
    company: "Cortex Reply",
    link: "https://www.cortexreply.com/",
  },
  skills: {
    frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
    backend: ["Node.js", "Python", "AWS", "Docker", "C# .NET"],
    tools: ["Git", "VS Code", "Cursor", "Postman", "Jira"],
  },
  socialLinks: {
    github: "https://github.com/f-steel",
    linkedin: "https://uk.linkedin.com/in/fraser-steel-25868086",
  },
  footerText: "2025 Fraser Steel. Built with Next.js and Tailwind CSS.",
};
