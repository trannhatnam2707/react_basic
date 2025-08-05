import React, { useContext, useState } from 'react'
import { TaskContext } from '../../Context/TaskContext'
import { form, input, button } from './style';

const AddTask = () => {

  const [taskText, setTaskText] = useState('');
  const { addTask } = useContext(TaskContext);

  const handleSubmit = (e) =>
  {
    e.preventDefault();
    if (taskText.trim() === '') return;

    addTask(taskText);
    setTaskText('');
  }

  return (
      <form className={form} onSubmit={handleSubmit}>
        <input
          type='text'
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          placeholder='Nhập task ....'
          className={input}
        />
        <button type='submit' className={button}> 
            Thêm Task
        </button>
      </form>
  )
}

export default AddTask