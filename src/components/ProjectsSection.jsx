
import { ArrowRight, Github, Lock, Code2, Cloud, Bug } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Lind — Secure Systems Lab",
        description: "Contributing to Lind through NYU Tandon's Secure Systems Lab, an open-source project focused on securely isolating untrusted POSIX applications. My first merged contribution expanded the Rust coding style guide with constant-placement guidance and examples from the codebase. I remain involved in the broader project, pursuing additional development and systems-security work beyond documentation.",
        image: `${import.meta.env.BASE_URL}projects/lind.png`,
        Icon: Code2,
        tags: ["Rust", "Linux", "Systems Security", "Open Source", "Git"],
        status: "live",
        githubUrl: "https://github.com/Lind-Project/lind-wasm/pull/1420",
        linkLabel: "View merged Lind pull request",
    },
    {
        id: 2,
        title: "OSIRIS Lab — CSAW CTF Infrastructure",
        description: "Contribute to the OSIRIS infrastructure team supporting the AWS-backed CSAW CTF environment, including Terraform-managed cloud resources, automation, and deployment workflows. Integrated and tested a Python AWS Lambda flag selector with deployment packaging and IAM configuration. Ongoing team work also involves infrastructure testing, networking, and collaboration through GitLab beyond this individual contribution.",
        image: `${import.meta.env.BASE_URL}projects/csaw.png`,
        Icon: Cloud,
        tags: ["AWS", "Terraform", "AWS Lambda", "Python", "GitLab"],
        status: "live",
        githubUrl: null,
        linkLabel: "Team infrastructure work — no public repository",
    },
    {
        id: 3,
        title: "Open-Source Vulnerability Research & Fuzzing",
        description: "Built a coverage-guided libFuzzer harness with ASan/UBSan instrumentation for the GGUF model-file parser of an open-source C++ machine-learning inference library. Identified and root-caused a previously unreported uncontrolled memory-allocation vulnerability (CWE-789), then filed a private coordinated-disclosure advisory. Technical details remain private pending remediation.",
        image: `${import.meta.env.BASE_URL}projects/fuzzing.png`,
        tags: ["C++", "libFuzzer", "ASan/UBSan", "GDB", "Vulnerability Research"],
        status: "pending",
        githubUrl: null,
        linkLabel: "Technical details withheld pending remediation",
    },
    {
        id: 4,
        title: "Detection Engineering SOC Lab",
        description: "Docker-based Elasticsearch/Kibana SOC lab on WSL2 ingesting live Windows/Sysmon telemetry and 37,364 events from 278 EVTX attack samples. Developed six MITRE ATT&CK-mapped Sigma rules, converted them to ECS-aligned EQL, and evaluated them against 1.79 million public Windows baseline events. Verified query consistency through 24 EQL/DSL document-ID comparisons and published reproducible tests and documentation.",
        image: `${import.meta.env.BASE_URL}projects/soclab.png`,
        tags: ["Elasticsearch", "Kibana", "Sigma", "MITRE ATT&CK", "Detection Engineering"],
        status: "live",
        githubUrl: "https://github.com/samuelyoder/Sigma-Detection-Lab",
        linkLabel: "View Detection Engineering SOC Lab on GitHub",
    },
    {
        id: 5,
        title: "Malware Traffic Classifier",
        description: "XGBoost network intrusion classifier trained on the UNSW-NB15 dataset with a Streamlit interface for interactive classification of user-provided network traffic features. Includes logarithmic transformation, robust scaling, label encoding, and a tuned prediction threshold to handle class imbalance between benign and malicious samples.",
        image: `${import.meta.env.BASE_URL}projects/five.png`,
        tags: ["Python", "XGBoost", "Streamlit", "Machine Learning", "Network Security"],
        status: "live",
        githubUrl: "https://github.com/samuelyoder/Malware-Traffic-Classifier",
        linkLabel: "View Malware Traffic Classifier on GitHub",
    },
    {
        id: 6,
        title: "Tinybrowse — C++ Security Audit",
        description: "Audited a small C++ browser as part of NYU's Computer Security coursework, identifying five vulnerabilities: a format-string flaw, integer-truncation heap overflow, use-after-free, null-pointer dereference, and unbounded parser recursion. Used GDB and AddressSanitizer to reproduce failures, trace root causes, and document technical evidence.",
        image: `${import.meta.env.BASE_URL}projects/tinybrowse.png`,
        Icon: Bug,
        tags: ["C++", "GDB", "AddressSanitizer", "Memory Safety", "Security Audit"],
        status: "live",
        githubUrl: null,
        linkLabel: "No public repository",
    },
    {
        id: 7,
        title: "Linux Kernel Elevator Scheduler",
        description: "Linux kernel module in C implementing a custom elevator scheduling algorithm with custom system calls, kernel-level request queues, and synchronization primitives for concurrent processes. Debugged and tested in a constrained kernel environment where standard tooling is unavailable.",
        image: `${import.meta.env.BASE_URL}projects/kernel.png`,
        tags: ["C", "Linux", "Systems Programming", "Kernel Development", "Concurrency"],
        status: "live",
        githubUrl: "https://github.com/samuelyoder/linux-kernel-elevator",
        linkLabel: "View Linux Kernel Elevator Scheduler on GitHub",
    },
    {
        id: 8,
        title: "Secure Flask eCommerce Application",
        description: "Flask/SQLite application with user authentication, salted password hashing, signed session cookies, CSRF protection, and role-based authorization. Implements dynamic pricing, persistent data storage, and inventory synchronization. Tested authentication, checkout, and application workflows for edge cases and unexpected behavior.",
        image: `${import.meta.env.BASE_URL}projects/two.png`,
        tags: ["Python", "Flask", "SQLite", "Web Security", "Authentication"],
        status: "live",
        githubUrl: "https://github.com/samuelyoder/eCommerce-Website-Project",
        linkLabel: "View Secure Flask eCommerce Application on GitHub",
    },
    {
        id: 9,
        title: "DEEP-TAO Astronomical Transient Classification",
        description: "CNN pipeline replicating the DEEP-TAO study to classify transient astronomical events from FITS images. Achieved an average F1-score of 0.9438, compared with the original study's reported 0.5458, with confusion matrix visualizations and sample image analysis.",
        image: `${import.meta.env.BASE_URL}projects/one.png`,
        tags: ["Python", "TensorFlow", "CNNs", "Deep Learning", "Data Science"],
        status: "live",
        githubUrl: "https://github.com/samuelyoder/Deep-TAO-Replication",
        linkLabel: "View DEEP-TAO project on GitHub",
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
                    Open-source systems research, security engineering, detection engineering,
                    and selected software projects.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover relative">

                            {/* Pending disclosure badge */}
                            {project.status === "pending" && (
                                <div className="absolute top-3 right-3 z-10 flex items-center gap-1 px-2 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium">
                                    <Lock size={11} />
                                    Disclosure In Progress
                                </div>
                            )}

                            {/* Project thumbnails */}
                            <div className="h-48 overflow-hidden rounded-t-lg">
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-secondary/40">
                                        <div className="p-6 rounded-full bg-primary/10 transition-transform duration-500 group-hover:scale-110">
                                            <project.Icon className="h-16 w-16 text-primary" />
                                        </div>
                                    </div>
                                )}
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
                                                aria-label={project.linkLabel}
                                                title={project.linkLabel}
                                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                            >
                                                <Github size={20} />
                                            </a>
                                        ) : (
                                            <span className="text-xs text-muted-foreground italic">
                                                {project.linkLabel}
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
                    href="https://github.com/samuelyoder"
                >
                    Check Out My GitHub <ArrowRight size={16} />
                </a>
            </div>
        </section>
    );
};
