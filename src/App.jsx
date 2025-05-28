import Navbar from './sections/Navbar.jsx'
import About from "./sections/About.jsx";
import Contact from "./sections/Contact.jsx";
import Experience from "./sections/Experience.jsx";
import Hero from "./sections/Hero.jsx";
import PersonalProjects from "./sections/PersonalProjects.jsx";

const App = () => {
    return (
        <main className="max-w-7xl mx-auto">
            <Navbar />
            <Hero />
            <About />
            <PersonalProjects />
            <Experience />
            <Contact />
        </main>
    );
}

export default App;