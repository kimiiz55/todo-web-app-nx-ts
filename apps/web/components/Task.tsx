import { ITask } from '@todos/shared/interfaces';
import React from 'react';
import { useAppDispatch } from '../context/app';
import { FORM_TYPE } from '../reducers/form';
import { mutate } from 'swr';
import classNames from 'classNames';
import { mutateDeleteTask, mutateUpdateTask } from '../lib/mutate';

interface IProps {
  task: ITask;
}

const CheckedIcon = () => (
  <div className="w-12 h-12 inline-flex items-center justify-cent text-green-500 bg-green-100 px-2 rounded-full">
    <svg
      className="w-8 h-8"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  </div>
);

const CheckIcon = ({ handleClick }) => (
  <div
    className="w-12 h-12 inline-flex items-center justify-cent text-green-500 hover:bg-green-500 hover:text-white px-2 rounded-full cursor-pointer"
    onClick={handleClick}
  >
    <svg
      className="w-8 h-8"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  </div>
);

const CloseIcon = ({ handleClick }) => (
  <div
    className="w-12 h-12 inline-flex items-center justify-cent text-red-500 hover:bg-red-500 hover:text-white px-2 rounded-full cursor-pointer"
    onClick={handleClick}
  >
    <svg
      className="w-8 h-8"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  </div>
);

export const Task: React.FC<IProps> = ({ task }) => {
  const dispatch = useAppDispatch();

  const handleCheck = async (e) => {
    e.stopPropagation(); // Prevents further propagation of the current event in the bubbling phase

    mutate('/api/tasks', async (tasks: ITask[]) =>
      mutateUpdateTask(tasks, {
        taskId: task._id,
        formData: { isCompleted: true },
      })
    );
  };

  const handleDelete = async (e) => {
    e.stopPropagation(); // Prevents further propagation of the current event in the bubbling phase

    mutate('/api/tasks', async (tasks: ITask[]) =>
      mutateDeleteTask(tasks, { taskId: task._id })
    );
  };

  return (
    <li
      className={classNames(
        'px-4 py-2 border border-gray-200 rounded-md shadow-sm h-16 transition-all',
        {
          ' cursor-pointer hover:shadow-md': !task.isCompleted,
        }
      )}
      onClick={() => {
        if (!task.isCompleted) {
          dispatch({ type: FORM_TYPE.OPEN_UPDATE, payload: { _id: task._id } });
        }
      }}
    >
      <div className="flex flex-row justify-between items-center flex-1">
        <p
          className={classNames('text-lg truncate', {
            'text-green-500 line-through': task.isCompleted,
          })}
        >
          {task.title}
        </p>
        <div className="flex flex-row space-x-2 flex-none">
          <span
            className={classNames({
              hidden: !task.isCompleted,
            })}
          >
            <CheckedIcon />
          </span>
          <span
            className={classNames({
              hidden: task.isCompleted,
            })}
          >
            <CheckIcon handleClick={handleCheck} />
            <CloseIcon handleClick={handleDelete} />
          </span>
        </div>
      </div>
    </li>
  );
};
