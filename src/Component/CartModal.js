import React from 'react'
import '../Stylesheets/Cart-Modal.css'
import emptycart from '../images/empty-cart.gif'

export default function CartModal({close, eachItem}) {
    return (
        <div className='cart-modal'>
            <div className='Modal-wrapper'>
                <button onClick={close}>
                    <span></span>    
                    <span></span>    
                </button>        
                {eachItem.length === 0 && (
                    <div className='cart-empty'>
                        <img src={emptycart} className="empty-cart" alt="cart is empty" />
                        <p>Your Cart Is Empty</p>
                    </div>
                )}    
                <div className='all-item' >                   
                    <div>
                        {
                            eachItem.map((c_item, count)=> {
                                return(
                                    
                                    <div className='card-wrapper' key={c_item.id} >
                                        <div className='w-10'>
                                            <p>{count}</p>
                                        </div>
                                        <div className='w-20'>
                                            <img src={c_item.image} alt='card'/>
                                        </div>
                                        <div className='about-product w-50'>
                                            <div>
                                                <h3>{c_item.title}</h3>
                                            </div>
                                            <div className='card-content'>
                                                {c_item.desc}
                                            </div>
                                        </div>
                                        <div className='Price w-10'>
                                            <h5>{c_item.price}</h5>
                                        </div>
                                        
                                    </div>
                                    
                                    
                                )
                            } ) 
                        }
                    </div>

                </div>
            </div>
        </div>
    );
}




