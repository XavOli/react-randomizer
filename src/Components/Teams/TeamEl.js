export default function TeamEl({ team, index, teams }) {
  return (
    <div className="flex flex-col items-center justify-start border-4 rounded pt-2 pb-4 text-xl lg:text-2xl text-center">
      {teams.length > 1 && (
        <h1 className="text-xl lg:text-3xl font-bold p-1">Team {index + 1}</h1>
      )}

      {team.map((player, index) => (
        <div key={player.id}>
          {index + 1}. {player.name}
        </div>
      ))}
    </div>
  );
}
