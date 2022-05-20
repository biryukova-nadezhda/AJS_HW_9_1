import GameSaving from './gameSaving.js';
import read from './reader.js';
import json from './parser.js';

export default class GameSavingLoader {
  static load() {
    return read()
      .then((result) => json(result))
      .then((response) => new GameSaving(JSON.parse(response)));
  }
}
