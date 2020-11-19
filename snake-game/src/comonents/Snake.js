import React from "react";

export default (props) => {
  return (
    <div>
      {props.snakeDots.map((dot, ix) => {
        const style = {
          left: `${dot[0]}%`,
          top: `${dot[1]}%`,
        };
        return <div className="snake-dot" key={ix} style={style}></div>;
      })}
    </div>
  );
};
