import {useEffect, useRef, useState} from "react";
import {Navbar, Hero, ProjectShowcase, WorkExperience, TechStack, Contact} from "./sections/sectionIndex";
import SectionDivider from "./components/SectionDivider";

const App = () => {
    const heroRef = useRef(null);
    const projectRef = useRef(null);
    const experienceRef = useRef(null);
    const techStackRef = useRef(null);
    const contactRef = useRef(null);

    const [activeSection, setActiveSection] = useState("Home");

    const scrollToSection = (ref) => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
    };

    // Live log pose: whichever section crosses the middle of the viewport is our current heading.
    useEffect(() => {
        const sections = {
            Home: heroRef.current,
            Projects: projectRef.current,
            Work: experienceRef.current,
            Tech: techStackRef.current,
            Contact: contactRef.current,
        };

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.target.dataset.nav) {
                        setActiveSection(entry.target.dataset.nav);
                    }
                });
            },
            { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
        );

        Object.entries(sections).forEach(([name, el]) => {
            if (el) {
                el.dataset.nav = name;
                observer.observe(el);
            }
        });

        return () => observer.disconnect();
    }, []);

    return (
        <main className="max-w-screen-2xl mx-auto">
            <Navbar
                activeSection={activeSection}
                onNavClick={{
                    Home: () => scrollToSection(heroRef),
                    Projects: () => scrollToSection(projectRef),
                    Work: () => scrollToSection(experienceRef),
                    Tech: () => scrollToSection(techStackRef),
                    Contact: () => scrollToSection(contactRef)
                }}
            />

            <Hero ref={heroRef}/>
            <SectionDivider leg="Leg 01" coord="41°N 74°W"/>
            <ProjectShowcase ref={projectRef}/>
            <SectionDivider leg="Leg 02" coord="38°N 90°W"/>
            <WorkExperience ref={experienceRef}/>
            <SectionDivider leg="Leg 03" coord="44°N 93°W"/>
            <TechStack ref={techStackRef}/>
            <SectionDivider leg="Leg 04" coord="28°N 81°W"/>
            <Contact ref={contactRef}/>
        </main>
    );
};

export default App;
