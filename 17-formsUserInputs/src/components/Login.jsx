export default function Login() {
  function handleSubmit(event) {
    event.preventDefault();

    console.log("submitted");
    console.log(event.target.email.value);
    console.log(event.target.password.value);
  }

  const handleFetch = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();

      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button" onClick={handleFetch}>
          Login
        </button>
      </p>
    </form>
  );
}
