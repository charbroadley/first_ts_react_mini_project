import React, {useState} from 'react';
import {v4 as getID} from 'uuid'
import './App.css';
// import Greeter from './components/Greeter';
import ShoppingList from './components/ShoppingList';
import ShoppingListForm from './components/ShoppingListForm';
import Item from './models/item';

function App() {

  // TS useState must be provided a type which will later populate the empty starting value
  const [items, setItems] = useState<Item[]>([])

  const addItem = (product: string, quantity: number) => {
    console.log("made it to the app component!")
    setItems([...items, {id: getID(), product, quantity}])
  }

  // const items = [
  //   {id: 1, product: "lemon", quantity: 2},
  //   {id: 2, product: "spinach", quantity: 1}
  // ]

  return (
    <div>
      {/* <Greeter person="Char"></Greeter> */}
      <ShoppingList items={items}/>
      <ShoppingListForm addItem={addItem}/>
    </div>
  );
}

export default App;
