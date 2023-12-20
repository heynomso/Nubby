import React from 'react';

function Home(){
  return (
    <div>
      <div className="header">
        <p>NU<span>BB</span>Y</p>
        <span>Join Nubby</span>
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
        </div>
      </div>
    </div>
  );
}

export default Home;