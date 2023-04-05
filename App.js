import React from "react";
import Entry from "./Day6/Entry"
import List from "./Day6/List"
import Day7 from "./Day7";
import Day8 from "./Day8";
import style from "./App.css"
import Day9 from "./Day9";
import Day10 from "./Day10";


function createEntry(items) {
  return (
    <Entry
      key={items.id}
      imgUrl={items.imgUrl}
      name={items.name}
      price={items.price}
    />
  );
}

function App() {
  return (
    <div>
      <h1 style={{ textAlign:"center"}}>
         Products
      </h1>
      <dl >{List.map(createEntry)}</dl>

   <Day7 />

   <Day8 />
   <Day9 />
   <Day10 />
    </div>
  );
}

export default App;