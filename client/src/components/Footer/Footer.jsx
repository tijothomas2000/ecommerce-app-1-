import React from 'react';
import "./footer.css";

export default function Footer() {
  return (
    <div className='footer'>
      <div className="footertop">
        <div className="footeritem">
          <h1>Categories</h1>
          <span>Men</span>
          <span>Women</span>
          <span>Children</span>
          <span>Footwear</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="footeritem">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
          <span>Terms & Conditions</span>
        </div>
        <div className="footeritem">
          <h1>About</h1>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt soluta, aspernatur esse tenetur veniam debitis incidunt dolor ut quam totam animi dignissimos nulla suscipit voluptatem quas illum deserunt laboriosam optio.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est debitis eligendi, perspiciatis architecto tenetur corporis amet itaque delectus aut qui voluptatum temporibus illum corrupti, deserunt pariatur consequatur. Sed, ratione vero.
          </span>
        </div>
        <div className="footeritem">
          <h1>Contact</h1>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt soluta, aspernatur esse tenetur veniam debitis incidunt dolor ut quam totam animi dignissimos nulla suscipit voluptatem quas illum deserunt laboriosam optio.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est debitis eligendi, perspiciatis architecto tenetur corporis amet itaque delectus aut qui voluptatum temporibus illum corrupti, deserunt pariatur consequatur. Sed, ratione vero.
          </span>
        </div>
      </div>
      <div className="footerbottom">
        <div className="footerleft">
          <span className="logo">CALVIN KLONE</span>
          <span className="copyright">&copy; Copyright 2024. All Rights Reserved.</span>
        </div>
        <div className="footerright">
          <img src="/img/payment.png" alt="Stripe payments banner" />
        </div>
      </div>
    </div>
  )
}
