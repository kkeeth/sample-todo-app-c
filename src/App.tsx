import './App.css'
import InputForm from "./components/InputForm";
import TaskFilter from "./components/TaskFilter";
import TaskList from "./components/TaskList";

function App() {
  return (
    <>
      <h1>ToDo App</h1>
      {/* 入力欄 */}
      <InputForm />
      {/* <div className='input-task'>
        <input />
        <button></button>
      </div> */}

      {/* フィルター */}
      <TaskFilter />
      {/* <div className='task-filter'>
        <input type="radio" value={xx}>ALL</input>
        <input type="radio" value={yy}>ToDo</input>
        <input type="radio" value={zz}>Done</input>
      </div> */}

      {/* リスト */}
      <TaskList tasks={taskList} />
      {/* <div className='task-list'>
        <ul>
          {taskList.map((task, index) => {
            // なんか処理
            return (
              <li key={index}>
                <input type="checkbox"></input>
                <span>ラベル</span>
                <button>x</button>
              </li>
            )
          })}
        </ul>
      </div> */}
    </>
  )
}

export default App
