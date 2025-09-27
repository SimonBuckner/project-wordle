import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import WonBanner from '../WonBanner/WonBanner';
import LostBanner from '../LostBanner/LostBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState('running');

  function handleSubmitGuess(newGuess) {
    const nextGuesses = [...guesses, newGuess];
    setGuesses(nextGuesses);

    if (newGuess === answer) {
      setGameStatus('won');
      console.log('won');
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
      console.log('lost');
    }
  }

  return (
    <div>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput
        submitGuess={handleSubmitGuess}
        gameStatus={gameStatus !== 'running'}
      />
      {gameStatus === 'won' ? (
        <WonBanner numOfGuesses={guesses.length} />
      ) : undefined}
      {gameStatus === 'lost' ? (
        <LostBanner answer={answer} />
      ) : undefined}
    </div>
  );
}

export default Game;
