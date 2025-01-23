import TaskToolbar from "./TaskToolbar";


const TaskHeader = () => (
    <div className="d-flex align-items-center justify-content-between bg-light p-3 border-bottom">
      <div>
        <h4 className="mb-0">Tasks</h4>
        <small className="text-muted">All Tasks</small>
      </div>
      <span className="badge bg-secondary">4 records
      <TaskToolbar />
      </span>
    </div>
  );
  
  export default TaskHeader;
  