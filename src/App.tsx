import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BtsSio from "./pages/BtsSio";
import Competences from "./pages/Competences";
import Projets from "./pages/Projets";
import EpreuveE6 from "./pages/EpreuveE6";
import Veille from "./pages/Veille";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/bts-sio" element={<BtsSio />} />
          <Route path="/competences" element={<Competences />} />
          <Route path="/projets" element={<Projets />} />
          <Route path="/epreuve-e6" element={<EpreuveE6 />} />
          <Route path="/veille" element={<Veille />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
