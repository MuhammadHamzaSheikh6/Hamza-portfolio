"use client";  // Add this line at the top
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link";

function Header() {
  return (
    <div className="flex justify-center">
      {/* Wrapper to center header horizontally */}
      <header className="animate-slide-in-top fixed top-4 w-11/12 md:w-4/5 lg:w-3/4 z-50 bg-violet-700 bg-opacity-10 backdrop-blur-md p-4 rounded-full shadow-lg">
        <nav className="flex justify-between items-center w-full px-4">
          {/* Logo */}
          <a href="/">         
            <h2 className="pl-4 font-serif text-white font-bold text-4xl">
              <span className="text-yellow-500">M</span>H.
            </h2>
          </a>

          {/* Desktop Navbar */}
          <ul className="hidden lg:flex font-sans gap-9 text-lg py-2 scroll-smooth">
            <li className="text-white hover:text-yellow-500 border-b-2 border-transparent hover:border-yellow-500 transition duration-200">
              <Link href="/home">HOME</Link>
            </li>
            <li className="text-white hover:text-yellow-500 border-b-2 border-transparent hover:border-yellow-500 transition duration-200">
              <Link href="#about">ABOUT ME</Link>
            </li>
            <li className="text-white hover:text-yellow-500 border-b-2 border-transparent hover:border-yellow-500 transition duration-200">
              <Link href="#skill">SKILLS</Link>
            </li>
            <li className="text-white hover:text-yellow-500 border-b-2 border-transparent hover:border-yellow-500 transition duration-200">
              <Link href="#project">PROJECTS</Link>
            </li>
            <li>
              <Link
                className="text-base px-4 py-2 drop-shadow-lg text-yellow-500 font-semibold bg-violet-600 hover:border-2 hover:border-yellow-500 rounded-xl"
                href="#contactus"
              >
                CONTACT US
              </Link>
            </li>
          </ul>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger className="md:hidden text-white text-4xl">☰</SheetTrigger>
            <SheetContent className="bg-violet-600">
              <SheetHeader>
                <SheetTitle>          
                  <a href="/">         
                  <h2 className="pl-4 font-serif text-white font-bold text-4xl">
                    <span className="text-yellow-500">M</span>H.
                  </h2>
                  </a>
                </SheetTitle>
                <SheetDescription>
                <ul className="space-y-7 pt-6">
                  <li className="text-xl text-black hover:text-yellow-500 border-b-2 border-transparent hover:border-yellow-500 transition duration-200">
                    <Link href="/home">HOME</Link>
                  </li>
                  <li className="text-xl text-black hover:text-yellow-500 border-b-2 border-transparent hover:border-yellow-500 transition duration-200">
                    <Link href="#about">ABOUT ME</Link>
                  </li>
                  <li className="text-xl text-black hover:text-yellow-500 border-b-2 border-transparent hover:border-yellow-500 transition duration-200">
                    <Link href="#skill">SKILLS</Link>
                  </li>
                  <li className="text-xl text-black hover:text-yellow-500 border-b-2 border-transparent hover:border-yellow-500 transition duration-200">
                    <Link href="#project">PROJECTS</Link>
                  </li>
                  <li className="text-xl">
                    <Link
                      className="text-base px-4 py-2 drop-shadow-lg text-yellow-500 font-semibold bg-black/50 hover:border-2 hover:border-yellow-500 rounded-xl"
                      href="#contactus"
                    >
                      CONTACT US
                    </Link>
                  </li> 
                </ul>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>



          {/* <div
            className={`fixed inset-y-0 right-0 w-1/2 h-full bg-violet-900 bg-opacity-90 z-50 transform ${
              isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
            } transition-transform duration-300 ease-in-out lg:hidden`}
          >
            <div className="flex justify-between items-center p-4">
              <h2 className="font-serif text-white font-bold text-4xl">
                <span className="text-yellow-500">M</span>H.
              </h2>
              <button
                className="text-white text-3xl focus:outline-none"
                onClick={toggleMenu}
              >
                ×
              </button>
            </div>
            <ul className="font-sans flex flex-col gap-6 p-4 text-lg">
              <li className="text-white hover:text-yellow-500">
                <Link href="/">HOME</Link>
              </li>
              <li className="text-white hover:text-yellow-500">
                <Link href="#about">ABOUT</Link>
              </li>
              <li className="text-white hover:text-yellow-500">
                <Link href="#skill">SKILLS</Link>
              </li>
              <li className="text-white hover:text-yellow-500">
                <Link href="#project">PROJECTS</Link>
              </li>
              <li>
                <Link
                  className="text-base px-4 py-2 drop-shadow-lg text-white bg-gradient-to-r from-violet-500 to-yellow-500 hover:from-yellow-500 to-violet-500 animate-pulse rounded-xl"
                  href="#contactus"
                >
                  CONTACT US
                </Link>
              </li>
            </ul>
          </div> */}
        </nav>
      </header>
    </div>
  );
}

export default Header;
