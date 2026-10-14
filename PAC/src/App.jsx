import { Routes, Route } from "react-router-dom";
import { FavoritesProvider } from "./context/favoritesContext.jsx";
import { ThemeProvider } from "./context/themeContext.jsx";
import { useTheme } from "./context/themeContext.jsx";
import Navigation from "./context/navigation.jsx";
import Home from "./pages/home.jsx";
import PetDetail from "./pages/petDetail.jsx";
import Favorites from "./pages/favorites.jsx";
import NotFound from "./pages/notFound.jsx";
import "./App.css";

function AppContent() {
  const { theme } = useTheme();
  return (
    <div className={`App ${theme}`}>
      <header className="App-header">
        <h1>Pet Adoption Center</h1>
        <Navigation />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pet/:id" element={<PetDetail />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
function App() {
  return (
    <ThemeProvider>
      <FavoritesProvider>
        <AppContent />
      </FavoritesProvider>
    </ThemeProvider>
  );
}
export default App;
