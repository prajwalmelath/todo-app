import './App.css';
import { Todo } from './Todo';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1 className='headingText'>TODO LIST</h1>
      </div>
      <div className="App-content">
        <Todo></Todo>
      </div>
    </div>
  );
}

export default App;
