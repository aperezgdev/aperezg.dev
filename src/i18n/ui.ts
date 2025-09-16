export const Languages = {
  en: "English",
  es: "Español",
} as const;

export type Language = keyof typeof Languages;

export const DefaultLanguage: Language = "es";

export const ui = {
  es: {
    nav: {
      blog: "Blog",
      projects: "Proyectos",
      about: "Sobre mí",
      experience: "Experiencia",
    },
    home: {
      title: "Hola, soy",
      subtitle: "Backend Developer",
      about: {
        title: "Sobre mí",
        first: {
          param:
            "Desarrollador backend con más de 3 años de experiencia en la creación de aplicaciones web robustas y escalables. Me especializo en Java con Spring.",
        },
        second: {
          param:
            "En mi tiempo libre experimento con distintas herramientas, lo que me permite seguir aprendiendo y expandiendo mis habilidades técnicas. Actualmente estoy explorando Golang y TypeScript.",
        },
      },
      experience: {
        title: "Experiencia",
        first: {
          title: "BBVA Technology (2023 Nov - Presente):",
          param:
            "Desarrollo microservicios utilizando tecnologias como Java con Spring, centradas en el rendimiento, buenas prácticas de código y además de ser facilmente escalables. Entre mis principales tareas tambien esta el diseño y la creacion de diferentes APIs REST.",
        },
        second: {
          title: "BBVA Technology (2021 Jul - 2023 Nov):",
          param:
            "Matenimiento y desarrollo de aplicaciones escritas en Java con Spring Boot, principalmente monolitos, muy ocasionalmente ayudaba en el front.",
        },
      },
      projects: {
        title: "Proyectos",
        param: "Aquí hay algunos de mis proyectos destacados:",
        first: {
          title: "projeclyze.dev",
          param:
            "Una plataforma para gestionar y analizar proyectos de desarrollo de software, con funcionalidades de seguimiento de tareas, colaboración en equipo y generación de informes.",
        },
        second: {
          title: "Porfolio y blog",
          param:
            "Mi sitio web personal donde comparto mi experiencia, proyectos y blog técnico donde cuento mis aprendizajes. Construido con Astro y Tailwind CSS.",
        },
        buttons: {
          viewProject: "Ver proyecto",
          commingSoon: "Próximamente",
        },
      },
      posts: {
        title: "Post recientes",
        noPosts: "No hay posts disponibles.",
      },
    },
    blog: {
      title: "Blog",
    },
  },
  en: {
    nav: {
      blog: "Blog",
      projects: "Projects",
      about: "About me",
      experience: "Experience",
    },
    home: {
      title: "Hi, I'm",
      subtitle: "Backend Developer",
      about: {
        title: "About me",
        first: {
          param:
            "Backend developer with over 3 years of experience building robust and scalable web applications. I specialize in Java with Spring.",
        },
        second: {
          param:
            "In my free time I experiment with different tools, which allows me to keep learning and expanding my technical skills. I'm currently exploring Golang and TypeScript.",
        },
      },
      experience: {
        title: "Experience",
        first: {
          title: "BBVA Technology (2023 Nov - Present):",
          param:
            "I develop microservices using technologies like Java with Spring, focusing on performance, code best practices, and scalability. My main tasks also include designing and creating various REST APIs.",
        },
        second: {
          title: "BBVA Technology (2021 Jul - 2023 Nov):",
          param:
            "Maintenance and development of applications written in Java with Spring Boot, mainly monoliths, occasionally helping with the front end.",
        },
      },
      projects: {
        title: "Projects",
        param: "Here are some of my highlighted projects:",
        first: {
          title: "projeclyze.dev",
          param:
            "A platform to manage and analyze software development projects, with features for task tracking, team collaboration, and report generation.",
        },
        second: {
          title: "Portfolio and blog",
          param:
            "My personal website where I share my experience, projects, and technical blog where I tell my learnings. Built with Astro and Tailwind CSS.",
        },
        buttons: {
          viewProject: "View project",
          commingSoon: "Comming soon",
        },
      },
      posts: {
        title: "Recent posts",
        noPosts: "No posts available.",
      },
    },
    blog: {
      title: "Blog",
    },
  },
} as const;
