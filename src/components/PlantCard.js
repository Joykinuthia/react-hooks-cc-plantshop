import React from "react";

function PlantCard({ plant, onSoldOut }) {
  const { id, name, image, price, soldOut } = plant;

  // Format price to match test expectations
  const formatPrice = (price) => {
    const numericPrice = typeof price === 'string' ? parseFloat(price) : price;
    return `Price: ${Number.isInteger(numericPrice) ? numericPrice : numericPrice.toFixed(2)}`;
  };

  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>{formatPrice(price)}</p>
      <button 
        className={soldOut ? "sold-out" : "primary"} 
        onClick={() => onSoldOut(id)}
      >
        {soldOut ? "Out of Stock" : "In Stock"}
      </button>
    </li>
  );
}

export default PlantCard;