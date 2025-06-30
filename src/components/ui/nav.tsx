import React from "react";
import SocialsSection from "./socialsection";

export default function Nav() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header className="w-full top-0 z-10 absolute bg-transparent">
      
      <div className="flex justify-center items-center h-[5rem]">
       
        <nav className="px-8 py-3 rounded-full shadow-sm bg-[#2F756F]">
          <ul className="flex list-none gap-10">
            <li>
              <button
                onClick={() => scrollToSection("profile")}
                className="text-background hover:text-secondary hover:drop-shadow-glow transition-colors"
              >
                Profile
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-background hover:text-secondary hover:drop-shadow-glow transition-colors"
              >
                Experience
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-background hover:text-secondary hover:drop-shadow-glow transition-colors"
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-background hover:text-secondary hover:drop-shadow-glow transition-colors"
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
