import {useState} from "react";
import {navLinks} from "../constants/index.js";
import close from "../assets/close.svg";
import menu from "../assets/menu.svg";
import github from "../assets/github.svg";

const NavItems = () => {
    return (
        <ul className="nav-ul">
            {navLinks.map(({id, href, name}) => (
                <li key={id} className="nav-li">
                    <a href={href} className="nav-li_a">
                        {name}
                    </a>
                </li>
            ))}
        </ul>
    );
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen((prevState) => !prevState);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between py-5 mx-auto c-space">
                    <div className="flex items-center gap-5">
                        <a href="/portfolio/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
                            Aleksandar
                        </a>
                        <a href="https://github.com/spasic21" target="_blank" rel="noreferrer">
                            <img src={github} alt="github" className="w-10 h-10" />
                        </a>
                    </div>

                    <button onClick={toggleMenu} className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex">
                        <img src={isOpen ? close : menu} alt="toggle" className="w-6 h-6" />
                    </button>

                    <nav className="sm:flex hidden">
                        <NavItems />
                    </nav>
                </div>
            </div>

            <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <nav className="p-5">
                    <NavItems />
                </nav>
            </div>
        </header>
    );
}

export default Navbar;