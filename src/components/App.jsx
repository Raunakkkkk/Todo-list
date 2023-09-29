import React, { useState } from "react";
const items = ["A Item"];
function App() {
  const [item, newitem] = useState("");
  function createlist(i) {
    return <li>{i}</li>;
  }

  function set(event) {
    // console.log(event);
    const x = event.target.value;
    newitem(x);
    //   items.push(x);
  }
  function saveitem() {
    items.push(item);
    console.log(items);
    newitem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" value={item} onChange={set} />

        <button onClick={saveitem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {/* <li>A Item</li> */}
          {items.map(createlist)}
        </ul>
      </div>
    </div>
  );
}

export default App;
