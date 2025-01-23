import React, { useState } from "react";

const NewTaskModal = ({ show, onClose, onSave }) => {
  const [task, setTask] = useState({
    assignedTo: "",
    status: "Not Started",
    dueDate: "",
    priority: "Normal",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSave = () => {
    onSave(task);
    setTask({
      assignedTo: "",
      status: "Not Started",
      dueDate: "",
      priority: "Normal",
      description: "",
    });
  };

  return (
    <div className={`modal ${show ? "d-block" : "d-none"}`} tabIndex="-1">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">New Task</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="assignedTo" className="form-label">
                    Assigned To <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    id="assignedTo"
                    name="assignedTo"
                    className="form-control"
                    value={task.assignedTo}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="status" className="form-label">
                    Status <span className="text-danger">*</span>
                  </label>
                  <select
                    id="status"
                    name="status"
                    className="form-select"
                    value={task.status}
                    onChange={handleChange}
                  >
                    <option value="Not Started">Not Started</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="dueDate" className="form-label">
                    Due Date
                  </label>
                  <input
                    type="date"
                    id="dueDate"
                    name="dueDate"
                    className="form-control"
                    value={task.dueDate}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="priority" className="form-label">
                    Priority <span className="text-danger">*</span>
                  </label>
                  <select
                    id="priority"
                    name="priority"
                    className="form-select"
                    value={task.priority}
                    onChange={handleChange}
                  >
                    <option value="Low">Low</option>
                    <option value="Normal">Normal</option>
                    <option value="High">High</option>
                  </select>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  className="form-control"
                  rows="3"
                  value={task.description}
                  onChange={handleChange}
                ></textarea>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-warning" onClick={onClose}>
              Cancel
            </button>
            <button type="button" className="btn btn-success" onClick={handleSave}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewTaskModal;
