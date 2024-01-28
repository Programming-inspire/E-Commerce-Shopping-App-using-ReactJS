// ProductDetailScreen.js
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/Action';
import { useParams } from 'react-router-dom';
import WithNavbar from './WithNavbar';

const ProductDetailScreen = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    // Ensure the product is available before dispatching the action
    if (product) {
      dispatch(addToCart(product));
    }
  };

  useEffect(() => {
    // Fetch product details based on productId
    fetch(`https://dummyjson.com/products/${productId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => console.error('Error fetching product details:', error));
  }, [productId]);

  if (!product) {
    return (
      <div className='flex justify-center items-center h-screen'>
        Loading...
      </div>
    );
  }

  return (
    <div className="mt-10 ml-10 mr-10">
      <h2 className="text-3xl font-semibold mb-4">{product.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <img src={product.thumbnail} alt={product.title} className="w-full h-auto mb-4" />
        <div>
          <p className="text-gray-500">Description: {product.description}</p>
          <p className="text-gray-500">Price: ${product.price}</p>
          <p className="text-gray-500">Rating: {product.rating}</p>
          {/* Add to Cart button functionality can be added here */}
          <button onClick={handleAddToCart} className="bg-blue-500 hover:bg-sky-300 text-white p-2 mt-2 block w-full text-center rounded">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default WithNavbar(ProductDetailScreen);
