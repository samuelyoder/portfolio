import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const skills = [
    // Security
    { name: "Vulnerability Research", level: 4, category: "security" },
    { name: "Fuzzing / libFuzzer",    level: 4, category: "security" },
    { name: "ASan / UBSan",           level: 4, category: "security" },
    { name: "GDB",                    level: 4, category: "security" },
    { name: "pwntools",               level: 3, category: "security" },
    { name: "Binary Exploitation",    level: 3, category: "security" },
    { name: "Memory Safety",          level: 4, category: "security" },
    { name: "Detection Engineering",  level: 4, category: "security" },
    { name: "MITRE ATT&CK",           level: 4, category: "security" },
    { name: "Network Security",       level: 3, category: "security" },
    // Languages
    { name: "C / C++",                level: 5, category: "languages" },
    { name: "Python",                 level: 5, category: "languages" },
    { name: "x86-64 Assembly",        level: 3, category: "languages" },
    { name: "Java",                   level: 4, category: "languages" },
    { name: "SQL",                    level: 4, category: "languages" },
    { name: "JavaScript",             level: 4, category: "languages" },
    { name: "Bash",                   level: 3, category: "languages" },
    // Systems
    { name: "Linux",                  level: 5, category: "systems" },
    { name: "Git",                    level: 4, category: "systems" },
    { name: "Docker",                 level: 3, category: "systems" },
    { name: "WSL2",                   level: 5, category: "systems" },
    // AI / ML
    { name: "PyTorch / Transformers", level: 4, category: "AI / ML" },
    { name: "XGBoost / Scikit-learn", level: 3, category: "AI / ML" },
    { name: "CNNs",                   level: 4, category: "AI / ML" },
    { name: "NLP / BERT",             level: 3, category: "AI / ML" },
    // Web / Tools
    { name: "Flask",                  level: 4, category: "web / tools" },
    { name: "Elasticsearch / Kibana", level: 4, category: "web / tools" },
    { name: "REST APIs",              level: 4, category: "web / tools" },
    { name: "HTML / CSS",             level: 4, category: "web / tools" },
];

const categories = ["all", "security", "languages", "systems", "AI / ML", "web / tools"];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("security");
    const [isDarkMode, setIsDarkMode] = useState(false);

    const filteredSkills = skills.filter((skill) =>
        activeCategory === "all" || skill.category === activeCategory
    );

    useEffect(() => {
        const checkTheme = () =>
            document.documentElement.classList.contains("dark");

        setIsDarkMode(checkTheme());

        const observer = new MutationObserver(() => {
            setIsDarkMode(checkTheme());
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"],
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>
                <p className="text-center text-sm text-muted-foreground mb-12">
                    Rated 1–5 based on hands-on experience.
                </p>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button
                            key={key}
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "px-5 py-2 rounded-full transition-colors duration-300 capitalize border",
                                activeCategory === category
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-secondary/70 text-foreground"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                            </div>
                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div
                                    className={cn(
                                        "h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]",
                                        isDarkMode ? "bg-primary" : "bg-blue-700"
                                    )}
                                    style={{ width: `${skill.level * 20}%` }}
                                />
                            </div>
                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">{skill.level}/5</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
/*
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const skills = [
    { name: "HTML/CSS", level: 4, category: "frontend" },
    { name: "JavaScript", level: 4, category: "frontend" },
    { name: "Flask", level: 4, category: "backend" },
    { name: "Python", level: 5, category: "backend" },
    { name: "C++", level: 5, category: "backend" },
    { name: "C#", level: 5, category: "backend" },
    { name: "Java", level: 4, category: "backend" },
    { name: "SQL / SQLite", level: 4, category: "database" },
    { name: "MIPS Assembly", level: 4, category: "systems" },
    { name: "PyTorch / Transformers", level: 4, category: "ai / ml" },
    { name: "Git", level: 4, category: "tools" },
    { name: "VS Code", level: 5, category: "tools" },
    { name: "Linux", level: 4, category: "systems" },
    { name: ".NET MAUI", level: 3, category: "development" },
    { name: "APIs & Integrations", level: 4, category: "development" },
    { name: "Testing & Debugging", level: 4, category: "development" },
    { name: "Microsoft Excel", level: 3, category: "productivity" },
];

const categories = ["all", "frontend", "backend", "database", "systems", "ai / ml", "tools", "development", "productivity"];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");
    const [isDarkMode, setIsDarkMode] = useState(false);

    const filteredSkills = skills.filter((skill) =>
        activeCategory === "all" || skill.category === activeCategory
    );

    // Detect theme based on <html class="dark">
    useEffect(() => {
        const checkTheme = () =>
            document.documentElement.classList.contains("dark");

        setIsDarkMode(checkTheme());

        const observer = new MutationObserver(() => {
            setIsDarkMode(checkTheme());
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"],
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>
                <p className="text-center text-sm text-muted-foreground mb-12">
                    Rated on a 1–5 scale based on familiarity and hands-on experience.
                </p>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button
                            key={key}
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "px-5 py-2 rounded-full transition-colors duration-300 capitalize border",
                                activeCategory === category
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-secondary/70 text-foreground"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div
                            key={key}
                            className="bg-card p-6 rounded-lg shadow-xs card-hover"
                        >
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                            </div>
                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div
                                    className={cn(
                                        "h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]",
                                        isDarkMode ? "bg-primary" : "bg-blue-700"
                                    )}
                                    style={{ width: `${skill.level * 20}%` }}
                                />
                            </div>
                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">{skill.level}/5</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

*/
