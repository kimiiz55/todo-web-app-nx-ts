import React from 'react';
import { Transition } from '@headlessui/react';
import { componentWillAppendToBody } from 'react-append-to-body';
import { useAppContext, useAppDispatch } from '../context/app';
import { FORM_TYPE } from '../reducers/form';
import { useForm } from 'react-hook-form';
import { mutate } from 'swr';
import { ITask } from '@todos/shared/interfaces';

interface IFormData {
  title: string;
  dueDate: Date;
}

const FormModal = () => {
  const { form } = useAppContext();
  const dispatch = useAppDispatch();

  const { register, handleSubmit, errors, reset } = useForm<IFormData>({
    defaultValues: {
      title: '',
      dueDate: null,
    },
  });

  const addTodo = (data: IFormData) => {
    mutate('/api/tasks', async (tasks: ITask[]) => {
      // let's update the task with ID ${_id} to be completed,
      // this API returns the updated data
      const newTask = await fetch('/api/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      return [newTask, ...tasks];
    }).then(() => {
      dispatch({ type: FORM_TYPE.CLOSE });
    });
  };

  const onSubmit = (data) => addTodo(data);

  return (
    <Transition show={form.isOpen} className="fixed inset-0">
      <form
        className="flex flex-col items-center justify-center min-h-screen text-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Transition.Child
          enter="transition ease-in-expo duration-300"
          enterFrom="transform  translate-y-full"
          enterTo="transform translate-y-0"
          leave="transition ease-in-expo duration-300"
          leaveFrom="transform translate-y-0"
          leaveTo="transform translate-y-full"
          className="block align-bottom bg-white text-left overflow-hidden shadow-xl w-screen lg:w-3/4 lg:max-w-lg pb-20 z-20 min-h-screen mx-auto"
        >
          <div className="sticky top-0 bg-white px-4 py-3">
            <div className="flex items-center">
              <div className="text-lg text-mine-shaft-500 font-semibold">
                {form.method} TASK
              </div>
              <div
                className="ml-auto text-gray-700 w-10 h-10 inline-flex items-center justify-cent hover:bg-gray-100 p-1 rounded-full cursor-pointer "
                onClick={() => dispatch({ type: FORM_TYPE.CLOSE })}
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
            </div>
          </div>
          <hr className="border-t border-gray-200 w-full" />
          <div className="grid grid-cols-1 gap-6 mx-4 py-8">
            <label className="block">
              <span className="text-gray-700">Email address</span>
              <input
                type="text"
                name="title"
                ref={register({ required: true })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="john@example.com"
              />
              {errors.title && <span className="text-base text-red-400">This field is required</span>}
            </label>
            {/* include validation with required or other standard HTML validation rules */}
            <label className="block">
              <span className="text-gray-700">Email address</span>
              <input
                type="date"
                name="dueDate"
                ref={register({ required: true })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
              {errors.dueDate && <span className="text-base text-red-400">This field is required</span>}
            </label>
          </div>
        </Transition.Child>
        <Transition.Child
          enter="transition ease-in-expo duration-200"
          enterFrom="transform opacity-75 translate-y-20"
          enterTo="transform opacity-100 translate-y-0"
          leave="transition ease-in-expo duration-200"
          leaveFrom="transform opacity-100 translate-y-0"
          leaveTo="transform opacity-75 translate-y-20"
          className="fixed bottom-0 w-screen lg:w-3/4 lg:max-w-lg px-4 py-4 border-t border-gray-200 bg-white z-20"
        >
          <button
            className="bg-blue-500 text-white text-2xl px-16 py-2 rounded-md"
            type="submit"
          >
            save
          </button>
        </Transition.Child>
      </form>
    </Transition>
  );
};

export default componentWillAppendToBody(FormModal);
