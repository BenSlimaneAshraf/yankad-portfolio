const GameOver = ({ win = false, state, setState, resetGame }) => {
  return (
    <section className='gameOver__section'>
      <span className='gameOver__title'>
        {win === true ? "WELL DONE!" : "GAME OVER!"}
      </span>
      <span
        className='gameOver__subtitle'
        onClick={() => {
          resetGame(state, setState);
          setState((prev) => {
            return {
              ...prev,
              gameStatus: "idle",
              gameDirection: "up",
              isGameOver: false,
              score: 0,
            };
          });
        }}
      >
        start-again
      </span>
    </section>
  );
};

export default GameOver;
