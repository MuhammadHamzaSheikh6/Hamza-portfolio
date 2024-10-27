import Link from 'next/link';
import { FC } from 'react';

const Wel: FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center text-white">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-10 opacity-70"
      >
        <source src="/bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Welcome Text */}
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold">Welcome to My Portfolio</h1>
        <p className="text-lg max-w-md mx-auto">
          Bringing ideas to life on the web. Here’s a sneak peek into my work and passion!
        </p>

        {/* Button to navigate to home page */}
        <Link href="/home">
        <button className="relative px-6 py-3 bg-black/50 hover:bg-black/65 mt-4 font-semibold rounded-lg shadow-2xl border-2">
          Explore My Work
        </button>

        </Link>
      </div>
    </div>
  );
};

export default Wel;
