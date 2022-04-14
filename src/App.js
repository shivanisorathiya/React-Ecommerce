import React, { useState } from 'react';
import { Route, Switch } from "react-router-dom";
import Navbar from './Component/Navbar';
import Products from './Component/Products';
import ViewProduct from './Component/ViewProduct';

export default function App(data) {
    const [count, setCount] = useState(0);
    const[CartItems, setCartItems] = useState([]);
    return (
        <div>
            <Navbar count={count} cartItems={CartItems} />
            <Switch>
                <Route exact  path='/'>
                        <Products setCount = {(val) => {
                        setCount(count + 1)

                        if(CartItems.length === 0) {
                            CartItems.push(val);
                            // console.log(CartItems);
                        }
                        else {
                            const ProductExsist = CartItems.find(
                                (item) => item.id === val.id
                            );
                            //console.log(ProductExsist);
                            if(ProductExsist) {
                                setCartItems(
                                    CartItems.map((item) =>
                                    item.id === val.id? {
                                        ...ProductExsist,
                                        quantity: ProductExsist.quantity + 1,
                                    }
                                    : item
                                    )
                                )
                            } else setCartItems([...CartItems, {...val, quantity: 1}]);
                        }
                        // console.log(CartItems);
                    }} />
                </Route>
                <Route path={`/viewProducts/:id`} component={ViewProduct}>
                    <ViewProduct />
                </Route>
            </Switch>
            
        </div>
        
    );
    
}

