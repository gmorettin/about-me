import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Portfolio from "./pages/Portfolio";
import MemoryGamePage from "./pages/MemoryGame";
import EducationPage from "./pages/EducationPage";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { Router as WouterRouter, Route, Switch } from "wouter";

function Router() {
  return (
    <WouterRouter>
      <Switch>
        <Route path="/" component={Portfolio} />
        <Route path="/memory-game" component={MemoryGamePage} />
        <Route path="/education" component={EducationPage} />
        <Route component={Portfolio} />
      </Switch>
    </WouterRouter>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
