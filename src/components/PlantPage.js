import React, { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plants, setPlants }) {
  const [searchTerm, setSearchTerm] = useState("");

  const addPlant = (newPlant) => {
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPlant)
    })
      .then(res => res.json())
      .then(data => setPlants([...plants, data]));
  };

  const markSoldOut = (id) => {
    setPlants(plants.map(plant => 
      plant.id === id ? { ...plant, soldOut: !plant.soldOut } : plant
    ));
  };

  const filteredPlants = plants.filter(plant =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main>
      <div className="new-plant-container">
        <NewPlantForm onAddPlant={addPlant} />
      </div>
      <div className="search-container">
        <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      </div>
      <PlantList plants={filteredPlants} onSoldOut={markSoldOut} />
    </main>
  );
}

export default PlantPage;