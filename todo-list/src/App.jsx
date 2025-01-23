import { useState } from 'react'

import TaskHeader from './components/TaskHeader'
import TaskToolbar from './components/TaskToolbar'
import TaskTable from './components/TaskTable'
import Pagination from './components/Pagination'
// import ListToDoComponent from './components/ListToDoComponents'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <ListToDoComponent/>
//     </>
//   )
// }
const App = () => {
  const [tasks, setTasks] = useState([
    { assignedTo: "User 1", status: "Completed", dueDate: "12/10/2024", priority: "Low", comments: "This task is good" },
    { assignedTo: "User 2", status: "In Progress", dueDate: "14/09/2024", priority: "High", comments: "This task is good" },
    { assignedTo: "User 3", status: "Not Started", dueDate: "18/08/2024", priority: "Low", comments: "This" },
    { assignedTo: "User 4", status: "In Progress", dueDate: "12/06/2024", priority: "Normal", comments: "This task is good" },
  ]);

  

  const handleEdit = (index) => {
    const newComment = prompt("Edit Comment:", tasks[index].comments);
    if (newComment !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[index].comments = newComment;
      setTasks(updatedTasks);
    }
  };

  const handleDelete = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="container mt-4">
      <div className="container">
      <TaskHeader />
      
      </div>
      
      <TaskTable tasks={tasks} onEdit={handleEdit} onDelete={handleDelete} />
      <Pagination currentPage={1} totalPages={1} onPageChange={() => {}} />
      
    </div>
  );
};

export default App
