import { BookOpen, CheckCircle, FileText, Download, Github, ExternalLink } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";

const EpreuveE5 = () => {
  const competences = [
    "Gérer le patrimoine informatique",
    "Répondre aux incidents et demandes d'assistance et d'évolution",
    "Développer la présence en ligne de l'organisation",
    "Travailler en mode projet",
    "Mettre à disposition des utilisateurs un service informatique",
    "Organiser son développement professionnel",
  ];

  const documents = [
    {
      title: "Curriculum Vitae",
      pdfPath: "/documents/cv-emmanuel-dounga.pdf",
      downloadLabel: "Télécharger le CV (PDF)",
    },
    {
      title: "Tableau de Synthèse – Épreuve E4",
      pdfPath: "/documents/tableau-synthese-e4.pdf",
      downloadLabel: "Télécharger le tableau (PDF)",
    },
  ];

  return (
    <Layout>
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            icon="📋"
            title="Épreuve E5"
            subtitle="Support et mise à disposition de services informatiques"
          />

          <ScrollReveal>
            <div className="tech-card mb-10">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary flex-shrink-0">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Objectif</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Cette épreuve vise à évaluer chez la personne candidate l'acquisition des compétences décrites dans le bloc de compétences « Support et mise à disposition de services informatiques », à savoir :
                  </p>
                  <ul className="space-y-2">
                    {competences.map((comp, index) => (
                      <li key={index} className="flex items-center gap-3 text-foreground">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        {comp}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Documents Section */}
          <ScrollReveal delay={0.1}>
            <h2 className="text-2xl font-bold text-foreground mb-6">Documents</h2>
          </ScrollReveal>

          <ScrollReveal delay={0.12}>
            <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 mb-8 flex items-center gap-3">
              <Github className="w-5 h-5 text-primary flex-shrink-0" />
              <p className="text-muted-foreground">
                Les versions <span className="text-foreground font-medium">PDF</span> et{" "}
                <span className="text-foreground font-medium">Excel</span> sont disponibles sur{" "}
                <a
                  href="https://github.com/emmax2306"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium inline-flex items-center gap-1"
                >
                  GitHub <ExternalLink className="w-3 h-3" />
                </a>.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-8">
            {documents.map((doc, index) => (
              <ScrollReveal key={index} delay={0.15 + index * 0.1}>
                <div className="tech-card group">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <FileText className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{doc.title}</h3>
                  </div>

                  <div className="rounded-xl overflow-hidden border border-border mb-5 group-hover:border-primary/30 transition-colors">
                    <embed
                      src={doc.pdfPath}
                      type="application/pdf"
                      className="w-full"
                      style={{ height: "700px" }}
                    />
                  </div>

                  <Button asChild variant="outline" className="border-border hover:border-primary hover:text-primary active:scale-[0.97]">
                    <a href={doc.pdfPath} target="_blank" rel="noopener noreferrer">
                      <Download className="w-4 h-4 mr-2" />
                      {doc.downloadLabel}
                    </a>
                  </Button>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EpreuveE5;
