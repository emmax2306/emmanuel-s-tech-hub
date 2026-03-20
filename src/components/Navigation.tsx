import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Accueil", path: "/" },
  { label: "BTS SIO", path: "/bts-sio" },
  { label: "Compétences", path: "/competences" },
  { label: "Projets", path: "/projets" },
  { label: "Documents", path: "/documents" },
  { label: "Épreuve E6", path: "/epreuve-e6" },
  { label: "Veille", path: "/veille" },
  { label: "Contact", path: "/contact" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 text-primary font-semibold text-lg">
            <Terminal className="w-6 h-6" />
            <span className="hidden sm:inline">Emmanuel Dounga</span>
            <span className="sm:hidden">E.D</span>
          </Link>

          <div className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "relative px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200",
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                )}
              >
                {item.label}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-primary rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-muted-foreground hover:text-primary transition-colors active:scale-95"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden overflow-hidden border-t border-border"
            >
              <div className="flex flex-col gap-1 py-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "px-4 py-3 rounded-lg text-sm font-medium transition-all active:scale-[0.98]",
                      location.pathname === item.path
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;
