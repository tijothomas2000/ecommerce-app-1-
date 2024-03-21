import React from 'react'
import "./Card.css";
import { Link } from 'react-router-dom';

export default function Card({ item }) {
    return (
        <Link className='link' to={`/product/${item.id}`}>
            <div className="card">
                <div className="image">
                    {item?.attributes.isNew ? <span>New Arrival 💥</span> : <span>On Sale 📛</span>}
                    <img src={process.env.REACT_APP_UPLOAD_URL + item?.attributes.img.data.attributes.url} alt="" className='mainImg' />
                    <img src={process.env.REACT_APP_UPLOAD_URL + item?.attributes.img2.data.attributes.url} alt="" className='secondImg' />
                </div>
                <h2>{item?.attributes.title}</h2>
                <div className="prices">
                    <h3 className="oldprice">&#8377;{item.oldPrice || item?.attributes.price + 20}</h3>
                    <h3>&#8377;{item?.attributes.price}</h3>
                </div>
            </div>
        </Link>
    )
}
