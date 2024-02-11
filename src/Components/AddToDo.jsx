import { useState } from "react";

export default function AddToDo({ onNewItem }) {
  const [todoName, setTodoName] = useState();
  const [dueDate, setDueDate] = useState();

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    onNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };

  return (
    <div className="container text-center">
      <div className="row vd-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter your To-Do here"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date" value={dueDate} onChange={handleDateChange} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success vd-button"
            onClick={handleAddButtonClicked}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
