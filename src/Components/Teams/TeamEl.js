export default function TeamEl({ team, index }) {
  return (
    <div className="flex flex-col items-center justify-start border-4 rounded pt-2 pb-4 text-xl lg:text-2xl ">
      <h1 className="text-xl lg:text-3xl font-bold p-1">Team {index + 1}</h1>
      {team.map((player) => (
        <div key={player.id}>{player.name}</div>
      ))}
    </div>
  );
}
