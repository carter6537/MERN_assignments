import React, { useState} from 'react';
import axios from 'axios';

const ProductForm = () => {
    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [desc, setDesc] = useState();

    const handleChange1 = (event) => {
        setTitle(event.target.value);
    }

    const handleChange2 = (event) => {
        setPrice(event.target.value);
    }

    const handleChange3 = (event) => {
        setDesc(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post("http://localhost:8000/api/products/new/", {
            "title" : title,
            "price" : price,
            "description" : desc
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" onChange={handleChange1} placeholder="Product"></input><br />
                <input type="number" step="0.01" min="0.00" name="price" onChange={handleChange2} placeholder="Price"></input><br />
                <input type="text" name="description" onChange={handleChange3} placeholder="Description"></input><br />
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default ProductForm;