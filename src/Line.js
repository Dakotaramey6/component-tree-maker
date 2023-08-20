import Draggable from 'react-draggable';

export function Line({ lineArr }) {
  return (
    <div>
      <Draggable defaultPosition={{ x: 0, y: 0 }}>
        <p
          className={lineArr.type === '|' ? 'vertical-line' : 'horizontal-line'}
        >
          {lineArr.type}
        </p>
      </Draggable>
    </div>
  );
}
