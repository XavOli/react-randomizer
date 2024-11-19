import { useState } from 'react';

export default function TeamsForm() {
  const [numTeams, setNumTeams] = useState(1);
  return (
    <div className="lg:flex justify-around items-center">
      <h1 className="font-bold text-2xl lg:text-5xl text-center">Teams</h1>
      <form className="flex flex-col lg:flex-row items-center justify-center space-y-2 lg:space-y-0 lg:space-x-4 p-4">
        <div className="flex flex-col justify-center items-center">
          <label htmlFor="shuffle-type">Shuffle type</label>
          <select name="shuffle-type" className="bg-tertiaryLight rounded-sm">
            <option value="random">Random shuffle</option>
            <option value="bysex">Shuffle by sex</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="quantity">Number of teams</label>
          <div className="flex">
            <input
              type="range"
              aria-label="Number of teams"
              value={numTeams}
              id="numberOfTeams"
              name="quantity"
              min="1"
              max="4"
              className="bg-orange-500 accent-white"
              onChange={(e) => setNumTeams(e.target.value)}
            />{' '}
            <span className="pl-2">{numTeams}</span>
          </div>
        </div>
      </form>
    </div>
  );
}
