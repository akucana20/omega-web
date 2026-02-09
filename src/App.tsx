import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Lazy load routes for code splitting
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const PackagesPage = lazy(() => import("./pages/PackagesPage"));
const ArtistsPage = lazy(() => import("./pages/ArtistsPage"));
const SingersPage = lazy(() => import("./pages/SingersPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const VenuesPage = lazy(() => import("./pages/VenuesPage"));
const DJPage = lazy(() => import("./pages/DJPage"));
const DecorationPage = lazy(() => import("./pages/DecorationPage"));
const PhotographyPage = lazy(() => import("./pages/PhotographyPage"));
const VideographyPage = lazy(() => import("./pages/VideographyPage"));
const SmokeFireworksPage = lazy(() => import("./pages/SmokeFireworksPage"));

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
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div></div>}>
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
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
