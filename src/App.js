import logo from './logo.svg';
import './App.css';
import FunctionalComponent from './FunctionalComponents/FunctionalComp';
import ClassComponent from './FunctionalComponents/ClassCompo';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello to Ecommerce App</h1>
        <FunctionalComponent></FunctionalComponent>
        <ClassComponent/>
        
      </header>
    </div>
  );
}

export default App;
