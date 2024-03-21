import React, { useState } from 'react';
import "./Product.scss";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import BalanceIcon from '@mui/icons-material/Balance'
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { addToCart } from '../../redux/cartReducer';
import { useDispatch } from 'react-redux';

export default function Product() {
  const [quantity, setQuantity] = useState(1);
  const [selectedImg, setSelectedImg] = useState('img');
  const id = useParams().id;
  const upload_url = process.env.REACT_APP_UPLOAD_URL;
  const dispatch = useDispatch()
  const { data, loading, error } = useFetch(
    `/products/${id}?populate=*`);

  return (
    <div className="product">
      {loading ? "Loading..." :
        (
          <>
            <div className="container">
              <div className="left">
                <div className="images">
                  <img src={`${upload_url}${data?.attributes?.img?.data?.attributes?.url}`} alt="" onClick={(e) => setSelectedImg("img")} />
                  <img src={`${upload_url}${data?.attributes?.img2?.data?.attributes?.url}`} alt="" onClick={(e) => setSelectedImg("img2")} />
                </div>
                <div className="mainImg">
                  <img src={`${upload_url}${data?.attributes?.[selectedImg]?.data?.attributes?.url}`} alt="" />
                </div>
              </div>
              <div className="right">
                <h1>{data?.attributes?.title}</h1>
                <span className='price'>&#8377;{data?.attributes?.price}</span>
                <p>{data?.attributes?.desc}</p>
                <div className="quantity">
                  <button onClick={() => setQuantity(prevQuantity => (prevQuantity === 1 ? 1 : prevQuantity - 1))}>-</button>
                  {quantity}
                  <button onClick={() => setQuantity(prevQuantity => prevQuantity + 1)}>+</button>
                </div>
                <button className="add" onClick={() => dispatch(addToCart({
                  id: data.id,
                  title: data?.attributes?.title,
                  desc: data?.attributes?.desc,
                  price: data.attributes.price,
                  img: data?.attributes.img.data.attributes.url,
                  quantity
                }))}>
                  <AddShoppingCartIcon /> ADD TO CART
                </button>
                <div className="link">
                  <div className="item0">
                    <FavoriteBorderIcon /> ADD TO WISHLIST
                  </div>
                  <div className="item0">
                    <BalanceIcon /> ADD TO COMPARE
                  </div>
                </div>
                <div className="info">
                  <span>Vendor: POLO</span>
                  <span>Product Type: T-Shirt</span>
                  <span>Tags: T-Shirt, Men, Tops</span>
                </div>
                <hr />
                <div className="info">
                  <span>Description</span>
                  <hr />
                  <span>Additional Information</span>
                  <hr />
                  <span>FAQ</span>
                </div>
              </div>
            </div>
          </>
        )
      }
    </div>
  );
}
