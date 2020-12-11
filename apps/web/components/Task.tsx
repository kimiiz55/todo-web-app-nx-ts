import { ITask } from '@todos/shared/interfaces';
import React, { Fragment } from 'react';
import { useAppDispatch } from '../context/app';
import { FORM_TYPE } from '../reducers/form';
import { mutate } from 'swr';
import classNames from 'classNames';
import { mutateDeleteTask, mutateUpdateTask } from '../lib/mutate';
import { CheckedIcon } from './CheckedIcon';
import { CheckIcon } from './CheckIcon';
import { DeleteIcon } from './DeleteIcon';

interface IProps {
  task: ITask;
}


export const Task: React.FC<IProps> = ({ task }) => {
  const dispatch = useAppDispatch();

  const handleCheck = async (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation(); // Prevents further propagation of the current event in the bubbling phase

    mutate('/api/tasks', async (tasks: ITask[]) =>
      mutateUpdateTask(tasks, {
        taskId: task._id,
        formData: { isCompleted: true },
      })
    );
  };

  const handleDelete = async (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation(); // Prevents further propagation of the current event in the bubbling phase

    mutate('/api/tasks', async (tasks: ITask[]) =>
      mutateDeleteTask(tasks, { taskId: task._id })
    );
  };

  return (
    <li
      className={classNames(
        'px-4 py-2 border border-gray-200 rounded-md shadow-sm h-16 transition-all cursor-pointer hover:shadow-md'
      )}
      onClick={() =>
        dispatch({ type: FORM_TYPE.OPEN_UPDATE, payload: { _id: task._id } })
      }
      id={task.title}
    >
      <div className="flex flex-row justify-between items-center flex-1">
        <div>
          <p
            className={classNames('text-lg truncate', {
              'text-green-500 line-through': task.isCompleted,
            })}
            id="task-title"
          >
            {task.title}
          </p>
        </div>
        <div className="flex flex-row space-x-2 flex-none">
          {task.isCompleted && <CheckedIcon />}
          {!task.isCompleted && (
            <Fragment>
              <CheckIcon handleClick={handleCheck} />
              <DeleteIcon handleClick={handleDelete} />
            </Fragment>
          )}
        </div>
      </div>
    </li>
  );
};
