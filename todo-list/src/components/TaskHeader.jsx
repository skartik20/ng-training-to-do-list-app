import TaskToolbar from "./TaskToolbar";


const TaskHeader = () => (
    <div className="d-flex align-items-center justify-content-between bg-light p-3 border-bottom mb-3">
      <div>
        <h4 className="mb-0">Tasks</h4>
        <small className="text-muted">All Tasks</small>
      </div>
      <span className="badge bg-secondary"><TaskToolbar />
      4 records
      </span>
    </div>
  );
  
  export default TaskHeader;
  