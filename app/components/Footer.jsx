import React from "react";
import Image from "next/image";

import logo from "app/assets/logo.png";
const Footer = () => {
  return (
    <>
      <footer class="py-12 bg-gray-500 text-white text-3xl font-mono">
        <div class="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div class="flex flex-col text-center items-center justify-center md:text-left mb-2 md:mb-0 py-8">
            <Image src={logo} alt="Yash Ent" height={90} width={90}  />
            <p className="">&copy; Yash Enterprises. All Rights Reserved.</p>
          </div>

          <div class="text-center md:text-right">
            <p>Contact Us:</p>
            <p className="text-2xl">Email: prmdrai97@gmail.com</p>
            <p className="text-2xl">Phone: +91-7021171405</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
