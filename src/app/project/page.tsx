'use client';
import { useState, useEffect } from "react";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  imgSrc: string;
  link: string; // Add link property
  imglink: string;
}

const projects: Project[] = [
  {
    title: "E-Commerce Website",
    description:
      "This e-commerce website is built with Next.js and Tailwind CSS, offering a modern and responsive design. It provides a smooth, user-friendly experience across all devices.",
    imgSrc: "/project/ec.png",
    link: "https://github.com/MuhammadHamzaSheikh6/E-Commerce", // Replace with your link
    imglink: "https://t-shirts-e-commerce.vercel.app/",
  },
  {
    title: "Dynamic Resume Builder",
    description:
      "A resume builder built with HTML, CSS, and TypeScript that allows users to create and customize resumes in real-time with an interactive form.",
    imgSrc: "/project/cv.png",
    link: "https://github.com/MuhammadHamzaSheikh6/Dynamic-Resume-Builder", // Replace with your link
    imglink: "https://dynamic-resume-builder6067.vercel.app/",
  },
  {
    title: "Real Estate Website",
    description:
      "A dynamic real estate platform for showcasing property listings, built with Next.js and integrated with a map API.",
    imgSrc: "/project/ma.png",
    link: "https://github.com/MuhammadHamzaSheikh6/Real-state-website", // Replace with your link
    imglink: "https://real-state-website-puce.vercel.app/",
  },
];

export default function ProjectSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  // Automatic slider change every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 5000); // Change the project every 5000 milliseconds (5 seconds)

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const { title, description, imgSrc, link, imglink } = projects[currentIndex];

  return (
    <section id="project" className="z-0 w-full h-auto bg-white">
      <h3 className="pt-8 text-4xl text-violet-950 font-bold text-center">Projects</h3>
      <div className="flex justify-center py-12">
        <div className="shadow-2xl  relative z-10 px-6 md:px-20 h-[500px] md:h-[400px] w-full md:w-[1100px]  rounded-2xl bg-[#10002b] text-white flex flex-col md:flex-row items-center justify-center">
          {/* Left Section */}
          <div className="mb-6 md:mb-0 md:mr-6">
            <h3 className="text-lg lg:text-2xl pb-6 text-yellow-500">{title}</h3>
            <p className="lg:text-lg lg:text-justify pr-6">{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer">
              {/* Link for the button */}
              <button className="px-3 py-1 rounded-lg mt-6 lg:px-8 lg:py-2 font-semibold text-base bg-yellow-600 hover:bg-yellow-900">
                More Details
              </button>
            </a>
          </div>

          {/* Right Section */}
          <div>
            <a href={imglink} target="_blank" rel="noopener noreferrer">
              {/* Link for the image */}
              <Image
                src={imgSrc}
                alt={title}
                width={500}
                height={700}
                className="transition-transform duration-200 hover:scale-110 rounded-xl border-4 w-max border-white"
              />
            </a>
          </div>

          {/* Arrow Buttons */}
          <button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-violet-600 hover:bg-yellow-900 rounded-full p-2"
          >
            &lt;
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-violet-600 hover:bg-yellow-900 rounded-full p-2"
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
}
