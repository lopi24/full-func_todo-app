import styles from "../style.module.css";

const Form = ({ todo, setTodo, todoList, setTodoList }) => {
    const handleChange = (e) => {
        setTodo(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setTodoList([...todoList, todo])
    }
    return (
        <div className={styles.todoForm}>
            <form onSubmit={handleSubmit}>
                <input
                    value={todo}
                    onChange={handleChange}
                    className={styles.todoInput}
                    placeholder="Add Todo Item"
                />
                <button 
                    type="subimit"
                    className={styles.todoButton}
                >Add
                </button>
            </form>
        </div>
    )
}

export default Form;