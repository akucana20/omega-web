import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import ServicesPage from "./pages/ServicesPage";
import PackagesPage from "./pages/PackagesPage";
import ArtistsPage from "./pages/ArtistsPage";
import SingersPage from "./pages/SingersPage";
import ContactPage from "./pages/ContactPage";
import VenuesPage from "./pages/VenuesPage";
import DJPage from "./pages/DJPage";
import DecorationPage from "./pages/DecorationPage";
import PhotographyPage from "./pages/PhotographyPage";
import VideographyPage from "./pages/VideographyPage";
import SmokeFireworksPage from "./pages/SmokeFireworksPage";
import LightingPage from "./pages/LightingPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <FloatingWhatsApp />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/packages" element={<PackagesPage />} />
            <Route path="/partners" element={<VenuesPage />} />
            <Route path="/venues" element={<VenuesPage />} />
            <Route path="/artists" element={<ArtistsPage />} />
            <Route path="/singers" element={<SingersPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/dj" element={<DJPage />} />
            <Route path="/decoration" element={<DecorationPage />} />
            <Route path="/photography" element={<PhotographyPage />} />
            <Route path="/videography" element={<VideographyPage />} />
            <Route path="/smoke-fireworks" element={<SmokeFireworksPage />} />
            <Route path="/lighting" element={<LightingPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
