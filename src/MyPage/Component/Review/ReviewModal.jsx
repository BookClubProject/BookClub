import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const styles = {
    change_btn: {
      background: "#007f00",
      fontWeight: "500",
      color: "white",
      width: "50px",
      fontSize: "1.2rem",
    },
    body : {
      width : "40rem",
    }
  };
function ReviewModal(props) {
 
  const onChange = () => {
    props.setModalShow(false);
    props.setTextValue("");
  };
    return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                리뷰가 등록되었습니다!
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="review_modal_body">
            <h4>{props.booktitle}</h4>
            <p>
                {props.bookcontent}
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button style={styles.change_btn} onClick={onChange}>확인</Button>
          </Modal.Footer>
        </Modal>
      );
}

export default ReviewModal;
