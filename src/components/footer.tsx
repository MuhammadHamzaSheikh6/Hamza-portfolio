import Image from "next/image";

function Footer(){
    return(
        <footer className="bg-gradient-to-r  from-violet-950 to-black text-white py-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-around px-4">
          {/* Copyright Section */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-base">
              &copy; {new Date().getFullYear()} Muhammad Hamza. All rights reserved.
            </p>
          </div>
  
          {/* Social Media Links */}
          <div className="flex gap-4 justify-center md:justify-end">
            <a href="#" className="transition-transform duration-200 hover:scale-110">
              <Image className="" src="/.icon/github.png" alt="GitHub" width={30} height={30} />
            </a>
            <a href="#" className="transition-transform duration-200 hover:scale-110">
              <Image className="h-8" src="/.icon/linkedin.png" alt="LinkedIn" width={30} height={30} />
            </a>
            <a href="#" className="transition-transform duration-200 hover:scale-110">
              <Image className="h-8" src="/.icon/instagram.png" alt="Instagram" width={30} height={30} />
            </a>
            <a href="#" className="transition-transform duration-200 hover:scale-110">
              <Image className="h-8" src="/.icon/facebook.png" alt="Facebook" width={30} height={30} />
            </a>
          </div>
        </div>
      </footer>
    )
}
export default Footer;