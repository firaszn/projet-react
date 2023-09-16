import './App.css';
import TaskList from './Components/TaskList';
import TaskForm from './Components/TaskForm';

function App() {
 


  return (
    <div className="App">
      <h1>Task List</h1>
      <TaskForm />
      <TaskList  />
    </div>
  );
}

export default App;
