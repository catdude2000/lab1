import React from 'react';

class HornedBeast extends React.Component {
    render() {
        return (
            <div>
                <h2>
                    {this.props.title}
                </h2>
                <img title={this.props.title} src={this.props.image_url} alt={this.props.descript}/>
                <p>{this.props.descript}</p>
            </div>

        )
    }
}
export default HornedBeast