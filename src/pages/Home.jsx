// src/pages/Home.tsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/productSlice';
import ProductCard from '../components/ProductCard';
import HomeBanner from '../components/HomeBanner';
import HomeCards from '../components/HomeCards';

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.filteredItems);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="container mx-auto  pb-12">
      <HomeBanner/>
      <HomeCards/>
      <h1 className="text-2xl pt-8 font-bold mb-4">Products</h1>
      <div className="grid grid-cols-5 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
