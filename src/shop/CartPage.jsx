import React, { useEffect, useState } from 'react'
import PageHeader from '../components/PageHeader';
import { Link } from 'react-router-dom';
import delImgUrl from "../assets/images/shop/del.png"
import CheckOutPage from './CheckOutPage';

const CartPage = () => {
    console.log("Rendering CartPage");
    const [cartItems,setCartItems] = useState([]);
    useEffect(()=>{
        //fetch Cart from local storage
        const storedCartItems = JSON.parse(localStorage.getItem("cart")) ||[];
        setCartItems(storedCartItems)

    },[])
    //calculate Prices
    const calculateTotalPrice = (item) => {
        return item.price *item.quantity
    }
    //handle Quantite increase
    const handleIncrease = (item) =>{
        item.quantity += 1;
        setCartItems([...cartItems]);
        //update  local storage with new cart 
        localStorage.setItem("cart", JSON.stringify(cartItems))
    }
    //handle Quantite Decrease
    const handleDcrease = (item)=>{
        if(item.quantity >1){
            item.quantity -=1;
            setCartItems([...cartItems])
            localStorage.setItem("cart",JSON.stringify(cartItems))
            
        }

    }
    const handleRemoveItem = (item)=>{
        const updatedCart = cartItems.filter((cartItem)=>cartItem.id!=item.id);
        //update new card
        setCartItems(updatedCart)
    }
    const updatedLocalStorage = (cart)=>{

        localStorage.setItem("cart",JSON.stringify(cart))
    }
    //cart subtotal
    const cartSubTotal = cartItems.reduce((total,item)=>{
        return total + calculateTotalPrice(item);
    },0)
    //order Total
    const orderTotal = cartSubTotal

  return (
    <div>
        <PageHeader title={"Shop Cart"} curPage={"Cart Page"}/>
        <div className='shop-cart padding-tb'>
            <div className='container'>
                <div className='section-wrapper'>
                    {/*cart top */}
                    <div className='cart-top'>
                        <table>
                            <thead>
                                <tr>
                                    <th className='cart-product'>Product</th>
                                    <th className='cart-price'>Price</th>
                                    <th className='cart-qantity'>Quantity</th>
                                    <th className='cart-total'>Total</th>
                                    <th className='cart-edit'>Edit</th>
                                        
                                    
                                </tr>
                            </thead>
                            {/* table body */}
                            <tbody>
                                {
                                    cartItems.map((item,indx)=>(
                                        <tr key={indx}>
                                            <td className='product-item cat-product'>
                                                <div className='p-thumb'>
                                                    <Link to="/shop"> <img src={item.img} alt="" /></Link>

                                                </div>
                                                <div className='p-content'>
                                                    <Link to="/shop">{item.name}</Link>

                                                </div>

                                            </td>
                                            <td className='cat-price'>${item.price}</td>
                                            <td className='cat-qantity'>
                                                <div className='cart-plus-minus'>
                                                    <div className='dec qtybutton' onClick={()=>handleDcrease(item)}>-</div>
                                                    <input type="text" className='cart-plus-minus-box' name='qtybutton' value={item.quantity} />
                                                    <div className='inc qtybutton' onClick={()=>handleIncrease(item)}>+</div>

                                                        
                                                    

                                                </div>
                                            </td>
                                            <td className='cat-topprice'>${calculateTotalPrice(item)}</td>
                                            <td className='cat-edit'>
                                                <a href="#" onClick={()=>handleRemoveItem(item)}><img src={delImgUrl} alt="" /></a>
                                            </td>
                                           

                                            

                                            
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>

                    </div>
                    {/*cartbottom*/}
                    <div className='cart-bottom'>
                        {/*checkbox*/}
                        <div className='cart-checkout-box'>
                            <form className='coupon'>
                                <input className='cart-page-input-text' type="text" name="coupon" id="coupon" placeholder='Coupon Code...' />
                                   <input type="submit" value='Apply Coupon' />
                            </form>
                            <form className='cart-checkout'>
                                <input type='submit' value='update cart' />
                                <div><CheckOutPage/></div>

                            </form>

                        </div>
                        {/*.......checkout box end....*/}
                        {/*shipping box*/}
                        <div className='shiping-box'>
                            <div className='row '>
                                <div className='col-md-6 col-12'>
                                    <div className='calculate-shiping'>
                                        <h3>Calculate Shiping</h3>
                                        <div className='outline-select '>
                                            <select>
                                                <option value="uk">United Kingdom (UK)</option>
                                                <option value="us">United States (USA)</option>
                                                <option value="bd">Bangladesh</option>
                                                <option value="pk">Pakistan</option>
                                                <option value="ind">India</option>
                                                <option value="np">Nepal</option>
                                                </select>
                                                <span className='select-icon'>
                                                    <i className='icofont-rounded-down'></i>
                                                </span>
                                                    </div>
                                                <div className='outline-select shipping-select'>
                                                <select>
                                                 <option value="uk">New York</option>
                                                 <option value="us">London</option>
                                                 <option value="bd">Dhaka</option>
                                                 <option value="pk">Karachi</option>
                                                 <option value="ind">New Delhi</option>
                                                 
                                                 </select>
                                                 <span className='select-icon'>
                                                    <i className='icofont-rounded-down'></i>
                                                </span>
                                                </div>
                                                <input type="text" name='postalCode' id='postalCode' placeholder='postalCode/ZIP'  className='cart-page-input-text' />
                                                <button type='submit'>Update Address</button>
                                                    

                                    </div>
                                </div>
                                <div className='col-md-6 col-12'>
                                    <div className='cart-overview'>
                                        <h3>CartTotal</h3>
                                        <ul className='lab-ul'>
                                            <li>
                                                <span className='pull-left'>Cart Subtotal</span>
                                                <p className='pull-right'>${cartSubTotal}</p>
                                            </li>
                                            <li>
                                                <span className='pull-left'>Shipping and Handling</span>
                                                <p className='pull-right'>Free Shipping </p>
                                            </li>
                                            <li>
                                                <span className='pull-left'>Order Total</span>
                                                <p className='pull-right'>${orderTotal.toFixed(2)}</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </div>

                        </div>


                    </div>

                </div>

            </div>

        </div>
    </div>
  )
}

export default CartPage