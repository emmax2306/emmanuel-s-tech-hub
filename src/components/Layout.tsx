import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Terminal, Mail, Linkedin, Github } from "lucide-react";
import Navigation from "./Navigation";
import ScrollToTop from "./ScrollToTop";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">{children}</main>

      <footer className="border-t border-border mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid sm:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <Link to="/" className="flex items-center gap-2 text-primary font-semibold text-lg mb-3">
                <Terminal className="w-5 h-5" />
                Emmanuel Dounga
              </Link>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Étudiant BTS SIO – Option SISR
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">Navigation</h4>
              <div className="flex flex-col gap-2">
                {[
                  { label: "Accueil", path: "/" },
                  { label: "BTS SIO", path: "/bts-sio" },
                  { label: "Projets", path: "/projets" },
                  { label: "Contact", path: "/contact" },
                ].map((link) => (
                  <Link key={link.path} to={link.path} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">Contact</h4>
              <div className="flex flex-col gap-2">
                <a href="mailto:emmanu.dounga@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <Mail className="w-4 h-4" /> emmanu.dounga@gmail.com
                </a>
                <a href="https://www.linkedin.com/in/emmanueldounga/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
                <a href="https://github.com/emmax2306" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <Github className="w-4 h-4" /> GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© 2025 Emmanuel Dounga – BTS SIO SISR</p>
            <p className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Portfolio en ligne
            </p>
          </div>
        </div>
      </footer>

      <ScrollToTop />
    </div>
  );
};

export default Layout;
