import { Search, Server, Network, Shield, Wrench, Globe, FileText, MessageSquare, Linkedin } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import ScrollReveal from "@/components/ScrollReveal";

const Veille = () => {
  const themes = [
    { icon: <Server className="w-5 h-5" />, label: "Administration systèmes (Windows Server, Linux)" },
    { icon: <Network className="w-5 h-5" />, label: "Réseaux et infrastructures" },
    { icon: <Shield className="w-5 h-5" />, label: "Sécurité informatique" },
    { icon: <Wrench className="w-5 h-5" />, label: "Outils ITSM (GLPI)" },
  ];

  const tools = [
    { icon: <Globe className="w-5 h-5" />, label: "Sites spécialisés" },
    { icon: <FileText className="w-5 h-5" />, label: "Documentation officielle" },
    { icon: <MessageSquare className="w-5 h-5" />, label: "Forums techniques" },
    { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn et communautés professionnelles" },
  ];

  return (
    <Layout>
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            icon="🔎"
            title="Veille technologique"
            subtitle="Suivre l'évolution des technologies pour maintenir ses compétences à jour"
          />

          <ScrollReveal>
            <div className="tech-card mb-10">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary flex-shrink-0">
                  <Search className="w-6 h-6" />
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  La veille technologique consiste à suivre l'évolution des technologies 
                  afin de maintenir ses compétences à jour et rester compétitif dans le domaine informatique.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal direction="left" delay={0.1}>
              <div className="tech-card h-full">
                <h3 className="text-xl font-semibold text-foreground mb-6">Thèmes de veille</h3>
                <div className="space-y-3">
                  {themes.map((theme, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
                      <div className="text-primary">{theme.icon}</div>
                      <span className="text-foreground">{theme.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.15}>
              <div className="tech-card h-full">
                <h3 className="text-xl font-semibold text-foreground mb-6">Outils utilisés</h3>
                <div className="space-y-3">
                  {tools.map((tool, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
                      <div className="text-primary">{tool.icon}</div>
                      <span className="text-foreground">{tool.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Veille;
