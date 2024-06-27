function History({ squares, onTimeTravel }) {
  return (
    <div className="History">
      <ol>
        {squares.map((square, index) => (
          <li key={index}>
            <button type="button" onClick={onTimeTravel(index)}>
              {index > 0 ? `게임 이동 #${index}` : '게임 시작'}
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default History;
