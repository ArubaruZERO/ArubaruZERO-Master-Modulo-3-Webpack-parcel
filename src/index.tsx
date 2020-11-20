
import React from "react";
import ReactDOM from "react-dom";
const logo = require('./content/logo_1.png');

const img = document.createElement('img');
img.src= logo;

document.getElementById("imgContainer").appendChild(img);

ReactDOM.render(
    <div>
      <h1>Hola desde React</h1>
    
    </div>,
    document.getElementById("root")
  );