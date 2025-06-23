import React from "react";

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
        <nav className="px-8 py-3 rounded-full shadow-sm bg-[#c0c3bb]">
          <ul className="flex list-none gap-10">
            <li>
              <button
                onClick={() => scrollToSection("profile")}
                className="text-black hover:text-gray-600 transition-colors"
              >
                Profile
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-black hover:text-gray-600 transition-colors"
              >
                Experience
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-black hover:text-gray-600 transition-colors"
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-black hover:text-gray-600 transition-colors"
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
