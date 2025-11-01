import { useEffect } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import LoadingAnimation from "@/components/LoadingAnimation";
import Home from "@/pages/Home";
import Portfolio from "@/pages/Portfolio";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";
import Navigation from "@/components/Navigation";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  useEffect(() => {
    // Force dark mode on the document root
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LoadingAnimation />
        <div className="dark">
          <Toaster />
          <Router />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
