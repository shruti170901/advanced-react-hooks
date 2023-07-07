// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

// function countReducer(count, newCount){
//   return newCount;
// }

// function countReducer(count, action){
//   return count + action
// }

// function countReducer(state, newState){
//   return newState;
// }

// function countReducer(state, action){
//   return action(state);
// }

function countReducer(state, action){
  if(action.type === 'INCREMENT')return{
    count: state.count + action.step
  }
  throw new Error(`invalid action type ${action.type}`);
}

function Counter({initialCount = 0, step = 1}) {
  // 🐨 replace React.useState with React.useReducer.
  // 💰 React.useReducer(countReducer, initialCount)
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount
  })

  // 💰 you can write the countReducer function so you don't have to make any
  // changes to the next two lines of code! Remember:
  // The 1st argument is called "state" - the current value of count
  // The 2nd argument is called "newState" - the value passed to setCount
  // const increment = () => setCount(count + step)
  // const increment = () => changeCount(step)
  const {count} = state
  // const increment = () => setState({count: count + step})
  // const increment = () => 
  //   setState(currentState => ({count: currentState.count + step}))
  const increment = () => dispatch({type: 'INCREMENT', step})
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
