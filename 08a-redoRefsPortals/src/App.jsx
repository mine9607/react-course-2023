import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChallenge.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Easy" targetTime={3} />
        <TimerChallenge title="Medium" targetTime={6} />
        <TimerChallenge title="Hard" targetTime={9} />
        <TimerChallenge title="Expert" targetTime={12} />
      </div>
    </>
  );
}

export default App;
