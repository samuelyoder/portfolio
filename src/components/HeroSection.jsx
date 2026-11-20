import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
    return ( 
        <section 
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center px-4"
        >
            <div className="container max-w-4xl mx-auto text-center z-10 space-y-6">
                <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto rounded-xl overflow-hidden border-4 border-primary shadow-lg animate-fade-in">
                    <img 
                        src={`${import.meta.env.BASE_URL}images/portfoliopic.png`}
                        alt="Samuel Yoder" 
                        className="w-full h-full object-cover"
                    />
                </div>

                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    <span className="opacity-0 animate-fade-in"> Hi, I'm </span>
                    <span className="text-primary opacity-0 animate-fade-in-1"> Samuel </span>
                    <span className="text-primary opacity-0 animate-fade-in-1"> Yoder! </span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-3">
                    M.S. Cybersecurity student at NYU Tandon, focused on vulnerability research, fuzzing, secure systems, and detection engineering. 
                    Currently contributing to NYU's OSIRIS Lab infrastructure team and the Lind secure systems project.
                </p>

                <div className="opacity-0 animate-fade-in-3">
                    <a href="#projects" className="cosmic-button">
                        View My Work
                    </a>
                </div>
            </div>

            <div className="relative mt-12 mb-6 md:absolute md:bottom-8 md:left-1/2 md:transform md:-translate-x-1/2 md:mt-0 md:mb-0 flex flex-col items-center animate-bounce">
                <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
                <ArrowDown className="h-5 w-5 text-primary" />
            </div>
        </section>
    );
};
