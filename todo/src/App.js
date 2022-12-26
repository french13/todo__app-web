import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'remixicon/fonts/remixicon.css'
import Header from './components/Header';
import TodoListBox from './components/TodoListBox'
import { useState } from 'react';


function App() {
  // todo추가시  on 변수로  다른 컴포넌트의 화면도 재렌더링 해주기위해 사용
  const [on, setOn]= useState(false)


  return (
    <div className="App">
      <Header on={on} setOn={setOn}/>
      <TodoListBox on={on} setOn={setOn}/>
    </div>
  );
}

export default App;
