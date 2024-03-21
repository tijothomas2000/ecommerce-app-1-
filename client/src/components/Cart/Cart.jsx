import React from 'react';
import "./Cart.scss";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, resetCart } from '../../redux/cartReducer';

export default function Cart() {
    const products = useSelector(state => state.cart.products);
    function total() {
        let tot = 0;
        products.forEach(item => tot += item.quantity * item.price);
        return tot.toFixed(2);
    }
    const dispatch = useDispatch();

    return (
        <div className='cart'>
            <h1>Items in Cart</h1>
            {products.map(item => (
                <div className="item0" key={item.id}>
                    <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt="" />
                    <div className="details">
                        <h2>{item.title}</h2>
                        <p>{item.desc.substring(0, 100)}</p>
                        <div className="price">
                            {item.quantity} X {item.price}
                        </div>
                    </div>
                    <DeleteOutlinedIcon className='delete' onClick={() => dispatch(removeItem(item.id))} />
                </div>
            ))}
            <div className="total">
                <span>SUBTOTAL</span>
                <span>&#8377;{total()}</span>
            </div>
            <button>Proceed to Checkout</button>
            <span className='reset' onClick={() => dispatch(resetCart())}>Reset Cart</span>
        </div>
    )
}
