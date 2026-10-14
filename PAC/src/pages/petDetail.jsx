import { Link, useParams } from "react-router-dom";
import pets from "../data/pets.js";
import { useFavorites } from "../context/favoritesContext.jsx";

function PetDetail() {
  const { id } = useParams();
  const { favorites, toggleFavorite } = useFavorites();

  const pet = pets.find((p) => p.id === Number(id));

  if (!pet) {
    return (
      <main>
        <h2>Pet not found.</h2>
        <Link to="/">Back to All Pets</Link>
      </main>
    );
  }

  const isFavorite = favorites.includes(pet.id);

  return (
    <main>
      <div className="pet-detail">
        <h2>{pet.name}</h2>

        <p>
          <strong>Species:</strong> {pet.species}
        </p>

        <p>
          <strong>Age:</strong> {pet.age}
        </p>

        <p>
          <strong>Description:</strong> {pet.description}
        </p>

        <button onClick={() => toggleFavorite(pet.id)}>
          {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
        </button>

        <p>
          <Link to="/">Back to All Pets</Link>
        </p>
      </div>
    </main>
  );
}

export default PetDetail;
