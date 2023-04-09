import "../Home/index.scss";
import TicTacToe from "../Home/TicTacToe";

const Home = () => {
  return (
    <>
      <div className="container-home">
        <h1>Hello .</h1>
        <p>
          <span>-</span>My name is Birdzhan Ali
        </p>
      </div>
      <div className="container-tictactoe">
        <TicTacToe />
      </div>
    </>
  );
};

export default Home;
