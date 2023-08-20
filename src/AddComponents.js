import { useState } from 'react';

export function AddComponents({ onAddComp, compPosition }) {
  const [name, setName] = useState('');
  function handleSubmit(e) {
    e.preventDefault();

    if (!name) return;

    const id = crypto.randomUUID();

    const newComp = {
      id,
      name,
      compPosition,
    };

    onAddComp(newComp);
    setName('');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Add a new Component: </label>
        <input
          type="text"
          placeholder="Place a component!"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <button>Enter</button>
      </form>
    </div>
  );
}
