import React from 'react';
import { Link } from 'react-router-dom'

const Add = () => {
  return (
    <div className="flex flex-col items-center justify-center px-5 m-auto mt-20 text-center lg:w-2/3">
        <Link to="/add" style={{backgroundImage: 'none'}}>
            <button className="lg:mx-4 bg-background border-2 border-primary border-opacity-100 hover:bg-primary text-primary hover:text-background font-bold py-2 px-4 rounded">
                New Operation
            </button>
        </Link>
    </div>
  );
};

export default Add;