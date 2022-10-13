import styles from "../style.module.css";

const Form = () => {
    return (
        <div className={styles.todoForm}>
            <form>
                <input
                    className={styles.todoInput}
                    placeholder="Add Todo Item"
                />
                <button className={styles.todoButton}>Add</button>
            </form>
        </div>
    )
}

export default Form;