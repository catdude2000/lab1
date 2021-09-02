import React from 'react';
import Card from 'react-bootstrap/Card'

class HornedBeast extends React.Component {
    render() {
        return (
            <Card>
                <Card.Body>
                    <Card.Img src={this.props.image_url}/>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>{this.props.description}</Card.Text>
                </Card.Body>
            </Card>
            // <div>
            //     <h2>
            //         {this.props.title}
            //     </h2>
            //     <img title={this.props.title} src={this.props.image_url} alt={this.props.descript}/>
            //     <p>{this.props.descript}</p>
            // </div>

        )
    }
}
export default HornedBeast