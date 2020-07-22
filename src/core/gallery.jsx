// import React, { useState, useEffect } from 'react';
// import Layout from './Layout';
// import { getProducts } from './apiCore';
// // import { loadProductsBySell } from './Home';
// import Search from './Search';
// import ReactBnbGallery from 'react-bnb-gallery';

// const Gallery = () => {
//   const [productsBySell, setProductsBySell] = useState([])
//   const [error, setError] = useState(false)

//     // class Example extends Component {
//   // constructor() {
//   //   super(...arguments);
//   //   this.state = { galleryOpened: false };
//   //   this.toggleGallery = this.toggleGallery.bind(this);
//   // }
//   const loadProductsBySell = () => {
//     getProducts('sold').then(data => {
//         if (data.error) {
//             setError(data.error)
//         } else {
//             setProductsBySell(data)
//         }
//     });
// };

//   toggleGallery=()=> {
//     console.log("fdfddf")
//     this.setState(prevState => ({
//       galleryOpened: !prevState.galleryOpened
//     }));
//   }
//   // toggleGallery() {
//   //  return this.setState(prevState => ({
//   //     galleryOpened: !prevState.galleryOpened
//   //   }));
//   // }
    
//     useEffect(() => {
//         loadProductsBySell()
//     }, [])
//     return (
//         <Layout
//             title="PILLAI GALLERY"
//             description=" WELCOME"           
//         > <Search />
//             <h2 className="mb-4">BEST SELLERS</h2>
//             <div className="row">
//                 {/* {toggleGallery.map((product, i) => (
//                   // <div key={i} className="col-4 mb-3">
//                   <div key={i} className="col-4 mb-3">
//                   {/* <Card product={product} /> */}
//                   {/* <button onClick={this.toggleGallery}>Open photo gallery</button>
//        <ReactBnbGallery show={this.state.galleryOpened}  product={product}onClose={this.toggleGallery} />
//                   </div>
//                 ))} */} 
//                   { productsBySell.map((product, i) =>(
//                           <div>
//                           <button onClick={this.toggleGallery()}>Open photo gallery</button>
//                           <ReactBnbGallery show={this.state.galleryOpened}  product={product}onClose={this.toggleGallery} />
//                           </div>
//                   ))}
//                 </div>     
//              </Layout>
//     );
// };
// export default Gallery 

import React, { Component } from 'react'
import Home  from  './Home'
import ReactBnbGallery from 'react-bnb-gallery'

const photos = [{
  photo: "https://source.unsplash.com/aZjw7xI3QAA/1144x763",
  caption: "Viñales, Pinar del Río, Cuba",
  subcaption: "Photo by Simon Matzinger on Unsplash",
  thumbnail: "https://source.unsplash.com/aZjw7xI3QAA/100x67",
}, {
  photo: "https://source.unsplash.com/c77MgFOt7e0/1144x763",
  caption: "La Habana, Cuba",
  subcaption: "Photo by Gerardo Sanchez on Unsplash",
  thumbnail: "https://source.unsplash.com/c77MgFOt7e0/100x67",
}, {
  photo: "https://source.unsplash.com/QdBHnkBdu4g/1144x763",
  caption: "Woman smoking a tobacco",
  subcaption: "Photo by Hannah Cauhepe on Unsplash",
  thumbnail: "https://source.unsplash.com/QdBHnkBdu4g/100x67",
}];

class Gallery extends Component {
  constructor() {
    super(...arguments);
    this.state = { galleryOpened: false };
    this.toggleGallery = this.toggleGallery.bind(this);
  }

  toggleGallery() {
    this.setState(prevState => ({
      galleryOpened: !prevState.galleryOpened
    }));
  }

  render () {
    return (
      <>
      <button onClick={this.toggleGallery}>Open photo gallery</button>
      <ReactBnbGallery
        show={this.state.galleryOpened}
        photos={photos}
        onClose={this.toggleGallery} />
        </>
    )
  }
}
export default Gallery;