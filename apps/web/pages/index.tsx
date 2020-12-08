import React, { useEffect, useState } from 'react';
import { ITask } from '@todos/shared/interfaces';

const Index = () => {
  const [todos, setTodos] = useState<ITask[]>([]);

  useEffect(() => {
    fetch('/api/tasks')
      .then((_) => _.json())
      .then(setTodos);
  }, []);

  function addTodo() {
    fetch('/api/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: 'test',
        dueDate: new Date()
      })
    })
      .then((_) => _.json())
      .then((newTodo) => {
        setTodos([...todos, newTodo]);
      });
  }

  return (
    <>
      <h1>Todos</h1>
      <ul>
        {todos.map((t) => (
          <li className={'todo'}>{t.title}</li>
        ))}
      </ul>
      <button id={'add-todo'} onClick={addTodo}>
        Add Todo
      </button>
    </>
  );
};

export default Index;
