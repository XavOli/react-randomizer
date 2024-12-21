import { BrowserRouter as Router, Routes, Route } from 'react-router';
import { useEffect, useState } from 'react';
import PlayersTab from './PlayersTab';
import TeamsTab from './TeamsTab';
import Layout from './Layout';
import LandingPage from './LandingPage';

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
          <Route index element={<LandingPage />} />
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
