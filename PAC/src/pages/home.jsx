import pets from "../data/pets.js";
import PetCard from "../components/petCard.jsx";
import "../App.css";

function Home() {
  const renderedPets = pets.map((pet) => <PetCard key={pet.id} pet={pet} />);
  return (
    <div className="Home">
      <header className="Home-header">
        <h1>Pet Adoption Center</h1>
      </header>
      <main>
        <div className="pet-grid">{renderedPets}</div>
      </main>
    </div>
  );
}

export default Home;
