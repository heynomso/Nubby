import React from 'react';

function Home(){
  return (
    <div>
      <div className="header">
        <p>NU<span>BB</span>Y</p>
        <button>Join Nubby</button>
      </div>
      <div className="home-vendor-box">
        <div className="home-vendor-box text-box">
          <p>Using NU<span>BB</span>Y,</p>
          <p>find the product or service</p>
          <p>you need on campus</p>
        </div>

        <div className="home-vendor-box search-box">
          <div className="home-vendor-box search-bar"> Search for a product, servcie or vendor</div>
          <button>Search</button>
        </div>
      </div>

      <div className="advertisement">
        <div className="advertisement text-box">
          <p>Want to sell it,go for it</p>
          <p>You need it, we've got it</p>
        </div>

        <div className="advertisement icons"> 
        <img src="/images/street-food.png" alt="" /> 
        <p>Food & Drinks</p>

        <img src="/images/krita.png" alt="" /> 
        <p>Graphics Design</p>

        <img src="/images/homework.png" alt="" /> 
        <p>Assignment help</p>

        <img src="/images/google-code.png" alt="" /> 
        <p>Programming</p>

        <img src="/images/shopping-mall.png" alt="" /> 
        <p>Clothing & Fashion</p>

        <img src="/images/google-code.png" alt="" /> 
        <p>Programming</p>
        </div>
      </div>

      <div className="best-part">
        <p>The best part of NU<span>BB</span>Y </p>
         <p><img src="/images/check-ring.png" alt="" />  Break into the market with ease</p>
         <span>As a new student vendor, it can be difficult to get customers, Nubby is here to help you make those sales within campus</span>

         <p><img src="/images/check-ring.png" alt="" />  Break into the market with ease</p>
         <span>As a new student vendor, it can be difficult to get customers, Nubby is here to help you make those sales within campus</span>

         <p><img src="/images/check-ring.png" alt="" />  Break into the market with ease</p>
         <span>As a new student vendor, it can be difficult to get customers, Nubby is here to help you make those sales within campus</span>
      </div>

      <div className="business-starter">
        <div className="business-starter center">
          <p>Early business starter?</p>
          <p>Hey <span>WE</span> got you</p>
          <button>Join Nubby</button>
        </div>
      </div>

      <div className="accordion">
        <div className="accordion categories"><p>Categories <img src="images/arrow-down.png" alt="" /></p></div>
        <div className="accordion categories"><p>About <img src="images/arrow-down.png" alt="" /></p></div>
        <div className="accordion categories"><p>Become a Student Vendor <img src="images/arrow-down.png" alt="" /></p></div>
      </div>

      <div className="socials">
        <div className="socials logo">
          <img src="images/logo.png" alt="" /><p>  NU<span>BB</span>Y</p>
        </div>
          <img src="images/facebook.png" alt="" />
          <img src="images/instagram.png" alt="" />
          <img src="images/linkedin.png" alt="" />
      </div>
    </div>
  );
}

export default Home;