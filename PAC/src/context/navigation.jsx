import { Link } from "react-router-dom";
import { useFavorites } from "../context/favoritesContext.jsx";
import { useTheme } from "../context/themeContext.jsx";

function Navigation() {
  const { favorites } = useFavorites();
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="navigation">
      <Link to="/">All Pets</Link>

      <Link to="/favorites">Favorites ({favorites.length})</Link>

      <button onClick={toggleTheme}>
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>
    </nav>
  );
}

export default Navigation;
