import React from 'react';
import ProductCard from './ProductCard';

const products = [
  { id: 1, name: 'Product 1', description: 'This is an amazing product!', price: '$19.99', imageUrl: '/images/product1.jpg' },
  { id: 2, name: 'Product 2', description: 'High quality and durable.', price: '$29.99', imageUrl: '/images/product2.jpg' },
  { id: 3, name: 'Product 3', description: 'A must-have for professionals.', price: '$39.99', imageUrl: '/images/product3.jpg' },
  { id: 4, name: 'Product 4', description: 'Best for your needs!', price: '$49.99', imageUrl: '/images/product4.jpg' },
];

const ProductList = () => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard 
          key={product.id} 
          id={product.id} 
          name={product.name} 
          description={product.description} 
          price={product.price} 
          imageUrl={product.imageUrl} 
        />
      ))}
    </div>
  );
};

export default ProductList;
