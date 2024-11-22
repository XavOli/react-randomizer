import { useEffect, useState } from 'react';
import PlayersTab from './Components/PlayersTab';
import TeamsTab from './Components/TeamsTab';

// const starterList = [
//   { name: 'Xavier', sex: 'male', id: crypto.randomUUID(), active: true },
//   { name: 'Evelyne', sex: 'female', id: crypto.randomUUID(), active: true },
//   { name: 'Max', sex: 'male', id: crypto.randomUUID(), active: false },
//   { name: 'Amelie', sex: 'female', id: crypto.randomUUID(), active: true },
// ];

export default function App() {
  const [playerList, setPlayerList] = useState(() => {
    let list = localStorage.getItem('playerList');
    list === null ? (list = []) : (list = JSON.parse(list));
    return list;
  });

  function handleAddPlayer(player) {
    setPlayerList([...playerList, player]);
  }

  function handleDelPlayer(id) {
    if (window.confirm('Are you sure?')) {
      setPlayerList(playerList.filter((cur) => cur.id !== id));
    }
  }

  // Updates local storage when there is a change in the playerList
  useEffect(() => {
    localStorage.setItem('playerList', JSON.stringify(playerList));
  }, [playerList]);

  function handleSelectPlayer(id) {
    setPlayerList(
      playerList.map((player) =>
        player.id === id ? { ...player, active: !player.active } : player
      )
    );
  }

  return (
    <div className="flex flex-col w-[97%] max-w-[97vw] md:max-w-5xl gap-4 h-full justify-center self-center justify-self-center font-poppins md:mx-6 lg:mx-12w">
      <PlayersTab
        playerList={playerList}
        onAddPlayer={handleAddPlayer}
        onDelPlayer={handleDelPlayer}
        onSelectPlayer={handleSelectPlayer}
      />
      <TeamsTab playerList={playerList} />
    </div>
  );
}
