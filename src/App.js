import React, {useState} from 'react';
import TodoList from './components/TodoLists';

const App = () => {

  const [inputState, setInputState] = useState('');

  const [items, setItems] = useState([]);

  const inputItem = (event) => {
    console.log(event);
    setInputState(event.target.value);
  }

  const addItem = (event) => {
    setItems( (oldState) => {
      return [...oldState, inputState]
    })
    setInputState('');
  }

  return (
    <>
      <div className=''>
        <h1> Todo App </h1>

        <input type="text" placeholder="enter item" value={inputState} onChange={inputItem} />
        <button onClick={addItem}> Add </button>

        <ol> 
          {
            items.map( (itemval,id) => {
              return <TodoList id={id} itemval={itemval}/>
            })
          }
        </ol>
      </div>
    </>
  )
}

export default App;