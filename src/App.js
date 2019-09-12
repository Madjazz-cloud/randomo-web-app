import React from 'react';
import './App.css';
import RandomoLogo from './RandomoLogo.jpg';

function App() {
  return (
    <div className="App">
      <Header />
      <header>
        <img src={RandomoLogo} className="App-logo" alt="logo" />
        <p>Randomo - gets you your fucking colors</p>
        <a
          className="App-link"
          href="https://upleveled.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here to get your suprise!
        </a>
      </header>
      <br></br>
      <body class="App">
        <button class="App">Generate your stupid Color</button>
      </body>
    </div>
  );
}
function Header() {
  return (
    <>
      <header>Randomo - The Color Generator</header>
      <div>
        <button
          onClick={() =>
            alert(
              'It is a color generator dude, if you do not get how to use it than please stop being on the internet!'
            )
          }
        >
          What is this?
        </button>
      </div>
    </>
  );
}

export default App;
