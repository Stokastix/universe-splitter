import React, {useState} from "react";

const DraggableG = (props) => {
  const [dragging, setDragging] = useState(false);
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const [origin, setOrigin] = useState({ x: 0, y: 0 });

  const X = coordinates.x;
  const Y = coordinates.y;

  return (
    <g
      transform={`translate(${X}, ${Y})`}
      onMouseDown={e => {
        setOrigin({ x: e.clientX, y: e.clientY });
        setDragging(true);
      }}
      onMouseMove={e => {
        if (dragging) {
          setCoordinates({
            x: e.clientX - origin.x,
            y: e.clientY - origin.y,
          });
        }
      }}
      onMouseUp={() => {
        setDragging(false);
      }}

      {...props}
    />
  );
};

export default DraggableG;