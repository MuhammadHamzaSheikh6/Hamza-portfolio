import Image from 'next/image';

function About() {
    return (
        <section className='bg-white pb-16'>
            <div id="about" className="text-center pt-28">
                <h1 className="text-4xl text-violet-950 font-bold">About Us</h1>
                <p className='font-bold '><i>E-Commerce by chance | Developer by choice</i></p>
                <span className="block h-1 mx-72 bg-violet-950 mt-4"></span>
            </div>

            <div className='flex flex-col md:flex-row px-8 md:px-28 pt-12'>
                <div className='flex-1 flex justify-center mb-8 md:mb-0'>
                    <div className="relative flex items-center mb-8 md:mb-0 animate-slide-in-left pt-12">
                        <div className="relative animate-spin-slow hover:scale-110 transition-transform duration-300">
                            <Image
                                className="object-cover rounded-full border-4 border-violet-950 shadow-lg"
                                src="/hamza2.jpg"
                                alt="Profile Image" 
                                width={300} // Width of the image
                                height={300} // Height of the image
                            />
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600 to-yellow-600 opacity-50 animate-pulse"></div>
                        </div>
                    </div>
                </div>
                <div className='flex-1'>
                    <p className='font-sans text-base'>
                        <span className='font-bold font-mono text-2xl'>Hi,</span><br /> 
                        I&apos;m Hamza, a web developer specializing in Next.js and Tailwind CSS. I&apos;m passionate about creating 
                        modern, responsive websites that offer excellent user experiences. With a strong focus on emerging technologies 
                        like AI, Metaverse, and Web 3.0, I continuously strive to stay at the forefront of innovation. <br /><br /> 
                        My journey into tech has been fueled by a love for learning and growth, and I&apos;m always exploring new ways to refine my skills. 
                        I&apos;m dedicated to building strong client relationships through quality work and creative problem-solving, ensuring 
                        that each project meets the highest standards. <br /><br />
                        Whether you&apos;re looking to create a cutting-edge website or need a developer to bring your vision to life, I&apos;m here to help. 
                        Let&apos;s collaborate and turn your ideas into impactful web solutions!
                    </p>
                </div>
            </div>
            <span className="block h-1 mx-72 bg-violet-950 mt-16"></span>
        </section>
    );
}

export default About;
