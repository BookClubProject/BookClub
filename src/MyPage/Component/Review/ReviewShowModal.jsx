import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const styles = {
  change_btn: {
    background: "#007f00",
    fontWeight: "500",
    color: "white",
    width: "50px",
    fontSize: "1.2rem",
  },
  body : {
    width : "30rem",
    height:"30rem",
    padding : "10px",
  }
};

function ReviewShowModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        {props.content.id}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={styles.body}>
        <h4>  {props.content.title}</h4>
        <p>
         {props.content.content}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button style={styles.change_btn} onClick={props.onHide}>닫기</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ReviewShowModal
