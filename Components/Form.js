import React, { useState } from "react";

const Form = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  let renderTask = (
    <h4 className="list-group-item text-center fs-6">No Task Available</h4>
  );

  const submitHandler = () => {
    event.preventDefault();
    setTaskList([...taskList, task]);
    console.log(taskList);
    setTask("");
    console.log(task);
  };

  const checkHandler = () => {
    if (event.target.tagName === "INPUT") {
      let el = document.getElementById(event.target.id).parentElement;
      el.classList.toggle("checked");
    }
  };

  const clearList = () => {
    console.log(renderTask);
    setTaskList([]);

    console.log(renderTask);
  };
  renderTask = taskList.map((t, i) => {
    let att = `todo-${i + 1}`;
    return (
      <li className="list-group-item p-3">
        <input
          className="form-check-input me-1"
          id={att}
          type="checkbox"
          onClick={checkHandler}
        />
        <label className="form-check-label" for={att}>
          {t}
        </label>
      </li>
    );
  });

  return (
    <>
      <div className="d-flex justify-content-between">
        <form id="form" onSubmit={submitHandler}>
          <div className="input-group mb-3">
            <input
              type="text"
              name="todo"
              value={task}
              onChange={(e) => {
                setTask(e.target.value);
              }}
              className="form-control"
              placeholder="New To Do..."
              aria-label="New To Do"
              aria-describedby="button-addon2"
            />
            <button
              className="btn btn-outline-secondary fw-bolder"
              type="submit"
              id="button-addon2"
            >
              +
            </button>
          </div>
        </form>
        <button
          type="button"
          id="clear"
          className="btn btn-danger btn-sm ms-3"
          onClick={clearList}
        >
          Clear All
        </button>
      </div>
      <ul id="todo-list" className="list-group border">
        {renderTask}
      </ul>
    </>
  );
};

export default Form;
