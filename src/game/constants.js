export const PLAYER_1 = '💛';
export const PLAYER_2 = '🎩';
export const initialSquares = Array(9).fill(null);

const WINNER_CONDITION = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export const checkWinner = (squares) => {
  let winner = null;
  for (const [x, y, z] of WINNER_CONDITION) {
    const square = squares[x];
    if (square && square === squares[y] && square === squares[z]) {
      winner = {
        player: square,
        condition: [x, y, z],
      };
    }
  }

  return winner;
};
