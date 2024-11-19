import PlayerEl from './PlayerEl';

export default function PlayerList({
  playerList,
  onDelPlayer,
  onSelectPlayer,
}) {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 w-full text-center gap-2">
        {playerList.map((player) => (
          <PlayerEl
            player={player}
            onDelPlayer={onDelPlayer}
            onSelectPlayer={onSelectPlayer}
            key={player.id}
          />
        ))}
      </div>
      <div className="pt-2">Player count : {playerList.length}</div>
    </>
  );
}
