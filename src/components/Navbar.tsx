"use client";

import React, { useState } from "react";
import { cn } from "@/Utils/cn";
import { HoveredLink, MenuItem, Menu, ProductItem } from "./ui/Navbar-menu";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>
        <Link href={"/about"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="About Us"
          ></MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="Popular Couses">
          <div className="flex flex-col space-y-5">
            {" "}
            <HoveredLink href="/reactjs">React Js</HoveredLink>
            <HoveredLink href="/backend">Backend Development</HoveredLink>
            <HoveredLink href="/frontend">Frontend Development</HoveredLink>
            <HoveredLink href="/nodejs">Node JS</HoveredLink>
          </div>
        </MenuItem>
        <Link href={"/courses"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="All Courses"
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
};

export default Navbar;
