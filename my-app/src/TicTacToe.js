import React from "react";
import { useState } from "react";
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';
import { GameBox } from "./GameBox";

export function TicTacToe() {
  return <Game />;
}
function Game() {

  const { width, height } = useWindowSize();

  const [board, setBoard] = useState([null, null, null, null, null, null, null, null, null,]);
  // useState([0,1,2,3,4,5,6,7,8]);
  const decideWinner = (board) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] !== null && board[a] === board[b] && board[b] === board[c]) {
        return board[a];
      }
    }
    return null;
  };
  const winner = decideWinner(board);
  const [isXTurn, setIsXTurn] = useState(true);
  const handleClick = (index) => {
    console.log(index);

    if (!winner && !board[index]) {
      const boardCopy = [...board];
      boardCopy[index] = isXTurn ? "X" : "O";
      setBoard(boardCopy);
      setIsXTurn(!isXTurn);
    }
  };
  const restart = () => {
    setBoard([null, null, null, null, null, null, null, null, null,]);
    setIsXTurn(true);
  };
  return (
    <div className="full-game">
      {winner ? <Confetti width={width} height={height} /> : ""}
      <div className="board">
        {board.map((val, index) => (
          <GameBox val={val} onPlayerClick={() => handleClick(index)} />
        ))}
      </div>
      {winner ? <h1>Winner is: {winner}</h1> : ""}
      <button onClick={restart}>Restart</button>
    </div>
  );
}
