import { useState } from 'react';
import Button from '../Shared/Button';

export default function PlayerForm({ onAddPlayer, playerList }) {
  const [name, setName] = useState('');
  const [sex, setSex] = useState('male');

  function handleSubmit(e) {
    e.preventDefault();
    if (!name) return;

    const id = crypto.randomUUID();
    const newPlayer = {
      name,
      id,
      sex,
      active: true,
    };

    onAddPlayer(newPlayer);
    setName('');
  }

  return (
    <div>
      <form
        className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-4 p-4 py-6"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-2 ">
          <input
            type="text"
            className={
              playerList.length > 0
                ? 'border-2 border-secondary rounded-sm text-center p-2 w-48 bg-tertiaryLight focus:placeholder-transparent'
                : 'border-2 border-yellow-300 rounded-sm text-center p-2 w-48 bg-secondary animate-bounce focus:animate-none focus:placeholder-transparent'
            }
            id="player-name"
            aria-label="Player Name"
            name="item"
            placeholder="Enter Player Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div className="space-x-4">
            <label>Choose player sex</label>
            <select
              className="bg-tertiaryLight rounded-sm"
              value={sex}
              onChange={(e) => setSex(e.target.value)}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>
        <Button>Add Player</Button>
      </form>
    </div>
  );
}