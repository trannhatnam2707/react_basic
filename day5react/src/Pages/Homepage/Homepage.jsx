import React from 'react'
import AddTask from '../../Components/AddTask/AddTask'
import TaskList from '../../Components/TaskList/TaskList'

const Homepage = () => {
  return (
    <div style={{ padding: '20px'}}>
        <h1> Quản lý task </h1>
        <AddTask/>
        <TaskList/>
    </div>
  )
}

export default Homepage
