import React from "react";
// import gsap from "gsap";
// import Lenis from "lenis";

export default function Nav() {
  return (
    <header className="w-full top-0 z-10 ease-in fixed ">
      <div className="flex justify-center items-center h-[5rem] bg-[#d7d9d4] ">
        <nav>
          <ul className="flex list-none gap-10">
            <li className="active">
              <a href="#profile">Profile</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
