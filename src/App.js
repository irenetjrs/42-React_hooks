import React, { useState, useEffect } from "react";

  function App () {
  const [coffe, setCoffe] = useState(0);
  const [sugar, setSugar] = useState(0);

const addCoffe = () => setCoffe(coffe + 1);
const addSugar = () => setSugar(sugar + 1);

const save = () => {
  localStorage.setItem('coffe', coffe);
  localStorage.setItem('sugar', sugar);
}

const clear = () => {
    localStorage.removeItem('coffe');
    localStorage.removeItem('sugar');
    setCoffe(0);
    setSugar(0);
}

useEffect(()=>{
  if (localStorage.getItem('coffe')){
    setCoffe(+localStorage.getItem('coffe'));
    setSugar(+localStorage.getItem('sugar'));
  }
}, []);

return (
  <div className="wrapper">
    <div className="list">
      <h1>Product list</h1>
      <div className='product'>
      <span>{`Coffe: ${coffe}`}</span>
      <button onClick={addCoffe}>Add</button>
      </div>
      <div className='product'>
      <span>{`Sugar: ${sugar}`}</span>
        <button onClick={addSugar}>Add</button>
      </div>
      <div className='save'>
          <button onClick={save}>SAVE</button>
          <button onClick={clear}>CLEAR</button>
        </div>
    </div>
  </div> 
  );
}

export default App;
