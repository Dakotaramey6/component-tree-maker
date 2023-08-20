import { useState } from 'react';

export function AddLine({ onAddLine }) {
  const [type, setType] = useState('|');
  function handleSubmit(e) {
    e.preventDefault();

    const id = crypto.randomUUID();

    const newLine = {
      id,
      type,
    };

    onAddLine(newLine);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Add a new line: </label>
        <select onChange={(e) => setType(e.target.value)}>
          <option value="|" className="vertical-line">
            |
          </option>
          <option value="__" className="horizontal-line">
            -
          </option>
        </select>
        <button>Enter</button>
      </form>
    </div>
  );
}
