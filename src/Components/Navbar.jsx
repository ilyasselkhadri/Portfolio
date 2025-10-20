import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaGitlab } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { Link } from "react-scroll";
import logo from "../Images/Qibtechss.png";
import "animate.css";

// Menu items configuration
const MENU_ITEMS = ["Home", "About", "Skills", "Work", "Contact"];

// Social links configuration
const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ilyass-elkhadri-b47516332/",
    label: "Ilyass ELKHADRI",
    icon: AiOutlineLinkedin,
    bgColor: "bg-blue-500",
    delay: "0s",
    width: "w-[200px]",
    hoverMargin: "hover:ml-[-16px]",
    defaultMargin: "ml-[-129px]",
  },
  {
    name: "GitLab",
    url: "https://gitlab.com/ELKHADRI-Ilyass",
    label: "ELKHADRI Ilyass",
    icon: FaGitlab,
    bgColor: "bg-[#FC6D26]",
    delay: "1s",
    width: "w-[200px]",
    hoverMargin: "hover:ml-[-16px]",
    defaultMargin: "ml-[-129px]",
  },
  {
    name: "Phone",
    url: "tel:0666444655",
    label: "0666444655",
    icon: FaPhone,
    bgColor: "bg-blue-800",
    delay: "2s",
    width: "w-[300px]",
    hoverMargin: "hover:ml-[-69px]",
    defaultMargin: "ml-[-229px]",
  },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY !== 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  // Desktop/Mobile menu items
  const renderMenuItems = (isMobile = false) => (
    <ul
      className={
        isMobile
          ? "absolute left-0 top-0 w-full h-screen flex flex-col bg-black justify-center items-center z-1 text-amber-500"
          : "hidden md:flex text-2xl"
      }
    >
      {MENU_ITEMS.map((item) => (
        <li
          key={item}
          className={`${isMobile ? "py-4 text-3xl" : "hover:text-amber-500"}`}
        >
          <Link
            onClick={isMobile ? toggleMobileMenu : undefined}
            to={item.toLowerCase()}
            smooth={true}
            duration={500}
          >
            {item}
          </Link>
        </li>
      ))}
    </ul>
  );

  // Social links sidebar
  const renderSocialLinks = () => (
    <div className="fixed hidden lg:flex flex-col left-0 top-[35%]">
      <ul>
        {SOCIAL_LINKS.map((link, index) => {
          const Icon = link.icon;
          const isLast = index === SOCIAL_LINKS.length - 1;
          const isFirst = index === 0;
          return (
            <li
              key={link.name}
              className={`flex justify-between items-center ${link.width} h-[60px] ${link.defaultMargin} ${link.hoverMargin} duration-300`}
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={link.url}
                className={`animate__animated animate__backInLeft animate__delay-${link.delay} ${
                  isLast ? "rounded-br-3xl" : isFirst ? "rounded-tr-3xl" : ""
                } text-blue-50 h-full ${link.bgColor} text-3xl flex justify-between items-center w-full`}
              >
                <p className={`${link.name === "Phone" ? "ml-[55px]" : "ml-1"} text-sm`}>
                  {link.label}
                </p>
                <Icon className={`${link.name === "Phone" ? "text-5xl" : "text-5xl"} mr-1`} />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );

  return (
    <div
      name="navbar"
      className={`z-10 text-white fixed w-full justify-between items-center flex h-[70px] px-4 ${
        isScrolled
          ? "bg-[#262626]"
          : "sm:bg-[#262626] lg:bg-transparent"
      }`}
    >
      {/* Logo */}
      <div className="animate__animated animate__backInLeft animate__delay-0s z-20 w-[140px]">
        <img src={logo} alt="Logo" />
      </div>

      {/* Desktop Menu */}
      {renderMenuItems(false)}

      {/* Mobile Menu Toggle */}
      <div
        onClick={toggleMobileMenu}
        className="md:hidden text-4xl z-10 cursor-pointer text-amber-500"
      >
        {!mobileMenuOpen ? <IoClose /> : <GiHamburgerMenu />}
      </div>

      {/* Mobile Menu */}
      {!mobileMenuOpen && renderMenuItems(true)}

      {/* Social Links Sidebar */}
      {renderSocialLinks()}
    </div>
  );
}