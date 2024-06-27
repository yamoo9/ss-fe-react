import Status from './Status';
import Squares from './Squares';

function Board({ nextPlayer, squares, winner, isDraw, onPlay }) {
  return (
    <div className="Board">
      <Status nextPlayer={nextPlayer} winner={winner} isDraw={isDraw} />
      <Squares squares={squares} winner={winner} onPlay={onPlay} />
    </div>
  );
}

export default Board;
