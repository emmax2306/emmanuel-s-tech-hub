import { Server, CheckCircle, Network, Settings, AlertTriangle } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import ScrollReveal from "@/components/ScrollReveal";

const EpreuveE6 = () => {
  const competences = [
    { icon: <Network className="w-5 h-5" />, label: "Concevoir une solution d'infrastructure réseau" },
    { icon: <Settings className="w-5 h-5" />, label: "Installer, tester et déployer une solution d'infrastructure réseau" },
    { icon: <AlertTriangle className="w-5 h-5" />, label: "Exploiter, dépanner et superviser une infrastructure réseau" },
  ];

  return (
    <Layout>
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            icon="🖧"
            title="Épreuve E6"
            subtitle="Administration des systèmes et des réseaux"
          />

          <ScrollReveal>
            <div className="tech-card mb-10">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary flex-shrink-0">
                  <Server className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Objectif</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Cette épreuve vise à évaluer chez la personne candidate l'acquisition des compétences décrites dans le bloc de compétences « Administration des systèmes et des réseaux » propre à l'option « Solutions d'infrastructure, systèmes et réseaux » (SISR), à savoir :
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Compétences évaluées
            </h2>
          </ScrollReveal>

          <div className="grid gap-4 mb-10">
            {competences.map((comp, index) => (
              <ScrollReveal key={index} delay={0.1 + index * 0.08}>
                <div className="flex items-center gap-4 p-5 rounded-xl border border-border bg-card hover:border-primary/30 transition-all duration-300 group active:scale-[0.98]">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    {comp.icon}
                  </div>
                  <span className="text-foreground font-medium">{comp.label}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.2}>
            <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
              <p className="text-muted-foreground leading-relaxed">
                <span className="text-primary font-semibold">Note :</span> Les projets présentés
                dans ce portfolio illustrent les compétences mobilisées pour cette épreuve, notamment la configuration d'infrastructures réseau, le déploiement de solutions et la supervision.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default EpreuveE6;
