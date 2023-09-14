import { CreateGame, Game } from "../protocols/game-protocol";
import db from "../database/db";
import { QueryResult } from "pg";

function getGames() {
  return db.query<Game>(`/* SQL */
      SELECT * FROM games;
    `);
}

function createGame(game: CreateGame) {
  db.query<Game>(`/* SQL */
      INSERT INTO games (title, platform) VALUES ($1, $2);
    `, [game.title, game.platform]);
}

function getGameByTitleAndPlatform(game: CreateGame): Promise<QueryResult<CreateGame>> {
  return db.query<Game>(`/* SQL */
      SELECT * FROM games WHERE title = $1 AND platform = $2;
    `, [game.title, game.platform]);
}

const gamesRepository = {
  getGames,
  getGameByTitleAndPlatform,
  createGame
}

export default gamesRepository;