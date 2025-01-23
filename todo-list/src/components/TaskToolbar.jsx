const TaskToolbar = () => (
    <div className="d-flex align-items-center justify-content-between my-3">
      <div>
        <button className="btn btn-warning me-2">New Task</button>
        <button className="btn btn-primary mp-2">Refresh</button>
      </div>
      <div className="input-group" style={{ maxWidth: "300px" }}>
        <input type="text" className="form-control" placeholder="Search" />
        <button className="btn btn-light btn-outline-secondary">
          <i className="bi bi-search"></i>
           {<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg>}
        </button>
      </div>
    </div>
  );
  
  export default TaskToolbar;
  