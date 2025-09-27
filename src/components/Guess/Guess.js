import React from 'react';
import { checkGuess } from '../../game-helpers';
import { range } from '../../utils';

function Cell({ letter, status }) {
  return (
    <span className={status ? `cell ${status}` : 'cell'}>
      {letter ? letter : undefined}
    </span>
  );
}

function Guess({ value, answer }) {
  const result = checkGuess(value, answer);
  return (
    <p className="guess">
      {range(5).map((index) => (
        <Cell
          key={index}
          letter={value ? value[index] : undefined}
          status={result ? result[index].status : undefined}
        />
      ))}
    </p>
  );
}

export default Guess;
