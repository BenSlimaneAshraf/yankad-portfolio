import clsx from "clsx";
import { NavLink } from "react-router-dom";

const DropdownItem = ({
  label = "label",
  icon = null,
  ArrowIco = null,
  className,
  link,
  ...rest
}) => {
  if (link) {
    return (
      <NavLink
        className={clsx("sc_dropdown_item__main", className)}
        to={link}
        {...rest}
      >
        {ArrowIco}
        {icon}
        {label}
      </NavLink>
    );
  }
  return (
    <div className={clsx("sc_dropdown_item__main", className)} {...rest}>
      {ArrowIco}
      {icon}
      {label}
    </div>
  );
};

export default DropdownItem;
