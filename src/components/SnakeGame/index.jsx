import { useState, useEffect, useRef } from "react";
import {
  initGame,
  handleKeyDown,
  tryToEatPoint,
  tryToEatSnake,
  resetGame,
} from "./helpers/steps";
import { moveSnake, goUp, goLeft, goRight, goDown } from "./helpers/moves";
import GameOver from "./components/GameOver";
import StartGameButton from "./components/StartGameButton";

const SnakeGame = ({ options = { width: 240, height: 400, blockSize: 8 } }) => {
  const { width, height, blockSize } = options;
  const [state, setState] = useState({
    boardWidth: width - (width % blockSize),
    boardHeight: height - (height % blockSize),
    blockSize: 8,
    snake: [],
    point: {},
    gameSpeed: 50,
    gameStatus: "idle",
    gameDirection: "up",
    isDirectionChanged: false,
    startSnakeSize: 24,
    isGameOver: false,
    gameLoopTimeout: 50,
    score: 0,
  });

  const forcedState = useRef(state);

  useEffect(() => {
    window.addEventListener("keydown", (e) =>
      handleKeyDown(e, forcedState.current, setState)
    );
    initGame(forcedState.current, setState);

    return () => {
      window.removeEventListener("keydown", (e) =>
        handleKeyDown(e, forcedState.current, setState)
      );
    };
  }, []);

  useEffect(() => {
    forcedState.current = state;
  }, [state]);

  useEffect(() => {
    if (state.gameStatus === "playing") {
      const updater = setInterval(() => {
        if (forcedState.current.score >= 10) {
          setState((prev) => {
            return {
              ...prev,
              isGameOver: true,
              gameStatus: "success",
              score: 0,
            };
          });
          clearInterval(updater);
        }

        if (forcedState.current.gameStatus === "failed") {
          clearInterval(updater);
        }

        if (forcedState.current.isGameOver === false) {
          moveSnake(forcedState.current, setState);
          tryToEatSnake(forcedState.current, setState);
          tryToEatPoint(forcedState.current, setState);
          setState((prev) => {
            return {
              ...prev,
              isDirectionChanged: false,
            };
          });
        }
      }, forcedState.current.gameSpeed);
    }
  }, [state.gameStatus]);

  const Game = () => {
    return (
      <section className='game__section'>
        <span className={`snake__body ${state.gameDirection}`}>
          {state.snake.map((snakePart, index) => {
            return (
              <span
                key={index}
                className='snake__part'
                style={{
                  width: state.blockSize,
                  height: state.blockSize,
                  left: snakePart.Xpos,
                  top: snakePart.Ypos,
                }}
              />
            );
          })}
        </span>
        {forcedState.current.score < 10 && (
          <span
            className='game__point'
            style={{
              width: state.blockSize,
              height: state.blockSize,
              left: state.point.Xpos,
              top: state.point.Ypos,
            }}
          />
        )}
      </section>
    );
  };

  return (
    <div className='game__layout'>
      <div
        className='snake__board'
        style={{ width: state.boardWidth, height: state.boardHeight }}
      >
        {state.isGameOver === true && state.gameStatus !== "idle" && (
          <GameOver
            win={forcedState.current.score >= 10 ? true : false}
            state={state}
            setState={setState}
            resetGame={resetGame}
          />
        )}
        <Game />
        {state.gameStatus === "idle" && <StartGameButton />}
        <div className='game__score'>{forcedState.current.score}</div>
      </div>
      <div className='game__sidebar'>
        <div className='game__instructions'>
          <span className='game__comment'>{`// use keyboard`}</span>
          <span className='game__comment'>{`// arrows to play`}</span>
          <div className='game__keys'>
            <div>
              <span
                className='game__key'
                onClick={() => {
                  if (
                    state.gameStatus === "failed" ||
                    state.gameStatus === "success"
                  ) {
                    return;
                  }
                  if (state.gameStatus === "idle") {
                    setState((prev) => {
                      return {
                        ...prev,
                        isGameOver: false,
                        gameStatus: "playing",
                      };
                    });
                  }
                  if (state.isDirectionChanged === true) {
                    return;
                  }
                  goUp(state, setState);
                }}
              >
                <i className='ri-arrow-up-s-fill ri-lg'></i>
              </span>
            </div>
            <div>
              <span
                className='game__key'
                onClick={() => {
                  if (
                    state.gameStatus === "failed" ||
                    state.gameStatus === "success"
                  ) {
                    return;
                  }
                  if (state.gameStatus === "idle") {
                    setState((prev) => {
                      return {
                        ...prev,
                        isGameOver: false,
                        gameStatus: "playing",
                      };
                    });
                  }
                  if (state.isDirectionChanged === true) {
                    return;
                  }
                  goLeft(state, setState);
                }}
              >
                <i className='ri-arrow-left-s-fill ri-lg'></i>
              </span>
              <span
                className='game__key'
                onClick={() => {
                  if (
                    state.gameStatus === "failed" ||
                    state.gameStatus === "success"
                  ) {
                    return;
                  }
                  if (state.gameStatus === "idle") {
                    setState((prev) => {
                      return {
                        ...prev,
                        isGameOver: false,
                        gameStatus: "playing",
                      };
                    });
                  }
                  if (state.isDirectionChanged === true) {
                    return;
                  }
                  goDown(state, setState);
                }}
              >
                <i className='ri-arrow-down-s-fill ri-lg'></i>
              </span>
              <span
                className='game__key'
                onClick={() => {
                  if (
                    state.gameStatus === "failed" ||
                    state.gameStatus === "success"
                  ) {
                    return;
                  }
                  if (state.gameStatus === "idle") {
                    setState((prev) => {
                      return {
                        ...prev,
                        isGameOver: false,
                        gameStatus: "playing",
                      };
                    });
                  }
                  if (state.isDirectionChanged === true) {
                    return;
                  }
                  goRight(state, setState);
                }}
              >
                <i className='ri-arrow-right-s-fill ri-lg'></i>
              </span>
            </div>
          </div>
        </div>
        <div className='game__scores'>
          <span className='game__comment'>{`// food left`}</span>
          <div className='game__points__container'>
            <div className='game__points'>
              <span
                className={
                  forcedState.current.score > 0
                    ? "game__point active"
                    : "game__point"
                }
              />
              <span
                className={
                  forcedState.current.score > 1
                    ? "game__point active"
                    : "game__point"
                }
              />
              <span
                className={
                  forcedState.current.score > 2
                    ? "game__point active"
                    : "game__point"
                }
              />
              <span
                className={
                  forcedState.current.score > 3
                    ? "game__point active"
                    : "game__point"
                }
              />
              <span
                className={
                  forcedState.current.score > 4
                    ? "game__point active"
                    : "game__point"
                }
              />
            </div>
            <div className='game__points'>
              <span
                className={
                  forcedState.current.score > 5
                    ? "game__point active"
                    : "game__point"
                }
              />
              <span
                className={
                  forcedState.current.score > 6
                    ? "game__point active"
                    : "game__point"
                }
              />
              <span
                className={
                  forcedState.current.score > 7
                    ? "game__point active"
                    : "game__point"
                }
              />
              <span
                className={
                  forcedState.current.score > 8
                    ? "game__point active"
                    : "game__point"
                }
              />
              <span
                className={
                  forcedState.current.score > 9
                    ? "game__point active"
                    : "game__point"
                }
              />
            </div>
          </div>
        </div>
      </div>
      <span className='layout__scrow top__left'>
        <i className='ri-close-fill ri-sm'></i>
      </span>
      <span className='layout__scrow top__right'>
        <i className='ri-close-fill ri-sm'></i>
      </span>
      <span className='layout__scrow bottom__left'>
        <i className='ri-close-fill ri-sm'></i>
      </span>
      <span className='layout__scrow bottom__right'>
        <i className='ri-close-fill ri-sm'></i>
      </span>
    </div>
  );
};

export default SnakeGame;
