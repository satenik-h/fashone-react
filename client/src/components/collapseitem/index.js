import React, { useState } from "react";

import "./style.scss";

function CollapseItem(props) {
  const [open, toggleOpen] = useState(false);

  const handleToggle = () => {
    let temp = open;
    toggleOpen(!temp);
  };

  return (
    <div
      className="collapseitem"
      onClick={() => {
        handleToggle();
      }}
    >
      <div className="collapseitem-button">
        {open ? <div>-</div> : <div>+</div>}
        {props.title}
      </div>
      {open && <div className="collapseitem-content">{props.children}</div>}
    </div>
  );
}

export default CollapseItem;
