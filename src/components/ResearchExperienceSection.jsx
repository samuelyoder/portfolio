
import { Cloud, Code, Truck, Wrench } from 'lucide-react';

export const ResearchExperienceSection = () => {
    return (
        <section id="experience" className="py-24 px-4 relative border-t border-border/50">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Research & <span className="text-primary">Experience</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Current research affiliations and previous professional experience.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Research Affiliations */}
                    <div className="gradient-border p-6 card-hover h-full">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Cloud className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">
                                    Infrastructure Team Member
                                </h4>
                                <p className="text-sm text-muted-foreground mt-1">
                                    OSIRIS Lab, NYU Tandon | Oct 2026 – Present
                                </p>
                                <p className="text-muted-foreground mt-3">
                                    Contribute to NYU's OSIRIS Lab infrastructure team, 
                                    which develops and maintains technical environments supporting 
                                    offensive security research, CTF competitions, and hands-on security projects.
                                    Work with cloud infrastructure, networking, automation, 
                                    and deployment workflows using tools such as AWS, Terraform, Docker, and Kubernetes. 
                                    Projects include infrastructure supporting the CSAW cybersecurity competition.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="gradient-border p-6 card-hover h-full">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">
                                    Secure Systems Lab Team Member
                                </h4>
                                <p className="text-sm text-muted-foreground mt-1">
                                    Lind, NYU Tandon | Oct 2026 – Present
                                </p>
                                <p className="text-muted-foreground mt-3">
                                    Contribute to Lind, an open-source systems security
                                    project focused on secure POSIX application isolation.
                                    Expanded the Rust coding style guide with constant
                                    placement guidance and submitted a merged, DCO-signed
                                    pull request. Continuing involvement in other areas
                                    of the project is planned.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Professional Experience */}
                    <div className="gradient-border p-6 card-hover h-full">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Truck className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">
                                    Software & Logistics Intern
                                </h4>
                                <p className="text-sm text-muted-foreground mt-1">
                                    Amazon | Jan 2025 – Sep 2026
                                </p>
                                <p className="text-muted-foreground mt-3">
                                    Worked directly with developers to reproduce and
                                    document issues in GeoStudio, an internal logistics
                                    platform. Findings contributed to reducing daily
                                    package returns from approximately 1,500–2,000 to
                                    50–150 and improving delivery success from roughly
                                    90% to 98–99%.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="gradient-border p-6 card-hover h-full">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Wrench className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">
                                    Systems/IT Contractor
                                </h4>
                                <p className="text-sm text-muted-foreground mt-1">
                                    Vein911 | Jul 2025 – Jan 2026
                                </p>
                                <p className="text-muted-foreground mt-3">
                                    Provided IT support for Vein911 and 3Hearts
                                    Compression, troubleshooting connectivity,
                                    account access, and business platform issues.
                                    Established and maintained an inventory database
                                    supporting clinical and operational records.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
