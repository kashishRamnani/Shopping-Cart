import React from 'react';

const ShopCategory = ({ filterItem, menuItems, selectCategory }) => {
  return (
    <>
      <div className='widget-header'>
        <div className='ms-2'>
          <h5>All Categories</h5>
        </div>
        <div>
          

          
          {menuItems.map((val, id) => (
            <button
              className={`m-2 ${selectCategory === val ? "bg-warning" : ""}`}
              key={id}
              onClick={() => filterItem(val)}
            >
              {val}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default ShopCategory;
