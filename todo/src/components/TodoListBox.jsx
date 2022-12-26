import React, {useState, useRef} from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import TodoList from "../pages/TodoList";
import TotalTodolist from "../pages/TotalTodoList";
import { Container, Row, Col, Button } from "reactstrap";



const TodoListBox = ({on, setOn}) => {
  const navigate = useNavigate()
  const buttonRef1 = useRef()
  const buttonRef2 = useRef()

  const buttonEffect1 = ()=>{
    buttonRef1.current.id = 'buttonSearchEffect'
    buttonRef2.current.id = ""
  }
  const buttonEffect2 = ()=>{
    buttonRef2.current.id = 'buttonSearchEffect'
    buttonRef1.current.id = ""
  }

  return (
    <Container>
      <Row className="todoChangeButton">
        <Col lg='6'><button ref={buttonRef1} id='buttonSearchEffect' className="buttonEffect"  onClick={()=>{buttonEffect1(); navigate('/')}}>todobutton</button></Col>
        <Col lg='6'><button ref={buttonRef2} className="buttonEffect"  onClick={()=>{buttonEffect2(); navigate('/totallist')}}>Totaltodobutton</button></Col>
      </Row>
      <Row className="todoBox">
      <Routes>

          <Route path="/" element={<TodoList on={on} setOn={setOn}/>} /> :
          <Route path="/totallist" element={<TotalTodolist on={on} setOn={setOn}/>} />

      </Routes>
      </Row>
     
    </Container>
  );
};

export default TodoListBox;
