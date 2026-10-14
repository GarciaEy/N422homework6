import pets from "../data/pets.js";
import PetCard from "../components/petCard.jsx";
import { useFavorites } from "../context/favoritesContext.jsx";

function Favorites() {
  const { favorites } = useFavorites();

  const favoritePets = pets.filter((pet) => favorites.includes(pet.id));

  return (
    <main>
      <h2>My Favorite Pets</h2>

      {favoritePets.length === 0 ? (
        <p className="empty-message">No favorites yet.</p>
      ) : (
        <div className="pet-grid">
          {favoritePets.map((pet) => (
            <PetCard key={pet.id} pet={pet} />
          ))}
        </div>
      )}
    </main>
  );
}

export default Favorites;
