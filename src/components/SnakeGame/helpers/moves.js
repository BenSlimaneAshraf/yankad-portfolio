const goLeft = (state, setState) => {
  let newDirection = state.gameDirection === "right" ? "right" : "left";
  setState((prev) => {
    return {
      ...prev,
      gameDirection: newDirection,
    };
  });
};

const goUp = (state, setState) => {
  let newDirection = state.gameDirection === "down" ? "down" : "up";
  setState((prev) => {
    return {
      ...prev,
      gameDirection: newDirection,
    };
  });
};

const goRight = (state, setState) => {
  let newDirection = state.gameDirection === "left" ? "left" : "right";
  setState((prev) => {
    return {
      ...prev,
      gameDirection: newDirection,
    };
  });
};

const goDown = (state, setState) => {
  let newDirection = state.gameDirection === "up" ? "up" : "down";
  setState((prev) => {
    return {
      ...prev,
      gameDirection: newDirection,
    };
  });
};

const moveSnake = (state, setState) => {
  let snake = state.snake;
  let previousPartX = state.snake[0].Xpos;
  let previousPartY = state.snake[0].Ypos;
  let tmpPartX = previousPartX;
  let tmpPartY = previousPartY;
  moveSnakeHead(state, setState);
  for (let i = 1; i < snake.length; i++) {
    tmpPartX = snake[i].Xpos;
    tmpPartY = snake[i].Ypos;
    snake[i].Xpos = previousPartX;
    snake[i].Ypos = previousPartY;
    previousPartX = tmpPartX;
    previousPartY = tmpPartY;
  }
  setState((prev) => {
    return {
      ...prev,
      snake,
    };
  });
};

const moveSnakeHead = (state, setState) => {
  switch (state.gameDirection) {
    case "left":
      moveSnakeHeadLeft(state, setState);
      break;
    case "up":
      moveSnakeHeadUp(state, setState);
      break;
    case "right":
      moveSnakeHeadRight(state, setState);
      break;
    default:
      moveSnakeHeadDown(state, setState);
  }
};

const moveSnakeHeadLeft = (state, setState) => {
  let snake = state.snake;
  snake[0].Xpos =
    snake[0].Xpos <= 0
      ? state.boardWidth - state.blockSize
      : snake[0].Xpos - state.blockSize;
  setState((prev) => {
    return {
      ...prev,
      snake,
    };
  });
};

const moveSnakeHeadUp = (state, setState) => {
  let snake = state.snake;
  snake[0].Ypos =
    snake[0].Ypos <= 0
      ? state.boardHeight - state.blockSize
      : snake[0].Ypos - state.blockSize;
  setState((prev) => {
    return {
      ...prev,
      snake,
    };
  });
};

const moveSnakeHeadRight = (state, setState) => {
  let snake = state.snake;
  snake[0].Xpos =
    snake[0].Xpos >= state.boardWidth - state.blockSize
      ? 0
      : snake[0].Xpos + state.blockSize;
  setState((prev) => {
    return {
      ...prev,
      snake,
    };
  });
};

const moveSnakeHeadDown = (state, setState) => {
  let snake = state.snake;
  snake[0].Ypos =
    snake[0].Ypos >= state.boardHeight - state.blockSize
      ? 0
      : snake[0].Ypos + state.blockSize;
  setState((prev) => {
    return {
      ...prev,
      snake,
    };
  });
};

export {
  goLeft,
  goUp,
  goRight,
  goDown,
  moveSnake,
  moveSnakeHead,
  moveSnakeHeadLeft,
  moveSnakeHeadUp,
  moveSnakeHeadRight,
  moveSnakeHeadDown,
};
