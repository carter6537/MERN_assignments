import React, {Component} from 'react';

class MyComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age : props.age
        }
    }

    render() {
        return (
            <div>
                <h1>{this.props.firstName} {this.props.lastName}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {this.props.hairColor}</p>
                <button onClick={ () => {this.setState({age: (parseInt(this.state.age) + 1)})}}>Add a year</button>
            </div>
        );
    }
}

export default MyComponent;