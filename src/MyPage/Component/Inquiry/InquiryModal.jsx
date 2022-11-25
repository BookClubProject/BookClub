import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "../../CompoCSS/Inquiry.css";
import DropdownList from "react-widgets/DropdownList";

const styles = {
  body: {
    padding: "10px",
    fontSize : "1.5rem",
    fontWeight : "700",
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
};

const InquiryModal = ({ show, onHide, content, setContent }) => {
  const onChange = () => {
    setContent({
      ...content,
      title: value.title,
      content: value.content,
    });
  };
  const onChangeValue = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };
  const [value, setValue] = useState({
    title: "",
    content: "",
  });

  const data = [
	{ id: 0, name: "일반문의" },
	{ id: 1, name: "오류문의" },
  ];

  return (
	  
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">문의하기</Modal.Title>
      </Modal.Header>
      <Modal.Body style={styles.body}>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicTitle">
		  <Form.Label size="lg">문의 유형</Form.Label>
            <DropdownList
              dataKey="id"
              textField="name"
              defaultValue={["일반문의"]}
              data={data}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicTitle">
            <Form.Label size="lg">제목</Form.Label>
            <Form.Control
              name="title"
              onChange={onChangeValue}
              type="title"
              placeholder="문의 제목을 입력해주세요"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicIntroduce">
            <Form.Label>내용</Form.Label>
            <Form.Control
              style={styles.label}
              as="textarea"
              rows={3}
              placeholder="문의 내용을 적어주세요"
              name="content"
              onChange={onChangeValue}
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
          제출
        </Button>
        <Button style={styles.button} onClick={onHide}>
          닫기
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default InquiryModal;
