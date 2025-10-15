// Functional component with state and props
function Counter(props) {
  // useState gives memory; props.start sets the initial value
  const [count, setCount] = React.useState(props.start);
  return <button onClick={() => setCount(count + 1)}>{count}</button>; }
