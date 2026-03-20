import { Folder, ChevronRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

interface ProjectCardProps {
  title: string;
  tasks: string[];
  index?: number;
}

const ProjectCard = ({ title, tasks, index = 0 }: ProjectCardProps) => {
  return (
    <ScrollReveal delay={index * 0.08}>
      <div className="project-card group h-full">
        <div className="flex items-start gap-3 mb-5">
          <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 mt-0.5">
            <Folder className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-semibold text-foreground leading-snug">{title}</h3>
        </div>
        <ul className="space-y-2.5 pl-1">
          {tasks.map((task, i) => (
            <li key={i} className="text-muted-foreground text-sm flex items-start gap-2.5 group/item">
              <ChevronRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0 opacity-60 group-hover/item:opacity-100 transition-opacity" />
              <span className="group-hover/item:text-foreground transition-colors">{task}</span>
            </li>
          ))}
        </ul>
      </div>
    </ScrollReveal>
  );
};

export default ProjectCard;
