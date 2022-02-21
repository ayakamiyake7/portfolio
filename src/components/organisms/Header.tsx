import Link from "next/link";
import React, { useState } from "react";
import { Link as Scroll } from "react-scroll";

import { RiCloseFill, RiMailFill, RiMenu2Line } from "react-icons/ri";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const handleMenuClose = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="container mx-auto py-8 px-4 md:px-0 md:flex md:justify-between md:items-center">
      <Link href="/">
        <a className="text-yellow text-2xl font-bold hover:opacity-80 transition-all">
          Ayaka Miyake
        </a>
      </Link>

      <span
        className="md:hidden absolute top-8 right-8 z-30"
        onClick={handleMenu}
      >
        {menuOpen ? (
          <RiCloseFill
            className="w-8 h-8 text-navy fixed top-8 right-8"
            onClick={handleMenuClose}
          />
        ) : (
          <RiMenu2Line className="w-8 h-8 text-navy" />
        )}
      </span>

      <nav className="md:flex hidden">
        <Scroll
          className="md:block font-bold text-lg hover:opacity-80 transition-all mr-8 cursor-pointer"
          to="aboutMe"
          smooth="true"
          duration={400}
          offset={-50}
        >
          About me
        </Scroll>
        <Scroll
          className="md:block font-bold text-lg hover:opacity-80 transition-all cursor-pointer"
          to="projects"
          smooth="true"
          duration={400}
          offset={-50}
        >
          Projects
        </Scroll>
      </nav>

      {menuOpen ? (
        <nav className="bg-gradient-to-b from-[#FEAB65] via-[#ECA7A4] to-[#BC98BF] px-5 top-0 left-0 z-20 w-screen h-full fixed">
          <div className="flex pt-24">
            <a
              href="https://www.linkedin.com/in/ayaka-miyake/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="w-5 h-5 text-navy" />
            </a>

            <a
              href="https://github.com/ayakamiyake7/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-6"
            >
              <FaGithub className="w-5 h-5 text-navy" />
            </a>

            <a
              href="https://twitter.com/ayakamiyake7"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-6"
            >
              <FaTwitter className="w-5 h-5 text-navy" />
            </a>

            <a
              href="mailto:ayakamiyake7@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-6"
            >
              <RiMailFill className="w-5 h-5 text-navy" />
            </a>
          </div>
          <Scroll
            to="/"
            className="text-white tracking-widest mt-24 block font-bold text-4xl md:text-lg md:hover:opacity-80 md:transition-all md:mr-8"
            onClick={handleMenuClose}
          >
            Home
          </Scroll>
          <Scroll
            className="text-white tracking-widest mt-20 block font-bold text-4xl md:text-lg md:hover:opacity-80 md:transition-all md:mr-8"
            to="aboutMe"
            smooth="true"
            duration={400}
            offset={-50}
            onClick={handleMenuClose}
          >
            About me
          </Scroll>
          <Scroll
            className="text-white tracking-widest mt-20 block font-bold text-4xl md:text-lg md:hover:opacity-80 md:transition-all md:mr-8"
            to="projects"
            smooth="true"
            duration={400}
            offset={-50}
            onClick={handleMenuClose}
          >
            Projects
          </Scroll>
        </nav>
      ) : (
        !setMenuOpen
      )}
    </header>
  );
};

export default Header;
