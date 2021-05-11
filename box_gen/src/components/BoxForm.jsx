import React, {Component} from 'react';
import BoxRender from './BoxRender';

// import {useState} from 'react';

// const BoxForm = (props) => {
//     const [clrs, setClrs] = useState([]);
//     const [clr, setClr] = useState("");

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setClrs(clrs + clr);
//         console.log(clrs);
//     }

//     const handleChange = (e) => {
//         setClr(e.target.value);
//         // console.log(e.target.value);
//     }

//     return (
//         <form onSubmit={handleSubmit}>
//             <label for="color">Color:</label>
//             <input type="text" name="color" onChange={handleChange} value={clr}></input>
//             <button type="submit">Add</button>
//         </form>
//     );
// }

class BoxForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            value: "",
            list: [],
        };
    };

    handleChange = (event) => {
        this.setState({value: event.target.value});
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState(state => {
            const list = [...state.list, state.value];
            return {
                list,
                value: '',
            };
        })
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="color">Color:</label>
                    <input type="text" name="color" onChange={this.handleChange} value={this.state.value}></input>
                    <button type="submit">Add</button>
                </form>
                <div className="boxes">
                    {
                        this.state.list.map( (clr, i) => 
                            <BoxRender key = {i.toString()} color = {clr}/>
                        )
                    }
                </div>
            </div>
        )
    };
}

export default BoxForm;