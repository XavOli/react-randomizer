import PlayerForm from './Players/PlayerForm';
import PlayerList from './Players/PlayerList';

export default function PlayersTab({
  playerList,
  onAddPlayer,
  onDelPlayer,
  onSelectPlayer,
}) {
  return (
    <div className="h-full flex flex-col justify-between bg-primary p-5 rounded-lg border-2 border-tertiaryLight text-lg ">
      <header className="font-bold text-4xl md:text-6xl text-center">
        Team randomizer
      </header>
      <PlayerForm onAddPlayer={onAddPlayer} />
      <PlayerList
        playerList={playerList}
        onDelPlayer={onDelPlayer}
        onSelectPlayer={onSelectPlayer}
      />
    </div>
  );
}
