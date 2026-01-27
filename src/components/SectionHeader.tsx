interface SectionHeaderProps {
  icon?: string;
  title: string;
  subtitle?: string;
}

const SectionHeader = ({ icon, title, subtitle }: SectionHeaderProps) => {
  return (
    <div className="text-center mb-12 animate-slide-up">
      {icon && <span className="text-4xl mb-4 block">{icon}</span>}
      <h1 className="section-title">{title}</h1>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
