"use client";
import { useEffect, useState } from 'react';
import About from '../about/page';
import Skills from '../skills/page';
import Project from '../project/page';
import Contact from '../contact-us/page';
import Image from 'next/image';





function Homepage() {
  const [, setIsVisible] = useState(false);

  useEffect(() => {
    // Set a timeout to update the visibility after the component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500); // Adjust the delay as needed
    return () => clearTimeout(timer); // Cleanup the timeout
  }, []);

  return (
    <main>
      <div className=' mb-6 flex flex-col-reverse md:flex-row items-center justify-around min-h-screen'>
      {/* Text Section */}
      <div className="mt-8 md:mt-0 md:ml-4">
      <ul className="text-center md:text-left text-white">
        <li>
          <h4 className="text-yellow-500 font-semibold text-2xl md:text-3xl">Hi There,</h4>
        </li>
        <li className="overflow-hidden border-r-4 border-yellow-500 whitespace-nowrap text-3xl md:text-4xl font-bold text-white animate-typing">
          I&apos;m Muhammad Hamza
          <span className="animate-blink"></span>
        </li>
        <li>
          <h5 className="text-lg md:text-xl">Front-End Developer.</h5>
        </li>
        <li className="mt-5">
          <a href="/cv.pdf" download>
            <button className="relative px-4 py-2 text-sm md:text-base font-semibold text-white bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 rounded-lg shadow-lg transition duration-300 transform hover:scale-105 hover:shadow-xl">
              <span className="absolute inset-0 w-full h-full bg-yellow-700 rounded-lg opacity-0 transition-opacity duration-300 hover:opacity-20"></span>
              Download CV
            </button>
          </a>
        </li>
      </ul>

        <div className="flex mt-10 gap-6 justify-center md:justify-start">
        {/* GitHub */}
          <a href="https://github.com/MuhammadHamzaSheikh6"
          target="_blank"
           className=" relative group flex items-center">
            <div className="h-11 w-11 flex items-center justify-center transition-all duration-300 bg-gray-800 rounded-full group-hover:bg-gray-700">
              <Image className="h-8" src="/.icon/github.png" alt="GitHub"width={35} height={35}/>
            </div>
            <span className="absolute left-1/2 transform -translate-x-1/2 -translate-y-full mt-2 px-2 py-1 bg-gray-800 text-white text-sm rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              GitHub
            </span>
          </a>

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/muhammadhamzasheikh?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
           className="relative group flex items-center">
            <div className="h-11 w-11 flex items-center justify-center transition-all duration-300 bg-blue-700 rounded-full group-hover:bg-blue-600">
              <Image className="h-8" src="/.icon/linkedin.png" alt="LinkedIn" width={35} height={35} />
            </div>
            <span className="absolute left-1/2 transform -translate-x-1/2 -translate-y-full mt-2 px-2 py-1 bg-blue-700 text-white text-sm rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              LinkedIn
            </span>
          </a>

          {/* Instagram */}
          <a href="https://www.instagram.com/muhammad_hamza_sh8ikh?igsh=ZnYxd2ZxeW1hcjBh"
           target="_blank"
          className="relative group flex items-center">
            <div className="h-11 w-11 flex items-center justify-center transition-all duration-300 bg-pink-600 rounded-full group-hover:bg-pink-500">
              <Image className="h-8" src="/.icon/instagram.png" alt="Instagram" width={35} height={35} />
            </div>
            <span className="absolute left-1/2 transform -translate-x-1/2 -translate-y-full mt-2 px-2 py-1 bg-pink-600 text-white text-sm rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              Instagram
            </span>
          </a>

          {/* Facebook */}
          <a href="https://www.facebook.com/profile.php?id=100073351960056&mibextid=ZbWKwL"
           target="_blank"
           className="relative group flex items-center">
            <div className="h-11 w-11 flex items-center justify-center transition-all duration-300 bg-blue-600 rounded-full group-hover:bg-blue-500">
              <Image className="h-8" src="/.icon/facebook.png" alt="Facebook" width={35} height={35}/>
            </div>
            <span className="absolute left-1/2 transform -translate-x-1/2 -translate-y-full mt-2 px-2 py-1 bg-blue-600 text-white text-sm rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              Facebook
            </span>
          </a>
        </div>
      </div>  

      {/* Image Section */}
      <div className="relative flex justify-center items-center mb-8 md:mb-0 animate-slide-in-right pt-24 md:pt-0">
        <div className="relative animate-spin-slow hover:scale-110 transition-transform duration-300">
          <Image
            className=" object-cover rounded-full border-4 border-yellow-500 shadow-lg"
            src="/hamza2.jpg"
            alt="Hamza"
            width={288} height={288}
          />
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500 to-yellow-500 opacity-40 animate-pulse"></div>
        </div>
      </div>
    </div>
    <About/>
    <Skills/>
    <Project/>
    <Contact/>

    </main>   
    
      );
}

export default Homepage;
