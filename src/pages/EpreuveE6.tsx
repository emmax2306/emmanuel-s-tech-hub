import { Server, CheckCircle, Network, Settings, AlertTriangle, FileText, Download } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";

const EpreuveE6 = () => {
  const competences = [
    { icon: <Network className="w-5 h-5" />, label: "Concevoir une solution d'infrastructure réseau" },
    { icon: <Settings className="w-5 h-5" />, label: "Installer, tester et déployer une solution d'infrastructure réseau" },
    { icon: <AlertTriangle className="w-5 h-5" />, label: "Exploiter, dépanner et superviser une infrastructure réseau" },
  ];
  const etapes = [
    "Présentation du contexte professionnel et des réalisations choisies.",
    "Exposé des solutions techniques (architecture, déploiement, sécurité, supervision).",
    "Démonstration/justification des choix techniques et des résultats obtenus.",
    "Entretien avec le jury : questions techniques, dépannage, bonnes pratiques.",
  ];
  const fiches = [
    {
      title: "Fiche 1 - Routage inter-VLAN",
      pdfPath: "/documents/E6%20fiche%201%20ROUTAGE%20INTER%20VLAN%20.pdf",
      downloadLabel: "Télécharger la fiche 1 (PDF)",
    },
    {
      title: "Fiche 2 - Redondance Active Directory",
      pdfPath: "/documents/E6_SISR%20FICHE%202%20redondance%20AD.pdf",
      downloadLabel: "Télécharger la fiche 2 (PDF)",
    },
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
            <div className="tech-card mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Déroulement de l'épreuve E6</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                L'épreuve E6 évalue ta capacité à concevoir, déployer et administrer une infrastructure
                systèmes et réseaux en t'appuyant sur des réalisations concrètes.
              </p>
              <div className="grid gap-3">
                {etapes.map((etape, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-secondary/40">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-foreground text-sm">{etape}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.24}>
            <div className="tech-card mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Fiches de réalisation</h2>
              <p className="text-muted-foreground mb-5">
                Tu peux consulter ici mes fiches de réalisation présentées pour l'épreuve E6.
              </p>
              <div className="grid gap-8">
                {fiches.map((fiche, index) => (
                  <div key={fiche.pdfPath} className="p-4 rounded-xl border border-border bg-card">
                    <div className="flex items-center gap-2 text-foreground font-medium mb-4">
                      <FileText className="w-4 h-4 text-primary" />
                      <span>{fiche.title}</span>
                    </div>

                    <div className="rounded-xl overflow-hidden border border-border mb-4">
                      <embed
                        src={fiche.pdfPath}
                        type="application/pdf"
                        className="w-full"
                        style={{ height: "700px" }}
                      />
                    </div>

                    <Button asChild variant="outline" className="border-border hover:border-primary hover:text-primary active:scale-[0.97]">
                      <a href={fiche.pdfPath} target="_blank" rel="noopener noreferrer">
                        <Download className="w-4 h-4 mr-2" />
                        {fiche.downloadLabel}
                      </a>
                    </Button>
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

export default EpreuveE6;
