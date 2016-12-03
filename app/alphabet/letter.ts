import { Word } from './word';

export class Letter {
  id: number;
  position: number;
  name: string;
  major_word: Word;
  words: Word[]
}
