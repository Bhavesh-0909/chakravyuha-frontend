import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-black/50 bg-opacity-20 backdrop-blur-lg fixed w-full z-50">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <a href="#" className="text-white text-xl font-bold hover:text-gray-300 transition-colors duration-300">Logo</a>
                
                {/* Hamburger Button */}
                <button 
                    onClick={() => setIsOpen(!isOpen)} 
                    className="lg:hidden text-white hover:text-gray-300 transition-colors duration-300 focus:outline-none"
                    aria-label="Toggle menu"
                >
                    <div className="w-6 h-5 relative flex flex-col justify-between">
                        <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`w-full h-0.5 bg-current transition-all duration-300 ease-in-out ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                        <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </div>
                </button>

                {/* Navigation Links */}
                <div className={`fixed lg:relative top-[64px] lg:top-0 left-0 w-full lg:w-auto h-screen lg:h-auto bg-black lg:bg-transparent transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
                    <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8 p-6 lg:p-0">
                        <li>
                            <a href="#" className="text-white block text-lg hover:text-gray-300 transition-colors duration-300 relative group">
                                Home
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-white block text-lg hover:text-gray-300 transition-colors duration-300 relative group">
                                About
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-white block text-lg hover:text-gray-300 transition-colors duration-300 relative group">
                                Services
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-white block text-lg hover:text-gray-300 transition-colors duration-300 relative group">
                                Contact
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;