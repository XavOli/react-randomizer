import { useState } from 'react';
import Button from '../Shared/Button';

export default function PlayerForm({ onAddPlayer }) {
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
        className="flex flex-col lg:flex-row items-center justify-center space-y-2 lg:space-y-0 lg:space-x-4 p-4"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="border rounded-sm border-secondary text-center p-2  bg-tertiaryLight"
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
        <Button>Add Player</Button>
      </form>
    </div>
  );
}
