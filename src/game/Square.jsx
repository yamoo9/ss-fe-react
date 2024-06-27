function Square({ children, isWinner = false, onClick }) {
  const classes = `Square ${isWinner ? 'winner' : ''}`;

  return (
    <button
      type="button"
      className={classes}
      onClick={onClick}
      disabled={children}
    >
      {children}
    </button>
  );
}

export default Square;
