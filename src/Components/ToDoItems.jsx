import ToDoItem from "./ToDoItem";
import styles from "./ToDoItems.module.css";

export default function ToDoitems({ todoItems, onDeleteClick }) {
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <ToDoItem
          todoName={item.name}
          todoDate={item.dueDate}
          onDeleteClick={onDeleteClick}
        />
      ))}
    </div>
  );
}
