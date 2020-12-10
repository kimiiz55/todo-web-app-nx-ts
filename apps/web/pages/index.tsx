import React, { useEffect, useState } from 'react';
import { ITask } from '@todos/shared/interfaces';
import { Task } from '../components/Task';
import { AddTaskButton } from '../components/AddTaskButton';

const Index = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);

  useEffect(() => {
    fetch('/api/tasks')
      .then((_) => _.json())
      .then(setTasks);
  }, []);

  return (
    <>
      <h1 className="text-lg text-gray-900">Todos</h1>
      <div className="px-4">
        <ul className="flex flex-col space-y-2">
          {tasks.map((task) => (
            <Task task={task} key={task._id} />
          ))}
        </ul>
        <div className="fixed bottom-4 block left-1/2 right-1/2">
          <div className="flex items-center justify-center">
            <AddTaskButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
