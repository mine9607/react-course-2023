import { useState } from "react";
import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [didEdit, setDidEdit] = useState({ email: false, password: false });

  const emailIsInvalid = didEdit.email && !isEmail(formData.email) && !isNotEmpty(formData.email);
  const passwordInvalid = didEdit.password && !hasMinLength(formData.password, 6);

  function handleSubmit(event) {
    event.preventDefault();

    console.log(formData);
    setFormData({
      email: "",
      password: "",
    });
  }

  function handleInputChange(identifier, value) {
    setFormData((prevValues) => ({ ...prevValues, [identifier]: value }));
    setDidEdit((prevEdit) => ({ ...prevEdit, [identifier]: false }));
  }

  function handleInputBlur(identifier) {
    setDidEdit((prevEdit) => ({ ...prevEdit, [identifier]: true }));
  }

  // function handleEmailChange(event) {
  //   setFormData((prevValues) => ({ ...prevValues, enteredEmail: event.target.value }));
  // }

  // function handlePasswordChange(event) {
  //   setFormData((prevValues) => ({ ...prevValues, enteredPassword: event.target.value }));
  // }

  // ---------------Testing Fetch----------------
  // const handleFetch = async () => {
  //   try {
  //     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  //     const data = await response.json();

  //     if (!response.ok) {
  //       throw new Error("Something went wrong");
  //     }
  //     console.log(data);
  //     return data;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // ---------------Testing Fetch----------------
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={(event) => handleInputChange("email", event.target.value)}
          onBlur={() => handleInputBlur("email")}
          error={emailIsInvalid && "Please enter a valid email address."}
        />
        <Input
          label="Password"
          id="password"
          name="password"
          type="password"
          value={formData.password}
          onChange={(event) => handleInputChange("password", event.target.value)}
          onBlur={() => handleInputBlur("password")}
          error={passwordInvalid && "Please enter a valid password."}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">
          {/* onClick={handleFetch}> */}
          Login
        </button>
      </p>
    </form>
  );
}
