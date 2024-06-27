function Status({ nextPlayer, winner, isDraw }) {
  if (winner) {
    return <h2 className="Status">승자! : {winner.player}</h2>;
  }

  if (isDraw) {
    return <h2 className="Status">음... 비겼네요. 🫢</h2>;
  }

  return <h2 className="Status">플레이어 : {nextPlayer}</h2>;
}

export default Status;
