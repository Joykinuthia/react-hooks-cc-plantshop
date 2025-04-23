import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, onSoldOut }) {
  
  const plantsWithIds = plants.map((plant, index) => ({
    ...plant,
    id: plant.id || `temp-id-${index}-${Date.now()}`
  }));

  return (
    <div className="plant-list">
      {plantsWithIds.map((plant) => (
        <PlantCard
          key={plant.id}
          plant={plant}
          onSoldOut={onSoldOut}
        />
      ))}
    </div>
  );
}

export default PlantList;