import React from 'react'
import imageSrc from './Assets/imageInSrc.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div style={{border: 1, maxwidth:"100vw"}}>

<h1 className="titleRed">Skander Hammami</h1>

<br/>

<img src={imageSrc}alt="imageSrc"/>

<br/>

<img src={"/imageInPublic.jpg"}alt="imagePublic"/>

</div>

<video width= "320px"  height="240px" controls/>

<source src="myVideo.mp4" type="video/mp4"/>
      </header>
    </div>
  );
}

export default App;
