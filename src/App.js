import React, { useRef, useState } from 'react';

function App() {
  const inputRef = useRef(null);
  const [charCount, setCharCount] = useState(0);

  const handleInputChange = () => {
    const inputValue = inputRef.current.value;
    setCharCount(inputValue.length);
  };

  return (
    <div>
      <input ref={inputRef} type="text" onChange={handleInputChange} />
      <p>Character Count: {charCount}</p>
    </div>
  );
}

export default App;
