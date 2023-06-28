import { useState } from "react";
import Button from "../common/Button";
import Input from "../common/Input";

export default function LoginForm() {
  const [info, setInfo] = useState({
    email: "",
    username: "",
    password: "",
    confirm: "",
  });

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      required: true,
    },
    {
      id: 2,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and not any special char",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Invalid password (at least 8 char and A-Z,a-z,0-9 and @_#$%^&)",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@_#$%^&*])[a-zA-Z0-9!@_#$%^&*]{8,20}$`,
      required: true,
      // maxLength: 20
    },
    {
      id: 4,
      name: "confirm",
      type: "password",
      placeholder: "Password",
      errorMessage: "Passwords don't match!",
      pattern: info.password,
      required: true,
    },
  ];

  function handleChange(e) {
    setInfo({ ...info, [e.target.name]: e.target.value });
  }

  function handleSubmitForm() {
    console.log(info);
  }

  return (
    <form className="form" onSubmit={(e) => e.preventDefault()}>
      <div className="btns-wrapper">
        <Button value="Sign In" isActive={false} />
        <Button value="Sign Up" isActive={true} />
      </div>
      {inputs.map((input) => (
        <Input
          key={input.id}
          {...input}
          value={info[input.name]}
          onChange={handleChange}
        />
      ))}

      <Button value="Sign Up" onSubmitForm={handleSubmitForm} />
    </form>
  );
}
