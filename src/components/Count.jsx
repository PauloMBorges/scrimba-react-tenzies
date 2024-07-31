function Count(props) {
  return (
    <div className="count-container">
      <div className="count">
        <h3 className="count-title">Current Rolls: </h3>
        <p className="count-value">{props.rollCount}</p>
      </div>
      <div className="count">
        <h3 className="count-title">Best Rolls: </h3>
        <p className="count-value">{props.bestRolls !== null && props.bestRolls}</p>
      </div>
    </div>
  );
}

export default Count;
