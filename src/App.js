import logo from "./logo.svg";
import "./App.css";

function App() {
  const [balance, setBalance] = useState(0);

  return (
    <div className="App">
      <p>Balance: {balance}$</p>
      <button
        onClick={() => {
          setBalance(balance + 10);
        }}
      >
        Deposit 10$
      </button>
    </div>
  );
}

export default App;
