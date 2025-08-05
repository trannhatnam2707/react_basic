import React, { useContext } from 'react';
import { TaskContext } from '../../Context/TaskContext';
import {
  WrapperTaskList,
  TaskUl,
  TaskItem,
  EmptyMessage,
  TaskText
} from '../TaskList/style';
import { Button } from 'antd';
import DeleteAllTask from '../ClearAll/DeleteAllTask';
import Update from '../UpdateTask/Update';




const TaskList = () => {
  const { tasks, toggleTaskCompletion , DeleteTask} = useContext(TaskContext);

  if (tasks.length === 0) {
    return <EmptyMessage>Không có task nào.</EmptyMessage>;
  }

  return (
    <WrapperTaskList>
      <TaskUl>
        {tasks.map((task) => (
          <TaskItem key={task.id}>
            <input 
            type='checkbox'
            checked={task.completed}
            onChange={() => toggleTaskCompletion(task.id)}
            style={{margin:'10px'}}
            />
            <TaskText completed={task.completed}>{task.text}</TaskText>
            <Update taskId={task.id} currentText={task.text}/>
            <Button
                  onClick={() => DeleteTask(task.id)}
                  style={{
                  marginLeft: 'auto',
                  background: 'transparent',
                  border: 'none',
                  color: 'red',
                  fontSize: '18px',
                  cursor: 'pointer'
                 }}>
                   ❌
            </Button>
          </TaskItem>
        ))}
      </TaskUl>
      <DeleteAllTask/>
    </WrapperTaskList>
  );
};

export default TaskList;
