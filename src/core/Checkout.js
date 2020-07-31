import React from 'react';
import { API } from "../config";
import {  processPayment, createOrder } from './apiCore';
import { emptyCart } from './cartHelpers';

import { isAuthenticated } from '../auth';
import axios  from 'axios'
import { Link } from 'react-router-dom';
// // import "braintree-web"; // not using this package
// import DropIn from 'braintree-web-drop-in-react';
  
const Checkout=({products})=>{
//  return<div>{JSON.stringify(products)}</div>
 const getTotal = () => {
    return products.reduce((currentValue, nextValue) => {
        return currentValue + nextValue.count * nextValue.price;
    }, 0);
};

//   const pay = () => {
//     console.log('>>>>>>>>Inside the pay function');
//     const data = {
//             purpose: 'Bit Payment',
//             amount: '10',
//             buyer_name: 'Yasir',
//             email: 'yasir.arafat1111@gmail.com',
//             phone: '9650634299',
//             user_id: '1234567890',
//             redirect_url: 'http://localhost:8000/api/razorpay',
//             webhook_url: '/webhook/'    
//     };
const buy = () => {
    console.log('>>>>>>>>Inside the pay function');
    const data = {
            purpose: 'Bit Payment',
            amount: '56500',
            buyer_name: 'divyansh',
            email: 'divyansh8june@gmail.com',
            address: '7 lok kalyan marg',
            phone: '9650634299',
            user_id: '1234567890',
            redirect_url: 'http://localhost:3000/cart',
            webhook_url: '/webhook/'   
    }; 
   
    const paymentData = {
        NAME: data.buyer_name,
        amount: getTotal(products),
        deliveryAddress : data.address
    };

    processPayment(paymentData)
    .then(response => {
        console.log(response);
        // empty cart
        // create order

        const createOrderData = {
            products: products,
            // transaction_id: response.transaction.id,
            amount: paymentData.amount,
            address: paymentData.deliveryAddress
        };

        createOrder(createOrderData)
            .then(response => {
                emptyCart(() => {
                    // setRun(!run); // run useEffect in parent Cart
                    console.log('payment success and empty cart');
                    // setData({
                    //     loading: false,
                    //     success: true
                    // });
                });
            })
            .catch(error => {
                console.log(error);
                // setData({ loading: false });
            });
    })
    .catch(error => {
        console.log(error);
        // setData({ loading: false });
    });



    axios.post(`${API}/razorpay`, data)
        .then( res => {
            console.log('>>>.Response', res.data);
            window.location.href = res.data;
        } )
        .catch((error) => console.log('error', error))
        
  };
  const showCheckouta = () => {
    return isAuthenticated() ? (
        // <div>{showDropIn()}</div>
        <button className="btn btn-success"
        onClick={buy}
        >Checkout</button>
    ) : (
        <Link to="/signin">
            <button className="btn btn-primary">Sign in to checkout</button>
        </Link>
    );
};

const showCheckout = () => {
    return isAuthenticated() ? (
        <div>{showDropIn()}</div>
    ) : (
        <Link to="/signin">
            <button className="btn btn-primary">Sign in to checkout</button>
        </Link>
    );
};

const showDropIn = () => (
    
       
            <div>
                <div className="gorm-group mb-3">
                    <label className="text-muted">NAME:</label>
                    <textarea
                        className="form-control"
                        placeholder="Enter your name..."
                    />
                </div>
                <div className="gorm-group mb-3">
                    <label className="text-muted">Delivery address:</label>
                    <textarea
                        className="form-control"
                        placeholder="Type your delivery address here..."
                    />
                </div>
                <div className="gorm-group mb-3">
                    <label className="text-muted">Contact No. :</label>
                    <textarea
                        className="form-control"
                        placeholder="Enter your contact number..."
                    />
                </div>
                {/* <DropIn
                    options={{
                        authorization: data.clientToken,
                        paypal: {
                            flow: 'vault'
                        }
                    }}
                    onInstance={instance => (data.instance = instance)}
                /> */}
                <button onClick={buy} className="btn btn-success btn-block">
                    Pay
                </button>
            </div>
         );
         const showError = error => (
            <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
                {error}
            </div>
        );
    
        const showSuccess = success => (
            <div className="alert alert-info" style={{ display: success ? '' : 'none' }}>
                Thanks! Your payment was successful!
            </div>
        );
          
return (
    <div>
        <h2>Total:₹ {getTotal()}</h2>
        {/* {showLoading(data.loading)} */}
        {showSuccess()}
        {/* {showError(data.error)} */}
     {/* {showCheckouta()}  */}
        {showCheckout()} 
    </div>
);

}
export default Checkout


// import React, { useState, useEffect } from 'react';
// import { API } from "../config";
// import { getProducts, getBraintreeClientToken, processPayment, createOrder } from './apiCore';
// import { emptyCart } from './cartHelpers';
// import Card from './Card';
// import { isAuthenticated } from '../auth';
// import axios  from 'axios'
// import { Link } from 'react-router-dom';
// // // import "braintree-web"; // not using this package
// // import DropIn from 'braintree-web-drop-in-react';
  
// const Checkout=({products})=>{
// //  return<div>{JSON.stringify(products)}</div>
//  const getTotal = () => {
//     return products.reduce((currentValue, nextValue) => {
//         return currentValue + nextValue.count * nextValue.price;
//     }, 0);
// };

// //   const pay = () => {
// //     console.log('>>>>>>>>Inside the pay function');
// //     const data = {
// //             purpose: 'Bit Payment',
// //             amount: '10',
// //             buyer_name: 'Yasir',
// //             email: 'yasir.arafat1111@gmail.com',
// //             phone: '9650634299',
// //             user_id: '1234567890',
// //             redirect_url: 'http://localhost:8000/api/razorpay',
// //             webhook_url: '/webhook/'    
// //     };
// const pay = () => {
//     console.log('>>>>>>>>Inside the pay function');
//     const data = {
//             purpose: 'Bit Payment',
//             amount: '10',
//             buyer_name: 'Yasir',
//             email: 'yasir.arafat1111@gmail.com',
//             phone: '9650634299',
//             user_id: '1234567890',
//             redirect_url: 'http://localhost:8000/api/razorpay',
//             webhook_url: '/webhook/'    
//     }; 
//     axios.post(`${API}/razorpay`, data)
//         .then( res => {
//             console.log('>>>.Response', res.data);
//             window.location.href = res.data;
//         } )
//         .catch((error) => console.log('error', error))
//   };
// const showCheckout = () => {
//     return isAuthenticated() ? (
//      //   <div>{showDropIn()}</div>
//      <button className="btn btn-success"
//      onClick={pay}
//      >Checkout</button>
//     ) : (
//         <Link to="/signin">
//             <button className="btn btn-primary">Sign in to checkout</button>
//         </Link>
//     );
// };

// return (
//     <div>
//         <h2>Total:₹ {getTotal()}</h2>
//         {/* {showLoading(data.loading)}
//         {showSuccess(data.success)}
//         {showError(data.error)}*/}
//         {showCheckout()} 
//     </div>
// );

// }
// export default Checkout