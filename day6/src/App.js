import React, { useState } from 'react';

const Child = ({ value, onChange }) => {
  return (
    <div>
      <input 
        type="text" 
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Nhập gì đó..."
      />
    </div>
  );
};

const Parent = () => {
  const [text, setText] = useState('');

  return (
    <div>
      <h2>{text}</h2>
      <Child value={text} onChange={setText} />
    </div>
  );  
};

export default Parent;
