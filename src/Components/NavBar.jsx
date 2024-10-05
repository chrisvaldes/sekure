import React, { useEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom';
import union from "../images/Union (2).png";
import logo from "../images/mobile/navbar/logo.png"
import arrowWhite from '../images/arrowfontWhite.png'
import iconMessage from '../images/icon-message-fontWhite.png'

export default function NavBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(null);
  const sidebarRef = useRef(null);
  const menuButtonRef = useRef(null); // Référence pour le bouton de menu

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    toggleAccordion(null)
  };

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const handleClickOutside = (event) => {
    // Vérifie si le clic provient de la sidebar ou du bouton de menu
    if (
      sidebarRef.current && !sidebarRef.current.contains(event.target) &&
      menuButtonRef.current && !menuButtonRef.current.contains(event.target)
    ) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="nav-section">
      <div className="flex">
        <nav className="bg-white flex fixed top-0 z-50  w-full border rounded-none border-white/80 backdrop-blur-2xl backdrop-saturate-200 lg:px-8 px-5">
          <div className="sm:px-6 lg:px-8 w-full">
            <div className="flex h-16 items-center justify-between">

              <div className="menu-bars" ref={menuButtonRef} onClick={toggleSidebar}>
                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>

              <div className="md:flex md:items-center md:gap-12">
              <div className="menu-bars-md" ref={menuButtonRef} onClick={toggleSidebar}>
                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
              
                <div className="block">
                  <div className="logo flex items-center justify-center">
                    <img src={logo} alt="" />
                  </div>
                </div>
              </div>

              <div className="nav-items">
                <nav aria-label="Global">
                  <ul className="flex items-center gap-6 text-sm">
                    <li class="flex items-center justify-center gap-2">
                      <Link className="text-nowrap text-nav" to="/accueil">
                        Accueil
                      </Link>
                    </li>

                    <li class="flex items-center justify-center gap-2">
                      <Link className=" text-nav text-nowrap" to="/customer">
                        Know your customer
                      </Link>
                    </li>

                    <li class="flex items-center justify-center gap-2">
                      <Link className="text-nav text-nowrap" to="/screening">
                        AML Screening
                      </Link>
                    </li>

                    <li class="flex items-center justify-center gap-2">
                      <Link className="text-nav text-nowrap" to="/pricing">
                        Pricing
                      </Link>
                    </li>

                    <li class="flex items-center justify-center gap-2">
                      <Link className="text-nav text-nowrap" to="/about">
                        About us
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="flex items-center justify-center">
                <img src={union} alt="" className="" />
                <select name="" id="">
                  <option value="">
                    <div className="flex items-center justify-center gap-x-2">
                      <div class="nav-language">
                        CMR
                      </div>
                    </div>
                  </option>
                  <option value="">
                    <div className="flex items-center justify-center gap-x-2">
                      <div class="nav-language">
                        FR
                      </div>
                    </div>
                  </option>
                  <option value="">
                    <div className="flex items-center justify-center gap-x-2">
                      <div class="nav-language">
                        CA
                      </div>
                    </div>
                  </option>
                  <option value="">
                    <div className="flex items-center justify-center gap-x-2">
                      <div class="nav-language">
                        FR
                      </div>
                    </div>
                  </option>
                </select>
                <div className="flex items-center gap-4 pl-2">
                  <div className="nav-group-btn">
                    <div className="flex items-center justify-center gap-x-3">
                      <div className="flex items-center justify-center gap-x-2">
                        <Link to='/' className="navbar-btn  flex items-center justify-center bg-green-color">
                          <span>Connexion</span>
                          <img src={arrowWhite} alt="" />
                        </Link>
                        <Link to="/pricing" className="navbar-btn flex items-center justify-center bg-green-deep" href="#">
                          <span>Contacter</span>
                          <img src={iconMessage} alt="" />
                        </Link>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </nav>

        {/* Sidebar */}
        <div>
          <nav
            id="sidebar"
            ref={sidebarRef}
            className={`fixed bg-[#F3F3F3]  flex items-center justify-center  w-full px-2 transform flex-col overflow-y-auto 
              pt-10 pb-8 h-5/12 z-30 transition-transform duration-300 ${isSidebarOpen ? 'translate-y-10' : '-translate-y-full'}`}
          >

            <li className="sidebar-li hover:text-white hover:bg-green-deep">
              <Link className="w-full" to="/">
                <span className="flex-grow">Accueil</span>
              </Link>
            </li>
            <li className="sidebar-li hover:text-white hover:bg-green-deep">
              <Link className="w-full" to="/">
                <span className="flex-grow">Know your customer</span>
              </Link>
            </li>
            <li className="sidebar-li hover:text-white hover:bg-green-deep">
              <Link className="w-full" to="/">
                <span className="flex-grow">AML Screening</span>
              </Link>
            </li>
            <li className="sidebar-li hover:text-white hover:bg-green-deep">
              <Link className="w-full" to="/">
                <span className="flex-grow">Pricing</span>
              </Link>
            </li>
            <li className="sidebar-li-about hover:text-white hover:bg-green-deep">
              <Link className="w-full" to="/">
                <span className="flex-grow">About us</span>
              </Link>
            </li>
            <div className="flex items-center gap-4">
              <div className="sidebar-group-btn">
                <div className="flex flex-wrap items-center justify-center gap-10 pt-5 z-10 gap-x-3">
                  <Link to='/' className="navbar-btn  flex items-center justify-center bg-green-color">
                    <span>Connexion</span>
                    <img src={arrowWhite} alt="" />
                  </Link>
                  <Link to="/pricing" className="navbar-btn flex items-center justify-center bg-green-deep" href="#">
                    <span>Contacter</span>
                    <img src={iconMessage} alt="" />
                  </Link>
                </div>
              </div>
            </div>
          </nav>


        </div>

      </div>
    </div>
  );
}