import React from 'react';
import  Container  from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar'

// class component
class Header extends React.Component {
    render() {
        return (
            <header>
                <navbar>
                    <Navbar.Brand>Gallery of Horns!</Navbar.Brand>
                </navbar>
                <h1>This is awesome</h1>
            </header>
        )
    }
}

export default Header