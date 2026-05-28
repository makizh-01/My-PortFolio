import { useState, useRef, useEffect } from "react";
import profileImg from "./profile.jpg";

// Portfolio Data
const resumeData = {
  name: "N Makizh",
  title: "AI Product Builder",
  tagline: "Building intelligent products with optimized AI prompting & cutting-edge tools",
  contact: {
    email: "makizhprema27@gmail.com",
    github: "github.com/makizh-01",
    linkedin: "linkedin.com/in/makizh-n",
    portfolio: "makizh.vercel.app",
    location: "Coimbatore, India",
  },
  summary:
    "Innovative AI Product Builder and Computer Science undergraduate specializing in Data Analytics, with a demonstrated ability to design, build, and deploy AI-powered products from concept to production. Proficient in crafting optimized prompts across leading AI platforms to accelerate development cycles and solve real-world user challenges. Passionate about democratizing learning through technology — with hands-on project experience serving learners across multiple domains.",
  education: [
    {
      degree: "Bachelor of Computer Science with Data Analytics",
      institution: "Sankara College of Science and Commerce",
      location: "Coimbatore, India",
      period: "2024 – Present",
      highlight: "Specialized in AI, Data Analytics & Full-Stack Development",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Holy Angels Matric Hr. Sec School",
      location: "Coimbatore, India",
      period: "Jun 2023",
      highlight: "Focus on Computer Science & Mathematics",
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "LEF Christian Matric School",
      location: "Coimbatore, India",
      period: "Jun 2021",
      highlight: "Ranked among top performers",
    },
  ],
  skills: {
    "AI & Product Building": [
      "AI Prompting (Advanced)",
      "Prompt Engineering",
      "LLM Integration",
      "AI Tool Orchestration",
      "Product Ideation & MVP",
      "ChatGPT / Claude / Gemini",
    ],
    "Development": [
      "React.js",
      "JavaScript (ES6+)",
      "HTML5 & CSS3",
      "Vite",
      "Responsive Design",
      "Git & GitHub",
    ],
    "Data & Analytics": [
      "Data Analytics",
      "Problem Solving",
      "Research & Insights",
      "AI-Assisted Analysis",
    ],
    "Professional": [
      "Leadership",
      "Communication",
      "Teamwork",
      "Adaptability",
      "Time Management",
      "Critical Thinking",
    ],
  },
  projects: [
    {
      name: "SkillVerse",
      tagline: "Free Certification Discovery & Skill Simulation Platform",
      link: "https://skill-verse-1.vercel.app/",
      github: "https://github.com/makizh-01/Skill-Verse",
      tech: ["HTML5", "CSS3", "JavaScript", "AI Prompting", "Responsive Design"],
      description:
        "Designed and developed a full-featured web platform aggregating 500+ free certification courses from top-tier companies including Google, Microsoft, AWS, IBM, Meta, and 20+ others. Features domain-based filtering, company exploration, and an interactive Skill Simulator with 19 placement-readiness lessons covering soft skills, communication, and interview preparation.",
      highlights: [
        "Curated 500+ free courses across 12+ domains from 20+ Fortune-500 companies",
        "Built interactive Skill Simulator with 19 real-world placement training modules",
        "Implemented course bookmarking, search/filter system, and detailed previews",
        "Deployed to production on Vercel with zero-downtime continuous deployment",
        "Helps learners discover free Google, Microsoft, AWS, and IBM certifications",
      ],
      impact: "Production Live",
    },
    {
      name: "KURAL",
      tagline: "AI-Powered Blog Writing Platform",
      link: "#",
      github: "https://github.com/makizh-01/KURAL",
      tech: ["React.js", "Vite", "JavaScript", "AI Integration", "HMR"],
      description:
        "Engineered a modern blog writing platform using React and Vite, focused on enabling users to create, manage, and publish content with AI-assisted writing tools. Built with component-driven architecture and optimized for performance using Vite's Hot Module Replacement for rapid development cycles.",
      highlights: [
        "Built with React + Vite for blazing-fast performance and developer experience",
        "Implemented AI-assisted content creation workflows using optimized prompts",
        "Component-based architecture enabling scalable and maintainable codebase",
        "Integrated ESLint for code quality enforcement across the project",
      ],
      impact: "Active Development",
    },
    {
      name: "Personal Portfolio",
      tagline: "Professional Portfolio Website",
      link: "https://makizh.vercel.app/",
      github: "https://github.com/makizh-01",
      tech: ["Web Technologies", "AI Tools", "Vercel", "Responsive Design"],
      description:
        "Designed and deployed a professional portfolio website showcasing AI product-building projects, skills, and educational background. Built to demonstrate expertise in modern web development and AI-assisted product creation, with live deployment on Vercel.",
      highlights: [
        "Designed and shipped a fully responsive professional portfolio in record time",
        "Deployed and maintained on Vercel with custom domain configuration",
        "Showcases AI chatbot projects and security-focused tools built for real users",
        "Demonstrates end-to-end product lifecycle from ideation to deployment",
      ],
      impact: "Production Live",
    },
  ],
  certifications: [
    {
      name: "Certified in Usage of AI Tools",
      issuer: "Verified Certification",
      icon: "🤖",
    },
    {
      name: "Specific Completion of ChatGPT",
      issuer: "OpenAI — ChatGPT Mastery",
      icon: "⚡",
    },
  ],
  languages: [
    { name: "English", level: "Professional Proficiency" },
    { name: "Tamil", level: "Native" },
  ],
};

// SVG Icon Components for modern professional visuals
const Icons = {
  Terminal: () => (
    <svg className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  Globe: () => (
    <svg className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  ),
  ExternalLink: () => (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  ),
  Github: () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  ),
  Linkedin: () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
    </svg>
  ),
  Mail: () => (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  MapPin: () => (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  Cpu: () => (
    <svg className="w-5 h-5 text-sky-550" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 5h10a2 2 0 012 2v10a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2z" />
    </svg>
  ),
  Code: () => (
    <svg className="w-5 h-5 text-indigo-505" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  Database: () => (
    <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
    </svg>
  ),
  Star: () => (
    <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.907c.961 0 1.36 1.242.588 1.81l-3.97 2.883a1 1 0 00-.364 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.971-2.883a1 1 0 00-1.175 0l-3.97 2.883c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.364-1.118l-3.97-2.883c-.772-.568-.372-1.81.588-1.81h4.906a1 1 0 00.95-.69l1.519-4.674z" />
    </svg>
  ),
  Sun: () => (
    <svg className="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 7a5 5 0 100 10 5 5 0 000-10z" />
    </svg>
  ),
  Moon: () => (
    <svg className="w-4 h-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
  ),
};

export default function App() {
  const [activeTab, setActiveTab] = useState<"portfolio" | "ats">("portfolio");
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [consoleInput, setConsoleInput] = useState("");
  const [consoleLogs, setConsoleLogs] = useState<Array<{ type: "input" | "output"; text: string }>>([
    { type: "output", text: "MakizhAI Console v1.2.0 initialized." },
    { type: "output", text: "Type a command or click a prompt helper below to interact." },
  ]);
  const [selectedSkillFilter, setSelectedSkillFilter] = useState<string | null>(null);
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const [copiedContact, setCopiedContact] = useState<string | null>(null);
  
  const consoleBottomRef = useRef<HTMLDivElement>(null);

  // Auto-scroll console
  useEffect(() => {
    consoleBottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [consoleLogs]);

  // Execute console instructions
  const handleCommandExecute = (command: string) => {
    const cleanCmd = command.trim().toLowerCase();
    if (!cleanCmd) return;

    const newLogs = [...consoleLogs, { type: "input" as const, text: command }];

    let response = "";
    if (cleanCmd.startsWith("/help")) {
      response = "Available commands: /about (Overview), /skills (List & Filter stack), /projects (List project highlights), /hire (Why hire Makizh?), /clear (Clear screen)";
    } else if (cleanCmd.startsWith("/about")) {
      response = `N Makizh - AI Product Builder based in Coimbatore, India. Specialize in leveraging advanced prompting workflows, prompt engineering, LLMs, and front-end tools (React.js) to craft rapid, user-centric AI solutions.`;
    } else if (cleanCmd.startsWith("/skills")) {
      response = "Core Skills categories: [AI & Product Building], [Development], [Data & Analytics], [Professional]. Use the chips below to interactive filter skills matrix.";
      setSelectedSkillFilter(null);
    } else if (cleanCmd.startsWith("/projects")) {
      response = `Found 3 production ready builds: 1. SkillVerse (500+ certification discovery platform), 2. Kural (AI content platform), 3. AI Portfolio (This interactive workspace).`;
    } else if (cleanCmd.startsWith("/clear")) {
      setConsoleLogs([]);
      setConsoleInput("");
      return;
    } else if (cleanCmd.includes("hire") || cleanCmd.startsWith("/hire")) {
      response = "Why hire Makizh? Proven ability to build end-to-end MVPs from scratch using AI, high level of prompt accuracy, robust full-stack skill integration, and real-world placement product deployment (serving 500+ paths).";
    } else {
      if (cleanCmd.includes("skill") || cleanCmd.includes("stack")) {
        response = "Skills highlight: Advanced AI Prompt Engineering, LLM Integration, React, Vite, and Data Analytics. You can hover & filter them dynamically in the Bento grid.";
      } else if (cleanCmd.includes("skillverse")) {
        response = "SkillVerse aggregates 500+ certs from Google, Meta, IBM, etc., featuring a placement-ready soft skills simulator with 19 interactive lessons.";
        setExpandedProject("SkillVerse");
      } else if (cleanCmd.includes("kural")) {
        response = "Kural is an AI-powered blog writer designed on React + Vite using HMR for rapid content generation flows.";
        setExpandedProject("KURAL");
      } else if (cleanCmd.includes("contact") || cleanCmd.includes("email") || cleanCmd.includes("reach")) {
        response = `Direct links available! Email: ${resumeData.contact.email} | GitHub: ${resumeData.contact.github} | LinkedIn: ${resumeData.contact.linkedin}`;
      } else {
        response = `System processed: "${command}". I am optimized to build interfaces, code structures, and execute prompt operations. Try clicking one of the recommendation chips below!`;
      }
    }

    setConsoleLogs([...newLogs, { type: "output" as const, text: response }]);
    setConsoleInput("");
  };

  const handlePrint = () => {
    window.print();
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedContact(label);
    setTimeout(() => setCopiedContact(null), 2000);
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      isDarkMode 
        ? "bg-[#05070F] text-slate-200 selection:bg-slate-800 selection:text-amber-200" 
        : "bg-[#F8F9FA] text-slate-800 selection:bg-slate-200 selection:text-slate-900"
    }`}>
      
      {/* Decorative Premium Background Glows */}
      {isDarkMode ? (
        <>
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-900/10 via-slate-900/5 to-transparent blur-[140px] -translate-y-1/2 pointer-events-none" />
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-amber-500/5 via-slate-900/5 to-transparent blur-[120px] pointer-events-none" />
          <div className="absolute bottom-10 left-10 w-[400px] h-[400px] rounded-full bg-blue-950/10 blur-[130px] pointer-events-none" />
        </>
      ) : (
        <>
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-indigo-100/40 via-amber-100/20 to-transparent blur-[120px] -translate-y-1/2 pointer-events-none" />
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-slate-200/50 via-slate-100 to-transparent blur-[100px] pointer-events-none" />
        </>
      )}

      {/* Top Nav Bar */}
      <nav className={`no-print sticky top-0 z-50 transition-colors duration-500 border-b ${
        isDarkMode 
          ? "bg-[#05070F]/80 backdrop-blur-xl border-slate-900" 
          : "bg-white/80 backdrop-blur-xl border-slate-200/80"
      }`}>
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg shadow-xl transition-all ${
              isDarkMode 
                ? "bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 border border-slate-700 text-amber-400" 
                : "bg-gradient-to-br from-slate-100 via-white to-slate-200 border border-slate-200 text-slate-800"
            }`}>
              M
            </div>
            <div>
              <p className={`font-bold text-sm md:text-base leading-tight tracking-wide transition-colors ${
                isDarkMode ? "text-slate-100" : "text-slate-950"
              }`}>N Makizh</p>
              <p className="text-xs text-amber-600 dark:text-amber-500 font-semibold tracking-wider uppercase">AI Product Builder</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 md:gap-4">
            
            {/* Theme Toggle Button */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2.5 rounded-xl border transition-all duration-300 flex items-center justify-center cursor-pointer ${
                isDarkMode 
                  ? "bg-slate-950 border-slate-900 hover:bg-slate-900 text-amber-400" 
                  : "bg-white border-slate-200 hover:bg-slate-50 text-indigo-600 shadow-sm"
              }`}
              title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDarkMode ? <Icons.Sun /> : <Icons.Moon />}
            </button>

            <div className={`flex rounded-xl p-1 border transition-colors ${
              isDarkMode ? "bg-slate-950 border-slate-900" : "bg-slate-100 border-slate-200"
            }`}>
              <button
                onClick={() => setActiveTab("portfolio")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 cursor-pointer ${
                  activeTab === "portfolio"
                    ? isDarkMode 
                      ? "bg-slate-850 text-amber-400 border border-slate-700 shadow-lg"
                      : "bg-white text-slate-950 border border-slate-200/50 shadow-sm"
                    : "text-slate-500 hover:text-slate-350"
                }`}
              >
                Interactive
              </button>
              <button
                onClick={() => setActiveTab("ats")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 cursor-pointer ${
                  activeTab === "ats"
                    ? isDarkMode 
                      ? "bg-slate-850 text-amber-400 border border-slate-700 shadow-lg"
                      : "bg-white text-slate-950 border border-slate-200/50 shadow-sm"
                    : "text-slate-500 hover:text-slate-305"
                }`}
              >
                ATS Plaintext
              </button>
            </div>

            <button
              onClick={handlePrint}
              className={`flex items-center gap-2 px-3.5 py-2 border rounded-xl text-xs font-bold transition-all duration-200 active:scale-95 cursor-pointer ${
                isDarkMode 
                  ? "bg-slate-950 border-slate-900 text-slate-300 hover:bg-slate-900 hover:text-slate-100" 
                  : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-slate-900 shadow-sm"
              }`}
            >
              <svg className="w-3.5 h-3.5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              PDF Resume
            </button>
          </div>
        </div>
      </nav>

      {activeTab === "portfolio" ? (
        <main className="max-w-6xl mx-auto px-4 md:px-6 py-8 space-y-12">
          
          {/* HERO SECTION WITH IMAGE & TITLE */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left intro panel with Image */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
              
              {/* Profile Card Header */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <img
                  src={profileImg}
                  alt={resumeData.name}
                  className={`w-32 h-44 sm:w-36 sm:h-52 rounded-2xl object-cover object-center border-2 shadow-2xl transition-all duration-300 ${
                    isDarkMode ? "border-slate-800 shadow-slate-950" : "border-slate-250 shadow-slate-200"
                  }`}
                />
                <div className="flex flex-col items-center sm:items-start text-center sm:text-left justify-center pt-2">
                  <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-[10px] font-bold uppercase tracking-widest w-fit transition-colors ${
                    isDarkMode 
                      ? "bg-slate-900/80 border-slate-800 text-amber-400/90" 
                      : "bg-slate-100 border-slate-200 text-slate-700"
                  }`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                    Available for Roles & Projects
                  </div>
                  <h1 className={`text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1] mt-3.5 ${
                    isDarkMode 
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-slate-250 to-slate-400" 
                      : "text-slate-900"
                  }`}>
                    Hi, I'm <span className={`text-transparent bg-clip-text bg-gradient-to-r ${
                      isDarkMode ? "from-slate-100 via-amber-200 to-amber-500" : "from-slate-905 via-amber-600 to-amber-700"
                    }`}>{resumeData.name}</span>
                  </h1>
                </div>
              </div>
              
              <p className={`text-lg md:text-xl font-bold tracking-wide transition-colors ${
                isDarkMode ? "text-slate-300" : "text-slate-700"
              }`}>
                {resumeData.title}
              </p>
              
              <p className={`text-sm md:text-base leading-relaxed max-w-xl font-light transition-colors ${
                isDarkMode ? "text-slate-400" : "text-slate-605"
              }`}>
                {resumeData.tagline}. I craft optimized prompt structures, customize multi-agent setups, and integrate modern frameworks to turn raw product ideations into fully deployable MVPs.
              </p>

              {/* Social Contacts */}
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={`https://${resumeData.contact.github}`}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-xs font-bold transition-all ${
                    isDarkMode 
                      ? "bg-slate-950 border-slate-900 hover:border-slate-800 text-slate-350 hover:text-slate-100" 
                      : "bg-white border-slate-200 hover:border-slate-300 text-slate-700 hover:text-slate-900 shadow-sm"
                  }`}
                >
                  <Icons.Github />
                  GitHub
                </a>
                <a
                  href={`https://${resumeData.contact.linkedin}`}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-xs font-bold transition-all ${
                    isDarkMode 
                      ? "bg-slate-950 border-slate-900 hover:border-slate-800 text-slate-350 hover:text-slate-100" 
                      : "bg-white border-slate-200 hover:border-slate-300 text-slate-700 hover:text-slate-900 shadow-sm"
                  }`}
                >
                  <Icons.Linkedin />
                  LinkedIn
                </a>
                <button
                  onClick={() => copyToClipboard(resumeData.contact.email, "email")}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer animate-pulse ${
                    isDarkMode 
                      ? "bg-slate-950 border-slate-900 text-slate-350 hover:text-slate-100" 
                      : "bg-white border-slate-200 text-slate-700 hover:text-slate-900 shadow-sm"
                  }`}
                >
                  <Icons.Mail />
                  {copiedContact === "email" ? "Copied!" : "Email Link"}
                </button>
                <div className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl border text-xs font-medium ${
                  isDarkMode ? "bg-slate-950/40 border-slate-900/50 text-slate-400" : "bg-slate-100/40 border-slate-250/50 text-slate-650"
                }`}>
                  <Icons.MapPin />
                  {resumeData.contact.location}
                </div>
              </div>
            </div>

            {/* Right: AI Interactive Console */}
            <div className={`lg:col-span-5 flex flex-col rounded-2xl border shadow-2xl overflow-hidden min-h-[340px] transition-colors ${
              isDarkMode ? "bg-slate-950 border-slate-900" : "bg-white border-slate-200"
            }`}>
              {/* Console Header */}
              <div className={`px-4 py-3 border-b flex items-center justify-between transition-colors ${
                isDarkMode ? "bg-slate-900/40 border-slate-900" : "bg-slate-50 border-slate-200"
              }`}>
                <div className="flex items-center gap-2">
                  <Icons.Terminal />
                  <span className={`text-xs font-mono font-bold transition-colors ${
                    isDarkMode ? "text-slate-300" : "text-slate-700"
                  }`}>makizh-terminal // prompt_engine</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-800/80 hover:bg-slate-700" />
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-800/80 hover:bg-slate-700" />
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-800/80 hover:bg-slate-700" />
                </div>
              </div>

              {/* Console Output Area */}
              <div className="flex-1 p-4 font-mono text-[11px] overflow-y-auto space-y-3 max-h-[220px] scrollbar-thin">
                {consoleLogs.map((log, index) => (
                  <div key={index} className={log.type === "input" ? (isDarkMode ? "text-slate-300" : "text-slate-750") : "text-amber-550"}>
                    {log.type === "input" ? (
                      <p>
                        <span className={isDarkMode ? "text-slate-600" : "text-slate-400"}>user@makizh:~$</span> {log.text}
                      </p>
                    ) : (
                      <p className="whitespace-pre-wrap leading-relaxed">
                        <span className="text-amber-500/85">➜</span> {log.text}
                      </p>
                    )}
                  </div>
                ))}
                <div ref={consoleBottomRef} />
              </div>

              {/* Suggestions / Prompt helpers */}
              <div className={`px-4 py-2 border-t flex flex-wrap gap-1.5 transition-colors ${
                isDarkMode ? "border-slate-900 bg-[#05070F]/50" : "border-slate-200 bg-slate-50/50"
              }`}>
                {["/about", "/skills", "/projects", "/hire", "/clear"].map((cmd) => (
                  <button
                    key={cmd}
                    onClick={() => handleCommandExecute(cmd)}
                    className={`px-2.5 py-1 rounded-lg border text-[10px] font-mono transition-all cursor-pointer ${
                      isDarkMode 
                        ? "bg-slate-950 border-slate-900 text-slate-400 hover:text-slate-200" 
                        : "bg-white border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900 shadow-sm"
                    }`}
                  >
                    {cmd}
                  </button>
                ))}
              </div>

              {/* Console Input Bar */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleCommandExecute(consoleInput);
                }}
                className={`px-4 py-2.5 flex items-center gap-2 border-t transition-colors ${
                  isDarkMode ? "bg-slate-900/60 border-slate-900" : "bg-slate-50 border-slate-200"
                }`}
              >
                <span className="font-mono text-xs text-amber-500 font-bold">$</span>
                <input
                  type="text"
                  value={consoleInput}
                  onChange={(e) => setConsoleInput(e.target.value)}
                  placeholder="Ask a question or type /help..."
                  className={`flex-1 bg-transparent border-0 outline-none text-xs font-mono placeholder-slate-600 focus:ring-0 ${
                    isDarkMode ? "text-slate-200" : "text-slate-800"
                  }`}
                />
                <button
                  type="submit"
                  className={`text-[10px] font-mono font-bold border px-3 py-1 rounded-lg transition-colors cursor-pointer ${
                    isDarkMode 
                      ? "bg-slate-800 hover:bg-slate-700 border-slate-700 text-amber-400" 
                      : "bg-white hover:bg-slate-150 border-slate-200 text-slate-850 shadow-sm"
                  }`}
                >
                  EXEC
                </button>
              </form>
            </div>
          </section>

          {/* DYNAMIC BENTO GRID LAYOUT */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Bento Block 1: About Summary */}
            <div className={`md:col-span-2 backdrop-blur-md rounded-3xl p-6 md:p-8 border flex flex-col justify-between transition-all duration-300 relative overflow-hidden group ${
              isDarkMode ? "bg-slate-900/20 border-slate-900 hover:border-slate-800" : "bg-white border-slate-200 hover:border-slate-300 shadow-sm"
            }`}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl group-hover:bg-amber-500/10 transition-all" />
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-lg border flex items-center justify-center transition-colors ${
                    isDarkMode ? "bg-slate-800 border-slate-700" : "bg-slate-100 border-slate-200"
                  }`}>
                    <span className="text-sm text-amber-500">✨</span>
                  </div>
                  <h2 className={`text-xs font-bold uppercase tracking-widest transition-colors ${
                    isDarkMode ? "text-slate-400" : "text-slate-500"
                  }`}>Professional Summary</h2>
                </div>
                <p className={`text-sm md:text-base leading-relaxed font-light transition-colors ${
                  isDarkMode ? "text-slate-350" : "text-slate-650"
                }`}>
                  {resumeData.summary}
                </p>
              </div>
              <div className={`flex items-center gap-6 mt-8 border-t pt-6 transition-colors ${
                isDarkMode ? "border-slate-900/60" : "border-slate-200/60"
              }`}>
                {[{ count: "500+", label: "Certs Aggregated" }, { count: "19+", label: "Interactive Lessons" }, { count: "100%", label: "AI Tool Driven" }].map((stat, i) => (
                  <div key={i}>
                    <p className={`text-2xl font-extrabold ${isDarkMode ? "text-slate-100" : "text-slate-900"}`}>{stat.count}</p>
                    <p className="text-[10px] text-amber-600 dark:text-amber-550 uppercase tracking-widest font-semibold mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bento Block 2: Quick Links */}
            <div className={`backdrop-blur-md rounded-3xl p-6 border flex flex-col justify-between transition-all duration-300 ${
              isDarkMode ? "bg-slate-900/20 border-slate-900 hover:border-slate-800" : "bg-white border-slate-200 hover:border-slate-300 shadow-sm"
            }`}>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-lg border flex items-center justify-center transition-colors ${
                    isDarkMode ? "bg-slate-800 border-slate-700" : "bg-slate-100 border-slate-200"
                  }`}>
                    <span className="text-sm text-amber-500">🔗</span>
                  </div>
                  <h2 className={`text-xs font-bold uppercase tracking-widest transition-colors ${
                    isDarkMode ? "text-slate-400" : "text-slate-500"
                  }`}>Featured Links</h2>
                </div>
                <div className="space-y-2 pt-2">
                  {[
                    {
                      label: "SkillVerse Live",
                      url: "https://skill-verse-1.vercel.app",
                      color: isDarkMode 
                        ? "from-slate-900/40 to-slate-950/40 border-slate-800 text-amber-400 hover:border-amber-500/40"
                        : "from-slate-50 to-slate-100 border-slate-200 text-slate-850 hover:border-slate-300 hover:bg-slate-200/50",
                    },
                    {
                      label: "Portfolio Domain",
                      url: "https://makizh.vercel.app",
                      color: isDarkMode 
                        ? "from-slate-900/40 to-slate-950/40 border-slate-800 text-amber-400 hover:border-amber-500/40"
                        : "from-slate-50 to-slate-100 border-slate-200 text-slate-850 hover:border-slate-300 hover:bg-slate-200/50",
                    },
                    {
                      label: "Code Workspace",
                      url: "https://github.com/makizh-01",
                      color: isDarkMode 
                        ? "from-slate-900/40 to-slate-950/40 border-slate-800 text-amber-400 hover:border-amber-500/40"
                        : "from-slate-50 to-slate-100 border-slate-200 text-slate-850 hover:border-slate-300 hover:bg-slate-200/50",
                    },
                  ].map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className={`flex items-center justify-between p-3 rounded-xl bg-gradient-to-r border transition-all duration-200 hover:scale-[1.02] ${link.color}`}
                    >
                      <span className="text-xs font-bold">{link.label}</span>
                      <Icons.ExternalLink />
                    </a>
                  ))}
                </div>
              </div>
              <div className={`mt-6 pt-4 border-t flex items-center justify-between transition-colors ${
                isDarkMode ? "border-slate-900/60" : "border-slate-200/60"
              }`}>
                <span className="text-xs text-slate-550">Resume Status:</span>
                <span className={`text-xs font-bold border px-2 py-0.5 rounded-full flex items-center gap-1.5 transition-colors ${
                  isDarkMode 
                    ? "text-amber-400 bg-slate-900/60 border-slate-800" 
                    : "text-amber-800 bg-amber-50 border-amber-200/80"
                }`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                  Active
                </span>
              </div>
            </div>
          </div>

          {/* SECTION: SKILLS WITH DYNAMIC MATRIX INTERACTION */}
          <section className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <h2 className="text-2xl font-extrabold tracking-tight">Interactive Skill Matrix</h2>
                <p className="text-xs text-slate-500">Click a category or chip to highlight matching items</p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                <button
                  onClick={() => setSelectedSkillFilter(null)}
                  className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer border ${
                    selectedSkillFilter === null
                      ? isDarkMode 
                        ? "bg-slate-850 border-amber-500/50 text-amber-400 shadow-md"
                        : "bg-slate-800 border-slate-700 text-white shadow-md shadow-slate-200"
                      : isDarkMode
                      ? "bg-slate-950 border-slate-900 text-slate-400 hover:text-slate-200"
                      : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  All Skills
                </button>
                {Object.keys(resumeData.skills).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedSkillFilter(cat)}
                    className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer border ${
                      selectedSkillFilter === cat
                        ? isDarkMode 
                          ? "bg-slate-850 border-amber-500/50 text-amber-400 shadow-md"
                          : "bg-slate-800 border-slate-700 text-white shadow-md shadow-slate-200"
                        : isDarkMode
                        ? "bg-slate-950 border-slate-900 text-slate-400 hover:text-slate-200"
                        : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.entries(resumeData.skills).map(([category, skills]) => {
                const isSelected = selectedSkillFilter === null || selectedSkillFilter === category;
                return (
                  <div
                    key={category}
                    className={`backdrop-blur-md rounded-2xl p-5 border transition-all duration-300 ${
                      isSelected
                        ? isDarkMode 
                          ? "bg-slate-900/10 border-slate-800 opacity-100 scale-100 shadow-lg" 
                          : "bg-white border-slate-250 opacity-100 scale-100 shadow-md"
                        : isDarkMode
                        ? "bg-slate-900/5 border-slate-900/40 opacity-40 scale-[0.98]"
                        : "bg-slate-50/50 border-slate-200/50 opacity-30 scale-[0.98]"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      {category === "AI & Product Building" && <Icons.Star />}
                      {category === "Development" && <Icons.Code />}
                      {category === "Data & Analytics" && <Icons.Database />}
                      {category === "Professional" && <Icons.Cpu />}
                      <h3 className={`font-bold text-xs tracking-wider uppercase transition-colors ${
                        isDarkMode ? "text-slate-200" : "text-slate-700"
                      }`}>{category}</h3>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {skills.map((skill) => (
                        <span
                          key={skill}
                          className={`px-2.5 py-1 rounded-lg text-xs font-medium border transition-all duration-200 ${
                            isDarkMode 
                              ? "bg-slate-950/80 border-slate-900 hover:border-amber-500/40 hover:text-amber-400 text-slate-300" 
                              : "bg-slate-50 border-slate-200 hover:border-amber-500/40 hover:text-amber-705 hover:bg-amber-50/20 text-slate-650"
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* PROJECTS */}
          <section className="space-y-6">
            <div className="space-y-1">
              <h2 className="text-2xl font-extrabold tracking-tight">AI & Full-Stack Projects</h2>
              <p className="text-xs text-slate-500">Toggle expansion cards to view code highlights and architecture deep-dives</p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {resumeData.projects.map((project) => {
                const isExpanded = expandedProject === project.name;
                return (
                  <div
                    key={project.name}
                    className={`backdrop-blur-md rounded-3xl border transition-all duration-300 overflow-hidden ${
                      isExpanded
                        ? isDarkMode ? "bg-slate-900/10 border-slate-800 shadow-xl" : "bg-white border-slate-300 shadow-lg"
                        : isDarkMode ? "bg-slate-900/10 border-slate-900 hover:border-slate-800" : "bg-white border-slate-200 hover:border-slate-250 shadow-sm"
                    }`}
                  >
                    <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
                      
                      {/* Left: Info */}
                      <div className="space-y-2 flex-1">
                        <div className="flex items-center gap-3 flex-wrap">
                          <h3 className="text-xl font-bold">{project.name}</h3>
                          
                          <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase border transition-colors ${
                            isDarkMode 
                              ? "border-slate-800 bg-slate-900 text-amber-400" 
                              : "border-amber-250 bg-amber-50/80 text-amber-800"
                          }`}>
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                            {project.impact}
                          </span>
                        </div>
                        
                        <p className="text-amber-600 dark:text-amber-500 text-xs md:text-sm font-semibold tracking-wide">{project.tagline}</p>
                        
                        <p className={`text-sm leading-relaxed max-w-3xl pt-2 font-light transition-colors ${
                          isDarkMode ? "text-slate-350" : "text-slate-650"
                        }`}>
                          {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-1.5 pt-3">
                          {project.tech.map((t) => (
                            <span
                              key={t}
                              className={`px-2.5 py-0.5 rounded-md text-[10px] font-bold font-mono tracking-tight border transition-colors ${
                                isDarkMode 
                                  ? "bg-slate-950 text-slate-400 border-slate-900" 
                                  : "bg-slate-50 text-slate-650 border-slate-200"
                              }`}
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Right: Actions */}
                      <div className="flex flex-row md:flex-col items-center md:items-end gap-3 min-w-fit">
                        <div className="flex items-center gap-2">
                          {project.link !== "#" && (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noreferrer"
                              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                                isDarkMode 
                                  ? "bg-slate-800 hover:bg-slate-700 border-slate-700 text-amber-400" 
                                  : "bg-slate-900 hover:bg-slate-850 border-slate-900 text-white shadow-sm"
                              }`}
                            >
                              Live App
                              <Icons.ExternalLink />
                            </a>
                          )}
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                              isDarkMode 
                                ? "bg-slate-950 border-slate-900 text-slate-305 hover:border-slate-800" 
                                : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50 shadow-sm"
                            }`}
                          >
                            Code
                            <Icons.Github />
                          </a>
                        </div>

                        <button
                          onClick={() => setExpandedProject(isExpanded ? null : project.name)}
                          className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                            isDarkMode 
                              ? "bg-slate-900 border-slate-900 text-slate-400 hover:bg-slate-850" 
                              : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100 shadow-sm"
                          }`}
                        >
                          {isExpanded ? "Collapse Details ▲" : "View Highlights ▼"}
                        </button>
                      </div>
                    </div>

                    {/* Expandable highlights */}
                    {isExpanded && (
                      <div className={`border-t px-6 md:px-8 py-6 space-y-4 transition-colors ${
                        isDarkMode ? "bg-slate-950/60 border-slate-900" : "bg-slate-50/50 border-slate-200"
                      }`}>
                        <p className="text-xs uppercase tracking-widest font-bold text-slate-400">Key Execution Details</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {project.highlights.map((h, i) => (
                            <div key={i} className={`flex gap-2.5 items-start p-3 rounded-xl border transition-colors ${
                              isDarkMode ? "bg-slate-900/40 border-slate-900" : "bg-white border-slate-150 shadow-sm"
                            }`}>
                              <span className="text-amber-500 font-bold mt-0.5">▸</span>
                              <span className={`text-xs leading-relaxed font-light transition-colors ${
                                isDarkMode ? "text-slate-300" : "text-slate-700"
                              }`}>{h}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                  </div>
                );
              })}
            </div>
          </section>

          {/* TWO COLUMN DETAILS: EDUCATION & TIMELINE */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Timeline */}
            <div className="lg:col-span-8 space-y-6">
              <h2 className="text-2xl font-extrabold tracking-tight">Academic Background</h2>
              
              <div className={`space-y-6 relative before:absolute before:left-3.5 before:top-2 before:bottom-2 before:w-[2px] transition-colors ${
                isDarkMode ? "before:bg-slate-900" : "before:bg-slate-200"
              }`}>
                {resumeData.education.map((edu, i) => (
                  <div key={i} className="relative pl-10 group">
                    <div className={`absolute left-1.5 top-1.5 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors duration-300 ${
                      i === 0
                        ? "border-amber-500/80 bg-current text-amber-550"
                        : isDarkMode ? "border-slate-800 bg-[#05070F] text-slate-750" : "border-slate-200 bg-white text-slate-400"
                    }`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-current" />
                    </div>
                    
                    <div className={`rounded-2xl p-5 border transition-all ${
                      isDarkMode 
                        ? "bg-slate-900/20 border-slate-900 group-hover:border-slate-800" 
                        : "bg-white border-slate-200 group-hover:border-slate-350 shadow-sm"
                    }`}>
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div>
                          <h3 className={`font-bold text-sm md:text-base leading-tight ${isDarkMode ? "text-slate-100" : "text-slate-900"}`}>{edu.degree}</h3>
                          <p className={`text-xs mt-1 transition-colors ${isDarkMode ? "text-slate-400" : "text-slate-650"}`}>
                            {edu.institution} · <span className="italic opacity-80">{edu.location}</span>
                          </p>
                        </div>
                        <span className={`text-[10px] md:text-xs font-bold border px-2.5 py-0.5 rounded-full ${
                          isDarkMode ? "text-amber-400 bg-slate-950 border-slate-905" : "text-amber-800 bg-amber-50 border-amber-200/80"
                        }`}>
                          {edu.period}
                        </span>
                      </div>
                      {edu.highlight && (
                        <p className={`text-xs mt-3 flex items-center gap-1.5 font-light ${isDarkMode ? "text-slate-400" : "text-slate-650"}`}>
                          <span className="w-1 h-1 rounded-full bg-amber-550" />
                          {edu.highlight}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right details */}
            <div className="lg:col-span-4 space-y-8">
              
              {/* Credentials */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold tracking-tight">Credentials</h2>
                <div className="space-y-3">
                  {resumeData.certifications.map((cert, i) => (
                    <div
                      key={i}
                      className={`flex items-center gap-3.5 p-4 rounded-2xl border transition-all ${
                        isDarkMode 
                          ? "bg-gradient-to-r from-slate-900/40 to-slate-900/10 border-slate-900 hover:border-slate-800" 
                          : "bg-white border-slate-200 hover:border-slate-300 shadow-sm"
                      }`}
                    >
                      <span className="text-2xl">{cert.icon}</span>
                      <div>
                        <p className="text-xs font-bold leading-tight">{cert.name}</p>
                        <p className="text-[10px] text-slate-505 mt-1">{cert.issuer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold tracking-tight">Languages</h2>
                <div className={`rounded-2xl p-4 border space-y-2.5 transition-colors ${
                  isDarkMode ? "bg-slate-900/10 border-slate-900" : "bg-white border-slate-200 shadow-sm"
                }`}>
                  {resumeData.languages.map((lang) => (
                    <div
                      key={lang.name}
                      className={`flex items-center justify-between py-1.5 border-b last:border-0 transition-colors ${
                        isDarkMode ? "border-slate-900" : "border-slate-100"
                      }`}
                    >
                      <span className="text-xs font-bold">{lang.name}</span>
                      <span className={`text-[10px] border px-2.5 py-0.5 rounded-full ${
                        isDarkMode ? "text-slate-400 bg-slate-950 border-slate-900" : "text-slate-650 bg-slate-50 border-slate-200"
                      }`}>
                        {lang.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Scope of Work */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold tracking-tight">Scope of Work</h2>
                <div className={`border rounded-2xl p-4 space-y-2 transition-all ${
                  isDarkMode ? "bg-slate-950 border-slate-900" : "bg-white border-slate-200 shadow-sm"
                }`}>
                  {[
                    { icon: "🤖", text: "AI-Powered Web Applications" },
                    { icon: "⚡", text: "Custom Prompt Architecture" },
                    { icon: "🛠️", text: "Interactive Mockups & MVPs" },
                    { icon: "📊", text: "Data Analysis & Insight Reporting" },
                    { icon: "🚀", text: "Deployments on Vercel/Netlify" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2.5 text-xs">
                      <span className="text-sm">{item.icon}</span>
                      <span className={`font-bold transition-colors ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </main>
      ) : (
        /* ATS Mode */
        <div className="max-w-4xl mx-auto px-4 md:px-6 py-8">
          <div className={`rounded-2xl border overflow-hidden shadow-2xl transition-colors ${
            isDarkMode ? "bg-slate-950 border-slate-900" : "bg-white border-slate-200"
          }`}>
            <div className={`px-6 py-4 flex items-center justify-between border-b transition-colors ${
              isDarkMode ? "bg-slate-900 border-slate-800" : "bg-slate-100 border-slate-200"
            }`}>
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center border transition-colors ${
                  isDarkMode ? "bg-slate-850 border-slate-800 text-amber-400" : "bg-white border-slate-200 text-slate-850"
                }`}>
                  ⌘
                </div>
                <div>
                  <h2 className="font-bold text-sm">ATS Optimized Plaintext Mode</h2>
                  <p className="text-slate-500 text-[10px]">Pure plaintext block designed for parsers & scrapers</p>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(
                  `N MAKIZH\nAI Product Builder\nEmail: ${resumeData.contact.email}\nPortfolio: ${resumeData.contact.portfolio}\nGitHub: ${resumeData.contact.github}\nLinkedIn: ${resumeData.contact.linkedin}\n\nSUMMARY:\n${resumeData.summary}`,
                  "ats"
                )}
                className={`px-3 py-1.5 rounded-lg border text-xs font-bold transition-all cursor-pointer ${
                  isDarkMode 
                    ? "bg-slate-800 border-slate-700 text-amber-400 hover:bg-slate-750" 
                    : "bg-slate-900 border-slate-900 text-white hover:bg-slate-800 shadow-sm"
                }`}
              >
                {copiedContact === "ats" ? "Copied!" : "Copy Full Text"}
              </button>
            </div>
            
            <div className={`p-6 md:p-8 font-mono text-[11px] leading-relaxed whitespace-pre-wrap overflow-x-auto transition-colors ${
              isDarkMode ? "bg-slate-900/10 text-slate-300" : "bg-slate-50/50 text-slate-750"
            }`}>
{`N MAKIZH
AI Product Builder
Coimbatore, India

Email: makizhprema27@gmail.com
LinkedIn: linkedin.com/in/makizh-n
GitHub: github.com/makizh-01
Portfolio: makizh.vercel.app

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PROFESSIONAL SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Innovative AI Product Builder and Computer Science undergraduate specializing in Data Analytics, with a demonstrated ability to design, build, and deploy AI-powered products from concept to production. Proficient in crafting optimized prompts across leading AI platforms to accelerate development cycles and solve real-world user challenges. Passionate about democratizing learning through technology — with hands-on project experience serving learners across multiple domains.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SKILLS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
AI & Product Building: AI Prompting (Advanced), Prompt Engineering, LLM Integration, AI Tool Orchestration, Product Ideation & MVP, ChatGPT, Claude, Gemini
Development: React.js, JavaScript (ES6+), HTML5, CSS3, Vite, Responsive Design, Git, GitHub
Data & Analytics: Data Analytics, Problem Solving, Research & Insights, AI-Assisted Analysis
Professional: Leadership, Communication, Teamwork, Adaptability, Time Management, Critical Thinking

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PROJECTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SKILLVERSE — Free Certification Discovery & Skill Simulation Platform
Live: https://skill-verse-1.vercel.app | GitHub: https://github.com/makizh-01/Skill-Verse
Tech: HTML5, CSS3, JavaScript, AI Prompting, Responsive Design

- Designed and developed a full-featured web platform aggregating 500+ free certification courses from top-tier companies including Google, Microsoft, AWS, IBM, Meta, and 20+ others.
- Built interactive Skill Simulator with 19 real-world placement training modules covering soft skills, communication, and interview preparation.
- Implemented course bookmarking, search/filter system, and detailed course preview functionality.
- Deployed to production on Vercel with continuous deployment pipeline.
- Curated 500+ free courses across 12+ domains from 20+ Fortune-500 companies.

KURAL — AI-Powered Blog Writing Platform
GitHub: https://github.com/makizh-01/KURAL
Tech: React.js, Vite, JavaScript, AI Integration, HMR

- Engineered a modern blog writing platform using React and Vite.
- Implemented AI-assisted content creation workflows using optimized prompts.
- Built component-based architecture enabling scalable and maintainable codebase.
- Integrated ESLint for code quality enforcement.

PERSONAL PORTFOLIO — makizh.vercel.app
Live: https://makizh.vercel.app
Tech: Web Technologies, AI Tools, Vercel

- Designed and deployed professional portfolio website showcasing AI product projects.
- Fully responsive design deployed on Vercel with custom domain.
- Showcases AI chatbot projects and security-focused tools built for real users.
- Demonstrates end-to-end product lifecycle from ideation to deployment.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
EDUCATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Bachelor of Computer Science with Data Analytics
Sankara College of Science and Commerce, Coimbatore, India | 2024 – Present
Specialization: AI, Data Analytics & Full-Stack Development

Higher Secondary Certificate (HSC)
Holy Angels Matric Hr. Sec School, Coimbatore, India | Jun 2023

Secondary School Leaving Certificate (SSLC)
LEF Christian Matric School, Coimbatore, India | Jun 2021

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CERTIFICATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Certified in Usage of AI Tools (Verified Certification)
- Certified in Specific Completion of ChatGPT (OpenAI)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
LANGUAGES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
English: Professional Proficiency
Tamil: Native`}
            </div>
          </div>
        </div>
      )}

      {/* Modern Professional Footer */}
      <footer className={`border-t py-8 no-print transition-colors ${
        isDarkMode ? "border-slate-900 bg-slate-950" : "border-slate-200 bg-slate-100"
      }`}>
        <div className="max-w-6xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} N Makizh. Built using React, TailwindCSS, & Optimized Prompting.</p>
          <div className="flex gap-4 text-[10px] font-bold uppercase tracking-wider">
            <span className="text-amber-600 dark:text-amber-500/80 hover:text-amber-700 transition-colors">makizhprema27@gmail.com</span>
            <span>·</span>
            <span className="text-slate-400">Coimbatore, India</span>
          </div>
        </div>
      </footer>

      {/* Styled print block injection */}
      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { 
            background: white !important; 
            color: black !important;
            font-family: Arial, sans-serif !important;
          }
          @page { margin: 0.5in; }
        }
      `}</style>
    </div>
  );
}
