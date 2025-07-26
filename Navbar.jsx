import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 fixed w-full z-10">
      <ul className="flex justify-center space-x-6 text-lg font-medium">
        <li><a href="#home">Home</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#certifications">Certifications</a></li>
        <li><a href="#contact">Contact Me</a></li>
      </ul>
    </nav>
  );
};
export default Navbar;
