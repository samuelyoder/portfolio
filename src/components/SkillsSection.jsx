import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Bug, Shield, Cloud, Network, Code, Brain, Globe, Wrench } from 'lucide-react';

const categories = [
    // Security Research
    {
        id: "security",
        name: "Security Research",
        description: "Vulnerability discovery, exploit analysis, and application security.",
        Icon: Bug,
        skills: [
            "Vulnerability Research", "Coverage-Guided Fuzzing", "libFuzzer",
            "Memory Safety", "AddressSanitizer (ASan)", "UndefinedBehaviorSanitizer (UBSan)",
            "GDB", "Ghidra", "pwntools", "Burp Suite", "Binary Exploitation",
            "Reverse Engineering", "Web Application Security", "Privilege Escalation",
            "Threat Modeling", "Syscall Tracing", "strace", "Coordinated Vulnerability Disclosure",
        ],
    },
    // Detection & Defense
    {
        id: "detection",
        name: "Detection & Defense",
        description: "Security monitoring, detection rules, and evidence-based validation.",
        Icon: Shield,
        skills: [
            "Detection Engineering", "SIEM Development", "Sigma Rules", "Sysmon",
            "Winlogbeat", "Elasticsearch", "Kibana", "MITRE ATT&CK", "EQL",
            "Windows Event Logs (EVTX)", "Attack Simulation Replay",
            "False Positive Analysis", "Detection Validation",
        ],
    },
    // Systems & Cloud
    {
        id: "systems",
        name: "Systems & Cloud",
        description: "Operating systems, cloud infrastructure, and deployment tooling.",
        Icon: Cloud,
        skills: [
            "Linux", "WSL2", "Docker", "Terraform", "AWS EC2", "AWS Lambda",
            "AWS IAM", "Kubernetes", "Nginx", "QEMU/KVM", "GitLab",
            "Cloud Infrastructure", "POSIX Systems", "Python Automation",
        ],
    },
    // Networking
    {
        id: "networking",
        name: "Networking",
        description: "Protocols, traffic analysis, and network configuration.",
        Icon: Network,
        skills: [
            "Network Security", "TCP/IP", "Packet Analysis", "iptables", "NAT",
            "Firewalls", "Reverse Proxies", "Network Isolation", "Linux Networking",
            "Wi-Fi Troubleshooting",
        ],
    },
    // Programming
    {
        id: "programming",
        name: "Programming",
        description: "Languages used in security research, systems, and application projects.",
        Icon: Code,
        skills: [
            "Python", "C", "C++", "C#", "Java", "JavaScript", "SQL", "Bash",
            "x86-64 Assembly", "MIPS Assembly", "HTML", "CSS",
        ],
    },
    // AI / ML
    {
        id: "ai",
        name: "AI / ML",
        description: "Model development, evaluation, and applied machine learning.",
        Icon: Brain,
        skills: [
            "PyTorch", "TensorFlow", "Keras", "Hugging Face Transformers", "BERT",
            "Natural Language Processing", "Convolutional Neural Networks",
            "XGBoost", "Scikit-learn", "Reinforcement Learning", "Model Training",
            "Model Evaluation", "Data Preprocessing",
        ],
    },
    // Web & Applications
    {
        id: "web",
        name: "Web & Applications",
        description: "Full-stack development, APIs, databases, and secure application design.",
        Icon: Globe,
        skills: [
            "Flask", "SQLite", "React", "Vite", "Tailwind CSS", "REST APIs",
            "API Integrations", "Authentication & Authorization", "Session Security",
            "CSRF Protection", "Salted Password Hashing", ".NET MAUI", "Database Design",
        ],
    },
    // Testing & Engineering
    {
        id: "engineering",
        name: "Testing & Engineering",
        description: "Debugging, reproducibility, documentation, and collaborative development.",
        Icon: Wrench,
        skills: [
            "Root-Cause Analysis", "Issue Reproduction", "Software Debugging",
            "Regression Testing", "Edge-Case Testing", "Software Testing", "Git",
            "GitHub", "Technical Documentation", "MkDocs", "Open-Source Contribution",
            "Code Review", "Rust Style Guide Documentation",
        ],
    },
];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredCategories = categories.filter((category) =>
        activeCategory === "all" || category.id === activeCategory
    );

    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-8xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>
                <p className="text-center text-sm text-muted-foreground mb-12">
                    Technologies and techniques used across coursework, research, and hands-on projects.
                </p>

                {/* Category Filters */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    <button
                        onClick={() => setActiveCategory("all")}
                        aria-pressed={activeCategory === "all"}
                        className={cn(
                            "px-5 py-2 rounded-full transition-colors duration-300 border",
                            activeCategory === "all"
                                ? "bg-primary text-primary-foreground"
                                : "bg-secondary/70 text-foreground hover:bg-secondary"
                        )}
                    >
                        All
                    </button>
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            aria-pressed={activeCategory === category.id}
                            className={cn(
                                "px-5 py-2 rounded-full transition-colors duration-300 border",
                                activeCategory === category.id
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-secondary/70 text-foreground hover:bg-secondary"
                            )}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>

                {/* Skill Categories */}
                <div className={cn(
                    "grid gap-6",
                    activeCategory === "all"
                        ? "grid-cols-1 md:grid-cols-2"
                        : "grid-cols-1 max-w-3xl mx-auto"
                )}>
                    {filteredCategories.map((category) => (
                        <div key={category.id} className="gradient-border p-6 card-hover h-full">
                            <div className="flex items-start gap-4 mb-5">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <category.Icon className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h3 className="font-semibold text-lg">
                                        {category.name}
                                    </h3>
                                    <p className="text-sm text-muted-foreground mt-1">
                                        {category.description}
                                    </p>
                                </div>
                            </div>

                            {/* Skills */}
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1.5 text-sm font-medium border rounded-full bg-secondary/70 text-foreground"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
