// app/page.tsx
import React from 'react';
import Link from 'next/link';
import ProductList from '../src/components/ProductList';

const HomePage: React.FC = () => {
  return (
    <div className="container">
      <h1>Welcome to My Shop</h1>
      <p>Browse and discover amazing products!</p>
      <Link href="/cart">Go to Cart</Link>
      <ProductList />
    </div>
  );
};

export default HomePage;
