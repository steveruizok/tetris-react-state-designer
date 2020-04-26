import * as React from "react";
import { useStateDesigner } from "state-designer";
import game from "./game";

import { useInputs } from "./hooks/useInputs";

import Background from "./components/Background";
import Screen from "./components/Screen";
import Credit from "./components/Credit";

import Start from "./scenes/Start";
import Game from "./scenes/Game";
import GameOver from "./scenes/GameOver";

function App() {
  const { whenIn } = useStateDesigner(game);

  useInputs();

  return (
    <Background>
      <Screen>
        {whenIn({
          root: <Game key="game" />,
          ready: <Start key="start" />,
          gameover: <GameOver key="gameover" />,
        })}
      </Screen>
      <Credit />
    </Background>
  );
}

export default App;
