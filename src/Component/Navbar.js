import React, { useState } from 'react'
import logo from '../images/logo.png'
import { Container, Modal } from '@mui/material'
import '../App.css';
import '../Stylesheets/Nav.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CartModal from './CartModal';

export default function Navbar({count, cartItems})  {
    const [isModalVisible, setModalVisible] = useState(false)
    // const {CartItemsvar} = props;

    return(
        <header className="App-header">
            <Container>            
                <div className="Nav-wrapper">
                    <div className='Left-Nav'>
                        <img src={logo} className="App-logo" alt="logo" />
                    </div>
                    <div className='Right-Nav'>
                        <div onClick={() => setModalVisible(true) }>
                            <ShoppingCartIcon />
                        </div>
                        <div>
                            <Modal open={isModalVisible} show={true} className="lg-modal" >
                                <CartModal eachItem={cartItems} close={() => setModalVisible(false)} />
                            </Modal>
                        </div>
                        <div className='ItemCount'>
                            <p>{count}</p>
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    );
}

//export default Navbar