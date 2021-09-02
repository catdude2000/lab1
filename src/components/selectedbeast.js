import React from'react';
import { Button, Card, Modal } from 'react-bootstrap';


class SelectedBeast extends React.Component {
    render() {
        console.log(this.props)
        // if (!beast) {
        //     return null;
    // }
        return (
            <Modal show={this.props.show}
            onHide={this.props.handleClose}>
                <Modal.Dialog>
                    <Modal.Header closeButton></Modal.Header>
                    <Modal.Title>Test!</Modal.Title>
                    <Modal.Header />
                </Modal.Dialog>
            </Modal>
        )
    }
}

export default SelectedBeast;