// useContext() = React Hook that allows you to share values
//                 between multiple levels of compnents
//                 without passing props through each level

// PROVIDER COMPONENT
// 1. import {createContext} from 'react';
// 2. export const MyContext = createContext();
// 3. <MyContext.Provider value={value}>
//       <Child/>
//   </MyContext.Provider>

// CONSUMER COMPONENT
// 1. import React, { useContext} from 'react';
//   import { MyContext} from './ComponentA';
// 2. const value = useContext(MyContext);

  // useState() = Re-renders the component when the state value changes.

  // useRef() = "use References" Does not cause re-renders when its value changes.
  //             When you want a component to "remember" some clientInformation,
  //             but you don't want that information to trigger new renders.

  //             1. Accessing/Interacting with DOM elements
  //             2. Handling Focus, Aimations and Transitions
  //             3. Managing Timers and Intervals

import MyComponent5 from "./MyComponent5.jsx";

function App() {
  
  return (
    <>
    <MyComponent5/>
    </>
  );
}

export default App
