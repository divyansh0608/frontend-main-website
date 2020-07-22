
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
  
// // const Checkout=({products})=>{
// // //  return<div>{JSON.stringify(products)}</div>
// //  const getTotal = () => {
// //     return products.reduce((currentValue, nextValue) => {
// //         return currentValue + nextValue.count * nextValue.price;
// //     }, 0);
// // };
// // const getTotal = () => {
// //     return products.reduce((currentValue, nextValue) => {
// //         return currentValue + nextValue.count * nextValue.price;
// //     }, 0);
// // };
// const Checkout = ({ products, setRun = f => f, run = undefined }) => {
    
//     const [data, setData] = useState({
//         loading: false,
//         success: false,
//         clientToken: null,
//         error: '',
//         instance: {},
//         address: ''
//     });

//          const getTotal = () => {
//           return products.reduce((currentValue, nextValue) => {
//           return currentValue + nextValue.count * nextValue.price;
//             }, 0);
//            };
//     const userId = isAuthenticated() && isAuthenticated().user._id;
//     const token = isAuthenticated() && isAuthenticated().token;
//     useEffect(() => {
//         getToken(userId, token);
//     }, []);

//     const handleAddress = event => {
//         setData({ ...data, address: event.target.value });
//     };
//     let deliveryAddress = data.address;
//   const pay = () => {
//     console.log('>>>>>>>>Inside the pay function');
//     const data = {
//             purpose: 'Test Payment',
//             amount: '100',
//             buyer_name: 'Yogendra Singh panwar',
//             email: 'pawar64@yahoo.com',
//             phone: '9868869368',
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
// // const showCheckout = () => {
// //     return isAuthenticated() ? (
// //         <div>{showDropIn()}</div>
// //      <button className="btn btn-success" onClick={pay}>Checkout</button>
// //     ) : (
// //         <Link to="/signin">
// //             <button className="btn btn-primary">Sign in to checkout</button>
// //         </Link>
// //     );
// // };

// const showCheckout = () => {
//     return isAuthenticated() ? (
//         <div>{showDropIn()}</div>
//     ) : (
//         <Link to="/signin">
//             <button className="btn btn-primary">Sign in to checkout</button>
//         </Link>
//     );
// };

// const showDropIn = () => (
//     <div onBlur={() => setData({ ...data, error: '' })}>
//         {data.clientToken !== null && products.length > 0 ? (
//             <div>
//                 <div className="gorm-group mb-3">
//                     <label className="text-muted">Delivery address:</label>
//                     <textarea
//                         onChange={handleAddress}
//                         className="form-control"
//                         value={data.address}
//                         placeholder="Type your delivery address here..."
//                     />
//                 </div>

//                 <DropIn
//                     options={{
//                         authorization: data.clientToken,
//                         paypal: {
//                             flow: 'vault'
//                         }
//                     }}
//                     onInstance={instance => (data.instance = instance)}
//                 />
//                 <button onClick={pay} className="btn btn-success btn-block">
//                     Pay
//                 </button>
//             </div>
//         ) : null}
//     </div>
// );

// const showError = error => (
//     <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
//         {error}
//     </div>
// );

// const showSuccess = success => (
//     <div className="alert alert-info" style={{ display: success ? '' : 'none' }}>
//         Thanks! Your payment was successful!
//     </div>
// );

// const showLoading = loading => loading && <h2 className="text-danger">Loading...</h2>;


// return (
//     <div>
//         <h2>Total:₹ {getTotal()}</h2>
//     {showLoading(data.loading)} 
//         {showSuccess(data.success)}
//         {showError(data.error)}
//         {showCheckout()} 
//     </div>
// );

// }
// export default Checkout

// import React, { useState, useEffect } from 'react';
// import { getProducts, getBraintreeClientToken, processPayment, createOrder } from './apiCore';
// import { emptyCart } from './cartHelpers';
// import Card from './Card';
// import { isAuthenticated } from '../auth';
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
// const showCheckout = () => {
//     return isAuthenticated() ? (
//      //   <div>{showDropIn()}</div>
//      <button className=" btn btn-success">Checkout</button>
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



// import React, { useState, useEffect } from 'react';
// import { getProducts, getBraintreeClientToken, processPayment, createOrder } from './apiCore';
// import { emptyCart } from './cartHelpers';
// import Card from './Card';
// import { isAuthenticated } from '../auth';
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
// const showCheckout = () => {
//     return isAuthenticated() ? (
//      //   <div>{showDropIn()}</div>
//      <button className=" btn btn-success">Checkout</button>
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