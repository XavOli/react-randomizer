import TeamEl from './TeamEl';

export default function TeamsList({ teams }) {
  const classList = `grid gap-4 ${
    teams.length > 1 ? 'grid-cols-2' : 'grid-cols-1'
  }`;
  return (
    <div className={classList}>
      {teams.length > 0 ? (
        teams.map((team, index) => (
          <TeamEl team={team} key={index} index={index} />
        ))
      ) : (
        <div className="text-center justify-self-center max-w-72">
          Shuffle everyone or split players by sex between teams!
        </div>
      )}
    </div>
  );
}
