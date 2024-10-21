import { Link } from "react-router-dom";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

import logo from "../assets/logo.png";

/**
 * Footer component
 * @description Footer component that displays the copyright information and social media icons.
 */
const Footer = () => {
  return (
    <footer className="py-5 text-white bg-orange-500 ">
      <div className="container grid gap-5 mx-auto md:grid-cols-2">
        <div className="flex items-center justify-center gap-3 text-3xl font-bold tracking-tight ">
          <Link to="/" className="hover:text-black">
            MernEats.com
          </Link>
          <img src={logo} alt="logo-img" width={50} height={50} />
        </div>

        {/* Copyright*/}
        <div className="flex flex-col items-center gap-5 text-center md:text-right">
          <p>© {new Date().getFullYear()} MernEats. All Rights Reserved.</p>
          {/* Social Media */}
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/AnasHany219"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubLogoIcon className="w-6 h-6 hover:text-black" />
            </a>

            <a
              href="https://www.linkedin.com/in/anashany219/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInLogoIcon className="w-6 h-6 hover:text-black" />
            </a>
            <a
              href="https://github.com/AnasHany2193"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubLogoIcon className="w-6 h-6 hover:text-black" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
