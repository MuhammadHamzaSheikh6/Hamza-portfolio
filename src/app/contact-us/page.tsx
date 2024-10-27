// pages/contact.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

import React from 'react';
import Image from 'next/image';

export default function Contact() {
  return (
    <div id='contactus' className="min-h-screen  flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full bg-white shadow-md rounded-lg py-5 px-4 flex flex-col lg:flex-row">
        {/* Right: Contact Info (Text Section) */}
        <div className="w-full lg:w-1/2 p-4 lg:border-l lg:border-l-0 lg:pr-8"> {/* Adjust padding for mobile */}
          <h2 className="text-4xl font-bold text-center text-violet-950 mb-4">Contact us</h2>
          <p className="text-gray-600 mb-6 text-justify">
            Thank you for visiting my portfolio! If you have any questions, inquiries, or collaboration opportunities, please feel free to reach out. I would love to hear from you! You can contact me through the form below or via my social media links. I strive to respond to all messages as quickly as possible.
          </p>
          <div className="space-y-4">
            <div className="flex items-center text-violet-950">
              <span className="material-icons mr-3"><FontAwesomeIcon icon={faPhone} /></span>
              <span>+92 341 2358480</span>
            </div>
            <div className="flex items-center text-violet-950">
              <span className="material-icons mr-3"><FontAwesomeIcon icon={faEnvelope} /></span>
              <span>m.hamzashaikh6067@gmail.com</span>
            </div>
            <div className="flex items-center text-violet-950">
              <span className="material-icons mr-3"><FontAwesomeIcon icon={faLocationDot} /></span>
              <span>Karachi, Pakistan.</span>
            </div>
            <div className="flex justify-center space-x-4 pt-4">
              <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/muhammad_hamza_sh8ikh?igsh=ZnYxd2ZxeW1hcjBh">
                <span className="material-icons"><Image className="h-8 transition-transform duration-200 hover:scale-110" src="/.icon/instagram.png" alt="Instagram" width={35} height={35}/></span>
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/profile.php?id=100073351960056&mibextid=ZbWKwL">
                <span className="material-icons"><Image className="h-8 transition-transform duration-200 hover:scale-110" src="/.icon/facebook.png" alt="Facebook" width={35} height={35} /></span>
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/muhammadhamzasheikh?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                <span className="material-icons"><Image className="h-8 transition-transform duration-200 hover:scale-110" src="/.icon/linkedin.png" alt="LinkedIn" width={35} height={35} /></span>
              </a>
            </div>
          </div>
        </div>

        {/* Left: Form Section */}
        <div className="w-full lg:w-1/2 p-3"> {/* No margin adjustment needed */}
          <form className="space-y-4">
            <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:space-x-4">
              <div className="w-full lg:w-1/2">
                <label htmlFor="first-name" className="block text-sm font-semibold my-2 text-violet-950">
                  FIRST NAME
                </label>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  className="mt-4 h-9 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div className="w-full lg:w-1/2">
                <label htmlFor="last-name" className="block text-sm font-semibold my-2 text-violet-950">
                  LAST NAME
                </label>
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  className="mt-4 p-2 h-9 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:space-x-4">
              <div className="w-full lg:w-1/2">
                <label htmlFor="email" className="block text-sm font-semibold my-2 text-violet-950">
                  EMAIL
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="mt-4 h-9 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div className="w-full lg:w-1/2">
                <label htmlFor="phone" className="block text-sm font-semibold my-2 text-violet-950">
                  PHONE NUMBER
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className="mt-4 h-9 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold my-2 text-violet-950">
                WHAT DO YOU HAVE IN MIND?
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-4 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="my-5 inline-flex justify-center py-2 px-16 border border-transparent shadow-sm text-sm font-semibold rounded-md text-white bg-violet-900 hover:bg-violet-950 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
