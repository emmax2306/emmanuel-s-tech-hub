import { Mail, Send, Linkedin, FileText, Github, MapPin } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "emmanu.dounga@gmail.com",
      href: "mailto:emmanu.dounga@gmail.com",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: "linkedin.com/in/emmanueldounga",
      href: "https://www.linkedin.com/in/emmanueldounga/",
      external: true,
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      value: "github.com/emmax2306",
      href: "https://github.com/emmax2306",
      external: true,
    },
  ];

  return (
    <Layout>
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <SectionHeader
            icon="📞"
            title="Contact"
            subtitle="N'hésitez pas à me contacter pour toute question"
          />

          <ScrollReveal>
            <div className="tech-card">
              {/* Profile header */}
              <div className="text-center mb-8">
                <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <span className="text-3xl font-bold text-primary">ED</span>
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-1">Emmanuel Dounga</h3>
                <p className="text-muted-foreground flex items-center justify-center gap-1.5">
                  <MapPin className="w-4 h-4" />
                  Étudiant BTS SIO – Option SISR
                </p>
              </div>

              {/* Contact links */}
              <div className="space-y-3 mb-8">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">{item.label}</p>
                      <p className="text-foreground font-medium">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 active:scale-[0.97] transition-transform">
                  <a href="mailto:emmanu.dounga@gmail.com">
                    <Send className="w-4 h-4 mr-2" />
                    Envoyer un email
                  </a>
                </Button>
                <Button asChild variant="outline" className="border-border hover:border-primary hover:text-primary active:scale-[0.97]">
                  <a href="/documents/cv-emmanuel-dounga.pdf" target="_blank" rel="noopener noreferrer">
                    <FileText className="w-4 h-4 mr-2" />
                    Télécharger mon CV
                  </a>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
