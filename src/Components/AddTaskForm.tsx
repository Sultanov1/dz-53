import React, { useState } from 'react';

interface AddTaskFormProps {
  onAdd: (taskText: string) => void;
}

const AddTaskForm: React.FC<AddTaskFormProps> = ({ onAdd }) => {
  const [taskText, setTaskText] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onAdd(taskText);
    setTaskText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Add new task"
      />
      <button className='submit-btn' type="submit">Add</button>
    </form>
  );
};

export default AddTaskForm;
