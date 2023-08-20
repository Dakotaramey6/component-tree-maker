import { Component } from './Component';

export function ComponentTracker({
  comp,
  onAddPos,
  compPosition,
  setCompPosition,
}) {
  return (
    <div>
      {comp.map((comps) => (
        <Component
          comps={comps}
          key={comps.id}
          onAddPos={onAddPos}
          compPosition={compPosition}
          setCompPosition={setCompPosition}
        />
      ))}
    </div>
  );
}
