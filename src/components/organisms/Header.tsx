import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenu = () => {
    setMenuOpen(!menuOpen);
    console.log("click");
  };

  return (
    <header className="container mx-auto py-8 md:flex md:justify-between md:items-center">
      <a
        href="/"
        className="text-yellow text-2xl font-bold hover:opacity-80 transition-all"
      >
        Ayaka Miyake
      </a>

      <span
        className="md:hidden absolute top-8 right-8 z-30"
        onClick={handleMenu}
      >
        {menuOpen ? (
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              y1="-1"
              x2="44.6299"
              y2="-1"
              transform="matrix(0.697071 0.717002 -0.697071 0.717002 1 2.00024)"
              stroke="#353D40"
              stroke-width="2"
            />
            <line
              y1="-1"
              x2="44.6299"
              y2="-1"
              transform="matrix(0.697071 -0.717002 0.697071 0.717002 1.88989 33.9998)"
              stroke="#353D40"
              stroke-width="2"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        )}
      </span>

      <nav className="md:flex hidden">
        <a
          className="md:block font-bold text-lg fontFamily-Futura hover:opacity-80 transition-all mr-8"
          href="#aboutMe"
        >
          About me
        </a>
        <a
          className="md:block font-bold text-lg fontFamily-Futura hover:opacity-80 transition-all"
          href="#project"
        >
          Projects
        </a>
      </nav>

      {menuOpen ? (
        <nav className="bg-yellow px-5 absolute top-0 z-20 w-screen h-screen">
          <a
            className="text-white mt-24 block font-bold text-4xl md:text-lg md:hover:opacity-80 md:transition-all md:mr-8"
            href="#aboutMe"
          >
            Home
          </a>
          <a
            className="text-white mt-20 block font-bold text-4xl md:text-lg md:hover:opacity-80 md:transition-all md:mr-8"
            href="#aboutMe"
          >
            About me
          </a>
          <a
            className="text-white mt-20 block font-bold text-4xl md:text-lg md:hover:opacity-80 md:transition-all md:mr-8"
            href="#project"
          >
            Projects
          </a>
        </nav>
      ) : undefined}
    </header>
  );
};

export default Header;
