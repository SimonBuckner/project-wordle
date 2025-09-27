import React from 'react';
import Banner from '../Banner/Banner';

function WonBanner({ numOfGuesses }) {
  const msg =
    numOfGuesses === 1 ? '1 guess' : `${numOfGuesses} guesses`;
  return (
    <Banner type="happy">
      <p>
        <strong>Congratulations!</strong> Got it in{' '}
        <strong>{msg}</strong>.
      </p>
    </Banner>
  );
}

export default WonBanner;
