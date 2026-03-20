import { FileText, Github, Download, ExternalLink } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import cvImage from "@/assets/cv-emmanuel-dounga.png";
import tableauE4Image from "@/assets/tableau-synthese-e4.png";

const Documents = () => {
  const documents = [
    {
      title: "Curriculum Vitae",
      image: cvImage,
      alt: "CV Emmanuel Dounga",
      downloadHref: "/documents/cv-emmanuel-dounga.pdf",
      downloadLabel: "Télécharger le CV (PDF)",
    },
    {
      title: "Tableau de Synthèse – Épreuve E4",
      image: tableauE4Image,
      alt: "Tableau de synthèse E4",
      downloadHref: "/documents/tableau-synthese-e4.pdf",
      downloadLabel: "Télécharger le tableau (PDF)",
    },
  ];

  return (
    <Layout>
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            icon="📄"
            title="Documents"
            subtitle="CV et Tableau de synthèse E4"
          />

          <ScrollReveal>
            <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 mb-10 flex items-center gap-3">
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

          <div className="grid gap-10">
            {documents.map((doc, index) => (
              <ScrollReveal key={index} delay={index * 0.12}>
                <div className="tech-card group">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <FileText className="w-5 h-5" />
                    </div>
                    <h2 className="text-xl font-semibold text-foreground">{doc.title}</h2>
                  </div>
                  
                  <div className="rounded-xl overflow-hidden border border-border mb-5 group-hover:border-primary/30 transition-colors">
                    <img
                      src={doc.image}
                      alt={doc.alt}
                      className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.01]"
                      loading="lazy"
                    />
                  </div>
                  
                  <Button asChild variant="outline" className="border-border hover:border-primary hover:text-primary active:scale-[0.97]">
                    <a href={doc.downloadHref} target="_blank" rel="noopener noreferrer">
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

export default Documents;
