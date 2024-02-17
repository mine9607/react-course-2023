export default function UserInput({ userInput, onChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            onChange={(e) => onChange("initialInvestment", e.target.value)}
            type="number"
            value={userInput.initialInvestment}
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            onChange={(e) => onChange("annualInvestment", e.target.value)}
            type="number"
            value={userInput.annualInvestment}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            onChange={(e) => onChange("expectedReturn", e.target.value)}
            type="number"
            value={userInput.expectedReturn}
          />
        </p>
        <p>
          <label>Duration</label>
          <input onChange={(e) => onChange("duration", e.target.value)} type="number" value={userInput.duration} />
        </p>
      </div>
    </section>
  );
}
