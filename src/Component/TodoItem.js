import React from 'react';
const TodoItem = (props) => {

    return(
        <li className="content">{props.details.name}</li>
    )
}
export default TodoItem;