import React, { useState } from 'react'
import '../styles/App.css';
const App = () => {
const [selectShape, setSelectShape] = useState("Square")
const [shapes, setShapes] = useState([])
function shapeChange(event){
setSelectShape(event.target.value)
}

const addShape = ()=>{
  const newShape = {
    id: shapes.length+1,
    type: selectShape,
  };
  setShapes([...shapes, newShape])
}
  return (
    <div id="main">
      <div id="shape-creator">
        <select onChange={shapeChange}>
          <option value="Square">Square</option>
          <option value="Circle">Circle</option>
        </select>
        <button onClick={addShape}>Add Shape</button>
      </div>
      <div id="shapes-holder">
        {shapes.map((shape)=>(
          <div key={shape.id} className={shape.type.toLowerCase()}>
            {`${shape.type} ${shape.id}`}
          </div>
        ))}
      </div>
    </div>
  )
}


export default App;
