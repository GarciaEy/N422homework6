import { Link } from "react-router-dom";
import { useFavorites } from "../context/favoritesContext.jsx";

function PetCard({ pet }) {
  const { favorites, toggleFavorite } = useFavorites();

  const isFavorite = favorites.includes(pet.id);

  return (
    <div className="pet-card">
      <div className="pc-content">
        <h2>{pet.name}</h2>
        <p className="p-species">
          <strong>Species:</strong> {pet.species}
        </p>
        <p className="p-age">
          <strong>Age:</strong> {pet.age}
        </p>
        <p className="p-description">
          <strong>Description:</strong> {pet.description}
        </p>

        <Link to={`/pet/${pet.id}`} className="details-link">
          View Details
        </Link>
      </div>
    </div>
  );
}

export default PetCard;
