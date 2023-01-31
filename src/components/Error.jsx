import React from "react";

const Error = ({ error, addStyle }) => {
  return (
    <>
      {error ? (
        <p
          className={`text-red-500 font-semibold  p-2 rounded w-[400px] place-self-end ${addStyle} `}
        >
          Coś poszło nie tak! Spróbuj ponownie
        </p>
      ) : null}
    </>
  );
};

export default Error;
