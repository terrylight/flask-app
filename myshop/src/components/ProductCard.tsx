'use client';

import React from 'react';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  id: number;
  name: string;
  description: string;
  price: string; // Keep as string since it comes from the product data
  imageUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, description, price, imageUrl }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id,
      name,
      description, // ✅ Now stored in CartContext
      price: parseFloat(price), // ✅ Now converted to number
      imageUrl,
      quantity: 1, // ✅ Added quantity to prevent undefined issues
    });
  };

  return (
    <div className="product-card">
      <img src={imageUrl} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>${parseFloat(price).toFixed(2)}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
