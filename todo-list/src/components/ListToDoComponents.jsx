import React, { useState } from 'react'

const ListToDoComponent = () => {
    const dummyData = [
        {
            "assignedTo": "User 1",
            "status": "Completed",
            "dueDate": "12/10/2024",
            "priority": "Low",
            "comments": "xyz am is are was were."
        },
        {
            "assignedTo": "User 2",
            "status": "In Progress",
            "dueDate": "10/10/2024",
            "priority": "High",
            "comments": "xyz am is are was were."
        },
        {
            "assignedTo": "User 3",
            "status": "Not Started",
            "dueDate": "12/10/2024",
            "priority": "Low",
            "comments": "xyz am is are was were."
        },
        {
            "assignedTo": "User 4",
            "status": "Completed",
            "dueDate": "12/10/2024",
            "priority": "Low",
            "comments": "have has had do does did"
        }
    ]
    const [todos, setTodos] = useState(dummyData)

  return (
    <div className='container'>
        <h2 className='text-center'>List of ToDos</h2>
        <div>
            <table className='table table-bordered table-stripped'>
                <thead>
                    <tr>
                        <th>Assigned To</th>
                        <th>Status</th>
                        <th>Due Date</th>
                        <th>Priority</th>
                        <th>Comments</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map(todo => 
                            <tr key={todo.assignedTo}>
                                <td>{todo.assignedTo}</td>
                                <td>{todo.status}</td>
                                <td>{todo.dueDate}</td>
                                <td>{todo.priority}</td>
                                <td>{todo.comments}</td>
                            </tr>
                        )
                    }
                    
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default ListToDoComponent
