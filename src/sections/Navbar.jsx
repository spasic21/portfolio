import {useState} from "react";
import {navLinks} from "../constants/index";
import {RiCloseLine, RiGithubFill, RiLinkedinFill, RiMenuFill} from "react-icons/ri";

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
                        <a href="/portfolio" className="group relative">
                            <p className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">Aleksandar</p>

                            <span className="tool-tip">
                                That's Me <span className="inline-block animate-wave origin-[70%_70%]">👋</span>
                            </span>
                        </a>
                        <a href="https://github.com/spasic21" target="_blank" rel="noreferrer" className="group relative">
                            <div className="w-10 h-10">
                                <RiGithubFill className="w-full h-full text-neutral-400 hover:text-white" />
                            </div>

                            <span className="tool-tip">
                                GitHub Profile
                            </span>
                        </a>
                        <a href="https://www.linkedin.com/in/aleksandar-spasic-628094a6" target="_blank" rel="noreferrer" className="group relative">
                            <div className="w-10 h-10">
                                <RiLinkedinFill className="w-full h-full text-neutral-400 hover:text-white" />
                            </div>

                            <span className="tool-tip">
                                LinkedIn Profile
                            </span>
                        </a>
                    </div>

                    <button onClick={toggleMenu} className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex">
                        {isOpen ? <RiCloseLine className="w-6 h-6" /> : <RiMenuFill className="w-6 h-6" />}
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