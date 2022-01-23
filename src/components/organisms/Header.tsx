import React from "react";

const Header = () => {
  return (
    <header className="container mx-auto py-8 md:flex justify-between items-center">
      <a href="/" className="hover:opacity-80 transition-all">
        <img src="/logo.svg" alt="logo" />
      </a>
      <nav className="md:flex">
        <a
          className="font-bold text-lg fontFamily-Futura hover:opacity-80 transition-all mr-8"
          href="#aboutMe"
        >
          About me
        </a>
        <a
          className="font-bold text-lg fontFamily-Futura hover:opacity-80 transition-all"
          href="#project"
        >
          Projects
        </a>
      </nav>
    </header>
  );
};

export default Header;
