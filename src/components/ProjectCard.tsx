import { Folder } from "lucide-react";

interface ProjectCardProps {
  title: string;
  tasks: string[];
}

const ProjectCard = ({ title, tasks }: ProjectCardProps) => {
  return (
    <div className="project-card">
      <div className="flex items-start gap-3 mb-4">
        <Folder className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      </div>
      <ul className="space-y-2 pl-8">
        {tasks.map((task, index) => (
          <li 
            key={index} 
            className="text-muted-foreground text-sm flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectCard;
