import { useState } from "react";
import Header from "./components/Header.jsx";
import InputForm from "./components/InputForm.jsx";
import OutputForm from "./components/OutputForm.jsx";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration > 0;

  const handleChange = (inputIdentifier, newValue) => {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  };

  return (
    <>
      <Header />
      <InputForm onChange={handleChange} userInput={userInput} />
      {inputIsValid ? (
        <OutputForm input={userInput} />
      ) : (
        <p className="center">Please enter a duration greater than 0</p>
      )}
    </>
  );
}

export default App;
