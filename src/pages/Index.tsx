import { Link } from "react-router-dom";
import { ArrowRight, Server, Network, Shield, BookOpen, FileText, Search, Mail } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

const Index = () => {
  const features = [
    { icon: <Server className="w-5 h-5" />, label: "Administration Systèmes", path: "/competences" },
    { icon: <Network className="w-5 h-5" />, label: "Réseaux", path: "/competences" },
    { icon: <Shield className="w-5 h-5" />, label: "Sécurité", path: "/epreuve-e6" },
  ];

  const quickLinks = [
    { icon: <BookOpen className="w-5 h-5" />, label: "BTS SIO", desc: "Formation SISR", path: "/bts-sio" },
    { icon: <FileText className="w-5 h-5" />, label: "Projets", desc: "Réalisations techniques", path: "/projets" },
    { icon: <Search className="w-5 h-5" />, label: "Veille", desc: "Technologies", path: "/veille" },
    { icon: <Mail className="w-5 h-5" />, label: "Contact", desc: "Me joindre", path: "/contact" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient min-h-[80vh] flex items-center relative overflow-hidden">
        {/* Background grid effect */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                             linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="max-w-3xl animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              BTS SIO – Option SISR
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Bienvenue sur mon{" "}
              <span className="text-primary glow-text">portfolio</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Je m'appelle <span className="text-foreground font-semibold">Emmanuel Dounga</span>, 
              étudiant en BTS SIO – option SISR (Solutions d'Infrastructure, Systèmes et Réseaux).
            </p>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Ce portfolio présente mon parcours, mes compétences, mes projets techniques 
              et mes expériences professionnelles, réalisés dans le cadre de ma formation et de mes stages.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              {features.map((feature, index) => (
                <Link
                  key={index}
                  to={feature.path}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-foreground text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                >
                  {feature.icon}
                  {feature.label}
                </Link>
              ))}
            </div>

            <Link to="/projets">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 text-base">
                Découvrir mes projets
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title">Ce portfolio sert de support pour</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="tech-card text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Évaluation BTS SIO</h3>
              <p className="text-sm text-muted-foreground">Épreuves E4 / E6</p>
            </div>
            
            <div className="tech-card text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                <Server className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Compétences techniques</h3>
              <p className="text-sm text-muted-foreground">Systèmes & Réseaux</p>
            </div>
            
            <div className="tech-card text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Profil professionnel</h3>
              <p className="text-sm text-muted-foreground">Mise en valeur</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-foreground mb-10">Navigation rapide</h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="group p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {link.icon}
                </div>
                <h3 className="font-semibold text-foreground mb-1">{link.label}</h3>
                <p className="text-sm text-muted-foreground">{link.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
