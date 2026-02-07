import { useToggle } from "./useToggle";

function App() {
  const { isToggled, toggle } = useToggle();
  return (
    <div>
      <button onClick={toggle}>Toggle</button>
      <p>{isToggled ? "ON" : "OFF"}</p>
    </div>
  );
}

export default App;
