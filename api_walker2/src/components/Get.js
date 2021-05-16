import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Get = (props) => {
    const [data, setData] = useState();
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        if (props.type != null && props.id != null) {
            let link = `https://swapi.dev/api/${props.type}/${props.id}/`
            axios.get(link)
                .then(response => { 
                    console.log(response.data);
                    setData(response.data);
                    setLoading(false) })
        };
    }, [props.type, props.id]);
    
    if (isLoading) {
        return (
            <div ClassName="Data">Loading...</div>
        )
    }

    if (props.type === "people") {
        return (
            <div>
                <h1>{data.name}</h1>
                <p>Height: {data.height}</p>
                <p>Mass: {data.mass}</p>
                <p>Hair Color: {data.hair_color}</p>
                <p>Skin Color: {data.skin_color}</p>
            </div>
        )
    }

    if (props.type === "planets") {
        return (
            <div>
                <h1>{data.name}</h1>
                <p>Climate: {data.climate}</p>
                <p>Terrain: {data.terrain}</p>
                <p>Surface Water: {data.surface_water}</p>
                <p>Population: {data.population}</p>
            </div>
        )
    }
    
    if (props.type === "starships") {
        return (
            <div>
                <h1>{data.name}</h1>
                <p>Manufacturer: {data.manufacturer}</p>
                <p>Model: {data.model}</p>
                <p>Crew Size: {data.crew}</p>
                <p>Starship Class: {data.starship_class}</p>
            </div>
        )
    }
};

export default Get;