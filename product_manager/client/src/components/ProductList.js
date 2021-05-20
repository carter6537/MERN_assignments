import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

const ProductList = () => {
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/")
        .then(res => setProductList(res.data.allProducts))
        .catch(err => console.log(err))
    }, [])
    
    return (
        <div>
            {productList != null && productList.map((product, i) => { 
                let link = `/${product._id}`;
                return <Link to={link} key={i}>{product.title}<br/></Link>
            })}
        </div>
    )
}

export default ProductList;