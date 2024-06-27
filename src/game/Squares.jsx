import Square from './Square';

function Squares({ squares, winner, onPlay }) {
  return (
    <div className="Squares">
      {squares.map((square, index) => {
        let isWinner = false;

        if (winner) {
          const [x, y, z] = winner.condition;
          if (x === index || y === index || z === index) {
            isWinner = true;
          }
        }

        return (
          <Square key={index} isWinner={isWinner} onClick={onPlay(index)}>
            {square}
          </Square>
        );
      })}
    </div>
  );
}

export default Squares;
