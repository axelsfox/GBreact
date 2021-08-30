import './App.css';
import Message from './components/Message';

function App(props) {
  return (
    <div>
    <div className="App">
    <header className="App-header">
      My First React App
      <h3>Hello, {props.name}!</h3>
      </header>
  </div>
    <Message name="Nadya"/>
    </div>
  );
}

export default App;
