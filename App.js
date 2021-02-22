import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
      
      const [showAddTask, setShowAddTask] = useState(false)
      
      const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Doctor Appointment',
            day: 'Feb 5th at 5:00 pm',
            reminder: true,
        },
        {
            id: 2,
            text: 'Complete my project',
            day: 'Feb 5th at 9:00 am',
            reminder: false,
        },
        {
            id: 3,
            text: 'Visit friends',
            day: 'Feb 6th at 2:30 pm',
            reminder: true,
        }
    ])
    
    // Add Task
    const addTask = (task) => {
      const id = Math.floor(Math.random()* 1000) +1
      const newTask = {id,...task}
      setTasks([...tasks, newTask])
    }
    // Delete Task
    const deleteTask = (id) => {
      setTasks(tasks.filter((task)=> task.id !== id))
    }
    // Toggole Reminder feature
    const toggleReminder = (id) => {
      setTasks(
        tasks.map((task) => 
        task.id === id ? 
        {...task, reminder: !task.reminder } : 
        task ))
    }
  return (
    <div className="container">
      
      <Header  
      onAdd={() => setShowAddTask
      (!showAddTask)}   
      showAdd={showAddTask}
      />

      {showAddTask && <AddTask onAdd={addTask}/>}
      
      {tasks.length > 0 ? 
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> 
      : 'No tasks to show'}
      
    </div>
  );
}

export default App;
