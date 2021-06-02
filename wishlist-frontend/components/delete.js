import { useRouter } from 'next/router'
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function Delete({ wish }) { 
    const router = useRouter();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const deleteWish = async event => {
      event.preventDefault()
      
      await fetch(
        `http://localhost:3000/api/wishlist/${wish.id}`,
        {
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'DELETE'
        }
      )

      handleClose()

      router.push('/allwishes')
    }

    return (
        <div>
          <Button variant="danger" onClick={handleShow}>
            Delete Wish
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Delete Wish</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to delete this wish?</Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="danger" onClick={deleteWish}>
                Confirm Delete
            </Button>
            </Modal.Footer>
          </Modal>
        </div>
    )
}
