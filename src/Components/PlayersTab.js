import PlayerForm from './PlayerForm';
import PlayerList from './PlayerList';

export default function PlayersTab({ playerList }) {
  return (
    <div className="h-full flex flex-col justify-between bg-primary p-5 rounded-lg border-2 border-tertiaryLight text-lg ">
      <header className="font-bold text-3xl lg:text-6xl text-center">
        Team randomizer
      </header>
      <PlayerForm />
      <PlayerList playerList={playerList} />
    </div>
  );
}
