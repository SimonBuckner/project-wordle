import React from 'react';

function GuessInput({ submitGuess, gameStatus }) {
  const [newGuess, newGuessState] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    if (newGuess.length !== 5) {
      return;
    }
    submitGuess(newGuess.toUpperCase());
    newGuessState('');
  }
  console.log(`Game status: ${gameStatus}`);
  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]*"
        title="Please enter exactly 5 letters"
        onChange={(event) => {
          newGuessState(event.target.value.toLocaleUpperCase());
        }}
        value={newGuess}
        disabled={gameStatus}
      />
    </form>
  );
}

export default GuessInput;
