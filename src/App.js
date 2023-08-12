import { useEffect, useState } from 'react';
import './App.css';
import Draggable from 'react-draggable';

const startingComps = [
  {
    id: 123423,
    name: 'App',
  },
];

const lineToAdd = [
  {
    id: 6475758,
    type: '|',
  },
];

export default function App() {
  const [comp, setComp] = useState(startingComps);
  const [lines, setLines] = useState(lineToAdd);

  function handleSaveItems() {
    localStorage.setItem('saveItem', JSON.stringify(comp));
    localStorage.setItem('saveLines', JSON.stringify(lines));
  }

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('saveItem'));
    const createdLines = JSON.parse(localStorage.getItem('lines'));
    if (items || createdLines) {
      setComp(items);
    }
  }, []);

  function handleAddNewComponent(addedComp) {
    setComp((comp) => [...comp, addedComp]);
  }

  function handleAddNewLine(addedLine) {
    setLines((lines) => [...lines, addedLine]);
  }

  function ClearValues() {
    setComp(startingComps);
    setLines(lineToAdd);
    localStorage.clear();
  }
  return (
    <div>
      <Header />
      <hr />
      <div className="control-panel">
        <AddComponents onAddComp={handleAddNewComponent} />
        <AddLine onAddLine={handleAddNewLine} />
        <button onClick={ClearValues}>Clear Values</button>
        <button onClick={handleSaveItems}>Save Session</button>
      </div>
      <ComponentTracker comp={comp} />
      <LineTracker lines={lines} />
    </div>
  );
}

function Header() {
  return (
    <>
      <h1>React Component Tree Maker</h1>
    </>
  );
}

function ComponentTracker({ comp }) {
  return (
    <div>
      {comp.map((comps) => (
        <Component comps={comps} key={comp.id} />
      ))}
    </div>
  );
}

function Component({ comps }) {
  return (
    <>
      <Draggable>
        <div className="box" style={{ border: '1px solid black' }}>
          <h2>{comps.name}</h2>
        </div>
      </Draggable>
    </>
  );
}

function AddComponents({ onAddComp }) {
  const [name, setName] = useState('');
  function handleSubmit(e) {
    e.preventDefault();

    if (!name) return;

    const id = crypto.randomUUID();

    const newComp = {
      id,
      name,
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

function AddLine({ onAddLine }) {
  const [type, setType] = useState('');
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
        <select>
          <option
            value="|"
            className="vertical-line"
            onClick={(e) => setType(e.target.value)}
          >
            |
          </option>
          <option
            value="horizontal"
            className="horizontal-line"
            onChange={(e) => setType(e.target.value)}
          >
            -
          </option>
        </select>
        <button>Enter</button>
      </form>
    </div>
  );
}

function LineTracker({ lines }) {
  return (
    <div>
      {lines.map((lineArr) => (
        <Line lineArr={lineArr} key={lineArr.id} />
      ))}
    </div>
  );
}

function Line({ lineArr }) {
  return (
    <>
      <Draggable>
        <h2 className="line">{lineArr.type}</h2>
      </Draggable>
    </>
  );
}
