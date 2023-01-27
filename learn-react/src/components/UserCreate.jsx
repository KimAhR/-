import React, { useEffect, useRef, useState } from "react";

function UserCreate({ handleSubmit, handleInputs, inputs }) {
  const { email, name } = inputs;

  const inputRef = useRef();

  useEffect(() => {
    console.log("render!");
  });

  return (
    <div>
      <input
        type="text"
        name="name"
        value={name}
        onChange={handleInputs}
        ref={inputRef}
      />
      <input type="text" name="email" value={email} onChange={handleInputs} />
      <button onClick={handleSubmit}>등록</button>
    </div>
  );
}

export default React.memo(UserCreate);
