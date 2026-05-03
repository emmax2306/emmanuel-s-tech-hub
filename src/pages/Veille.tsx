import { Search, ShieldCheck, Network, Layers, Link2, Server, Globe, Linkedin, ExternalLink } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import ScrollReveal from "@/components/ScrollReveal";

const Veille = () => {
  const sources = [
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      label: "ANSSI",
      desc: "Agence nationale de la securite des systemes d'information ; recommandations sur la securisation des reseaux d'entreprise.",
    },
    {
      icon: <Network className="w-5 h-5" />,
      label: "Cisco",
      desc: "Documentations techniques sur les VLAN, EtherChannel et les architectures reseau.",
    },
    {
      icon: <Server className="w-5 h-5" />,
      label: "IBM",
      desc: "Contenus sur les infrastructures informatiques et la securite.",
    },
    {
      icon: <Globe className="w-5 h-5" />,
      label: "Le Monde Informatique",
      desc: "Actualite des entreprises et des technologies.",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      desc: "Suivi de professionnels du domaine IT.",
    },
  ];

  const ciscoDocLinks = [
    {
      label: "VLAN — configuration port / VLAN (Cisco)",
      href: "https://www.cisco.com/c/fr_ca/support/docs/smb/switches/cisco-small-business-300-series-managed-switches/smb5653-configure-port-to-vlan-interface-settings-on-a-switch-throug.html",
    },
    {
      label: "EtherChannel",
      href: "https://www.cisco.com/c/fr_ca/support/docs/lan-switching/etherchannel/12023-4.html",
    },
    {
      label: "Stack de switches (Catalyst 3750)",
      href: "https://www.cisco.com/c/fr_ca/support/docs/switches/catalyst-3750-series-switches/71925-cat3750-create-switch-stks.html",
    },
  ];

  return (
    <Layout>
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            icon="🔎"
            title="Veille technologique"
            subtitle="Sécurisation des réseaux d'entreprise par l'architecture réseau"
          />

          <ScrollReveal>
            <div className="tech-card mb-10">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary flex-shrink-0">
                  <Search className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Qu'est-ce que la veille technologique ?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    La veille technologique consiste a surveiller les evolutions techniques afin de rester informe des innovations
                    et des nouvelles pratiques. Elle permet d'anticiper les changements et d'adapter ses competences,
                    notamment dans le domaine des reseaux informatiques.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <div className="tech-card mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-3">Sujet de la veille</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                La securisation des reseaux d'entreprise a travers l'architecture reseau (VLAN, EtherChannel et stack de switch).
              </p>
              <h3 className="text-xl font-semibold text-foreground mb-3">Objectif</h3>
              <p className="text-muted-foreground leading-relaxed">
                Comprendre comment la conception d'un reseau permet d'ameliorer la securite, la disponibilite et la gestion
                des infrastructures informatiques.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="tech-card mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">Analyse des technologies</h3>
              <div className="space-y-6">
                <div className="p-4 rounded-lg bg-secondary/40">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Layers className="w-5 h-5 text-primary" />
                    VLAN (Virtual Local Area Network)
                  </h4>
                  <p className="text-muted-foreground mb-2">
                    Les VLAN permettent de segmenter un reseau en plusieurs parties logiques (utilisateurs, serveurs, invites).
                  </p>
                  <ul className="list-disc pl-5 text-foreground space-y-1">
                    <li>Isolation des services</li>
                    <li>Reduction de la propagation des attaques</li>
                    <li>Meilleure organisation du reseau</li>
                  </ul>
                </div>

                <div className="p-4 rounded-lg bg-secondary/40">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Link2 className="w-5 h-5 text-primary" />
                    EtherChannel
                  </h4>
                  <p className="text-muted-foreground mb-2">
                    EtherChannel permet de regrouper plusieurs liens physiques en un seul lien logique.
                  </p>
                  <ul className="list-disc pl-5 text-foreground space-y-1">
                    <li>Augmentation de la bande passante</li>
                    <li>Redondance en cas de panne</li>
                    <li>Amelioration de la disponibilite</li>
                  </ul>
                </div>

                <div className="p-4 rounded-lg bg-secondary/40">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Server className="w-5 h-5 text-primary" />
                    Stack de switch
                  </h4>
                  <p className="text-muted-foreground mb-2">
                    Le stack de switch permet de regrouper plusieurs equipements pour les gerer comme un seul.
                  </p>
                  <ul className="list-disc pl-5 text-foreground space-y-1">
                    <li>Gestion centralisee</li>
                    <li>Reduction des erreurs de configuration</li>
                    <li>Continuite de service</li>
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal direction="left" delay={0.12}>
              <div className="tech-card h-full">
                <h3 className="text-xl font-semibold text-foreground mb-6">Sources de veille</h3>
                <div className="space-y-3">
                  {sources.map((source, index) => (
                    <div key={index} className="p-3 rounded-lg bg-secondary/50">
                      <div className="flex items-center gap-3 mb-1">
                        <div className="text-primary">{source.icon}</div>
                        <span className="text-foreground font-medium">{source.label}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{source.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <h4 className="text-sm font-semibold text-foreground mb-3">Documentation Cisco (liens)</h4>
                  <ul className="space-y-2">
                    {ciscoDocLinks.map((link) => (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-primary hover:underline inline-flex items-center gap-1.5 break-words"
                        >
                          {link.label}
                          <ExternalLink className="w-3.5 h-3.5 shrink-0" aria-hidden />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.15}>
              <div className="tech-card h-full">
                <h3 className="text-xl font-semibold text-foreground mb-3">Analyse personnelle</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Cette veille m'a permis de comprendre que la securite d'un reseau ne repose pas uniquement sur des outils,
                  mais aussi sur son architecture. Un reseau bien segmente, avec une bonne gestion des liens et des equipements,
                  est plus securise, plus stable et plus facile a administrer.
                </p>
                <h3 className="text-xl font-semibold text-foreground mb-3">Lien avec le metier</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Dans le metier d'administrateur systemes et reseaux, il est essentiel de concevoir des architectures securisees,
                  de segmenter les infrastructures et d'assurer la continuite de service.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Veille;
