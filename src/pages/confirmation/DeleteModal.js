import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,  } from 'reactstrap';

function DeleteModal({className, modal, toggle, deleteCustomer}) {
    return (
        <div>
           <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Delete Confirmation</ModalHeader>
                <ModalBody>
                    Are you sure? Deleted item cannot be recover.
                </ModalBody>
                <ModalFooter>
                    <Button color="success" onClick={() => {
                        toggle();
                        deleteCustomer();
                    }}>Delete</Button>{' '}
                    <Button color="danger" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal> 
        </div>
    )
}

export default DeleteModal
