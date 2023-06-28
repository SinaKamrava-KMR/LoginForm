import { useState } from "react";
import chooseIcon from "../../utils/chooseIcon";

export default function Input({ name, errorMessage, onChange, ...others }) {
  const [focused, setFocused] = useState(false);
  const icon = chooseIcon(name);

  return (
    <div className="form-input">
      {icon}
      <input
        {...others}
        name={name}
        onChange={onChange}
        onBlur={() => setFocused(true)}
        focused={focused.toString()}
      />
      <small>{errorMessage}</small>
    </div>
  );
}
