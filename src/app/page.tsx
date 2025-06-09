"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Overlay from "../components/ui/overlay";
import Nav from "../components/ui/nav";
import Pattern from "../components/bgpattern";

export default function HomePage() {
  const [showOverlay, setShowOverlay] = React.useState(true);

  const handleBegin = () => {
    setShowOverlay(false);
  };

  return (
    <AnimatePresence mode="wait">
      {showOverlay ? (
        <motion.div
          key="overlay"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Overlay onBegin={handleBegin} />
        </motion.div>
      ) : (
        <motion.div
          key="main-page"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="relative h-screen overflow-hidden"
        >
          <Pattern />
          <Nav />
          
          <main className="h-[calc(100vh-5rem)] overflow-y-auto snap-y snap-mandatory scrollbar-hide scroll-smooth">
            <section id="profile" className="h-screen w-full snap-start">
              <div className="flex justify-center items-center h-full">
                <div className="bg-divs w-[40rem] h-[10rem] rounded-lg opacity-80">
                  <div className="p-4 space-y-1">
                    <h1 className="text-5xl">Syed Nasir</h1>
                    <h3 className="text-3xl">Software Engineer</h3>
                    <p className="text-l">Toronto, ON</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="experience" className="h-screen w-full snap-start">
              <div className="flex justify-center items-center h-full">
                <div className="container bg-gray-500 w-[40rem] h-[20rem] rounded-lg opacity-80">
                  <h1 className="text-5xl">exp</h1>
                </div>
              </div>
            </section>

            <section id="projects" className="h-screen w-full snap-start">
              <div className="flex justify-center items-center h-full">
                <div className="container bg-gray-500 w-[40rem] h-[20rem] rounded-lg opacity-80">
                  <h1 className="text-5xl">projects</h1>
                </div>
              </div>
            </section>

            <section id="contact" className="h-screen w-full snap-start">
              <div className="flex justify-center items-center h-full">
                <div className="container bg-gray-500 w-[40rem] h-[20rem] rounded-lg opacity-80">
                  <h1 className="text-5xl">contact</h1>
                </div>
              </div>
            </section>
          </main>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
