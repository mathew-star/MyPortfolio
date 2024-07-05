"use client";
import { useParams } from 'next/navigation';
import { projects } from '@/lib/constants'; // Adjust this path according to your project structure
import { CarouselImage } from '@/components/CarouselImage';

const ProjectDetail = () => {
  const params = useParams();
  const { id } = params;

  const project = projects.find((project) => project.id === id);

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col xl:flex-row justify-between gap-8">
        <div className="w-full xl:w-2/3 me-14">
          <h1 className="text-4xl text-accent font-bold mb-4">
            <span>{project.index}.</span>
            {project.title}
          </h1>
          {/* <p className="text-lg mb-4 whitespace-nowrap">{project.description}</p> */}

          <p className="text-lg mb-4">{project.detailedDescription}</p>

          <h2 className="text-2xl font-bold mb-2">Tech Stack</h2>
          <ul className="list-disc list-inside mb-4">
            {project.techStack.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>

          <div className="flex space-x-4">
            {project.links.live && (
              <a
                href={project.links.live}
                className="text-accent text-xl hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>
            )}

            {project.links.Demo && (
              <a
                href={project.links.Demo}
                className="text-accent text-xl hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo
              </a>
            )}

            <a
              href={project.links.github}
              className="text-accent text-xl hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="w-full xl:w-1/3 mb-8">
          <CarouselImage images={project.images} />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
