import React from 'react';
import Card from 'react-bootstrap/Card'

class HornedBeast extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            favorites: 0,
        };
    }
        handleCardClick=() => {
            let currentFavorites = this.state.favorites;
            this.setState({ favorites: currentFavorites + 1});
        }
    render() {
        return (
            <Card
            onClick={this.handleCardClick}
            >
                <Card.Body>
                    <Card.Img src={this.props.image_url}/>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>Favorites = {this.state.favorites}</Card.Text>
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