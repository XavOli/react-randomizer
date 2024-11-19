import Button from '../Common/Button';

export default function PlayerForm() {
  return (
    <div>
      <form className="flex flex-col lg:flex-row items-center justify-center space-y-2 lg:space-y-0 lg:space-x-4 p-4">
        <input
          type="text"
          className="border rounded-sm border-secondary text-center p-2  bg-tertiaryLight"
          id="player-name"
          aria-label="Player Name"
          name="item"
          placeholder="Enter Player Name"
        />
        <div className="space-x-4">
          <label>Choose player sex</label>
          <select className="bg-tertiaryLight rounded-sm">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <Button bg="bg-tertiaryLight">Add Player</Button>
      </form>
    </div>
  );
}
