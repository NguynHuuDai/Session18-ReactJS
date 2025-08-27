import React from "react";

function ToDoList() {
  return (
    <div style={{ width: `250px`, margin: `20px` }}>
      <input type="text" placeholder="Nhap cong viec" />
      <div>
        <div
          style={{ width: `200px` }}
          className="d-flex justify-content-between align-items-center"
        >
          <p>dsads</p>
          <button style={{ width: `70px` }} className="d-inline-flex">
            Delete
          </button>
        </div>
      </div>
      <button>Submit</button>
    </div>
  );
}
export default ToDoList;
