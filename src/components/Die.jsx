function Die(props) {
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "white",
  };
  return (
    <div className="die-el" style={styles}>
      <h2 className="die-num">{props.value}</h2>
    </div>
  );
}

export default Die;
