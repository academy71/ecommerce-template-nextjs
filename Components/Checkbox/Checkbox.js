import React from "react";
import Link from "next/link";
import StyledCheckbox from './StyledCheckbox';

const Checkbox = ({className, title, to, linkText}) => {
  return (
    <StyledCheckbox className={className}>
      <input type="checkbox" name={title} id={title} className="input" />
      <label htmlFor={title} className="label">
        {title}
        {to && (
          <Link className="label__link" href={to}>
            {linkText}
          </Link>
        )}
      </label>
    </StyledCheckbox>
  );
};

export default Checkbox;
