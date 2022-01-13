import React from 'react';

const TodoList = ({id, itemval}) => {
    return (
        <>
            <li> {id+1} - {itemval} </li>
        </>
    )
}

export default TodoList;