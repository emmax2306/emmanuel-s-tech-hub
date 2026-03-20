import { GraduationCap, Code, Server, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import ScrollReveal from "@/components/ScrollReveal";

const BtsSio = () => {
  const sisrSkills = [
    "Administrer des systèmes Windows et Linux",
    "Gérer des réseaux informatiques",
    "Déployer et maintenir des services",
    "Assurer le support et la sécurité des infrastructures",
  ];

  return (
    <Layout>
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            icon="🎓"
            title="Présentation du BTS SIO"
            subtitle="Services Informatiques aux Organisations"
          />

          <ScrollReveal>
            <div className="tech-card mb-10">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Le BTS Services Informatiques aux Organisations (SIO) forme des techniciens capables 
                d'installer, d'administrer et de maintenir des solutions informatiques au sein des organisations.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-primary" />
              Deux options disponibles
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <ScrollReveal delay={0.15} direction="left">
              <div className="tech-card opacity-60 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-secondary text-muted-foreground">
                    <Code className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Option SLAM</h3>
                    <p className="text-sm text-muted-foreground">Solutions Logicielles et Applications Métiers</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">Développement d'applications</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2} direction="right">
              <div className="tech-card border-primary/50 relative h-full">
                <div className="absolute -top-3 -right-3 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full shadow-lg">
                  Mon option
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                    <Server className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Option SISR</h3>
                    <p className="text-sm text-muted-foreground">Solutions d'Infrastructure, Systèmes et Réseaux</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">Systèmes, réseaux et infrastructures</p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.1}>
            <div className="tech-card">
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
                <Server className="w-5 h-5 text-primary" />
                L'option SISR permet de
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {sisrSkills.map((skill, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default BtsSio;
