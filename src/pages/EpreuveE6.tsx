import { Shield, Lock, UserCheck, RefreshCw, Server, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";

const EpreuveE6 = () => {
  const objectives = [
    "Sécuriser les systèmes et les réseaux",
    "Gérer les accès et les identités",
    "Assurer la continuité et la conformité des services",
  ];

  const competences = [
    { icon: <Lock className="w-5 h-5" />, label: "Sécurisation des accès (Active Directory, LDAP)" },
    { icon: <UserCheck className="w-5 h-5" />, label: "Gestion des droits utilisateurs" },
    { icon: <RefreshCw className="w-5 h-5" />, label: "Mise à jour et correctifs de sécurité" },
    { icon: <Server className="w-5 h-5" />, label: "Continuité de service (infrastructure, réseaux)" },
  ];

  return (
    <Layout>
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            icon="📘"
            title="Épreuve E6"
            subtitle="Cybersécurité des services informatiques"
          />

          {/* Main description */}
          <div className="tech-card mb-10">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-primary/10 text-primary">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Présentation de l'épreuve E6
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  L'épreuve E6 – Cybersécurité des services informatiques vise à évaluer la capacité à :
                </p>
                <ul className="space-y-2">
                  {objectives.map((objective, index) => (
                    <li key={index} className="flex items-center gap-3 text-foreground">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      {objective}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Competences */}
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Compétences mises en œuvre
          </h2>

          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {competences.map((comp, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:border-primary/30 transition-colors"
              >
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  {comp.icon}
                </div>
                <span className="text-foreground">{comp.label}</span>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
            <p className="text-muted-foreground leading-relaxed">
              <span className="text-primary font-semibold">Note :</span> Les projets présentés 
              dans ce portfolio illustrent les compétences mobilisées pour cette épreuve.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EpreuveE6;
