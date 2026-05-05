import { GraduationCap, Code, Server, CheckCircle, Briefcase, BookOpen } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import ScrollReveal from "@/components/ScrollReveal";

const BtsSio = () => {
  const sisrSkills = [
    "Administrer des systèmes Windows Server et Linux (Debian, Ubuntu)",
    "Concevoir et gérer des réseaux (VLAN, routage, pare-feu)",
    "Déployer et maintenir des services (DNS, DHCP, Apache, AD)",
    "Assurer la cybersécurité et la conformité (RGPD, politiques de sécurité)",
    "Gérer un parc informatique avec des outils ITSM (GLPI, iTop)",
    "Superviser et monitorer des infrastructures",
  ];

  const slamSkills = [
    "Concevoir et développer des applications métiers",
    "Gérer des bases de données relationnelles",
    "Développer des sites web et applications mobiles",
    "Assurer la maintenance et l'évolution des solutions logicielles",
  ];

  const debouchesSisr = [
    { title: "Administrateur systèmes et réseaux", desc: "Gérer l'infrastructure IT d'une entreprise" },
    { title: "Technicien support / Helpdesk N1-N2", desc: "Assurer le support technique aux utilisateurs" },
    { title: "Technicien réseaux", desc: "Installer et maintenir les équipements réseau" },
    { title: "Responsable parc informatique", desc: "Gérer l'inventaire et le déploiement des postes" },
    { title: "Technicien cybersécurité", desc: "Protéger les systèmes et données de l'entreprise" },
  ];

  const debouchesSlam = [
    { title: "Développeur d'applications", desc: "Concevoir des logiciels métiers" },
    { title: "Développeur web / mobile", desc: "Créer des sites et applications" },
    { title: "Analyste programmeur", desc: "Analyser les besoins et développer des solutions" },
    { title: "Intégrateur web", desc: "Intégrer des maquettes et interfaces utilisateur" },
  ];

  return (
    <Layout>
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            icon="🎓"
            title="Le BTS SIO"
            subtitle="Brevet de Technicien Supérieur – Services Informatiques aux Organisations"
          />

          {/* Qu'est-ce que le BTS SIO ? */}
          <ScrollReveal>
            <div className="tech-card mb-10">
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
                <BookOpen className="w-5 h-5 text-primary" />
                Qu'est-ce que le BTS SIO ?
              </h3>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  Le <span className="text-foreground font-semibold">BTS SIO</span> (Brevet de Technicien Supérieur – Services Informatiques aux Organisations) 
                  est un diplôme d'État de niveau Bac+2 qui forme des professionnels de l'informatique en <span className="text-foreground font-medium">deux ans</span>.
                </p>
                <p>
                  Cette formation prépare les étudiants à devenir des techniciens capables de répondre aux besoins informatiques 
                  des entreprises : installation, maintenance, sécurité des systèmes d'information, développement d'applications 
                  ou gestion d'infrastructures réseau.
                </p>
                <p>
                  Le BTS SIO propose <span className="text-foreground font-medium">deux spécialisations</span> (options) 
                  permettant de se diriger soit vers l'infrastructure et les réseaux, soit vers le développement logiciel.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Les deux options */}
          <ScrollReveal delay={0.1}>
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-primary" />
              Les deux options du BTS SIO
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* SLAM */}
            <ScrollReveal delay={0.15} direction="left">
              <div className="tech-card h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-secondary text-muted-foreground">
                    <Code className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Option SLAM</h3>
                    <p className="text-xs text-muted-foreground font-medium">Solutions Logicielles et Applications Métiers</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  L'option SLAM forme des développeurs capables de concevoir, coder et maintenir des applications 
                  informatiques répondant aux besoins spécifiques des organisations.
                </p>
                <div className="space-y-2">
                  {slamSkills.map((skill, index) => (
                    <div key={index} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* SISR */}
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
                    <p className="text-xs text-muted-foreground font-medium">Solutions d'Infrastructure, Systèmes et Réseaux</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  L'option SISR forme des techniciens spécialisés dans l'installation, la configuration et la maintenance 
                  des infrastructures réseau et des systèmes informatiques des entreprises.
                </p>
                <div className="space-y-2">
                  {sisrSkills.map((skill, index) => (
                    <div key={index} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Débouchés */}
          <ScrollReveal delay={0.1}>
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <Briefcase className="w-6 h-6 text-primary" />
              Débouchés professionnels
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <ScrollReveal delay={0.15}>
              <div className="tech-card h-full">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Server className="w-4 h-4 text-primary" />
                  Débouchés SISR
                </h3>
                <div className="space-y-3">
                  {debouchesSisr.map((d, index) => (
                    <div key={index} className="border-l-2 border-primary/30 pl-3">
                      <p className="text-foreground font-medium text-sm">{d.title}</p>
                      <p className="text-muted-foreground text-xs">{d.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="tech-card h-full">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Code className="w-4 h-4 text-primary" />
                  Débouchés SLAM
                </h3>
                <div className="space-y-3">
                  {debouchesSlam.map((d, index) => (
                    <div key={index} className="border-l-2 border-muted/50 pl-3">
                      <p className="text-foreground font-medium text-sm">{d.title}</p>
                      <p className="text-muted-foreground text-xs">{d.desc}</p>
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

export default BtsSio;
