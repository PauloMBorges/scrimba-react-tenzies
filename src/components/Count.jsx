function Count(props) {
  return (
    <div className="count-container">
      <div className="count">
        <h3>Current Rolls: </h3>
        <p>{props.rollCount}</p>
      </div>
    </div>
  );
}

export default Count;
