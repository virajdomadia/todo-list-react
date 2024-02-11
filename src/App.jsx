import AppName from "./Components/AppName";
import AddToDo from "./Components/AddToDo";
import ToDoitems from "./Components/ToDoItems";
import WelcomeMessage from "./Components/WelcomeMessage";
import "./App.css";
import { useState } from "react";
function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`new Item Added: ${itemName} and Date: ${itemDueDate}`);
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddToDo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage />}
      <ToDoitems
        todoItems={todoItems}
        onDeleteClick={handleDeleteItem}
      ></ToDoitems>
    </center>
  );
}

export default App;
