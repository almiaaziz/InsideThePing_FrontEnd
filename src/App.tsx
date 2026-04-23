import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import GameHub from "./pages/GameHub.tsx";
import LayerMapScreen from "./pages/LayerMapScreen.tsx";
import FinalScreen from "./pages/FinalScreen.tsx";
import NotFound from "./pages/NotFound.tsx";
import StoryIntro from "./pages/StoryIntro.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/intro" element={<StoryIntro />} />
          <Route path="/game" element={<GameHub />} />
          <Route path="/map" element={<LayerMapScreen />} />
          <Route path="/complete" element={<FinalScreen />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
