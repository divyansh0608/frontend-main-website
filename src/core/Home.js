import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import { getProducts } from './apiCore';
import Card from './Card';
import Search from './Search';
const Home = () => {
    const [productsBySell, setProductsBySell] = useState([])
    const [productsByArrival, setProductsByArrival] = useState([])
    const [error, setError] = useState(false)

    const loadProductsBySell = () => {
        getProducts('sold').then(data => {
            if (data.error) {
                setError(data.error)
            } else {
                setProductsBySell(data)
            }
        });
    };
     
    const loadProductsByArrival = () => {
        getProducts('createdAt').then(data => {
            console.log(data);
            if (data.error) {
                setError(data.error)
            } else {
                setProductsByArrival(data)
            }
        });
    };

    useEffect(() => {
        loadProductsByArrival()
        loadProductsBySell()
    }, [])
    return (
        <Layout
            title="PILLAI CREATIONS"
            description="LUMINOUS IMAGINATIONS"
           
        > <Search />
            <h2 className="mb-4">BEST SELLERS</h2>
            <div className="row">
                {productsBySell.map((product, i) => (
                  <div key={i} className="col-4 mb-3">
                  <Card product={product} />
                  </div>
                ))}
                </div>

                <h2 className="mb-4">New Arrivals</h2>
            <div className="row">
                {productsByArrival.map((product, i) => (
                     <div key={i} className="col-4 mb-3">
                     <Card product={product} />
                     </div>
                ))}
                </div>
            <script src="//code.tidio.co/gqbhiihyhyhhj66sp614hsq32s3whd6.js" async></script> 
        {/* {JSON.stringify(productsByArrival)}
        <hr/>
        {JSON.stringify(productsBySell)}
            <Search /> */}
            {/* <h2 className="mb-4">New Arrivals</h2>
            <div className="row">
                {productsByArrival.map((product, i) => (
                    <div key={i} className="col-4 mb-3">
                        <Card product={product} />
                    </div>
                ))}
            </div>

            <h2 className="mb-4">Best Sellers</h2>
            <div className="row">
                {productsBySell.map((product, i) => (
                    <div key={i} className="col-4 mb-3">
                        <Card product={product} />
                    </div>
                ))}
            </div> */}
        </Layout>
    );
};
export default Home 
{/* <script src="//code.tidio.co/gqbhiifx8ecnxgfwsp614hsq32s3whd6.js" async></script> */}