import "../TicTacToe/index.scss";
import Cell from "../../Cells";
import { useEffect, useState } from "react";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const TicTacToe = (props) => {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [go, setGo] = useState("circle");
  const [winningMessage, setWinningMessage] = useState(null);

  const message = "it is now " + go + "'s go.";

  const checkScore = () => {
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    winningCombos.forEach((array) => {
      let circleWins = array.every((cell) => cells[cell] === "circle");
      if (circleWins) {
        setWinningMessage("Circle Wins");
        setTimeout(() => {
          setCells(["", "", "", "", "", "", "", "", ""]);
          setWinningMessage(null);
        }, [5000]);
      }
    });
    winningCombos.forEach((array) => {
      let crossWins = array.every((cell) => cells[cell] === "cross");
      if (crossWins) {
        setWinningMessage("Cross Wins");
        setTimeout(() => {
          setCells(["", "", "", "", "", "", "", "", ""]);
          setWinningMessage(null);
        }, [5000]);
      }
    });
  };
  useEffect(() => {
    checkScore();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cells]);

  const handleButtonClick = (e) => {
    setCells(["", "", "", "", "", "", "", "", ""]);
    setWinningMessage(null);
  };
  return (
    <div className="tictactoe">
      <div className="gameboard">
        {cells.map((cell, index) => (
          <Cell
            key={index}
            id={index}
            cell={cell}
            setCells={setCells}
            go={go}
            setGo={setGo}
            cells={cells}
            winningMessage={winningMessage}
          />
        ))}
      </div>
      <p>{winningMessage || message}</p>
      <FontAwesomeIcon
        fontSize={30}
        icon={faArrowsRotate}
        onClick={handleButtonClick}
      />
    </div>
  );
};

export default TicTacToe;
