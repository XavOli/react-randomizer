import PlayerCount from './PlayerCount';
import PlayerEl from './PlayerEl';

export default function PlayerList({
  playerList,
  onDelPlayer,
  onSelectPlayer,
}) {
  const activeCount = playerList.filter((player) => player.active).length;
  const totalCount = playerList.length;
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full text-center gap-2">
        {totalCount > 0 ? (
          playerList.map((player) => (
            <PlayerEl
              player={player}
              onDelPlayer={onDelPlayer}
              onSelectPlayer={onSelectPlayer}
              key={player.id}
            />
          ))
        ) : (
          <div className="col-span-full mx-auto border-2 p-2 border-yellow-300 bg-secondary">
            Add some players to get started!
          </div>
        )}
        {totalCount > 0 && (
          <PlayerCount totalCount={totalCount} activeCount={activeCount} />
        )}
      </div>
    </>
  );
}
