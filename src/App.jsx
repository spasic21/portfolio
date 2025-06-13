import Navbar from './sections/Navbar.jsx'
import Contact from "./sections/Contact.jsx";
import Experience from "./sections/Experience.jsx";
import Hero from "./sections/Hero.jsx";
import ProjectShowcase from "./sections/ProjectShowcase.jsx";

const App = () => {
    return (
        <main className="max-w-screen-2xl mx-auto">
            <Navbar />
            <Hero />
            <ProjectShowcase />
            <Experience />
            <Contact />
        </main>
    );
}

export default App;