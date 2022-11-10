import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import calendar from '../ImageSource/calendar.png';
import {Link} from "react-router-dom";
import DatePicker from 'react-date-picker';
import "./TopMenuBarComponent.css"

function TopMenuComponent(){

    return(
        <div class = "top-menu-container">
            <div class = "login-container">
                <span class = "intro">모두를 위한 책 읽는 공간</span>
                <Link to = {`/write`} class = "writing">글쓰기</Link>
                <Link to = {`/login`} class = "login">로그인</Link>
                <Link to = {`/join`} class = "join">회원가입</Link>
                <span class = "mypage">마이페이지</span>
            </div>
            <hr class = "line" size="1" color="red"></hr>

          {/*상단 홈페이지로 이동, 도서검색, 캘린더 등 모여있는 것*/}
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
            <Link to = {`/clublist`} class = "club-list-menu">모임목록</Link>
            <Link to = {`/test`} class = "club-list-menu" style = {{marginLeft : "10px"}}>test</Link>
            <NavDropdown title="캘린더" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">
                Action
                </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          {/*캘린더*/}
          <Form className="d-flex">
            <NavDropdown 
            align="end"
            id="basic-nav-dropdown"
          
            title = {
            <div className = "image">
            <img src={calendar} id = "calendar"/>
            </div>
            }>
                <div>
                <DatePicker disablePreviousDays />
                <hr />
                </div>
            </NavDropdown>

            {/*도서검색*/}
            <Form.Control
              type="search"
              placeholder="도서검색"
              className="me-2"
              aria-label="Search"
            />
          </Form>
          <Button variant="outline-success" class = "login-button">검색</Button>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
}
export default TopMenuComponent