import React from'react';
import { Modal } from 'react-bootstrap';

class SelectedBeast extends React.Component {
    render() {
        return (
            <modal show={true}>
                <Modal.Dialog>
                    <Modal.Header CloseButton></Modal.Header>
                    <Modal.Title>Test!</Modal.Title>
                    <Modal.Header />
                </Modal.Dialog>
            </modal>
        )
    }
}