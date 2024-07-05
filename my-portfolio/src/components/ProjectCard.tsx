
import { MagicCard } from "@/components/magicui/magic-card";
import Link from "next/link";
import { BsArrowRightCircleFill } from "react-icons/bs";


interface ProjectCardProps {
  id:string;
  title: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({id, title, description }) => {
  return (
    <MagicCard className="flex relative w-full cursor-pointer flex-col items-center justify-center overflow-hidden bg-[radial-gradient(var(--mask-size)_circle_at_var(--mouse-x)_var(--mouse-y),#28a745_0,#28a745_50%,transparent_100%)] p-10 shadow-2xl mb-6">
      <h3 className="z-10 mb-5 whitespace-nowrap text-2xl font-medium text-accent dark:text-gray-200">
        {title}
      </h3>
      <p className="z-10 mb-5 text-center text-lg text-white dark:text-gray-300">
        {description}
      </p>
      <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      <div className="absolute right-2 bottom-2">
        <Link href={`/Works/${id}`} > <BsArrowRightCircleFill className="w-10 h-10 text-accent"/> </Link>
        
      </div>
    </MagicCard>
  );
};

export default ProjectCard;
