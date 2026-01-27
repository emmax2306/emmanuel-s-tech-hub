import { Mail, Send } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <Layout>
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <SectionHeader
            icon="📞"
            title="Contact"
            subtitle="N'hésitez pas à me contacter pour toute question"
          />

          <div className="tech-card text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Mail className="w-10 h-10 text-primary" />
            </div>
            
            <h3 className="text-2xl font-semibold text-foreground mb-2">
              Emmanuel Dounga
            </h3>
            <p className="text-muted-foreground mb-6">
              Étudiant BTS SIO – Option SISR
            </p>

            <div className="p-4 rounded-xl bg-secondary/50 mb-6">
              <p className="text-sm text-muted-foreground mb-1">Email</p>
              <a 
                href="mailto:emmanu.dounga@gmail.com"
                className="text-lg text-primary hover:underline font-medium"
              >
                emmanu.dounga@gmail.com
              </a>
            </div>

            <Button 
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <a href="mailto:emmanu.dounga@gmail.com">
                <Send className="w-4 h-4 mr-2" />
                Envoyer un email
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
