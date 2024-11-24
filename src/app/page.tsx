// page.tsx
"use client";

import * as React from "react";
import { FC } from "react";

const HomePage: FC = () => {
  return (
    <div className="space-y-8 my-8">
      {/* Header Section */}
      <div className="container box-content bg-divs w-[40rem] h-[10rem] mx-auto rounded-lg opacity-80">
        <div className="p-4 space-y-1">
          <h1 className="text-5xl">Syed Nasir</h1>
          <h3 className="text-3xl">Software Engineer</h3>
          <p className="text-l ">Toronto, ON</p>
        </div>
      </div>

      {/* Hero Section */}

      <div className="container box-content bg-divs w-[40rem] h-[10rem] mx-auto rounded-lg opacity-80">
        <div className="p-4 space-y-1">
          <h1 className="text-5xl"></h1>
        </div>
      </div>

      {/* Experience Section */}
      <div className="">
        <div className="container box-content bg-divs w-[40rem] h-96 mx-auto rounded-lg opacity-40"></div>
      </div>
    </div>
  );
};

export default HomePage;
