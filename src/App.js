import { useState } from 'react';
import PlayersTab from './Components/PlayersTab';
import Teams from './Components/TeamsTab';

const starterList = [
  { name: 'Xavier', sex: 'male', id: 1, active: true },
  { name: 'eve', sex: 'female', id: 2, active: true },
  { name: 'Max', sex: 'male', id: 1, active: true },
  { name: 'Amelie', sex: 'female', id: 2, active: true },
];

export default function App() {
  const [playerList, setPlayerList] = useState(starterList);
  const [teamsList, setTeamsList] = useState([]);

  return (
    <div className="grid lg:grid-cols-2 gap-4 justify-center align-center font-poppins md:mx-6 lg:mx-12">
      <PlayersTab playerList={playerList} />
      <Teams />
    </div>
  );
}
