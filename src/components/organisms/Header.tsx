import React from "react";

const Header = () => {
  return (
    <header className="container mx-auto py-8 px-4 md:px-0 flex justify-between items-center">
      <a
        href="/"
        className="text-yellow fontFamily-futura text-xl hover:opacity-80 transition-all"
      >
        Ayaka Miyake
      </a>

      <span className="lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
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
      </span>
      <nav className="md:block lg:flex">
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
    </header>
  );
};

export default Header;
