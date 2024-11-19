import TeamEl from './TeamEl';

export default function TeamsList({ teams }) {
  const classList = `grid gap-4 ${
    teams.length > 1 ? 'grid-cols-2' : 'grid-cols-1'
  }`;
  return (
    <div className={classList}>
      {teams.map((team, index) => (
        <TeamEl team={team} key={index} index={index} />
      ))}
    </div>
  );
}
