import { ArrowRight, ExternalLink, Github, Lock } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Open-Source Vulnerability Research & Fuzzing",
        description: "Built a coverage-guided fuzzing harness in C++ targeting stable-diffusion.cpp's GGUF model-file parser. Discovered an uncontrolled-allocation vulnerability (CWE-789) — a 32-byte crafted file crashes any application loading attacker-controlled models. Root-caused to two unvalidated length fields, confirmed unreported via OSV/GHSA review, and filed a private coordinated-disclosure advisory with the maintainer.",
        image: `${import.meta.env.BASE_URL}projects/fuzzing.png`,
        tags: ["C++", "libFuzzer", "ASan/UBSan", "GDB", "Vulnerability Research"],
        status: "pending",
        githubUrl: null,
    },
    {
        id: 2,
        title: "Detection Engineering SOC Lab",
        description: "Docker-based Elasticsearch/Kibana SOC lab on WSL2 ingesting live Windows/Sysmon telemetry and 37,364 events from 278 EVTX attack samples. Six MITRE ATT&CK-mapped Sigma rules converted to ECS-aligned EQL and evaluated against 1.79 million public Windows baseline events. Query consistency verified through 24 EQL/DSL document-ID comparisons.",
        image: `${import.meta.env.BASE_URL}projects/soclab.png`,
        tags: ["Elasticsearch", "Kibana", "Sigma", "MITRE ATT&CK", "Detection Engineering"],
        status: "live",
        githubUrl: "https://github.com/DreadPirateSamuel/Sigma-Detection-Lab",
    },
    {
        id: 3,
        title: "Malware Traffic Classifier",
        description: "XGBoost network intrusion classifier trained on the UNSW-NB15 dataset with a Streamlit interface for real-time traffic classification. Features logarithmic transformation, robust scaling, and label encoding. Tuned prediction threshold handles class imbalance between benign and malicious traffic samples.",
        image: `${import.meta.env.BASE_URL}projects/five.png`,
        tags: ["Python", "XGBoost", "Streamlit", "Machine Learning", "Network Security"],
        status: "live",
        githubUrl: "https://github.com/DreadPirateSamuel/Malware-Traffic-Classifier",
    },
    {
        id: 4,
        title: "Linux Kernel Elevator Scheduler",
        description: "Linux kernel module in C implementing a custom elevator scheduling algorithm with custom system calls, kernel-level request queues, and synchronization primitives for concurrent processes. Debugged and tested in a constrained kernel environment where standard tooling is unavailable.",
        image: `${import.meta.env.BASE_URL}projects/kernel.png`,
        tags: ["C", "Linux", "Systems Programming", "Kernel Development", "Concurrency"],
        status: "live",
        githubUrl: null,
    },
    {
        id: 5,
        title: "Secure Flask eCommerce Application",
        description: "Flask/SQLite web application with user authentication, encrypted credential storage, and server-side session handling. Implements secure session management, dynamic tiered pricing logic, and synchronization with external inventory files. Tested across authentication, checkout, and edge-case workflows.",
        image: `${import.meta.env.BASE_URL}projects/two.png`,
        tags: ["Python", "Flask", "SQLite", "Web Security", "Authentication"],
        status: "live",
        githubUrl: "https://github.com/DreadPirateSamuel/eCommerce-Website-Project",
    },
    {
        id: 6,
        title: "DEEP-TAO Astronomical Transient Classification",
        description: "CNN pipeline replicating the DEEP-TAO study to classify transient astronomical events from FITS images. Achieved an F1-score of 0.9438, surpassing the original study's 0.5458, with confusion matrix visualizations and sample image analysis.",
        image: `${import.meta.env.BASE_URL}projects/one.png`,
        tags: ["Python", "TensorFlow", "CNNs", "Deep Learning", "Data Science"],
        status: "live",
        githubUrl: "https://github.com/DreadPirateSamuel/Deep-TAO-Replication",
    },
];

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-8xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary"> Projects</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Security research, detection engineering, and systems projects.
                    More on the way.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover relative">

                            {/* Pending disclosure badge */}
                            {project.status === "pending" && (
                                <div className="absolute top-3 right-3 z-10 flex items-center gap-1 px-2 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium">
                                    <Lock size={11} />
                                    Disclosure In Progress
                                </div>
                            )}

                            <div className="h-48 overflow-hidden rounded-t-lg">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <div className="p-6 rounded-b-lg">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-fg"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-xl font-semibold mb-1">
                                    {project.title}
                                </h3>
                                <p className="text-muted-foreground text-sm mb-4">
                                    {project.description}
                                </p>

                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        {project.githubUrl ? (
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                            >
                                                <Github size={20} />
                                            </a>
                                        ) : project.status === "pending" ? (
                                            <span className="text-xs text-muted-foreground italic">
                                                Repo publishing after fix ships
                                            </span>
                                        ) : (
                                            <span className="text-xs text-muted-foreground italic">
                                                No public repo
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="text-center mt-12">
                <a
                    className="cosmic-button w-fit flex items-center mx-auto gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/DreadPirateSamuel"
                >
                    Check Out My GitHub <ArrowRight size={16} />
                </a>
            </div>
        </section>
    );
};
/*
import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "DEEP-TAO Astronomical Transient Classification",
        description: "A deep learning project replicating the DEEP-TAO study to classify transient astronomical events (e.g., supernovae) using a Convolutional Neural Network on FITS images. Achieved an F1-score of 0.9438, surpassing the original study's 0.5458, with visualizations like confusion matrices and sample images.",
        image: `${import.meta.env.BASE_URL}projects/one.png`,
        tags: ["Python", "TensorFlow", "Deep Learning", "Astronomy", "Data Science"],
        demoUrl: "#",
        githubUrl: "https://github.com/DreadPirateSamuel/Deep-TAO-Replication"
    },
    {
        id: 2,
        title: "eCommerce Simulator",
        description: "A Flask-based web app to simulate an online store with user authentication, CRUD operations, and a dynamic tiered discount system (15%, 10%, 5%) based on purchase history. Features admin/customer interfaces and SQLite database synced with sample data.",
        image: `${import.meta.env.BASE_URL}projects/two.png`,
        tags: ["Backend", "Python", "Flask", "SQLite", "HTML", "Web Development"],
        demoUrl: "#",
        githubUrl: "https://github.com/DreadPirateSamuel/eCommerce-Website-Project"
    },
    {
        id: 3,
        title: "Galaga‑Style Canvas Shooter",
        description: "A fast‑paced, endless 'Galaga'‑inspired shooter built with vanilla ES6 JavaScript and HTML5 Canvas. Features a responsive full‑screen canvas, turbo‑start speeds, 3 lives, and 100 levels of escalating difficulty. Encounter four distinct enemy types (normal, fast, big, zigzag) with unique movement patterns each wave. Controls: ←/→ to move, Space to shoot, R to restart.",
        image: `${import.meta.env.BASE_URL}projects/three.png`,
        tags: ["JavaScript", "HTML5 Canvas", "Game Development", "ES6"],
        demoUrl: "#",
        githubUrl: "https://github.com/DreadPirateSamuel/galaga"
    },
    {
        id: 4,
        title: "Voice-Controlled Personal Assistant",
        description: "A simpple Python-based personal assistant for software developers, supporting voice and text input with hotword detection ('Hey Assistant'). Features include opening developer tools (VS Code, Git Bash), running Git commands, managing Python virtual environments, launching servers (Flask, Django, Jupyter), sending emails via Gmail SMTP, controlling TunnelBear VPN, file management, and unit conversions.",
        image: `${import.meta.env.BASE_URL}projects/four.png`,
        tags: ["Python", "gTTS", "Speech Recognition", "Automation", "Developer Tools"],
        demoUrl: "#",
        githubUrl: "https://github.com/DreadPirateSamuel/Offline-Voice-Assistant"
    },
    {
        id: 5,
        title: "Malware Traffic Classifier",
        description: "A machine learning web program using XGBoost to classify network traffic as benign or malicious with the UNSW-NB15 dataset. Features a Streamlit interface for real-time predictions based on inputs like duration, protocol, and packet rates. Includes preprocessing with logarithmic transformation, robust scaling, and LabelEncoding for categorical features.",
        image: `${import.meta.env.BASE_URL}projects/five.png`,
        tags: ["Python", "XGBoost", "Streamlit", "Machine Learning", "Cybersecurity"],
        demoUrl: "#",
        githubUrl: "https://github.com/DreadPirateSamuel/Malware-Traffic-Classifier"
    },
    {
        id: 6,
        title: "Digit Recognition Neural Network",
        description: "A Pygame-based digit recognition program using a 3-layer CNN trained on MNIST to predict single, double, or triple digits (0-9) drawn on a 560x560 canvas. Supports mode toggling with guiding lines for multi-digit recognition and achieves >98% accuracy on single-digit predictions.",
        image: `${import.meta.env.BASE_URL}projects/six.png`,
        tags: ["Python", "Pygame", "CNN", "Machine Learning", "Computer Vision"],
        demoUrl: "#",
        githubUrl: "https://github.com/DreadPirateSamuel/Digit-Recognition"
    }
];
*/
/*
export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-8xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    {" "}
                    Featured <span className="text-primary"> Projects</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects. More are always on the way!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden rounded-t-lg">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            </div>

                            <div className="p-6 rounded-b-lg">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-fg">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-xl font-semibold mb-1">
                                    {project.title}
                                </h3>
                                <p className="text-muted-foreground text-sm mb-4">
                                    {project.description}
                                </p>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">*/
                                        {/*<a href={project.demoUrl} target="__blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                            <ExternalLink size={20} />
                                        </a>*/}/*
                                        <a href={project.githubUrl} className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                            <Github size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="text-center mt-12">
                <a className="cosmic-button w-fit flex items-center mx-auto gap-2" target="__blank" href="https://github.com/DreadPirateSamuel">
                    Check Out My GitHub Page! <ArrowRight size={16} />
                </a>
            </div>
        </section>
    );
}
*/
