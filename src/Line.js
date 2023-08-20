import Draggable from 'react-draggable';

export function Line({ lineArr }) {
  return (
    <>
      <Draggable defaultPosition={{ x: 0, y: 0 }}>
        <h2
          className={lineArr.type === '|' ? 'vertical-line' : 'horizontal-line'}
        >
          {lineArr.type}
        </h2>
      </Draggable>
    </>
  );
}
