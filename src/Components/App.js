import { BrowserRouter as Router, Routes, Route } from 'react-router';
import { useEffect, useState } from 'react';
import PlayersTab from './PlayersTab';
import TeamsTab from './TeamsTab';
import { Outlet, NavLink } from 'react-router';

function Layout() {
  return (
    <div className="container mx-auto min-h-screen flex flex-col justify-center items-center font-poppins text-white">
      <nav className="flex space-x-4 justify-start items-center bg-red-500">
        <header className="font-bold text-4xl md:text-4xl text-center">
          Team randomizer
        </header>
        <NavLink to="players" className="text-blue-400 hover:text-blue-600">
          Players
        </NavLink>
        <NavLink to="teams" className="text-blue-400 hover:text-blue-600">
          Teams
        </NavLink>
      </nav>

      <Outlet />
    </div>
  );
}

export default function App() {
  const [playerList, setPlayerList] = useState(() => {
    let list = localStorage.getItem('playerList');
    return list ? JSON.parse(list) : [];
  });

  function handleAddPlayer(player) {
    setPlayerList([...playerList, player]);
  }

  function handleDelPlayer(id) {
    if (window.confirm('Are you sure?')) {
      setPlayerList(playerList.filter((cur) => cur.id !== id));
    }
  }

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
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="players"
            element={
              <PlayersTab
                playerList={playerList}
                onAddPlayer={handleAddPlayer}
                onDelPlayer={handleDelPlayer}
                onSelectPlayer={handleSelectPlayer}
              />
            }
          />
          <Route path="teams" element={<TeamsTab playerList={playerList} />} />
        </Route>
      </Routes>
    </Router>
  );
}
