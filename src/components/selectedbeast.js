import React from'react';
import { Modal } from 'react-bootstrap';

class SelectedBeast extends React.Component {
    render() {
        return (
            <modal show={this.props.show}
            onHide={this.props.handleClose}>
                <Modal.Dialog>
                    <Modal.Header CloseButton></Modal.Header>
                    <Modal.Title>Test!</Modal.Title>
                    <Modal.Header />
                </Modal.Dialog>
            </modal>
        )
    }
}

export default SelectedBeast;