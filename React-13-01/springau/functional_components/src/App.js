import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { render } from '@testing-library/react';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


const App = () => {

  const [counter1, setCounter] = useState(0);

  const incrementCounter= () => {
     setCounter(counter1+1);
  }

  const arr = ["one","two"]
    return(

      <div>
        <h1>counter clicked {counter1} times</h1>
        <button onClick={()=>incrementCounter()}>click</button> 
         {
           arr.map((el,id) => {
            return (
              <p key={id}>{el}</p>
            );
            })
         }
      </div>

    );
}

export default App;



// import logo from './logo.svg';
// import './App.css';
// import React, { useState } from 'react';

// const App = () => {

//   const defaultCurrentWord = "";

//   const [words, setWords] = useState(["one", "two"]);
//   const [currentWord, setCurrentWord] = useState(defaultCurrentWord);

//   const addWord = () => {
//     setWords(words => ([
//       ...words,
//       currentWord
//     ]));

//     setCurrentWord(defaultCurrentWord);
//   }

//   return (
//     <div className="App">
//       <input type="text" placeholder="enter text" value={currentWord} onChange={(e) => setCurrentWord(e.target.value)}/>
//       <button onClick={() => addWord()}>Add</button>
//       {
//         words.map((el) => {
//           return (
//             <p>{el}</p>
//           );
//         })
//       }
//     </div>
//   );
// }

// export default App;


// import logo from './logo.svg';
// import './App.css';
// import React, { useState } from 'react';

// const App = () => {

//   const defaultState = {
//     counter1: 0,
//     counter2: 0
//   }

//   const [counter, setCounter] = useState(defaultState);

//   const incrementCounter = (whichCounter) => {
//     if (whichCounter === 1) {
//       setCounter(counter => ({
//         ...counter,
//         counter1: counter.counter1+1
//       }))
//     } else {
//       setCounter(counter => ({
//         ...counter,
//         counter2: counter.counter2+1
//       }))
//     }
//   }


//   return (
//     <div className="App">
//       <p>Counter clicked {counter.counter1} times</p>
//       <button onClick={() => incrementCounter(1)}>click</button>

//       <p>Counter clicked {counter.counter2} times</p>
//       <button onClick={() => incrementCounter(2)}>click</button>

//       <button onClick={() => {
//         setCounter(defaultState)
//       }}>clear state</button>
//     </div>
//   );
// }

// export default App;