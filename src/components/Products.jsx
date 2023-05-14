import React from 'react'
import Product from './Product'
import '../css/Products.css'
import { useState, useEffect } from 'react';
import axios from "axios";

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        async function getAndSetProducts() {
            const productsReceived = await axios.get('http://localhost:8080/api/job/job');
            setProducts(productsReceived.data);
        }
        getAndSetProducts();
    }, []);

    return (
        <section className='job-list' id='jobs'>
            <h1 className='text-lg font-bold my-8'>Openings:</h1>
            {products.map(product => {
                return <Product key={product.id} product={product} />
            })}
        </section>
    )
}

export default Products

