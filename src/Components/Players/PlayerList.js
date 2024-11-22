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
          <div className="col-span-full border-2 p-2 border-yellow-300 bg-secondary">
            Add some players to get started!
          </div>
        )}
        {playerList.length > 0 && (
          <div className="pt-2 col-span-full md:space-x- flex flex-col md:flex-row justify-center">
            <span>
              Active player count:{' '}
              {playerList.filter((player) => player.active).length}
            </span>
            <span> Total player count : {playerList.length}</span>
          </div>
        )}
      </div>
    </>
  );
}
