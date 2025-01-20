import useGames from "../Hooks/useGames";
import { Text } from "@chakra-ui/react";

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      <Text>{error}</Text>
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;