import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { Link } from 'react-router-dom';
import "./navbar.css";
import Cart from '../Cart/Cart.jsx';
import { useSelector } from 'react-redux';

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const products = useSelector(state => state.cart.products);
    // const navbar = document.querySelector(".navbar");
    // window.onscroll = () => {
    //     if (window.scrollY > 30) {
    //         navbar.classList.add('nav-active');
    //     } else {
    //         navbar.classList.remove('nav-active');
    //     }
    // };
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="left">
                    <div className="item0">
                        <span className="fi fi-in"></span>
                        <KeyboardArrowDownIcon />
                    </div>
                    <div className="item0 navColor">
                        <span>INR</span>
                        <KeyboardArrowDownIcon />
                    </div>
                    <div className="item navColor">
                        <Link className="link" to="/products/1" >Women</Link>
                    </div>
                    <div className="item navColor">
                        <Link className="link" to="/products/2" >Men</Link>
                    </div>
                    <div className="item navColor">
                        <Link className="link" to="/products/3" >Children</Link>
                    </div>
                </div>
                <div className="center">
                    <Link className="link" to="/">
                        CALVIN KLONE
                    </Link>
                </div>
                <div className="right">
                    <div className="item">
                        <Link className="link" to="/">Home</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/">About</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/">Contact</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/">Stores</Link>
                    </div>
                    <div className="icons">
                        <SearchIcon />
                        <PersonOutlineOutlinedIcon />
                        <FavoriteBorderOutlinedIcon />
                        <div className="cartIcon" onClick={() => setOpen(!open)}>
                            <ShoppingCartOutlinedIcon />
                            <span>{products.length}</span>
                        </div>
                    </div>
                </div>
            </div>
            {open && <Cart />}
        </div>
    );
}
