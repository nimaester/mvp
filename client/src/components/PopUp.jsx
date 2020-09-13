import React from 'react';


const PopUp = (props) => {
  return (
    <div>
      <h1>Popup</h1>
      <input type="text" placeholder="text here"/>
      <button>CLICK</button>
      <p>{props.views}</p>
    </div>
  )
}

export default PopUp;
