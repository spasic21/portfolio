import {useRef} from "react";
import {Navbar, Hero, ProjectShowcase, WorkExperience, TechStack, Contact} from "./sections/sectionIndex";


const App = () => {
    const heroRef = useRef(null);
    const projectRef = useRef(null);
    const experienceRef = useRef(null);
    const techStackRef = useRef(null);
    const contactRef = useRef(null);

    const scrollToSection = (ref) => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <main className="max-w-screen-2xl mx-auto">
            <Navbar onNavClick={{
                Home: () => scrollToSection(heroRef),
                Projects: () => scrollToSection(projectRef),
                Work: () => scrollToSection(experienceRef),
                Tech: () => scrollToSection(techStackRef),
                Contact: () => scrollToSection(contactRef)
            }}/>

            <Hero ref={heroRef}/>
            <ProjectShowcase ref={projectRef}/>
            <WorkExperience ref={experienceRef}/>
            <TechStack ref={techStackRef}/>
            <Contact ref={contactRef}/>
        </main>
    );
};

export default App;