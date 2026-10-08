import { Phone, Mail, MapPin } from 'lucide-react';

export const ContactSection = () => {
    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary">Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    I'm always open to new opportunities! Feel free to reach out.
                </p>

                <div className="text-center">
                    {/* Contact Details */}
                    <div className="flex flex-col items-center gap-6 mb-12 max-w-md mx-auto">
                        <a
                            href="tel:+18133908538"
                            className="flex items-center gap-3 text-foreground hover:text-primary transition-colors duration-300"
                        >
                            <Phone className="w-6 h-6 text-primary" />
                            <span>+1 (813) 390-8538</span>
                        </a>
                        <a
                            href="mailto:sam061704@icloud.com"
                            className="flex items-center gap-3 text-foreground hover:text-primary transition-colors duration-300"
                        >
                            <Mail className="w-6 h-6 text-primary" />
                            <span>sam061704@icloud.com</span>
                        </a>
                        <div className="flex items-center gap-3 text-foreground">
                            <MapPin className="w-6 h-6 text-primary" />
                            <span>New York, New York</span>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="social-links flex justify-center gap-4 mb-4">
                        <a href="https://www.linkedin.com/in/samueldyoder" target="_blank" rel="noopener noreferrer">
                            <img src="images/linkedin-logo.png" alt="LinkedIn" className="social-icon w-8 h-8 card-hover" />
                        </a>
                        <a href="https://github.com/samuelyoder" target="_blank" rel="noopener noreferrer">
                            <img src="images/github-logo.png" alt="GitHub" className="social-icon w-8 h-8 card-hover" />
                        </a>
                    </div>

                    <p className="text-muted-foreground text-sm">© 2026 Samuel Yoder.</p>
                </div>
            </div>
        </section>
    );
};
