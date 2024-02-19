// import { useState } from "react";
import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation";
import { useInput } from "../hooks/useInput";
export default function Login() {
  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailIsInvalid,
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));

  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: passwordInvalid,
  } = useInput("", (value) => hasMinLength(value, 6));

  // -------moved functionality into custom useInput hook---------------
  // const [formData, setFormData] = useState({
  //   email: "",
  //   password: "",
  // });

  // const [didEdit, setDidEdit] = useState({ email: false, password: false });

  // const emailIsInvalid = didEdit.email && !isEmail(formData.email) && !isNotEmpty(formData.email);

  // const passwordInvalid = didEdit.password && !hasMinLength(formData.password, 6);

  // -------moved functionality into custom useInput hook---------------

  function handleSubmit(event) {
    event.preventDefault();

    if (emailIsInvalid || passwordInvalid) {
      return;
    }

    console.log("Form submitted!", emailValue, passwordValue);
  }
  //  -----------moved functionality into custom useInput hook---------------
  // function handleInputChange(identifier, value) {
  //   setFormData((prevValues) => ({ ...prevValues, [identifier]: value }));
  //   setDidEdit((prevEdit) => ({ ...prevEdit, [identifier]: false }));
  // }

  // function handleInputBlur(identifier) {
  //   setDidEdit((prevEdit) => ({ ...prevEdit, [identifier]: true }));
  // }
  // -----------moved functionality into custom useInput hook---------------

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
          value={emailValue}
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
          error={emailIsInvalid && "Please enter a valid email."}
        />
        <Input
          label="Password"
          id="password"
          name="password"
          type="password"
          value={passwordValue}
          onChange={handlePasswordChange}
          onBlur={handlePasswordBlur}
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
