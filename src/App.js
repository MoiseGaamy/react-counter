import ClassCounter from './components/ClassCounter';
import FunctionCounter from './components/FunctionCounter';

function App() {
  return (
    <div className="App">
      <h1>Class component</h1>
      <ClassCounter />
      <hr></hr>
      <h1>Functional component</h1>
      <FunctionCounter />
    </div>
  );
}

export default App;
