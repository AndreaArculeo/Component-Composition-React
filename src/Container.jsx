import { useState } from "react";

export default function Container({ title, children }) {
  const [collapse, SetCollapse] = useState(false);

  const Collapse = () => {
    SetCollapse(!collapse);
  };
  return (
    <div>
      <div onClick={Collapse}>{title}</div>
      {!collapse && <div>{children}</div>}
    </div>
  );
}
