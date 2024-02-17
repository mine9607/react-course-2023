import { useState, useRef } from "react";
export default function Player() {
  const input = useRef();
  const [inputPlayerName, setInputPlayerName] = useState(null);

  const handleClick = () => {
    setInputPlayerName(input.current.value);
    input.current.value = "";
  };

  return (
    <section id="player">
      <h2>Welcome {inputPlayerName ?? "Unknown Entity"}</h2>
      <p>
        <input ref={input} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
