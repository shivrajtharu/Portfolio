import { useState } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { MdChatBubbleOutline } from "react-icons/md";
import { FiMenu, FiX } from "react-icons/fi";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="h-6"></div>

      <nav className="container flex justify-between items-center py-4">
        <div className="flex-shrink-0">
          <Link to="/">
            <img src="/logo.png" alt="Logo" className="w-8 sm:w-12" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 lg:gap-12 items-center">
          <li>
            <Link className="link font-semibold text-[15px]" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link font-semibold text-[15px]" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="link font-semibold text-[15px]" to="/portfolio">
              Portfolio
            </Link>
          </li>
          <li>
            <Link className="link font-semibold text-[15px]" to="/clients">
              Clients
            </Link>
          </li>
        </ul>

        {/* Contact Button - Desktop */}
        <div className="hidden md:block">
          <Button
            className="!rounded-3xl !bg-white !text-black w-36 h-11 !text-[13px] !capitalize"
            variant="outlined"
            startIcon={<MdChatBubbleOutline />}
            component={Link}
            to="/contact"
          >
            Contact Me
          </Button>
        </div>

        {/* Hamburger Menu Button (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl focus:outline-none"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4 absolute top-20 left-0 w-full z-50">
          <ul className="flex flex-col gap-6 text-center">
            <li>
              <Link
                to="/"
                className="link font-semibold text-[15px]"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="link font-semibold text-[15px]"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio"
                className="link font-semibold text-[15px]"
                onClick={() => setIsOpen(false)}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="/clients"
                className="link font-semibold text-[15px]"
                onClick={() => setIsOpen(false)}
              >
                Clients
              </Link>
            </li>
            <li>
              <Button
                className="!rounded-3xl !bg-white !text-black w-full h-11 !text-[13px] !capitalize"
                variant="outlined"
                startIcon={<MdChatBubbleOutline />}
                component={Link}
                to="/contact"
                onClick={() => setIsOpen(false)}
              >
                Contact Me
              </Button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default NavBar;
