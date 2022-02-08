import React from "react";

import { RiMailFill } from "react-icons/ri";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-8">
      <div className="md:flex md:justify-center md:mb-10 px-4 lg:p-0 hidden">
        <a
          href="https://www.linkedin.com/in/ayaka-miyake/"
          target="_blank"
          rel="noopener"
        >
          <FaLinkedinIn className="w-5 h-5 text-navy" />
        </a>

        <a
          href="https://github.com/ayakamiyake7/"
          target="_blank"
          rel="noopener"
          className="ml-4"
        >
          <FaGithub className="w-5 h-5 text-navy" />
        </a>

        <a
          href="https://twitter.com/ayakamiyake7"
          target="_blank"
          rel="noopener"
          className="ml-4"
        >
          <FaTwitter className="w-5 h-5 text-navy" />
        </a>

        <a
          href="mailto:ayakamiyake7@gmail.com"
          target="_blank"
          rel="noopener"
          className="ml-4"
        >
          <RiMailFill className="w-5 h-5 text-navy" />
        </a>
      </div>
      <p className="text-xs text-gray-400 tracking-widest text-center">
        &copy; 2022 Ayaka Miyake All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
