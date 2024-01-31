// Products.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const globalSearchTerm = useSelector((state) => state.search.searchTerm);
  const navigate = useNavigate();

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleBuyNowClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((data) => {
        const productsArray = Array.isArray(data.products) ? data.products : [];
        setProducts(productsArray);
        const uniqueCategories = [...new Set(productsArray.map((product) => product.category))];
        setCategories(['All', ...uniqueCategories]);
      })
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  // Filter products based on the global search term
  const filteredProducts = products.filter(
    (product) =>
      (selectedCategory === 'All' || product.category === selectedCategory) &&
      product.title && // Check if product.title is defined
      product.title.toLowerCase().includes(globalSearchTerm.toLowerCase())
  );

  return (
    <div className="mt-10 ml-10 mr-10">
      {/* Display categories */}
      {!globalSearchTerm && (
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
      )}

      {/* Display product cards or a message */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.length === 0 ? (
          <div className="text-center font-bold text-gray-500 mt-8">
            {globalSearchTerm
              ? `No products found for "${globalSearchTerm}"`
              : 'Select a category or enter a search term'}
          </div>
        ) : (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="border bg-white border-gray-300 p-4 rounded hover:shadow-md transition-transform transform scale-100 hover:scale-110"
            >
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
          ))
        )}
      </div>
    </div>
  );
};

export default Products;
