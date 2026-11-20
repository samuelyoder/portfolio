import { Bug, Bot, Shield } from 'lucide-react';

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                            Offensive Security Engineer
                        </h3>
                        
                        <p className="text-muted-foreground">
                            M.S. Cybersecurity, NYU Tandon — <br />
                            Expected May 2028<br />
                            (NYU Merit Scholarship Recipient)<br /><br />
                            B.A. Computer Science, Florida State University — <br />
                            May 2026, Magna Cum Laude<br /><br />

                            I am a member of NYU's OSIRIS Lab, where I contribute
                            to the infrastructure team developing and supporting
                            technical environments for security research, hands-on
                            projects, and CTF competitions.
                            
                            <br /><br />
                            
                            I also contribute to Lind through NYU's Secure Systems Lab,
                            an open-source project focused on secure POSIX application
                            isolation. My first merged contribution expanded the Rust
                            coding style guide, with continued involvement planned
                            across other areas of the project.
                            
                            <br /><br />
                            
                            My technical interests center on vulnerability research,
                            memory safety, fuzzing, systems security, and detection
                            engineering. I work primarily in C, C++, and Python,
                            using tools including GDB, Ghidra, libFuzzer, ASan/UBSan,
                            and Linux.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                Get In Touch
                            </a>
                            <a 
                                href={`${import.meta.env.BASE_URL}resume.docx`} 
                                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                                download
                            >
                                Download Resume
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Bug className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">
                                        Offensive Security & Vulnerability Research
                                    </h4>
                                    <p className="text-muted-foreground">
                                        Coverage-guided fuzzing, memory-safety analysis,
                                        binary exploitation, reverse engineering, 
                                        and coordinated vulnerability disclosure
                                        in open-source software.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Shield className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">
                                        Detection Engineering & Systems
                                    </h4>
                                    <p className="text-muted-foreground">
                                        MITRE ATT&CK-mapped detection rules, SIEM
                                        development, Linux systems programming, and
                                        kernel-level development with a focus on
                                        measurable, evidence-driven security outcomes.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Bot className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">
                                        AI/ML & Security Research
                                    </h4>
                                    <p className="text-muted-foreground">
                                        Machine learning applied to security problems —
                                        network intrusion detection, AI model-file security
                                        research, and neural network development using
                                        PyTorch and Hugging Face Transformers.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
