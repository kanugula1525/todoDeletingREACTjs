// Write your code here
import './index.css'

const TodoItem = props => {
  const {eachItem, onDeleteTodo} = props
  const {id, title} = eachItem
  const onDelete = () => {
    onDeleteTodo(id)
  }
  return (
    <li className="todoContainer">
      <p className="todoStyle">{title}</p>
      <button onClick={onDelete} type="button" className="buttonStyle">
        Delete
      </button>
    </li>
  )
}

export default TodoItem
