import Navbar from './Navbar';
import Axios from "axios";
import React, { useState, useEffect } from "react";


/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
// const products = [
//    {
//      id: 1,
//      name: 'Basic Tee',
//      href: '#',
//      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
//      imageAlt: "Front of men's Basic Tee in black.",
//      price: '$35',
//      color: 'Black',
//    },
//    {
//      id: 1,
//    name: 'Basic Tee',
//      href: '#',
//     imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
//    imageAlt: "Front of men's Basic Tee in black.",
//     price: '$35',
//    price: '$35',
//    color: 'Black',
//    },
//    {
//      id: 1,
//      name: 'Basic Tee',
//      href: '#',
//      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
//      imageAlt: "Front of men's Basic Tee in black.",
//      price: '$35',
//      color: 'Black',
//    },
//    {
//      id: 1,
//      name: 'Basic Tee',
//      href: '#',
//      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
//      imageAlt: "Front of men's Basic Tee in black.",
//      price: '$35',
//      color: 'Black',
//    },
//    {
//      id: 1,
//      name: 'Basic Tee',
//      href: '#',
//      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
//      imageAlt: "Front of men's Basic Tee in black.",
//      price: '$35',
//      color: 'Black',
//    },
    // More products...
//   ]
  

    export default function Example() {
        const [style, setStyle] = useState([]);
      
        useEffect(() => {
          getStyle();
        }, []);
      
        const getStyle = () => {
          Axios.get(`https://raw.githubusercontent.com/anggeranugrah/anggeranugrah/main/kalee.json`)
            .then((res) => {
              const data = res.data;
              setStyle(data.style);
            })
            .catch(function (error) {
              // handle error
              console.log(error);
            });
        };

    return (
      <div className="bg-white">
        <Navbar />
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Customers also purchased</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {style.map((style) => (
              <div key={style.styleID} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src={style.url}
                    // alt={style.imageAlt}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={style.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {style.stylename}
                      </a>
                    </h3>
                    {/* <p className="mt-1 text-sm text-gray-500">{style.color}</p> */}
                  </div>
                  <p className="text-sm font-medium text-gray-900">{style.UnitPrice}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  