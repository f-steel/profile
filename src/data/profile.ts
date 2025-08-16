export interface ProfileData {
  name: string;
  title: string;
  bio: string;
  description: string;
  initials: string;
  stats: {
    experience: string;
    projects: string;
    satisfaction: string;
  };
  education: {
    degree: string;
    school: string;
    year: string;
    link: string;
  };
  currentRole: {
    title: string;
    company: string;
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
  contactMessage: string;
  footerText: string;
}

export const profileData: ProfileData = {
  name: 'Fraser Steel',
  title: 'Full Stack Developer & Creative Problem Solver',
  bio: 'I build beautiful, scalable web applications with modern technologies. Passionate about clean code, user experience, and continuous learning.',
  description:
    "I'm a passionate developer with over 5 years of experience building web applications. I love turning complex problems into simple, beautiful, and intuitive solutions.",
  initials: 'FS',
  stats: {
    experience: '5+',
    projects: '50+',
    satisfaction: '100%',
  },
  education: {
    degree: 'BEng Computer and Electronic Systems',
    school: 'University of Strathclyde',
    link: 'https://www.strath.ac.uk/courses/undergraduate/computerelectronicsystemsbeng/',
    year: '2019',
  },
  currentRole: {
    title: 'Senior Consultant',
    company: 'Cortex Reply',
  },
  skills: {
    frontend: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Redux',
      'HTML/CSS',
    ],
    backend: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker'],
    tools: ['Git', 'VS Code', 'Figma', 'Postman', 'Jira', 'Figma'],
  },
  socialLinks: {
    github: 'https://github.com/f-steel',
    linkedin: 'https://uk.linkedin.com/in/fraser-steel-25868086',
  },
  contactMessage:
    'I am always interested in hearing about new opportunities and exciting projects. Whether you have a question or just want to say hi, feel free to reach out!',
  footerText: '2025 Fraser Steel. Built with Next.js and Tailwind CSS.',
};
