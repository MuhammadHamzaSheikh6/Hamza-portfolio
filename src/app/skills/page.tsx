'use client'
import Image from 'next/image';
import { useState } from 'react';

interface Skill {
  logo: string;
  name: string;
  description: string;
}

const SkillCard: React.FC<Skill> = ({ logo, name, description }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div
      className="relative w-72 h-72 md:w-52 md:h-52 rounded-lg overflow-hidden shadow-lg m-2 mx-auto sm:mx-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Front of the card (Logo) */}
      <div
        className={`absolute inset-0 flex items-center justify-center bg-violet-500 bg-opacity-50 backdrop-blur-md transition-transform duration-500 ease-in-out ${
          isHovered ? 'rotate-y-180' : 'rotate-y-0'
        }`}
        style={{
          backfaceVisibility: 'hidden',
          transformStyle: 'preserve-3d',
        }}
      >
        <Image src={logo} alt="Logo" width={150} height={100} />
      </div>

      {/* Back of the card (Text) */}
      <div
        className={`absolute inset-0 flex flex-col px-4 items-center justify-center bg-white text-violet-950 text-center transition-transform duration-500 ease-in-out ${
          isHovered ? 'rotate-y-0' : 'rotate-y-180'
        }`}
        style={{
          backfaceVisibility: 'hidden',
          transformStyle: 'preserve-3d',
        }}
      >
        <p className="text-lg font-bold m-2">{name}</p>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const frontEndSkills: Skill[] = [
    { logo: '/logo/html.png', name: 'HTML', description: 'Building structured, semantic, and accessible web content.' },
    { logo: '/logo/css.png', name: 'CSS', description: 'Designing responsive and visually appealing web layouts.' },
    { logo: '/logo/js.png', name: 'JavaScript', description: 'Creating interactive and dynamic web experiences.' },
    { logo: '/logo/ts.png', name: 'TypeScript', description: 'Writing maintainable, scalable code with type safety.' },
  ];

  const frameworksAndLibraries: Skill[] = [
    { logo: '/logo/Next.js.png', name: 'Next.js', description: 'Developing high-performance, SEO-optimized web applications.' },
    { logo: '/logo/Tailwind CSS.png', name: 'Tailwind CSS', description: 'Efficiently styling responsive, modern UI components.' },
  ];

  const tools: Skill[] = [
    { logo: '/logo/Figma.png', name: 'Figma', description: 'Turning design concepts into pixel-perfect web interfaces.' },
    { logo: '/logo/Git.png', name: 'Git', description: 'Managing version control and collaboration in software development.' },
  ];

  return (
    <div id="skill" className="space-y-8 m-4 mt-5 md:m-10 md:mx-16 text-white">
      {/* Front-End Development Section */}
      <div>
        <h2 className="text-3xl font-bold text-center">Front-End Development</h2>
        <div className=" flex flex-wrap justify-center space-x-4 p-4">
          {frontEndSkills.map((skill, index) => (
            <SkillCard key={index} logo={skill.logo} name={skill.name} description={skill.description} />
          ))}
        </div>
      </div>

      {/* Frameworks & Libraries Section */}
      <div>
        <h2 className="text-3xl font-bold text-center">Frameworks & Libraries</h2>
        <div className="flex flex-wrap justify-center space-x-4 p-4">
          {frameworksAndLibraries.map((skill, index) => (
            <SkillCard key={index} logo={skill.logo} name={skill.name} description={skill.description} />
          ))}
        </div>
      </div>

      {/* Tools Section */}
      <div>
        <h2 className="text-3xl font-bold text-center">Tools</h2>
        <div className="flex flex-wrap justify-center space-x-4 p-4">
          {tools.map((skill, index) => (
            <SkillCard key={index} logo={skill.logo} name={skill.name} description={skill.description} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
