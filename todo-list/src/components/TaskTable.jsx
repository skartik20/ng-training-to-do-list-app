const TaskTable = ({ tasks, onEdit, onDelete }) => (
    <table className="table table-bordered table-hover">
      <thead className="table-light">
        <tr>
          <th scope="col">
            <input type="checkbox" />
          </th>
          <th scope="col">Assigned To</th>
          <th scope="col">Status</th>
          <th scope="col">Due Date</th>
          <th scope="col">Priority</th>
          <th scope="col">Comments</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, index) => (
          <tr key={index}>
            <td>
              <input type="checkbox" />
            </td>
            <td>{task.assignedTo}</td>
            <td>{task.status}</td>
            <td>{task.dueDate}</td>
            <td>{task.priority}</td>
            <td>{task.comments}</td>
            <td>
              <div className="dropdown">
                <button
                  className="btn btn-sm btn-light dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Actions
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => onEdit(index)}
                    >
                      Edit
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item text-danger"
                      onClick={() => onDelete(index)}
                    >
                      Delete
                    </button>
                  </li>
                </ul>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
  
  export default TaskTable;
  