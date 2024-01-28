// src/components/Products.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const navigate = useNavigate();

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    // Fetch products data from the dummy JSON API
    fetch('https://dummyjson.com/products')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Check if the 'products' property exists and is an array
        const productsArray = Array.isArray(data.products) ? data.products : [];

        setProducts(productsArray);
        // Extract unique categories from products
        const uniqueCategories = [...new Set(productsArray.map((product) => product.category))];
        setCategories(['All', ...uniqueCategories]);
      })
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  // Add a conditional check to ensure filteredProducts is an array
  const filteredProducts = Array.isArray(products)
    ? selectedCategory === 'All'
      ? products
      : products.filter((product) => product.category === selectedCategory)
    : [];

  // Navigate to ProductDetailScreen when Buy Now button is clicked
  const handleBuyNowClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className='mt-10 ml-10 mr-10'>
      {/* Display categories */}
      <div className="flex justify-center mb-4">
        {categories.map((category) => (
          <button
            key={category}
            className={`mx-2 p-2 ${selectedCategory === category ? 'bg-sky-300' : 'bg-stone-400'} rounded`}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Display product cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="border bg-white border-gray-300 p-4 rounded hover:shadow-md transition-transform transform scale-100 hover:scale-110">
            <img src={product.thumbnail} alt={product.title} className="mb-2 w-full h-60 object-contain" />
            <h3 className="text-lg font-semibold">{product.title}</h3>
            <p className="text-gray-500">${product.price}</p>
            <button
              className="bg-blue-500 text-white p-2 mt-2 block w-full text-center rounded"
              onClick={() => handleBuyNowClick(product.id)}
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
