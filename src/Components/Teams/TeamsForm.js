import { useState } from 'react';
import Button from '../Shared/Button';

export default function TeamsForm({
  numTeams,
  setNumTeams,
  shuffleType,
  setShuffleType,
  onShuffle,
}) {
  function handleSubmit(e) {
    e.preventDefault();
    onShuffle();
  }
  return (
    <div className="lg:flex justify-around items-center">
      <h1 className="font-bold text-2xl lg:text-5xl text-center">Teams</h1>
      <form
        className="flex flex-col lg:flex-row items-center justify-center space-y-2 lg:space-y-0 lg:space-x-4 p-4"
        onSubmit={handleSubmit}
      >
        {/* Shuffle type input */}
        <div className="flex flex-col justify-center items-center">
          <label htmlFor="shuffle-type">Shuffle type</label>
          <select
            name="shuffle-type"
            className="bg-tertiaryLight rounded-sm"
            value={shuffleType}
            onChange={(e) => setShuffleType(e.target.value)}
          >
            <option value="random">Random shuffle</option>
            <option value="bysex">Shuffle by sex</option>
          </select>
        </div>
        {/* Number of teams input */}
        <div className="flex flex-col text-center">
          <label htmlFor="quantity">Number of teams</label>
          <div className="flex justify-center items-center">
            <input
              type="range"
              aria-label="Number of teams"
              value={numTeams}
              id="numberOfTeams"
              name="quantity"
              min="1"
              max="4"
              className="bg-orange-500 accent-white w-20"
              onChange={(e) => setNumTeams(Number(e.target.value))}
            />{' '}
            <span className="pl-2">{numTeams}</span>
          </div>
        </div>
        <Button>Shuffle!</Button>
      </form>
    </div>
  );
}
