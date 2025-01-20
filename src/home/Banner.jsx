import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import productData from '../products.json';
import SelectedCategory from '../components/SelectedCategory';

const title = (
  <h2>Search Your One From <span> Thousand</span> Of Products</h2>
);
const desc = "We have the largest collection of products";
const bannerList = [
  {
    iconName: "icofont-users-alt-4",
    text: "1.5 Million Customers",
  },
  {
    iconName: "icofont-notification",
    text: "More than 2000 Merchants",
  },
  {
    iconName: "icofont-globe",
    text: "Buy Anything Online",
  },
];

const Banner = () => {
  const [searchInput, setSearchInput] = useState('');
  const [filteredProducts, setFilteredProduct] = useState(productData);

  const handleSearch = (e) => {
    const searchTerms = e.target.value;
    setSearchInput(searchTerms);
    const filtered = productData.filter((product) =>
      product.name.toLowerCase().includes(searchTerms.toLowerCase())
    );
    setFilteredProduct(filtered);
  };

  return (
    <div className='banner-section style-4'>
      <div className='container'>
        <div className='banner-content'>
          {title}
          <form>
            <SelectedCategory select={"all"}/>
            <input
              type='text'
              name='search'
              id='search'
              placeholder='Search Your Product'
              value={searchInput}
              onChange={handleSearch}
            />
            <button type='submit'><i className="icofont-search"></i></button>
          </form>
          <p>{desc}</p>
          <ul className='lab-ul'>
            {searchInput && filteredProducts.map((product, i) => (
              <li key={i}>
                <Link to={`/shop/${product.id}`}>{product.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Banner;
