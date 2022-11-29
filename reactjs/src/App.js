import { hello3, retArray } from './arrowFunctions'
import { printVariable } from './variables';
import { myList } from './array';
import { calculate } from './destructing';
import { numbersCombined } from './spreadOperator';
import message from './defaultExport';
import './reactComponent'
import { Memo } from './memo';
import TenStackTable from './table';

import logo from './logo.svg';
import './App.css';


function App() {
  printVariable()
  message()

  const [add, subtract, multiply, divide] = calculate(4, 7);
  
  console.log(numbersCombined)
  console.log(retArray())

  return (
    <div className="App">
      <h1>{ hello3() }</h1>
      { myList }
      <p>{ add }</p>
      <p>{ subtract }</p>
      <p>{ multiply }</p>
      <p>{ divide }</p>
      { Memo () }
      { TenStackTable () }
    </div>
  );
}

export default App;
