import { BookOpen, FileText, Download } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CompetenceItem = {
  code: string;
  label: string;
  /** Chemin sous /public/documents — ajoutez les PDF au fur et à mesure */
  pdfPath?: string;
};

type CompetenceBloc = {
  title: string;
  items: CompetenceItem[];
};

const blocsCompetences: CompetenceBloc[] = [
  {
    title: "Bloc 1 — Gérer le patrimoine informatique",
    items: [
      {
        code: "C1",
        label: "Recensement et identification des ressources numériques",
        pdfPath: "/documents/C1.pdf",
      },
      {
        code: "C2",
        label:
          "Exploitation des référentiels, normes et standards adoptés par le prestataire informatique",
        pdfPath: "/documents/C2%201.pdf",
      },
      {
        code: "C3",
        label: "Mise en place et vérification des niveaux d'habilitation associés à un service",
        pdfPath: "/documents/C3.pdf",
      },
      {
        code: "C4",
        label: "Vérification des conditions de la continuité d'un service informatique",
        pdfPath: "/documents/C4.pdf",
      },
      {
        code: "C5",
        label: "Gestion des sauvegardes",
        pdfPath: "/documents/C5.pdf",
      },
      {
        code: "C6",
        label: "Vérification du respect des règles d'utilisation des ressources numériques",
        pdfPath: "/documents/C6.pdf",
      },
    ],
  },
  {
    title: "Bloc 2 — Répondre aux incidents et aux demandes d'assistance et d'évolution",
    items: [
      {
        code: "C7",
        label: "Collecte, suivi et orientation des demandes",
        pdfPath: "/documents/C7.pdf",
      },
      {
        code: "C8",
        label: "Traitement des demandes concernant les applicatifs, services réseau et système",
        pdfPath: "/documents/C8%20simulation%20AD%20machine%20cliente.pdf",
      },
      {
        code: "C9",
        label: "Traitement des demandes concernant les applications",
        pdfPath: "/documents/C9.pdf",
      },
    ],
  },
  {
    title: "Bloc 3 — Développer la présence en ligne de l'organisation",
    items: [
      {
        code: "C10",
        label:
          "Participation à la valorisation de l'image de l'organisation sur les médias numériques en tenant compte du cadre juridique et des enjeux économiques",
        pdfPath: "/documents/C10%201.pdf",
      },
      {
        code: "C11",
        label: "Référencement des services en ligne de l'organisation et mesure de leur visibilité",
        pdfPath: "/documents/C11.pdf",
      },
      {
        code: "C12",
        label: "Participation à l'évolution d'un site Web exploitant les données de l'organisation",
        pdfPath: "/documents/C12.pdf",
      },
    ],
  },
  {
    title: "Bloc 4 — Travailler en mode projet",
    items: [
      {
        code: "C13",
        label: "Analyse des objectifs et des modalités d'organisation d'un projet",
        pdfPath: "/documents/C13.pdf",
      },
      {
        code: "C14",
        label: "Planification des activités",
        pdfPath: "/documents/C14.pdf",
      },
      {
        code: "C15",
        label: "Évaluation des indicateurs de suivi d'un projet et analyse des écarts",
        pdfPath: "/documents/C15.pdf",
      },
    ],
  },
  {
    title: "Bloc 5 — Mettre à disposition des utilisateurs un service informatique",
    items: [
      {
        code: "C16",
        label: "Test d'intégration et d'acceptation d'un service",
        pdfPath: "/documents/C16.pdf",
      },
      {
        code: "C17",
        label: "Déploiement d'un service",
        pdfPath: "/documents/C17.pdf",
      },
      {
        code: "C18",
        label: "Accompagnement des utilisateurs dans la mise en place d'un service",
        pdfPath: "/documents/C18.pdf",
      },
    ],
  },
  {
    title: "Bloc 6 — Organiser son développement personnel",
    items: [
      {
        code: "C20",
        label: "Mettre en œuvre des outils et stratégies de veille informationnelle",
      },
      { code: "C21", label: "Gérer son identité professionnelle" },
      { code: "C22", label: "Développer son projet professionnel" },
    ],
  },
];

const documentsTableau = [
  {
    title: "Tableau de Synthèse – Épreuve E5",
    pdfPath: "/documents/tableau-synthese-e5.pdf",
    downloadLabel: "Télécharger le tableau (PDF)",
  },
];

const EpreuveE5 = () => {
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
                  <p className="text-muted-foreground leading-relaxed">
                    Cette épreuve évalue le bloc « Support et mise à disposition de services
                    informatiques ». Le détail des compétences (par blocs C1 à C22) est présenté
                    ci-dessous ; les documents de réalisation seront ajoutés progressivement à
                    chaque compétence.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <h2 className="text-2xl font-bold text-foreground mb-6">Documents</h2>
          </ScrollReveal>

          <div className="grid gap-8 mb-16">
            {documentsTableau.map((doc, index) => (
              <ScrollReveal key={doc.pdfPath} delay={0.1 + index * 0.08}>
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

                  <Button
                    asChild
                    variant="outline"
                    className="border-border hover:border-primary hover:text-primary active:scale-[0.97]"
                  >
                    <a href={doc.pdfPath} target="_blank" rel="noopener noreferrer">
                      <Download className="w-4 h-4 mr-2" />
                      {doc.downloadLabel}
                    </a>
                  </Button>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.12}>
            <h2 className="text-2xl font-bold text-foreground mb-2">Référentiel des compétences</h2>
            <p className="text-muted-foreground text-sm mb-8">
              Chaque document fourni sera rattaché à la compétence correspondante (C1, C2, etc.).
            </p>
          </ScrollReveal>

          <div className="space-y-12">
            {blocsCompetences.map((bloc) => (
              <div key={bloc.title}>
                {/*
                  Ne pas envelopper tout le bloc dans ScrollReveal : avec plusieurs PDF intégrés,
                  la hauteur totale est énorme et whileInView (amount ~20 %) peut ne jamais se
                  déclencher en haut du bloc → tout reste en opacity:0.
                */}
                <h3 className="text-lg font-semibold text-foreground mb-4 border-b border-border pb-2 scroll-mt-24">
                  {bloc.title}
                </h3>
                <div className="space-y-6">
                  {bloc.items.map((item) => (
                    <div
                      key={item.code}
                      className={cn(
                        "rounded-xl border border-border bg-card overflow-hidden",
                        item.pdfPath && "shadow-sm"
                      )}
                    >
                      <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-start gap-3 border-b border-border/80 bg-secondary/30">
                        <span className="inline-flex items-center justify-center px-2.5 py-1 rounded-md bg-primary/10 text-primary text-sm font-semibold shrink-0">
                          {item.code}
                        </span>
                        <p className="text-foreground text-sm sm:text-base leading-relaxed">
                          {item.label}
                        </p>
                      </div>
                      {item.pdfPath ? (
                        <div className="p-4 sm:p-5 pt-0 sm:pt-4">
                          <div className="rounded-xl overflow-hidden border border-border mb-4">
                            <embed
                              src={item.pdfPath}
                              type="application/pdf"
                              className="w-full"
                              style={{ minHeight: "520px", height: "60vh", maxHeight: "720px" }}
                            />
                          </div>
                          <Button
                            asChild
                            variant="outline"
                            size="sm"
                            className="border-border hover:border-primary hover:text-primary"
                          >
                            <a href={item.pdfPath} target="_blank" rel="noopener noreferrer">
                              <Download className="w-4 h-4 mr-2" />
                              Télécharger le document ({item.code})
                            </a>
                          </Button>
                        </div>
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EpreuveE5;
