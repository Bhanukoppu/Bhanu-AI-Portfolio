// ─────────────────────────────────────────────────────────────
// src/data/portfolio.ts
// Single source of truth for all portfolio content.
// Edit THIS file to update your site — every section reads from here.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Koppu Bhanu Prakash",
  shortName: "Bhanu Prakash",
  roles: ["AI/ML Engineer", "Data Analyst", "Python Developer"],
  tagline:
    "MCA graduate (CGPA 9.0/10) building applied AI systems — from classic ML pipelines to LLM-powered tools with RAG, LangChain, and Google Cloud's Gemini models.",
  location: "Chirala, Andhra Pradesh, India",
  email: "prakashkoppu00@gmail.com",
  phone: "+91 8555045715",
  socials: {
    github: "https://github.com/Bhanukoppu",
    linkedin: "https://www.linkedin.com/in/bhanu-prakash-koppu-064907290",
    twitter: "",
  },
  resumeFile: "/resume.pdf", // TODO: export your resume.docx as PDF and place it here
  photo: "/profile.jpg",
  avatarInitials: "BP",
};

export const about = {
  eyebrow: "record 02 / 10 · profile · verified",
  heading: "About",
  paragraphs: [
    "I'm a Master of Computer Applications (MCA) graduate from Narayana Engineering College (JNTU Anantapur), graduating with a 9.0/10 CGPA, with a strong foundation in Data Structures & Algorithms, Object-Oriented Programming, and core software engineering principles (SDLC, STLC, Agile).",
    "My hands-on project experience is in Machine Learning and Natural Language Processing — building classification pipelines and, more recently, working with LLMs through LangChain, Retrieval-Augmented Generation (RAG), and Google Cloud's Gemini models in BigQuery.",
    "I like systems that are honest about their own quality: one of my projects exists purely to catch bad annotations before they reach a model. That same instinct — verify, then ship — shapes how I approach everything I build, portfolio included.",
  ],
  quickFacts: [
    { label: "Degree", value: "MCA · CGPA 9.0/10" },
    { label: "Focus", value: "AI/ML · NLP · Data Analytics" },
    { label: "Currently", value: "Open to AI/ML & SWE roles" },
    { label: "Based in", value: "Chirala, Andhra Pradesh" },
  ],
};

export type EducationItem = {
  id: string;
  degree: string;
  school: string;
  score: string;
  year: string;
};

export const education: EducationItem[] = [
  {
    id: "ED-01",
    degree: "Master of Computer Applications (MCA)",
    school: "Narayana Engineering College, JNTU Anantapur",
    score: "CGPA 9.0/10.0",
    year: "2026",
  },
  {
    id: "ED-02",
    degree: "Bachelor of Science in Computer Science",
    school: "Chaitanya Bharathi Degree College",
    score: "82%",
    year: "2024",
  },
  {
    id: "ED-03",
    degree: "Intermediate (MPC)",
    school: "Vignana Bharathi Junior College",
    score: "90%",
    year: "2021",
  },
  {
    id: "ED-04",
    degree: "SSC (10th)",
    school: "Priyadarshini EM High School",
    score: "CGPA 9.8/10.0",
    year: "2019",
  },
];

export const skillGroups = [
  {
    group: "Languages",
    skills: ["Python", "Java", "C", "JavaScript", "HTML", "CSS"],
  },
  {
    group: "Core CS",
    skills: ["Data Structures & Algorithms", "OOP", "SDLC", "STLC", "Agile"],
  },
  {
    group: "AI / ML",
    skills: ["Machine Learning", "NLP", "Scikit-learn", "LangChain", "RAG", "Prompt Engineering", "FastAPI"],
  },
  {
    group: "Databases",
    skills: ["MySQL", "SQL", "MongoDB"],
  },
  {
    group: "Tools & Platforms",
    skills: ["Git", "GitHub", "VS Code", "n8n", "Power BI", "Google Cloud", "AWS"],
  },
  {
    group: "Soft Skills",
    skills: ["Communication", "Teamwork", "Critical Thinking", "Adaptability", "Time Management"],
  },
];

export const learning = {
  eyebrow: "record 07 / 10 · in progress · unverified",
  heading: "Currently Learning",
  note: "Updated as I go — this section stays honest about what's still in progress rather than pretending it's finished.",
  items: [
    "Generative AI",
    "Large Language Models (LLMs)",
    "LangChain (advanced patterns)",
    "Retrieval-Augmented Generation (RAG)",
    "AI Agents",
    "Vector Databases",
    "MLOps",
  ],
};

export type Project = {
  id: string;
  title: string;
  status: "shipped" | "in-progress" | "planned";
  description: string;
  stack: string[];
  github?: string;
  demo?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    id: "P-01",
    title: "SMS Spam Detection System",
    status: "shipped",
    description:
      "A machine learning classification model in Python that detects Spam vs. Ham SMS messages using NLP techniques and TF-IDF feature extraction. Includes data preprocessing, feature engineering, and model training/evaluation across Naive Bayes and Logistic Regression.",
    stack: ["Python", "Scikit-learn", "NLP", "TF-IDF"],
    github: "https://github.com/Bhanukoppu", // TODO: link the specific repo once it's public
    image: "/projects/sms-spam-detection.png",
  },
  {
    id: "P-02",
    title: "Dataset Quality & Annotation Validation Tool",
    status: "shipped",
    description:
      "A Python-based tool that validates dataset annotations and flags data quality issues — improving the reliability of labeled data before it reaches an ML pipeline.",
    stack: ["Python", "Data Validation", "Pandas"],
    github: "https://github.com/Bhanukoppu", // TODO: link the specific repo once it's public
    image: "/projects/dataset-validation-tool.png",
  },
  {
    id: "P-03",
    title: "Generative AI Chatbot",
    status: "planned",
    description:
      "A conversational assistant exploring prompt design, context management, and grounded responses — next on the roadmap.",
    stack: ["Python", "LLMs", "Prompt Engineering"],
  },
  {
    id: "P-04",
    title: "RAG Assistant",
    status: "planned",
    description:
      "Retrieval-augmented question answering over a custom document set, exploring chunking strategy, embeddings, and vector search quality.",
    stack: ["LangChain", "RAG", "Vector DB"],
  },
  {
    id: "P-05",
    title: "AI Resume Analyzer",
    status: "planned",
    description:
      "An LLM-backed tool that parses a resume and job description, then reports match quality and concrete gaps.",
    stack: ["Python", "FastAPI", "LLMs"],
  },
];

export type ExperienceItem = {
  id: string;
  org: string;
  role: string;
  period: string;
  points: string[];
};

export const experience: ExperienceItem[] = [
  {
    id: "E-01",
    org: "SkillDzire",
    role: "Python Course — Internship",
    period: "05 May 2025 – 20 June 2025",
    points: [
      "Completed a short-term Python internship programme covering core language proficiency and applied programming exercises.",
    ],
  },
  {
    id: "E-02",
    org: "Deloitte (via Forage)",
    role: "Data Analytics Job Simulation",
    period: "February 2026",
    points: [
      "Completed practical tasks in data analysis and forensic technology as part of Deloitte's job simulation programme.",
    ],
  },
  {
    id: "E-03",
    org: "Tata Group (via Forage)",
    role: "Generative AI Powered Data Analytics — Job Simulation",
    period: "2026",
    points: [
      "Applied generative AI concepts to real-world style data analytics workflows.",
    ],
  },
  {
    id: "E-04",
    org: "Forage",
    role: "AWS Solutions Architecture — Job Simulation",
    period: "2025",
    points: [
      "Worked through AWS solutions-architecture style tasks in a simulated job environment.",
    ],
  },
  {
    id: "E-05",
    org: "Wadhwani Foundation & APSDC",
    role: "Professional Development Training",
    period: "2025",
    points: [
      "Completed a professional-development training programme covering workplace and career-readiness skills.",
    ],
  },
  {
    id: "E-06",
    org: "Edufyi x IBM",
    role: "AI/ML Internship",
    period: "2026",
    points: [
      "Contributed to AI/ML model development and data preprocessing for an education-focused initiative.",
      "Worked on machine learning pipelines and collaborated with IBM mentors on practical deployment workflows.",
    ],
  },
];

export const googleCloud = {
  eyebrow: "record 08 / 10 · google cloud · verified",
  heading: "Google Cloud",
  league: "Gold League",
  points: 3004,
  note: "Earned through Google Cloud Skills Boost — hands-on labs and quests across BigQuery, Gemini, and generative AI.",
  profileImage: "/certificates/google-cloud-profile.jpg",
  badges: [
    "Gen AI: Unlock Foundational Concepts",
    "Work with Gemini Models in BigQuery",
    "Gen AI: Beyond the Chatbot",
    "Introduction to Image Generation",
    "Using BigQuery Machine Learning for Inference",
    "Gemini for Data Scientists and Analysts",
  ],
  badgeImages: ["/certificates/google-badge-sample.svg"],
};

export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  category: "Google" | "IBM" | "Deloitte" | "Tata" | "Python" | "Power BI" | "Internship" | "Other";
  image?: string;
  file?: string;
};

export const certificates: Certificate[] = [
  {
    id: "C-01",
    title: "Introduction to Generative AI",
    issuer: "IBM SkillsBuild",
    category: "IBM",
  },
  {
    id: "C-02",
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte (via Forage)",
    category: "Deloitte",
    file: "/certificates/deloitte.pdf",
  },
  {
    id: "C-03",
    title: "Generative AI Powered Data Analytics — Job Simulation",
    issuer: "Tata Group (via Forage)",
    category: "Tata",
  },
  {
    id: "C-04",
    title: "AWS Solutions Architecture — Job Simulation",
    issuer: "Forage",
    category: "Other",
  },
  {
    id: "C-05",
    title: "PowerBI Workshop",
    issuer: "OfficeMaster",
    category: "Power BI",
    file: "/certificates/powerbi.pdf",
  },
  {
    id: "C-06",
    title: "Python Course — Internship",
    issuer: "SkillDzire",
    category: "Internship",
    file: "/certificates/skilldzire-python.pdf",
  },
  {
    id: "C-07",
    title: "Career Orientation Workshop",
    issuer: "Narayana Engineering College",
    category: "Other",
    file: "/certificates/career-orientation.pdf",
  },
  {
    id: "C-08",
    title: "Startup Business Management Programme",
    issuer: "AVISHKANDHRA / AP Innovation Society",
    category: "Other",
    file: "/certificates/startup-management.pdf",
  },
  {
    id: "C-09",
    title: "Professional Development Training",
    issuer: "Wadhwani Foundation & APSDC",
    category: "Other",
  },
];

export const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Google Cloud", href: "#google-cloud" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];
