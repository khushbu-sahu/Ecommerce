// import React from 'react'

// export default function Home() {
//   return (
//     <div>Home</div>
//   )
// }

import React from 'react';
import data from '../data.json'
import "./Home.css"
const Home = ({setCartCount}) => {
    // Accessing the product data
    const products = data.mydata;

    // Filtering products where the price is "free"
    const freeProducts = products.filter((product) => product.price === "free");

    return (
        <>
        {/* <div>
            <img src="../src/assets/hero1.webp" alt="hero" width="100%"  height="600" cover/>
        </div> */}
      {/* <div className="hero-container">
    <img src="../src/assets/hero1.webp" alt="hero" className="hero-image" />
    <div className="hero-overlay"></div>
    <h1 className="hero-text">Shop Smart, Shop Fast with <br /> <span>QuickCart</span></h1>
</div> */}

<div className="hero-container">
    <img src="../src/assets/hero1.webp" alt="hero" className="hero-image" />
    <div className="hero-overlay"></div>
    <div className="hero-text">
        <h1>Shop Fast. Checkout Faster! 🚀</h1>
        <p>Say goodbye to slow checkouts! With <span>QuickCart</span>, experience lightning-fast shopping with one-tap purchases.</p>
    </div>
</div>



        <div className='pardiv'>
            <h1>Exclusive Free Products</h1>
            <div className='cards'>

                {freeProducts.map((product, index) => (
                    <div className='card' key={product.id}>
                        <ul>
                            <li key={product.id}>
                                <h2>{product.title}</h2>
                                <p>Price: {product.price}</p>
                                <img src={product.img} alt={product.title} width="200" />
                            </li>
                            <button onClick={()=>setCartCount(prevCount => prevCount + 1)}>Add to Cart</button>

                        </ul>
                    </div>
                ))}

            </div>
        </div>
        </>
    );
};

export default Home;
