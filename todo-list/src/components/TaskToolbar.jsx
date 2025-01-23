const TaskToolbar = () => (
    <div className="d-flex align-items-center justify-content-between my-3">
      <div>
        <button className="btn btn-warning me-2">New Task</button>
        <button className="btn btn-secondary">Refresh</button>
      </div>
      <div className="input-group" style={{ maxWidth: "300px" }}>
        <input type="text" className="form-control" placeholder="Search" />
        <button className="btn btn-outline-secondary">
          <i className="bi bi-search"></i> {/* Add Bootstrap icons */}
        </button>
      </div>
    </div>
  );
  
  export default TaskToolbar;
  