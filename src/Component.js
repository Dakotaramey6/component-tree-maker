import { useEffect } from 'react';
import Draggable from 'react-draggable';

export function Component({ comps, onAddPos, compPosition, setCompPosition }) {
  function eventLogger(e, data) {
    console.log('Event: ', e);
    console.log('Data: ', data);

    onAddPos(data);

    localStorage.setItem('posSave', JSON.stringify(compPosition));
  }

  useEffect(() => {
    try {
      let pos = JSON.parse(localStorage.getItem('posSave'));
      if (pos) {
        setCompPosition(pos);
      }
    } catch (e) {
      console.log(e);
    }
  }, [setCompPosition]);

  return (
    <>
      <Draggable onStop={eventLogger}>
        <div className="box">
          <h2>{comps.name}</h2>
        </div>
      </Draggable>
    </>
  );
}
