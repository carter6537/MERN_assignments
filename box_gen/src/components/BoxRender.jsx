import React, {Component} from 'react';

class BoxRender extends Component {
    render() {
        // console.log(this.props.keyName)
        return (
        <div
            style={{
                width:"100",
                height:"100",
                backgroundColor: this.props.color
                }}
            //key={this.props.keyName.toString()}
            >
        </div>
        )
    }
}
export default BoxRender;