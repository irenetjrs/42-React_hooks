import React, { useState, useEffect } from "react";

  function App () {
  const [products, setProducts] = useState({
    coffe: 0,
    sugar: 0
  });
  // const [coffe, setCoffe] = useState(0);
  // const [sugar, setSugar] = useState(0);

const addCoffe = () => setProducts((prevState) => {
  return {
    ...prevState,
    coffe: prevState.coffe + 1
  }
});
const addSugar = () => setProducts((prevState) => {
  return {
    ...prevState,
    sugar: prevState.sugar + 1
  }
});
const removeCoffe = () => setProducts((prevState) => {
  return {
    ...prevState,
    coffe: prevState.coffe - 1
  }
});
const removeSugar = () => setProducts((prevState) => {
  return {
    ...prevState,
    sugar: prevState.sugar - 1
  }
});

const save = () => {
  localStorage.setItem('coffe', products.coffe);
  localStorage.setItem('sugar', products.sugar);
}

const clear = () => {
    localStorage.removeItem('coffe');
    localStorage.removeItem('sugar');
    setProducts({
      coffe: 0,
      sugar: 0
    });
}

const [showCoffe, setShowCoffe] = useState(true);
const [showSugar, setShowSugar] = useState(true);


useEffect(() => {
  if (localStorage.getItem('coffe')){
    setProducts((prevState) => ({
      ...prevState,
      coffe: +localStorage.getItem('coffe'),
      sugar: +localStorage.getItem('sugar')
    }))
  }});

useEffect(() => {
  setShowCoffe(products.coffe > 0);
  setShowSugar(products.sugar > 0)
}, [products]);

return (
  <div className="wrapper">
    <div className="list">
      <h1>Product list</h1>
      <div className='product'>
      <span>{`Coffe: ${products.coffe}`}</span>
      <button onClick={addCoffe}>Add</button>
      {showCoffe && (
        <button onClick={removeCoffe} disabled={products.coffe === 0}>
          Remove
          </button>
      )}
      </div>
      <div className='product'>
      <span>{`Sugar: ${products.sugar}`}</span>
        <button onClick={addSugar}>Add</button>
        {showSugar && (
        <button onClick={removeSugar} disabled={products.sugar === 0}>
          Remove
        </button>
        )}
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
