import React from 'react';
import HornedBeast from './HornedBeast';
import { Form, Container, Button} from 'react-bootstrap';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // start with all
            filteredBeasts: this.props.beasts,
        };
    }
handleSubmit = (event) => {
    // prevent actually submitting
    event.PreventDefault();
    // pull values out of DOM input/select/etc
    let hornCount = parseInt(event.target.elements.hornCount.value);
    console.log(hornCount);
    this.filteredBeasts(hornCount);
}
handleChange = event => {
    let hornCount = parseInt(event.target.value);
    this.filteredBeasts(hornCount);
}
filteredBeasts = (hornCount) => {

    let filteredBeasts = this.props.beasts;

    if (hornCount > 0) {
    filteredBeasts =filteredBeasts.filter(beast => beast.horns === hornCount);
    }

    this.setState({
        filteredBeasts,
            // filteredBeasts: this.props.filter(beast => {
            //     if (hornCount === 0) {
            //         return true; //include everything
    });
}
                // return beast.horns === hornCount;                         
    render()
     {
        let beasts = this.state.filteredBeasts;
        // let beasts=data;
        return (          
            <Container as ="main" >
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Label>How many horns?</Form.Label>
                        <Form.Control as="select" name="hornCount" onChange={this.handleChange}>
                            <option value="">All</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Button type="submit">Filter</Button>
                    </Form.Group>
                </Form>
                    <ol>
                        {beasts.map((beast, i) => (
                            <li>
                                <HornedBeast
                                key={i}
                                beastIndex={i}
                                handleSelectBeast={this.props.handleSelectBeast}
                                title={beast.title}
                                image_url={beast.image_url}
                                description={beast.description}                        
                                />
                            </li>
                     
                        ))}
                    </ol>
            </Container>
                        
        )  
    }
}

export default Main;