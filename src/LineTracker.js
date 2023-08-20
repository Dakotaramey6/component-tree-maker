import { Line } from './Line';

export function LineTracker({ lines }) {
  return (
    <div>
      {lines.map((lineArr) => (
        <Line lineArr={lineArr} key={lineArr.id} />
      ))}
    </div>
  );
}
