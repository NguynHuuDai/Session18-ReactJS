import { useReducer } from "react";

interface State {
  count: number;
}

type Action = { type: "INCREASE" };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "INCREASE":
      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
}

function Increase() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: "INCREASE" })}>Tăng</button>
    </>
  );
}

export default Increase;
