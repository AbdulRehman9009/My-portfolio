import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaWordpress
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiFramer,
  SiGooglesheets,
  SiAirtable,
  SiMysql
} from "react-icons/si";

import {
  TbBrandGoogleBigQuery,
  TbInfinity // Used for n8n (closest available)
} from "react-icons/tb";

import {
  MdTableChart, // Excel
  MdInsertDriveFile // Word
} from "react-icons/md";


export const skills = [
  {
    heading: "React",
    name: "React",
    description: "Building dynamic and high-performance UI components with React.",
    icon: FaReact,

  },
  {
    heading: "Next.js",
    name: "Next.js",
    description: "Creating full-stack, SEO-optimized, and blazing-fast web apps.",
    icon: SiNextdotjs,

  },
  {
    heading: "Tailwind CSS",
    name: "Tailwind CSS",
    description: "Designing beautiful, responsive UIs using utility-first CSS.",
    icon: SiTailwindcss,

  },
  {
    heading: "JavaScript",
    name: "JavaScript",
    description: "Writing interactive, powerful logic for web applications.",
    icon: SiJavascript,

  },
  {
    heading: "TypeScript",
    name: "TypeScript",
    description: "Building scalable, type-safe, and reliable applications.",
    icon: SiTypescript,

  },
  {
    heading: "Node.js",
    name: "Node.js",
    description: "Developing backend services and APIs using Node.js.",
    icon: FaNodeJs,

  },
  {
    heading: "Express.js",
    name: "Express.js",
    description: "Building REST APIs and backend logic using Express.js.",
    icon: SiExpress,

  },
  {
    heading: "MongoDB",
    name: "MongoDB",
    description: "Managing NoSQL database operations for scalable apps.",
    icon: SiMongodb,

  },
  {
    heading: "Git & GitHub",
    name: "Git",
    description: "Version control, code collaboration, and repository management.",
    icon: FaGitAlt,

  },
  {
    heading: "Framer Motion",
    name: "Framer Motion",
    description: "Creating smooth animations and interactive UI experiences.",
    icon: SiFramer,

  },
  {
    heading: "HTML5",
    name: "HTML5",
    description: "Structuring clean, responsive, and semantic web pages.",
    icon: FaHtml5,

  },
  {
    heading: "CSS3",
    name: "CSS3",
    description: "Styling elegant and responsive layouts using CSS.",
    icon: FaCss3Alt,

  },

  // --- NEW ---
  {
    heading: "n8n Automation",
    name: "n8n",
    description: "Creating powerful workflows and automations using n8n.",
    icon: TbInfinity,

  },
  {
    heading: "Google Sheets",
    name: "Google Sheets",
    description: "Spreadsheet automation, formulas, data mapping, integrations.",
    icon: SiGooglesheets,

  },
  {
    heading: "Microsoft Excel",
    name: "Excel",
    description: "Data analysis, formulas, and spreadsheet automation.",
    icon: MdTableChart,

  },
  {
    heading: "Microsoft Word",
    name: "Word",
    description: "Document writing, formatting, and template creation.",
    icon: MdInsertDriveFile,

  },
  {
    heading: "Airtable",
    name: "Airtable",
    description: "Managing no-code databases and workflow automation.",
    icon: SiAirtable,

  },
  {
    heading: "SQL",
    name: "SQL",
    description: "Querying and managing relational database systems.",
    icon: SiMysql,

  },
  {
    heading: "WordPress",
    name: "WordPress",
    description: "Building and maintaining websites using WordPress.",
    icon: FaWordpress,

  },
];

export default skills;
