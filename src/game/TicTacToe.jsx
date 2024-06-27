import './TicTacToe.css';
import { useState } from 'react';
import { PLAYER_1, PLAYER_2, checkWinner, initialSquares } from './constants';
import History from './History';
import Board from './Board';

function TicTacToe() {
  const [squares, setSquares] = useState([initialSquares]);
  const [gameIndex, setGameIndex] = useState(0);

  const currentSquares = squares[gameIndex];

  const nextPlayer =
    currentSquares.filter(Boolean).length % 2 === 0 ? PLAYER_1 : PLAYER_2;

  const winner = checkWinner(currentSquares);

  const isDraw = currentSquares.every(Boolean) && !winner;

  const handlePlay = (index) => () => {
    if (winner) return alert('GAME OVER!');

    const nextSquares = currentSquares.map((square, i) =>
      i === index ? nextPlayer : square
    );

    const nextGameIndex = gameIndex + 1;

    setGameIndex(nextGameIndex);

    setSquares([...squares.slice(0, nextGameIndex), nextSquares]);
  };

  const handleTimeTravel = (travelIndex) => () => {
    setGameIndex(travelIndex);
    setSquares([...squares.slice(0, travelIndex + 1)]);
  };

  return (
    <div className="TicTacToe">
      <Board
        nextPlayer={nextPlayer}
        squares={currentSquares}
        winner={winner}
        isDraw={isDraw}
        onPlay={handlePlay}
      />
      <History squares={squares} onTimeTravel={handleTimeTravel} />
    </div>
  );
}

export default TicTacToe;
