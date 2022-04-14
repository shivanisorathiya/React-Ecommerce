import React from 'react'
import '../Stylesheets/Cart-Modal.css'


export default function ProductDetail() {
    return (      
        <div className='card-wrapper' key={c_item.id} >
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
            <div className='Price w-20'>
                <h5>{c_item.price}</h5>
            </div>
        </div>
    );
}




