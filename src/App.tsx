import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import Exploration from "./pages/Exploration.tsx";
import Examples from "./pages/Examples.tsx";
import Events from "./pages/Events.tsx";
import Discussion from "./pages/Discussion.tsx";
import Careers from "./pages/Careers.tsx";
import CareerDetail from "./pages/CareerDetail.tsx";
import Game from "./pages/Game.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/exploration" element={<Exploration />} />
          <Route path="/examples" element={<Examples />} />
          <Route path="/events" element={<Events />} />
          <Route path="/discussion" element={<Discussion />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/careers/:slug" element={<CareerDetail />} />
          <Route path="/game" element={<Game />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
