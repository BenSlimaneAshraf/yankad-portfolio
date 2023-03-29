import { goLeft, goUp, goRight, goDown, moveSnake } from "./moves";

const initGame = (state, setState) => {
  let startSnakeSize = state.startSnakeSize;
  let snake = [];
  let Xpos = state.boardWidth / 2 - 32;
  let Ypos = state.boardHeight / 4 - 4;
  let snakeHead = {
    Xpos: state.boardWidth / 2 - 32,
    Ypos: state.boardHeight / 4 - 4,
  };
  snake.push(snakeHead);
  for (let i = 1; i < startSnakeSize; i++) {
    if (i <= 10) {
      Ypos += state.blockSize;
    } else if (i > 10 && i <= 16) {
      Xpos += state.blockSize;
    } else {
      Ypos += state.blockSize;
    }
    let snakePart = { Xpos: Xpos, Ypos: Ypos };
    snake.push(snakePart);
  }
  let pointXpos =
    Math.floor(
      0.38 * ((state.boardWidth - state.blockSize) / state.blockSize + 1)
    ) * state.blockSize;
  let pointYpos =
    Math.floor(
      0.17 * ((state.boardHeight - state.blockSize) / state.blockSize + 1)
    ) * state.blockSize;
  setState((prev) => {
    return {
      ...prev,
      snake,
      point: { Xpos: pointXpos, Ypos: pointYpos },
    };
  });
};

const loopGame = (state, setState) => {
  let i = 0;
  const updater = setInterval(() => {
    i += 1;
    if (i > 1000) {
      setState((prev) => {
        return {
          ...prev,
          gameStatus: "idle",
        };
      });
      clearInterval(updater);
    }
    if (state.isGameOver === false) {
      moveSnake(state, setState);
      setState((prev) => {
        return {
          ...prev,
          isDirectionChanged: false,
        };
      });
    }
  }, state.gameSpeed);
};

const resetGame = (state, setState) => {
  let point = state.point;
  let snake = [];
  let Xpos = state.boardWidth / 2 - 32;
  let Ypos = state.boardHeight / 4 - 4;
  let snakeHead = {
    Xpos: state.boardWidth / 2 - 32,
    Ypos: state.boardHeight / 4 - 4,
  };
  snake.push(snakeHead);
  for (let i = 1; i < state.startSnakeSize; i++) {
    if (i <= 10) {
      Ypos += state.blockSize;
    } else if (i > 10 && i <= 16) {
      Xpos += state.blockSize;
    } else {
      Ypos += state.blockSize;
    }
    let snakePart = { Xpos: Xpos, Ypos: Ypos };
    snake.push(snakePart);
  }
  point.Xpos =
    Math.floor(
      0.38 * ((state.boardWidth - state.blockSize) / state.blockSize + 1)
    ) * state.blockSize;
  point.Ypos =
    Math.floor(
      0.17 * ((state.boardHeight - state.blockSize) / state.blockSize + 1)
    ) * state.blockSize;
  setState((prev) => {
    return {
      ...prev,
      snake,
      point,
      direction: "up",
      isDirectionChanged: false,
      isGameOver: true,
      gameStatus: "idle",
      gameLoopTimeout: 50,
      score: 0,
    };
  });
};

const handleKeyDown = (e, state, setState) => {
  if (state.gameStatus === "failed" || state.gameStatus === "success") {
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
  switch (e.keyCode) {
    case 37:
    case 65:
      goLeft(state, setState);
      break;
    case 38:
    case 87:
      goUp(state, setState);
      break;
    case 39:
    case 68:
      goRight(state, setState);
      break;
    case 40:
    case 83:
      goDown(state, setState);
      break;
    default:
  }
  setState((prev) => {
    return {
      ...prev,
      isDirectionChanged: true,
    };
  });
};

const tryToEatSnake = (state, setState) => {
  let snake = state.snake;
  for (let i = 1; i < snake.length; i++) {
    if (snake[0].Xpos === snake[i].Xpos && snake[0].Ypos === snake[i].Ypos)
      setState((prev) => {
        return {
          ...prev,
          isGameOver: true,
          gameStatus: "failed",
          isGameStarted: false,
          score: 0,
        };
      });
  }
};

const tryToEatPoint = (state, setState) => {
  let snake = state.snake;
  let point = state.point;
  if (snake[0].Xpos === point.Xpos && snake[0].Ypos === point.Ypos) {
    let newTail = { Xpos: point.Xpos, Ypos: point.Ypos };
    snake.push(newTail);
    point.Xpos =
      Math.floor(
        Math.random() *
          ((state.boardWidth - state.blockSize) / state.blockSize + 1)
      ) * state.blockSize;
    point.Ypos =
      Math.floor(
        Math.random() *
          ((state.boardHeight - state.blockSize) / state.blockSize + 1)
      ) * state.blockSize;
    while (isPointOnSnake(state, setState, point.Xpos, point.Ypos)) {
      point.Xpos =
        Math.floor(
          Math.random() *
            ((state.boardWidth - state.blockSize) / state.blockSize + 1)
        ) * state.blockSize;
      point.Ypos =
        Math.floor(
          Math.random() *
            ((state.boardHeight - state.blockSize) / state.blockSize + 1)
        ) * state.blockSize;
    }
    setState((prev) => {
      return {
        ...prev,
        snake,
        point,
        score: prev.score + 1,
      };
    });
  }
};

const isPointOnSnake = (state, setState, pointXpos, pointYpos) => {
  let snake = state.snake;
  for (let i = 0; i < snake.length; i++) {
    if (pointXpos === snake[i].Xpos && pointYpos === snake[i].Ypos) return true;
  }
  return false;
};

export {
  initGame,
  loopGame,
  resetGame,
  handleKeyDown,
  tryToEatSnake,
  tryToEatPoint,
  isPointOnSnake,
};
