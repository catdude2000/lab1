import React from 'react';
import HornedBeast from './HornedBeast';
import data from '../data.json'

class Main extends React.Component {
handleSubmit = (event) => {

    // prevent actually submitting
    event.PreventDefault();

    console.log(event.target.elements.hornCount.value);
}
    // constructor(props) {
    //     super(props);  
    //     }
    render() {
        let beasts=data;
        return (
            <>
            <Container as ="main"></Container>
            <Form>
                <Form.Group>
                    <Form.Label>How many horns?</Form.Label>
                    <Form.Control as="select" name="hornCount">
                        <option value="">All</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Control>
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
                        />
                    </li>
                    ))}
            </ol>    
          </>  
          </Container>
        )  
}
}             

// const Aname = (props) => <h1>This is a {props.title}</h1>

export default Main;



// 
// <div >
// HornedBeast title = 'Unicorn'
// imageUrl = "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg"
// descript = 'A unicorn' / >
// <
// HornedBeast title = 'Rhino'
// imageUrl = "https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80"
// descript = 'A Rhino Family' / >
// <
// /div/>