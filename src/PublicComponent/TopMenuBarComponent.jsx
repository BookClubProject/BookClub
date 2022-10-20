import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import calendar from '../ImageSource/calendar.png';
import {Link} from "react-router-dom";

import {
  DatePicker,
  DatePickerProvider,
  useDatePickGetter,
  useDatePickReset,
} from '@bcad1591/react-date-picker';


function TopMenuComponent(){
    const { pickedDates } = useDatePickGetter();
    const resetFunc = useDatePickReset();

    return(
        <div class = "top-menu-container">
            <div class = "login-container">
                <span class = "intro">모두를 위한 책 읽는 공간</span>
                <Link to = {`/write/`} class = "writing">글쓰기</Link>
                <Link to = {`/login/`} class = "login">로그인</Link>
                <Link to = {`/join/`} class = "join">회원가입</Link>
                <span class = "mypage">마이페이지</span>
            </div>
            <hr class = "line" size="1" color="red"></hr>
        <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
          <Link to = {`/`} class = "home">Reading</Link>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">about</Nav.Link>
            <Nav.Link href="#action2">service</Nav.Link>
            <NavDropdown title="캘린더" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">
                Action
                </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Form className="d-flex">
            <NavDropdown 
            align="end"
            id="basic-nav-dropdown"
            flip
            title = {
            <div className = "image">
            <img src={calendar} id = "calendar"/>
            </div>
            }>
                <div>
                <DatePicker disablePreviousDays />
                <hr />
                <div>{pickedDates.firstPickedDate?.toString()}</div>
                <div>{pickedDates.secondPickedDate?.toString()}</div>
                <Button variant="outline-success" onClick={resetFunc}>
                    초기화
                </Button>
                </div>
            </NavDropdown>
            <Form.Control
              type="search"
              placeholder="도서검색"
              className="me-2"
              aria-label="Search"
            />
          </Form>
          <Button variant="outline-success" class = "login-button">Search</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
}
export default TopMenuComponent