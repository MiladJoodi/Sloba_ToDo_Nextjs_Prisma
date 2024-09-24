"use client";

const error = ({ error, reset }: any) => {
  return <div>
    <p>{error.message}</p>
    <button onClick={reset}>Reset me</button>
    </div>;
};

export default error;
