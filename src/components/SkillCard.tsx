import { ReactNode } from "react";
import ScrollReveal from "./ScrollReveal";

interface SkillCardProps {
  icon: ReactNode;
  title: string;
  skills: string[];
  index?: number;
}

const SkillCard = ({ icon, title, skills, index = 0 }: SkillCardProps) => {
  return (
    <ScrollReveal delay={index * 0.1}>
      <div className="tech-card group">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-foreground">{title}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, i) => (
            <span key={i} className="skill-badge">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
};

export default SkillCard;
