import { useState } from "react";
import clsx from "clsx";

const Dropdown = ({ options, children }) => {
  const {
    label = "label",
    initial = false,
    icon = null,
    ArrowIco = null,
    className = null,
  } = options;
  const [isOpen, setIsOpen] = useState(initial);
  return (
    <div className={clsx("sc_dropdown__main", className, isOpen && "open")}>
      <div className='sc_dropdown__header' onClick={() => setIsOpen(!isOpen)}>
        {ArrowIco}
        {icon}
        {label}
      </div>
      <div className='sc_dropdown__body'>{children}</div>
    </div>
  );
};

export default Dropdown;
