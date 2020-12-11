import React from 'react'

interface IProp {
    handleClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}


export const DeleteIcon: React.FC<IProp> = ({ handleClick }) => (
    <div
      className="w-12 h-12 inline-flex items-center justify-cent text-red-500 hover:bg-red-500 hover:text-white px-2 rounded-full cursor-pointer"
      onClick={handleClick}
      id="delete-icon"
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