import React, { useEffect, useState } from 'react';
import axios from 'axios';


const ProductInfo = (props) => {
    const [product, setProduct] = useState();

    useEffect(() => {
        let link = `http://localhost:8000/api/products/${props.id}`
        axios.get(link)
            .then(res => setProduct(res.data.product))
            .catch(err => console.log(err))
    }, [props.id])
    
    if (product == null) {
        return (
            <div>Loading...</div>
        )
    } else {
        return (
            <div>
                <h2>{product.title}</h2>
                <h3>Price: {product.price}</h3>
                <p>Description: {product.description}</p>
            </div>
        )
    }
}

export default ProductInfo;