import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';


// Tạo Context
export const TaskContext = createContext();

// Tạo Provider
export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const api = 'http://localhost:3001/tasks';

  //Fetch data khi load App
    const getTasks = async () => {
    const res = await axios.get(api);
    setTasks(res.data);
    };
 
      useEffect(() => {
      getTasks();
    }, []);


  const addTask = async (newTaskTest) => {
    const newTask = {
        text: newTaskTest,
        completed: false
    }
    const res = await axios.post(api, newTask)
    setTasks((prev) => [...prev, res.data]);
  };

  const DeleteTask = async (id) => {
      await axios.delete(`${api}/${id}`);
    //// Lọc lại tasks, giữ lại những task không trùng với index cần xoá
      setTasks((prevTasks) => prevTasks.filter(task => task.id !== id))
  }

  const DeleteAll = async () => 
  { 
    //xóa từng Task
    await Promise.all(tasks.map(task => axios.delete(`${api}/${task.id}`)));
    setTasks([]);
  } 

  const toggleTaskCompletion = async (id) => {
    // const TickTask = [...tasks];
    // TickTask[index].completed = !TickTask[index].completed;
    // setTasks(TickTask);

    const task = tasks.find(t => t.id === id );
    const updated = {...task, completed: !task.completed };
    await axios.put(`${api}/${id}`, updated);
    setTasks(prev =>
      prev.map(t => (t.id === id ? updated : t))
    );
  };

  const UpdateTaskText = async (id, newTaskText) => { 
    const task = tasks.find ( t => t.id === id)
    const updateTask = {...task, text: newTaskText}
    await axios.put(`${api}/${id}`, updateTask)
    setTasks(prev =>
      prev.map(t => (t.id === id ? updateTask : t))
    );
  };

  const value = {
    tasks,
    addTask,
    toggleTaskCompletion,
    DeleteTask,
    DeleteAll,
    UpdateTaskText
  };

  return (
    <TaskContext.Provider value={value}>
      {children}
    </TaskContext.Provider>
  );
};
