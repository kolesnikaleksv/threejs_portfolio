import React from 'react'
import {navLinks} from "../constants/index.js";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);
  const NavItems = () => {
    return (
      <ul className="nav-ul">
        {navLinks.map(({id, name, href}) => (
          <li key={id} className="nav-li">
            <a href={href} className="nav-li_a" onClick={() => {
            }}>{name}</a>
          </li>
        ))}
      </ul>
    )
  }
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-color">Olex</a>
          <button onClick={toggleMenu}
                  className="text-neutral-400 hover:text-white focus:outlin-none sm:hidden flex"
                  aria-label="Toggle Menu">
            <img src={isOpen ? "public/assets/close.svg" : "public/assets/menu.svg"} alt="Menu icon"
                 className="w-6 h-6"/>
          </button>
          <nav className="sm:flex hidden">
            <NavItems/>
          </nav>
        </div>
      </div>
      <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <nav className="p-5">
          <NavItems/>
        </nav>
      </div>
    </header>
  )
}
export default Navbar
