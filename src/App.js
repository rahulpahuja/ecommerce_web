import logo from './logo.svg';
import './App.css';
import FunctionalComponent from './FunctionalComponents/FunctionalComp';
import ClassComponent from './FunctionalComponents/ClassCompo';
import {NestedCompa1,NestedCompa2} from './FunctionalComponents/NestedComp';
import Click from './FunctionalComponents/Click';
import Counter from './FunctionalComponents/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello to Ecommerce App</h1>
        <FunctionalComponent></FunctionalComponent>
        <ClassComponent/>
        <NestedCompa1/>
        <NestedCompa2/>
        <Click></Click>
        <Counter></Counter>
        
      </header>
    </div>
  );
}

export default App;
