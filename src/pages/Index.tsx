import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Server, Network, Shield, BookOpen, FileText, Search, Mail, Linkedin, Download, Github, ChevronRight } from "lucide-react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";

const Index = () => {
  const features = [
    { icon: <Server className="w-5 h-5" />, label: "Administration Systèmes", path: "/epreuve-e6" },
    { icon: <Network className="w-5 h-5" />, label: "Réseaux", path: "/epreuve-e6" },
    { icon: <Shield className="w-5 h-5" />, label: "Support & Services", path: "/epreuve-e5" },
  ];

  const quickLinks = [
    { icon: <BookOpen className="w-5 h-5" />, label: "BTS SIO", desc: "Formation SISR", path: "/bts-sio" },
    { icon: <FileText className="w-5 h-5" />, label: "Épreuve E5", desc: "Support & services", path: "/epreuve-e5" },
    { icon: <Shield className="w-5 h-5" />, label: "Épreuve E6", desc: "Admin systèmes & réseaux", path: "/epreuve-e6" },
    { icon: <Search className="w-5 h-5" />, label: "Veille", desc: "Technologies", path: "/veille" },
    { icon: <Mail className="w-5 h-5" />, label: "Contact", desc: "Me joindre", path: "/contact" },
  ];

  const stats = [
    { value: "5", label: "Projets réalisés" },
    { value: "3", label: "Domaines techniques" },
    { value: "2", label: "Épreuves BTS" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient min-h-[85vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                             linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        {/* Floating accent shapes */}
        <div className="absolute top-20 right-[15%] w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-20 left-[10%] w-48 h-48 rounded-full bg-primary/3 blur-2xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 w-full">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                BTS SIO – Option SISR
              </div>
            </motion.div>
            
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-[1.1]"
              initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              Bienvenue sur mon{" "}
              <span className="text-primary">portfolio</span>
            </motion.h1>
            
            <motion.p
              className="text-xl text-muted-foreground mb-4 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              Je m'appelle <span className="text-foreground font-semibold">Emmanuel Dounga</span>, 
              étudiant en <span className="text-foreground font-semibold">deuxième année de BTS SIO – option SISR</span> à l'EFREI Paris.
            </motion.p>

            <motion.div
              className="text-muted-foreground mb-8 leading-relaxed max-w-2xl space-y-3"
              initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <p>
                Au cours de ma formation et de mes stages, j'ai acquis une expérience concrète en{" "}
                <span className="text-foreground font-medium">administration systèmes et réseaux</span>,{" "}
                <span className="text-foreground font-medium">support utilisateurs</span> et{" "}
                <span className="text-foreground font-medium">gestion de parc informatique</span>.
              </p>
              <p>
                J'ai notamment réalisé des stages chez <span className="text-foreground font-medium">Scalesquad</span> (administration systèmes, déploiement réseau, GLPI/iTop) 
                et <span className="text-foreground font-medium">Sinatek</span> (montage PC, diagnostic matériel, configuration Windows), 
                et mené des projets techniques autour d'Active Directory, d'architectures multi-VLAN et de serveurs Linux.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-2.5 mb-10"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              {features.map((feature, index) => (
                <Link
                  key={index}
                  to={feature.path}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-foreground text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-200 active:scale-[0.97]"
                >
                  {feature.icon}
                  {feature.label}
                </Link>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <Button asChild variant="outline" className="border-border text-foreground hover:border-primary hover:text-primary px-6 py-3 text-base active:scale-[0.97]">
                <a href="/documents/cv-emmanuel-dounga.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="w-4 h-4 mr-2" />
                  Mon CV
                </a>
              </Button>

              <Button asChild variant="outline" className="border-border text-foreground hover:border-primary hover:text-primary px-6 py-3 text-base active:scale-[0.97]">
                <a href="https://www.linkedin.com/in/emmanueldounga/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </a>
              </Button>

              <Button asChild variant="outline" className="border-border text-foreground hover:border-primary hover:text-primary px-6 py-3 text-base active:scale-[0.97]">
                <a href="https://github.com/emmax2306" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Purpose Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="section-title text-center mb-4">Ce portfolio sert de support pour</h2>
            <p className="text-center text-muted-foreground mb-14 max-w-xl mx-auto">
              Un outil complet pour présenter mes compétences et réalisations.
            </p>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: <FileText className="w-6 h-6 text-primary" />, title: "Évaluation BTS SIO", desc: "Support pour les épreuves E4 et E6" },
              { icon: <Server className="w-6 h-6 text-primary" />, title: "Compétences techniques", desc: "Systèmes, réseaux et infrastructures" },
              { icon: <Shield className="w-6 h-6 text-primary" />, title: "Profil professionnel", desc: "Mise en valeur de mon parcours" },
            ].map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="tech-card text-center group h-full">
                  <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 text-lg">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-2xl font-bold text-center text-foreground mb-12">Navigation rapide</h2>
          </ScrollReveal>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickLinks.map((link, index) => (
              <ScrollReveal key={index} delay={index * 0.08}>
                <Link
                  to={link.path}
                  className="group p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 block h-full active:scale-[0.98]"
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    {link.icon}
                  </div>
                  <h3 className="font-semibold text-foreground mb-1 flex items-center gap-1">
                    {link.label}
                    <ChevronRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                  </h3>
                  <p className="text-sm text-muted-foreground">{link.desc}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
