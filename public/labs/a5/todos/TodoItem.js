const TodoItem = (todo) => {
    return(`
       <li>
           ${todo.title}
           (${todo.status})
       </li>
    `);
 }
 export default TodoItem;