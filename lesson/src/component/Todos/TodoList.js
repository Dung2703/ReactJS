import { useSelector, useDispatch } from "react-redux";
import "./todos.css"
import { completeTodo, undoTodo, deleteTodo } from "../Redux/actions/todos"

function TodoList() {
    const todoList = useSelector((state) => state.todosReducer)
    const dispatch = useDispatch();
    console.log(todoList)

    const handleCompleted = (id) => {
        dispatch(completeTodo(id))
    }

    const handleUndo = (id) => {
        dispatch(undoTodo(id))
    }

    const handleDelete = (id) => {
        dispatch(deleteTodo(id))
    }

    return (
        <>
            {todoList && (<ul className="todo_list">
                {todoList.map(item => (
                    <li className="todo_item" key={item.id}>
                        <span className={"todo_content" + (item.completed && " todo_content--completed")}>{item.content}</span>
                        {item.completed ? (
                            <button onClick={() => handleUndo(item.id)}>U</button>
                        ) : (
                            <button onClick={() => handleCompleted(item.id)}>V</button>
                        )}
                        <button onClick={() => handleDelete(item.id)}>X</button>

                    </li>))}
            </ul>)}
        </>
    )
}

export default TodoList;