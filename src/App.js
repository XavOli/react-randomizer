import { useState } from 'react';
import PlayersTab from './Components/PlayersTab';
import Teams from './Components/TeamsTab';

const starterList = [
  { name: 'Xavier', sex: 'male', id: crypto.randomUUID(), active: true },
  { name: 'eve', sex: 'female', id: crypto.randomUUID(), active: true },
  { name: 'Max', sex: 'male', id: crypto.randomUUID(), active: false },
  { name: 'Amelie', sex: 'female', id: crypto.randomUUID(), active: true },
];

export default function App() {
  const [playerList, setPlayerList] = useState(starterList);
  const [teamsList, setTeamsList] = useState([]);

  function handleAddPlayer(player) {
    setPlayerList([...playerList, player]);
  }

  function handleDelPlayer(id) {
    if (window.confirm('Are you sure?')) {
      setPlayerList(playerList.filter((cur) => cur.id !== id));
    }
  }

  function handleSelectPlayer(id) {
    console.log(id);
    setPlayerList(
      playerList.map((player) =>
        player.id === id ? { ...player, active: !player.active } : player
      )
    );
  }

  return (
    <div className="grid lg:grid-cols-2 gap-4 justify-center align-center font-poppins md:mx-6 lg:mx-12w">
      <PlayersTab
        playerList={playerList}
        onAddPlayer={handleAddPlayer}
        onDelPlayer={handleDelPlayer}
        onSelectPlayer={handleSelectPlayer}
      />
      <Teams />
    </div>
  );
}
