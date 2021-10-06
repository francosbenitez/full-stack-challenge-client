import React from 'react';

const Add = () => {
  return (
    <div className="flex flex-col items-center justify-center px-5 m-auto mt-20 text-center lg:w-2/3">
      <button className="lg:mx-4 bg-background border-2 border-primary border-opacity-100 hover:bg-primary text-primary hover:text-background font-bold py-2 px-4 rounded">
          New Operation
      </button>
    </div>
  );
};

export default Add;