import React, { useEffect, useState } from "react";
import { Container, Row, Col, Input } from "reactstrap";
import styled from "styled-components";

const TodoListTitle = styled.div`
  margin: 20px 0;
  font-size: 1.8rem;
  font-weight: 800;
`;

const ButtonStyle = styled.button`
  background-color: skyblue;
  border: none;
  color: white;
  font-size: 100%;
  margin-left: 5px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DivStyle = styled.div`
  display: flex;
  background-color: grey;
  margin-bottom: 10px;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  border-radius: 15px;
  color: white;
`;

const TodoStyle = styled.div`
  width: 90%;
  height: 100%;
  font-size: 1.2rem;
`;

const TotalTodoList = ({ on, setOn }) => {

  const [totalTodoList, setTotalTodoList] = useState([]);
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    setTodoList(JSON.parse(localStorage.getItem("todo")));
    return;
  }, [on]);

  useEffect(() => {
    setTotalTodoList(JSON.parse(localStorage.getItem("totaltodo")));
    return;
  }, [on]);

  const todoDelete = (e) => {
    const target = e.target.previousSibling.previousSibling.innerText;
    const newArray = totalTodoList.filter((item) => item != target);
    localStorage.setItem("totaltodo", JSON.stringify(newArray));
    setOn(!on);
  };

  // 추가버튼과 형제태그중 제목을 찾아 todoList에 추가한 후 다시 저장
  const addTodoList = (e) => {
    const target = e.target.previousSibling.innerText;
    console.log(target)
    console.log(todoList)
    const newArray = todoList.push(target);
    localStorage.setItem("todo", JSON.stringify(todoList));
    alert('추가 성공')
  };

  return (
    <Container className="todolist">
      <Row>
        <TodoListTitle>Total Todolist</TodoListTitle>
      </Row>
      <Row className="todoList">
        {totalTodoList &&
         totalTodoList.map((item, i) => {
            return (
              <DivStyle>
                <TodoStyle key={i}>{item}</TodoStyle>
                <ButtonStyle onClick={addTodoList}>추가</ButtonStyle>
                <ButtonStyle onClick={todoDelete}>삭제</ButtonStyle>
              </DivStyle>
            );
          })}
      </Row>
    </Container>
  );
};

export default TotalTodoList;
