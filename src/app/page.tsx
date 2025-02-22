"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Overlay from "../components/ui/overlay";
import Nav from "../components/ui/nav";

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
          className=""
        >
          {/* Main content */}
          <Nav />

          <main className="pt-[5rem]">
            <div className="container box-content bg-divs w-[40rem] h-[10rem] mx-auto rounded-lg opacity-80">
              <div className="p-4 space-y-1">
                <h1 className="text-5xl">Syed Nasir</h1>
                <h3 className="text-3xl">Software Engineer</h3>
                <p className="text-l">Toronto, ON</p>
              </div>
            </div>
            <div
              id="experience"
              className="container mt-8 box-content bg-gray-500 w-[40rem] h-[80rem] mx-auto rounded-lg opacity-80"
            >
              <h1 className="text-5xl">exp</h1>
            </div>
            <div
              id="projects"
              className="container mt-8 box-content bg-gray-500 w-[40rem] h-[70rem] mx-auto rounded-lg opacity-80"
            >
              <h1 className="text-5xl">projects</h1>
            </div>
            <div
              id="contact"
              className="container mt-8 box-content bg-gray-500 w-[40rem] h-[70rem] mx-auto rounded-lg opacity-80"
            >
              <h1 className="text-5xl">contact</h1>
            </div>
          </main>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
