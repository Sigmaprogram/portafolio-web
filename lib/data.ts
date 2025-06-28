// Pendiente
/**
 Agregar certificaciones, Testimonios ,Experiencia y completar Proyectos.

 Proyectos: 
 KODE
 Cuadro Arquitectura

 */


export interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  demoUrl?: string
  githubUrl?: string
}

export interface Testimonial {
  id: number
  name: string
  position: string
  company: string
  text: string
  rating: number
  avatar?: string
}

export interface Education {
  institution: string
  degree: string
  period: string
  description: string
}

export interface Experience {
  company: string
  position: string
  period: string
  description: string
  achievements: string[]
}

export interface Certification {
  title: string
  issuer: string
  date: string
  url?: string
}

export interface SkillWithLogo{
  name: string
  level: number
  logo?: string
  category?: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Click Venta Point of Sale",
    description: "Una plataforma de punto de venta para tiendas y pequeños negocios con funcionalidades como el control de inventario, ventas, clientes y control de usuarios y roles en el sistema.",
    image: "/projects/POS.png",
    technologies: ["NextJS", "TypeScript","MySQL", "Tailwind CSS"],
    demoUrl: "https://click-venta-pos.vercel.app/",
    githubUrl: "https://github.com/Sigmaprogram/click-venta-pos",
  },
    {
    id: 2,
    title: "Cuadro Arquitectura Landing Page",
    description: "Landing page para la empresa de arquitectura Cuadro Arquitectura, incluye portafolio de proyectos y servicios.",
    image: "/projects/CuadroArquitectura.png",
    technologies: ["Angular", "Tailwind CSS","NodeJS", "MySQL"],
    demoUrl: "https://cuadro-arquitectura.vercel.app/",
    githubUrl: "https://github.com/Sigmaprogram/cuadro-arquitectura",
  },
  {
    id: 3,
    title: "DoFlow Aplicación de Productividad",
    description: "Aplicación para habitos de productividad, con funcionalidades para gestionar el tiempo y el uso de tecnicas como pomodoro, gestion de tareas, etc.",
    image: "/",
    technologies: ["React", "Tailwind CSS","Laravel", "PostgreSQL"],
    demoUrl: "/",
    githubUrl: "/",
  },
    {
    id: 4,
    title: "Kode",
    description: "Aplicacion web para empresa de desarrollo de software, para mostrar portafolio de proyectos y servicios ofrecidos.",
    image: "/",
    technologies: ["Astro", "Tailwind CSS", "TypeScript"],
    demoUrl: "/",
    githubUrl: "/",
  },
    {
    id: 5,
    title: "Aplicación de Peliculas",
    description: "Aplicación web para buscar y ver peliculas, con funcionalidades de busqueda, favoritos y recomendaciones.",
    image: "/",
    technologies: ["Astro", "Tailwind CSS", "Laravel", "MySQL"],
    demoUrl: "/",
    githubUrl: "/",
  },
    {
    id: 6,
    title: "Andy Repuestos",
    description: "Aplicacion de escritorio para getion de ventas y control de inventario para la empresa Andy Repuestos, con funcionalidades de gestion de productos, ventas, clientes y reportes.",
    image: "/",
    technologies: ["Visual Basic", "SQL Server"],
    demoUrl: "",
    githubUrl: "https://github.com/Sigmaprogram/andy-repuestos",
  }
  ,
    {
    id: 8,
    title: "Sistema de Facturación",
    description: "Aplicación web para la gestión de facturación y ventas, con funcionalidades de generación de facturas, control de inventario y reportes.",
    image: "/",
    technologies: ["C#", "ASP.NET", "SQL Server"],
    demoUrl: "/",
    githubUrl: "/",
  }
  // ,
  //   {
  //   id: 9,
  //   title: "",
  //   description: "",
  //   image: "/",
  //   technologies: [],
  //   demoUrl: "/",
  //   githubUrl: "/",
  // }
]

// export const testimonials: Testimonial[] = [
//   {
//     id: 1,
//     name: "Ana García",
//     position: "CEO",
//     company: "TechSolutions",
//     text: "Un profesional excepcional. Entregó el proyecto antes de lo previsto y con una calidad superior a la esperada.",
//     rating: 5,
//     avatar: "/placeholder.svg?height=100&width=100",
//   }
// ]

// export const experience: Experience[] = [
//   {
//     company: "TechSolutions",
//     position: "Desarrollador Full Stack Senior",
//     period: "2021 - Presente",
//     description:
//       "Desarrollo y mantenimiento de aplicaciones web para clientes de diversos sectores. Liderazgo técnico en proyectos clave.",
//     achievements: [
//       "Reducción del 40% en tiempo de carga",
//       "Implementación de CI/CD",
//       "Mentorización de desarrolladores junior",
//     ],
//   },
// ]

export const education: Education[] = [
  {
    institution: "Politecnico Inmaculada Concepción",	
    degree: "Desarrollo de Aplicaciones Y Sistemas Informáticos",
    period: "2022 - 2025",
    description: "Tecnicatura Superior en Desarrollo de Aplicaciones y Sistemas Informáticos.",
  },
    {
    institution: "Centu",	
    degree: "Desarrollo de Aplicaciones Web",
    period: "2022 - 2025",
    description: "Tecnicatura Superior en Desarrollo de Aplicaciones Web con C# y SQL server.",
  },
]

export const certifications: Certification[] = [
  {
    title: "Conceptos Basicos de Computación",
    issuer: "Cisco Academy",
    date: "2024",
    url: "/",
  },
    {
    title: "Introducción a la Civerseguridad",
    issuer: "Cisco Academy",
    date: "2024",
    url: "/",
  }
]



// New data structure with logos for skills
export const skillsWithLogos: Record<string, SkillWithLogo[]> = {
  Frontend: [
    { name: "React", level: 90, logo: "/skills/react-svgrepo-com.svg" },
    { name: "Angular", level: 65, logo: "/skills/angular.svg" },
    { name: "Next.js", level: 80, logo: "/skills/nextjs.svg" },
    { name: "TypeScript", level: 75, logo: "/skills/typescript-svgrepo-com.svg" },
    { name: "JavaScript", level: 90, logo: "/skills/javascript-svgrepo-com.svg" },
    { name: "Tailwind CSS", level: 85, logo: "/skills/tailwindcss-icon-svgrepo-com.svg" },
    // { name: "Vue.js", level: 70, logo: "/skills/vue-9-logo-svgrepo-com.svg" },
    { name: "Astro", level: 60, logo: "/skills/astro-svgrepo-com.svg" },
    // { name: "Redux", level: 80, logo: "/skills/redux-svgrepo-com.svg" },
    { name: "HTML5", level: 95, logo: "/skills/html-5-svgrepo-com.svg" },
    { name: "CSS3", level: 90, logo: "/skills/css-3-svgrepo-com.svg" },

  ],
  Backend: [
    { name: "Node.js", level: 80, logo: "/skills/nodejs-icon-svgrepo-com.svg" },
    {name: "Laravel", level: 80, logo: "/skills/laravel-svgrepo-com.svg"},
    {name: "PHP", level: 80, logo: "/skills/php-svgrepo-com.svg"},
    { name: "Python", level: 60, logo: "/skills/python-svgrepo-com.svg" },
    { name: "PostgreSQL", level: 65, logo: "/skills/postgresql-svgrepo-com.svg" },
    { name: "MySQL", level: 65, logo: "/skills/mysql-svgrepo-com.svg" },
    { name: "SQL Server", level: 65, logo: "/skills/microsoft-sql-server.svg" },
    { name: "C#", level: 65, logo: "/skills/csharp-svgrepo-com.svg" },
    // { name: "GraphQL", level: 60, logo: "/placeholder.svg?text=GQL" },
    // { name: "MongoDB", level: 70, logo: "/skills/mongo-svgrepo-com.svg" },
    
  ],
  Tools: [
    { name: "Git", level: 90, logo: "/skills/git-svgrepo-com.svg" },
    {name: "Github", level: 90, logo: "/skills/github.svg"},
    { name: "Docker", level: 65, logo: "/skills/docker-svgrepo-com.svg" },
    // { name: "AWS", level: 60, logo: "/skills/aws-svgrepo-com.svg" },
    // { name: "Webpack", level: 70, logo: "/skills/webpack-svgrepo-com.svg" },
    { name: "Figma", level: 80, logo: "/skills/figma-svgrepo-com.svg" },
    { name: "VS Code", level: 95, logo: "/skills/vscode-svgrepo-com.svg" },

  ],
  Soft: [
    { name: "Comunicación", level: 90, logo: "/placeholder.svg?text=Com" },
    { name: "Trabajo en equipo", level: 85, logo: "/placeholder.svg?text=Team" },
    { name: "Resolución de problemas", level: 90, logo: "/placeholder.svg?text=Problem" },
    { name: "Gestión del tiempo", level: 80, logo: "/placeholder.svg?text=Time" },
    { name: "Adaptabilidad", level: 85, logo: "/placeholder.svg?text=Adapt" },
    { name: "Liderazgo", level: 75, logo: "/placeholder.svg?text=Lead" },
  ],
}