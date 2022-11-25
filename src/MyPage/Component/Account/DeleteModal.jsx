import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

const styles = {

  body: {
    padding: "10px",
    fontSize : "1.3rem",
    fontWeight : "500",
  },
  label: {
    height: "10rem",
  },
  button: {
    background : "#007f00",
    color : "white",
    border: "none",
    fontSize : "1.2rem",
  },
  password : {
	marginTop : "20px",  
  },
};

function DeleteModal({ show, onHide }) {
  const onChange = () => {
    // setContent({
    //     ...content,
    //     title : value.title,
    //     content : value.content,
    // });
  };
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">탈퇴</Modal.Title>
      </Modal.Header>
      <Modal.Body style={styles.body}>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicTitle">
            <Form.Label size="lg">탈퇴 안내 사항</Form.Label>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicIntroduce">
            <p>
              서비스에 만족하지 못하셨나요? 탈퇴하기 전에 먼저 개선 요청을
              해보시는 건 어떨까요?
            </p>
            <p>
              그래도 탈퇴하시겠다면 비밀번호를 입력해주세요!
			</p>
            <Form.Control
              type="password"
			  style={styles.password}
              placeholder="비밀번호를 입력해주세요."
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          style={styles.button}
          variant="primary"
          type="button"
          onClick={onChange}
        >
          삭제
        </Button>
        <Button style={styles.button} onClick={onHide}>
          닫기
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DeleteModal;
