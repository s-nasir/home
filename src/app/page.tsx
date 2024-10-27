"use server"
import * as React from "react";
import Link from 'next/link';
import { FC } from 'react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar"


import { FC, useEffect, useState } from 'react';

const HomePage: FC = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar className="sidebar">
        <SidebarHeader />
          <SidebarContent className="flex flex-col items-center justify-center h-full">
            <SidebarGroup className="buttons">
              <button asChild><Link href ="/hero">About</Link></button>
              <button asChild><Link href="/experience">Experience</Link></button>
              <button asChild><Link href="/projects">Projects</Link></button>
              <button asChild><Link href="/contact">Contact</Link></button>
            </SidebarGroup>
          </SidebarContent>
        <SidebarFooter />
      </Sidebar>


      {/* Main Content with left margin */}
      <main className="ml-60 space-y-12 px-8 max-w-screen-xl mx-auto">


      </main>
    </div>
  );
};

export default HomePage;
