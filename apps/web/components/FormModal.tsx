import React from 'react';
import { Transition } from '@headlessui/react';
import { componentWillAppendToBody } from 'react-append-to-body';
import { useAppContext, useAppDispatch } from '../context/app';
import { FORM_TYPE } from '../reducers/form';

interface IProps {
  handleClose: () => void;
  isOpen: boolean;
}

const FormModal = () => {
  const { form } = useAppContext();
  const dispatch = useAppDispatch();

  return (
    <Transition show={form.isOpen} className="fixed inset-0">
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <Transition.Child
          appear={true}
          enter="transition ease-in-expo duration-300"
          enterFrom="transform  translate-y-full"
          enterTo="transform translate-y-0"
          leave="transition ease-in-expo duration-300"
          leaveFrom="transform translate-y-0"
          leaveTo="transform translate-y-full"
          className="block align-bottom bg-white text-left overflow-hidden shadow-xl lg:w-3/4 lg:max-w-lg pb-20 z-20 min-h-screen mx-auto"
        >
          <div className="sticky top-0 bg-white px-4 py-3">
            <div className="flex items-center">
              <div className="text-lg text-mine-shaft-500 font-semibold">
                {form.method}
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
          asdasd
        </Transition.Child>
        <Transition.Child
          appear={true}
          enter="transition ease-in-expo duration-200"
          enterFrom="transform opacity-75 translate-y-20"
          enterTo="transform opacity-100 translate-y-0"
          leave="transition ease-in-expo duration-200"
          leaveFrom="transform opacity-100 translate-y-0"
          leaveTo="transform opacity-75 translate-y-20"
          className="fixed bottom-0 lg:w-3/4 lg:max-w-lg px-4 py-4 border-t border-gray-200 bg-white z-20"
        >
          <button className="bg-blue-500 text-white text-2xl px-16 py-2 rounded-md">
            save
          </button>
        </Transition.Child>
      </div>
    </Transition>
  );
};

export default componentWillAppendToBody(FormModal);
