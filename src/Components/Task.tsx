import React from 'react';

interface TaskProps {
  id: string;
  text: string;
  onDelete: (id: string) => void;
}

const Task: React.FC<TaskProps> = ({ id, text, onDelete }) => {
  return (
    <div className='task-container'>
      <span>{text}</span>
      <button className='delete-btn' onClick={() => onDelete(id)}>Удалить</button>
    </div>
  );
};

export default Task;
