import { useEffect, useState } from 'react';
import './App.css';
import { Header } from './Header';
import { ComponentTracker } from './ComponentTracker';
import { AddComponents } from './AddComponents';
import { AddLine } from './AddLine';
import { LineTracker } from './LineTracker';

const startingComps = [
  {
    id: 123423,
    name: 'App',
    compPosition: { x: 0, y: 0 },
  },
];

const lineToAdd = [
  {
    id: 6475758,
    type: '|',
    linePosition: { x: 0, y: 0 },
  },
];

export default function App() {
  const [comp, setComp] = useState(startingComps);
  const [lines, setLines] = useState(lineToAdd);
  const [compPosition, setCompPosition] = useState([]);

  function handleSaveItems() {
    localStorage.setItem('saveItem', JSON.stringify(comp));
    localStorage.setItem('saveLines', JSON.stringify(lines));
  }

  useEffect(() => {
    try {
      const items = JSON.parse(localStorage.getItem('saveItem'));
      const createdLines = JSON.parse(localStorage.getItem('saveLines'));

      if (items || createdLines) {
        setComp(items);
        setLines(createdLines);
      }
    } catch (e) {
      console.log(e);
    }
  }, []);

  function handleAddNewComponent(addedComp) {
    setComp((comp) => [...comp, addedComp]);
  }

  function handleAddPos(data) {
    setCompPosition(() => [{ x: data.x, y: data.y }]);
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
        <AddComponents
          onAddComp={handleAddNewComponent}
          compPosition={compPosition}
        />
        <AddLine onAddLine={handleAddNewLine} />
        <button onClick={ClearValues}>Clear Values</button>
        <button onClick={handleSaveItems}>Save Session</button>
      </div>
      <ComponentTracker
        comp={comp}
        onAddPos={handleAddPos}
        setCompPosition={setCompPosition}
        compPosition={compPosition}
      />
      <LineTracker lines={lines} />
    </div>
  );
}
