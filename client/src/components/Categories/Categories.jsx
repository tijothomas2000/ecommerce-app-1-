import React from 'react';
import "./Categories.scss";
import { Link } from 'react-router-dom';

export default function Categories() {
    return (
        <div className='categories'>
            <div className="col">
                <div className="row">
                    <img src="https://media.istockphoto.com/id/1430978895/photo/portrait-of-excited-elegant-man.jpg?s=612x612&w=0&k=20&c=E0cHFmMd6-5HURg2_w5m9vnl-nv15Tx_otEt6IUsQVs=" alt="" />
                    <button>
                        <Link className='link' to="products/1">Women</Link>
                    </button>
                </div>
                <div className="row">
                    <img src="https://media.istockphoto.com/id/1430978895/photo/portrait-of-excited-elegant-man.jpg?s=612x612&w=0&k=20&c=E0cHFmMd6-5HURg2_w5m9vnl-nv15Tx_otEt6IUsQVs=" alt="" />
                    <button>
                        <Link className='link' to="products/2">Men</Link>
                    </button>
                </div>
            </div>
            <div className="col">
                <div className="row">
                    <img src="https://media.istockphoto.com/id/1430978895/photo/portrait-of-excited-elegant-man.jpg?s=612x612&w=0&k=20&c=E0cHFmMd6-5HURg2_w5m9vnl-nv15Tx_otEt6IUsQVs=" alt="" />
                    <button>
                        <Link className='link' to="products/3">Children</Link>
                    </button>
                </div>
            </div>
            <div className="col col-lg">
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <img src="https://media.istockphoto.com/id/1430978895/photo/portrait-of-excited-elegant-man.jpg?s=612x612&w=0&k=20&c=E0cHFmMd6-5HURg2_w5m9vnl-nv15Tx_otEt6IUsQVs=" alt="" />
                            <button>
                                <Link className='link' to="products/4">Sale</Link>
                            </button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <img src="https://media.istockphoto.com/id/1430978895/photo/portrait-of-excited-elegant-man.jpg?s=612x612&w=0&k=20&c=E0cHFmMd6-5HURg2_w5m9vnl-nv15Tx_otEt6IUsQVs=" alt="" />
                            <button>
                                <Link className='link' to="products/5">Sale</Link>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <img src="https://media.istockphoto.com/id/1430978895/photo/portrait-of-excited-elegant-man.jpg?s=612x612&w=0&k=20&c=E0cHFmMd6-5HURg2_w5m9vnl-nv15Tx_otEt6IUsQVs=" alt="" />
                    <button>
                        <Link className='link' to="products/6">Sale</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}
