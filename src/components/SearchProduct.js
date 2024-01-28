// SearchProduct.js
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const SearchProduct = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('q');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products?q=${encodeURIComponent(searchQuery)}`);
        const data = await response.json();
        setSearchResults(data.products);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };

    fetchData();
  }, [searchQuery]);

  const filteredResults = searchResults.filter((product) =>
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-3xl font-semibold mb-5">Search Results for "{searchQuery}"</h2>
      {filteredResults.length === 0 ? (
        <p>No products found for the search {searchQuery}.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredResults.map((product) => (
            <div key={product.id} className="border p-4 rounded-md">
              <img src={product.thumbnail} alt={product.title} className="mb-2" />
              <p className="text-lg font-semibold">{product.title}</p>
              <p className="text-gray-500">{product.description}</p>
              <p className="mt-2">${product.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchProduct;
