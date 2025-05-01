
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import EastCoastRailways from "./pages/projects/EastCoastRailways";
import Piaggio from "./pages/projects/Piaggio";
import Vodafone from "./pages/projects/Vodafone";
import AndhraPradesh from "./pages/projects/AndhraPradesh";
import AdityaGoldPlatinum from "./pages/projects/AdityaGoldPlatinum";
import BlueHorizon from "./pages/projects/BlueHorizon";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/east-coast-railways" element={<EastCoastRailways />} />
          <Route path="/projects/piaggio" element={<Piaggio />} />
          <Route path="/projects/vodafone" element={<Vodafone />} />
          <Route path="/projects/andhra-pradesh" element={<AndhraPradesh />} />
          <Route path="/projects/aditya-gold-platinum" element={<AdityaGoldPlatinum />} />
          <Route path="/projects/blue-horizon" element={<BlueHorizon />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
