import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import styled from "styled-components";

const InputStyle = styled.input`
border : 3px solid skyblue;
width : 100%;
height : 40px;
margin : 20px 0px;
border-radius : 15px;
`



const Header = ({on, setOn}) => {
  const [todo, setTodo] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    // localStorage에 배열이 있으면 추가 없으면 생성
    if (localStorage.getItem("todo") !== null) {
      const newData = JSON.parse(localStorage.getItem("todo"));
      newData.push(todo);
      localStorage.setItem("todo", JSON.stringify(newData));
    } else {
      const data = JSON.stringify([todo]);
      localStorage.setItem("todo", data);
    }

    if (localStorage.getItem("totaltodo") !== null) {
      const newData = JSON.parse(localStorage.getItem("totaltodo"));
      newData.push(todo);
      localStorage.setItem("totaltodo", JSON.stringify(newData));
    } else {
      const data = JSON.stringify([todo]);
      localStorage.setItem("totaltodo", data);
    }
    // todo 추가시 on변수를 변동시켜 재렌더링
    setOn(!on)
  };


  return (
    <Container className="header">
      <Row>
        <Col lg="12" md="12">
          <h1>French To Do</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <form onSubmit={addTodo}>
            <InputStyle 
              onChange={(e) => {
                setTodo(e.target.value);
              }}
            />
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
