import PlayerEl from './PlayerEl';

export default function PlayerList({
  playerList,
  onDelPlayer,
  onSelectPlayer,
}) {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full text-center gap-2">
        {playerList.length > 0 ? (
          playerList.map((player) => (
            <PlayerEl
              player={player}
              onDelPlayer={onDelPlayer}
              onSelectPlayer={onSelectPlayer}
              key={player.id}
            />
          ))
        ) : (
          <div className="col-span-full">Add some players to get started!</div>
        )}
      </div>
      <div className="pt-2">Player count : {playerList.length}</div>
    </>
  );
}
