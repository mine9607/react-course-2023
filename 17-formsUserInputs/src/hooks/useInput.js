import { useState } from "react";

// the custom hook should be used once per input field in the form
export function useInput(defaultValue, validationFunction) {
  // adding state to the custom hook
  const [formInput, setFormInput] = useState(defaultValue);
  const [didEdit, setDidEdit] = useState(false);

  // adding validation to the custom hook
  const valueIsValid = validationFunction(formInput);

  // adding state setting functions to the custom hook
  function handleInputChange(event) {
    setFormInput(event.target.value);
    setDidEdit(false);
  }

  function handleInputBlur() {
    setDidEdit(true);
  }

  // returning the state and the state setting functions
  return {
    value: formInput,
    handleInputChange,
    handleInputBlur,
    hasError: didEdit && !valueIsValid,
  };
}
