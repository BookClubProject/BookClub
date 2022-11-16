import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const styles = {
  body: {
    padding: "10px",
  },
  label: {
    height: "10rem",
  },
};

const ProfilModal = ({ show, onHide, content, setContent }) => {
 
    const onChange = () => {
        setContent({
            ...content,
            title : value.title,
            content : value.content,
        });
    };
    const onChangeValue = (e) => {
        setValue({
            ...value,
            [e.target.name] : e.target.value,
        });
    };
    const [value, setValue] = useState({
        title : "",
        content : "",
    });
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          프로필 편집
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={styles.body}>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicTitle">
            <Form.Label size="lg">제목</Form.Label>
            <Form.Control name = "title" onChange ={onChangeValue} type="title" placeholder="제목을 입력해주세요" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicIntroduce">
            <Form.Label>자기소개</Form.Label>
            <Form.Control
              style={styles.label}
              as="textarea"
              rows={3}
              type="introduce"
              placeholder="자기소개를 해보세요!"
              name = "content" onChange ={onChangeValue}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" type="button" onClick={onChange}>
          수정
        </Button>
        <Button onClick={onHide}>닫기</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProfilModal;
