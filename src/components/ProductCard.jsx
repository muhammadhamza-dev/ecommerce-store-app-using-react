
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="border flex flex-col justify-between items-start p-4 rounded-lg shadow-md">
      <div>
      <img src={product.thumbnail} alt={product.title} className="w-full h-40 object-cover mb-4 rounded" />
      <h2 className="text-lg font-bold mb-2">{product.title}</h2>
      <p className="text-gray-700 mb-2">${product.price}</p>
      </div>
      <div className='flex items-center gap-[5px]  '>
      <Link to={`/product/${product.id}`} className="text-blue-500 hover:underline">View Details</Link>
      <button
        onClick={handleAddToCart}
        className=" bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add to Cart
      </button>
      </div>
      
    </div>
  );
};

export default ProductCard;
