import PlayerForm from './Players/PlayerForm';
import PlayerList from './Players/PlayerList';

export default function PlayersTab({
  playerList,
  onAddPlayer,
  onDelPlayer,
  onSelectPlayer,
}) {
  return (
    <div className="h-full w-full min-h-96 md:max-w-3xl flex flex-col justify-between bg-primary p-5 rounded-lg border-2 border-tertiaryLight text-lg ">
      <PlayerForm onAddPlayer={onAddPlayer} playerList={playerList} />
      <PlayerList
        playerList={playerList}
        onDelPlayer={onDelPlayer}
        onSelectPlayer={onSelectPlayer}
      />
    </div>
  );
}
