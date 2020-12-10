import React from 'react';
import { AddTaskButton } from '../components/AddTaskButton';
import { TaskList } from '../components/TaskList';

const Index = () => {
  return (
    <>
      <h1 className="text-lg text-gray-900">Todos</h1>
      <div className="px-4">
        <TaskList />
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
