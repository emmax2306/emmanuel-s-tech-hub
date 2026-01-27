import { FileText, Github, Download } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import cvImage from "@/assets/cv-emmanuel-dounga.png";
import tableauE4Image from "@/assets/tableau-synthese-e4.png";

const Documents = () => {
  return (
    <Layout>
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            icon="📄"
            title="Documents"
            subtitle="CV et Tableau de synthèse E4"
          />

          {/* GitHub Notice */}
          <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 mb-10 flex items-center gap-3">
            <Github className="w-5 h-5 text-primary flex-shrink-0" />
            <p className="text-muted-foreground">
              Les versions <span className="text-foreground font-medium">PDF</span> et{" "}
              <span className="text-foreground font-medium">Excel</span> de ces documents sont disponibles sur{" "}
              <a 
                href="https://github.com/emmanueldounga" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                GitHub
              </a>.
            </p>
          </div>

          <div className="grid gap-10">
            {/* CV Section */}
            <div className="tech-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <FileText className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">Curriculum Vitae</h2>
              </div>
              
              <div className="rounded-xl overflow-hidden border border-border mb-4">
                <img 
                  src={cvImage} 
                  alt="CV Emmanuel Dounga" 
                  className="w-full h-auto"
                />
              </div>
              
              <Button 
                asChild
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10"
              >
                <a href="/documents/cv-emmanuel-dounga.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="w-4 h-4 mr-2" />
                  Télécharger le CV (PDF)
                </a>
              </Button>
            </div>

            {/* Tableau E4 Section */}
            <div className="tech-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <FileText className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">Tableau de Synthèse – Épreuve E4</h2>
              </div>
              
              <div className="rounded-xl overflow-hidden border border-border mb-4">
                <img 
                  src={tableauE4Image} 
                  alt="Tableau de synthèse E4" 
                  className="w-full h-auto"
                />
              </div>
              
              <Button 
                asChild
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10"
              >
                <a href="/documents/tableau-synthese-e4.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="w-4 h-4 mr-2" />
                  Télécharger le tableau (PDF)
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Documents;
