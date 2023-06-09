import './index.css'

const SimpleTodo = props => {
    const {todoList, deleteTodo} = props
    const {text, id} = todoList

    const onDeleteTodo = () => {
        deleteTodo(id)
    }

    return (
        <li className='todo-list-item'>
            <p className='todo-text'>{text}</p>
            <button className='del-button' onClick={onDeleteTodo}>Delete</button>
        </li>
    )
}

export default SimpleTodo
