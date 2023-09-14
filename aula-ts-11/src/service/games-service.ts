import gamesRepository from "../repository/games-repository";
import { CreateGame, Game } from "./../protocols/game-protocol";

function getGames() {
  return gamesRepository.getGames();
}

async function createGame(game: CreateGame) {
  if (await gameAlreadyExists(game)) {
    throw { message: "Game already exists" }
  }

  gamesRepository.createGame(game);
}

async function gameAlreadyExists(game: CreateGame): Promise<boolean> {
  const games = await gamesRepository.getGameByTitleAndPlatform(game);

  return games.rowCount > 0;
}

const gamesService = {
  getGames,
  createGame
}

export default gamesService;