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

const TodoList = ({ on, setOn }) => {
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState("");
  const [todoNo, setTodoNo] = useState("");
  const [modal, setModal] = useState(false);

  // 컴포넌트 첫 로드시와 on변수가 변동시 todolist를 재렌더링해서 항상 최신화
  useEffect(() => {
    setTodoList(JSON.parse(localStorage.getItem("todo")));
    return;
  }, [on]);

  // todoList에서 todo 제목을 filter메소드로 걸러서 다시 저장하기
  const todoDelete = (e) => {
    const target = e.target.previousSibling.previousSibling.innerText;

    const newArray = todoList.filter((item) => item != target);
    localStorage.setItem("todo", JSON.stringify(newArray));
    setOn(!on);
  };

  //todolist에서 수정으로 선택된 태그의 제목의 index값을 추출, 수정모달창 열기
  const todoUpdate = (e) => {
    const target = e.target.previousSibling.innerText;
    setTodo(target);
    const no = todoList.indexOf(target);
    setTodoNo(no);
    setModal(true);
  };

  // 위에서 추출한 인덱스값을 적용하여 수정후 다시 저장, 수정모달창 닫기
  const updateTodoList = (e) => {
    e.preventDefault();
    todoList[todoNo] = todo;
    localStorage.setItem("todo", JSON.stringify(todoList));
    setOn(!on);
    setModal(false);
  };

  const closeUpdateTap = ()=>{
    setModal(false)
  }

  return (
    <Container className="todolist">
      <Row>
        <TodoListTitle>Todolist</TodoListTitle>
      </Row>
      <Row className="todoList">
        {modal == true ? (
          <form className="updateInput" onSubmit={updateTodoList}>
            <input
              value={todo}
              onChange={(e) => {
                setTodo(e.target.value);
              }}
            />
            <button className="updateInputButton" onClick={updateTodoList}>수정완료</button>
            <button className="updateClose" onClick={closeUpdateTap} style={{color : 'red'}}>x</button>
          </form>
        ) : null}
        {todoList &&
          todoList.map((item, i) => {
            return (
              <DivStyle>
                <TodoStyle key={i}>{item}</TodoStyle>

                <ButtonStyle onClick={todoUpdate}>수정</ButtonStyle>
                <ButtonStyle onClick={todoDelete}>삭제</ButtonStyle>
              </DivStyle>
            );
          })}
      </Row>
    </Container>
  );
};

export default TodoList;
