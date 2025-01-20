import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import Data from "../products.json";
import ProductCards from './ProductCards';
import Pagination from './Pagination';
import Search from './Search';
import ShopCategory from './ShopCategory';
import PopularPost from './PopularPost';
import Tags from './Tags';

const showResults = `Showing 01 - 12 of ${Data.length} Results`;

const Shop = () => {
    const [GridList, setGridList] = useState(true);
    const [products, setProducts] = useState(Data);

    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 12;
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Filter products based on category
    const [selectCategory, setSelectCategory] = useState("All");
    const menuItems = ["All", ...new Set(Data.map((val) => val.category))];

    const filterItem = (curCat) => {
        if (curCat === "All") {
            setProducts(Data);
        } else {
            const newItems = Data.filter((item) => item.category === curCat);
            setProducts(newItems);
        }
        setSelectCategory(curCat);
        setCurrentPage(1); // Reset to first page after filtering
    };

    // Search products
    const handleSearch = (searchTerm) => {
        const filteredProducts = Data.filter((product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setProducts(filteredProducts);
        setCurrentPage(1); // Reset to first page after searching
    };

    return (
        <div>
            <PageHeader title="Our Shop Page" curPage="Shop" />
            {/* Shop page */}
            <div className='shop-page padding-tb'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-8 col-12'>
                            <article>
                                {/* Layout and title */}
                                <div className='shop-title d-flex flex-wrap justify-content-between'>
                                    <p>{showResults}</p>
                                    <div className={`product-view-mode ${GridList ? "gridActive" : "listActive"}`}>
                                        <a className='grid' onClick={() => setGridList(true)}>
                                            <i className='icofont-ghost'></i>
                                        </a>
                                        <a className='list' onClick={() => setGridList(false)}>
                                            <i className='icofont-listine-dots'></i>
                                        </a>
                                    </div>
                                </div>
                                {/* Product cards */}
                                <div>
                                    <ProductCards GridList={GridList} products={currentProducts} />
                                </div>
                                {/* Pagination */}
                                <Pagination
                                    productsperpage={productsPerPage}
                                    totalProducts={products.length}
                                    paginate={paginate}
                                    activepage={currentPage}
                                />
                            </article>
                        </div>
                        <div className='col-lg-4 col-12'>
                            <aside>
                                <Search products={products} GridList={GridList} onSearch={handleSearch} />
                                <ShopCategory
                                    filterItem={filterItem}
                                    setItem={setProducts}
                                    menuItems={menuItems}
                                    setProducts={setProducts}
                                    selectCategory={selectCategory}
                                />
                                <PopularPost/>
                                <Tags/>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;
