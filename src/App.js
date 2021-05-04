import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deposit } from "./store/balance/actions";
import { selectBalance } from "./store/balance/selectors";

function App() {
  const dispatch = useDispatch();
  const balance = useSelector(selectBalance);
  const [customBalance, set_customBalance] = useState(0);

  return (
    <div className="App">
      <p>Balance: {balance}$</p>
      <button
        onClick={() => {
          dispatch(deposit(10));
        }}
      >
        Deposit 10$
      </button>
      <button
        onClick={() => {
          balance >= 10 ? dispatch(deposit(-10)) : dispatch(deposit(0));
        }}
      >
        Withdraw 10$
      </button>
      <button
        onClick={() => {
          dispatch(deposit(-balance));
        }}
      >
        Reset
      </button>
      <input
        type="number"
        value={customBalance >= 0 ? customBalance : ""}
        onChange={(event) => set_customBalance(parseFloat(event.target.value))}
        placeholder="Custom Amount"
      ></input>
      <button
        onClick={() => {
          dispatch(deposit(customBalance));
          set_customBalance(customBalance - customBalance);
        }}
      >
        Add custom amount
      </button>
    </div>
  );
}

export default App;
