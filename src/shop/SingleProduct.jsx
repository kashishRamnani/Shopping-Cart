import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';
import PageHeader from '../components/PageHeader';
import ProductDisplay from './ProductDisplay';
import Review from './Review';
import PopularPost from './PopularPost';
import Tags from './Tags';

const SingleProduct = () => {
    const [product, setProduct] = useState([]);
    const { id } = useParams();
    console.log(id)

    useEffect(() => {
        fetch("/src/products.json")
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Failed to fetch products");
                }
                return res.json();
            })
            .then(data => setProduct(data))
            .catch(error => console.error("Error fetching products:", error));
    }, []);
    

    const result = product.filter((p) => p.id === id);
    console.log(result)
    
    return (
        <div>
            <PageHeader title={"OUR SHOP SINGLE"} curPage={"Shop / Single Product"} />
            <div className='shop-single padding-tb aside-bg'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        {/* Left Side (Product Details) */}
                        <div className='col-lg-8 col-12'>
                            <article>
                                <div className='product-details'>
                                    <div className='row align-items-center'>
                                        <div className='col-md-6 col-12'>
                                            <div className='product-thumb'>
                                                <div className='swiper-container pro-single-top'>
                                                    <Swiper
                                                        spaceBetween={30}
                                                        slidesPerView={1}
                                                        loop={true}
                                                        autoplay={{
                                                            delay: 2000,
                                                            disableOnInteraction: false,
                                                        }}
                                                        modules={[Autoplay]}
                                                        navigation={{
                                                            prevEl: ".pro-single-prev",
                                                            nextEl: ".pro-single-next",
                                                        }}
                                                        className='mySwiper'
                                                    >
                                                        {result.map((item, i) => (
                                                            <SwiperSlide key={i}>
                                                                <div className='single-thumb'>
                                                                    <img src={item.img} alt={item.name} />
                                                                </div>
                                                            </SwiperSlide>
                                                        ))}
                                                    </Swiper>
                                                    <div className='pro-single-next'>
                                                        <i className='icofont-rounded-left'></i>
                                                    </div>
                                                    <div className='pro-single-prev'>
                                                        <i className='icofont-rounded-right'></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-md-6 col-12'>
                                            <div className='post-content'>
                                                {result.map(item => (
                                                    <ProductDisplay key={item.id} item={item} />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='review'>
                                    <Review/>
                                </div>
                            </article>
                        </div>

                        {/* Right Side */}
                        <div className='col-lg-4 col-12'> {/* Adjust the size for the right sidebar */}
                            
                                {/* Right side content goes here */}
                                
                            <aside className='ps-lg-4'>
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

export default SingleProduct;
