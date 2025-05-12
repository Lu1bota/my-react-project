import React from 'react';

export default function ClickLogger() {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(event.type);
    console.log(event.currentTarget);
    console.log(event.currentTarget.textContent);
  };

  return (
    <>
      <button onClick={handleClick}>Натисни мене</button>
    </>
  );
}
