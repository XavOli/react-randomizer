import { useState } from 'react';
import TeamsForm from './Teams/TeamsForm';
import TeamsList from './Teams/TeamsList';
export default function TeamsTab({ playerList }) {
  const [numTeams, setNumTeams] = useState(2);
  const [shuffleType, setShuffleType] = useState('random');
  const [teams, setTeams] = useState([]);

  function handleShuffle() {
    let newList = playerList.filter((player) => player.active);
    if (numTeams > newList.length) {
      alert('You need more active players to make that many teams!');
      return;
    }

    if (shuffleType === 'random') {
      newList = shuffle(newList);
    } else {
      newList = shuffle(
        newList.filter((player) => player.sex === 'male')
      ).concat(shuffle(newList.filter((player) => player.sex === 'female')));
    }

    splitTeams(newList);
  }

  function shuffle(list) {
    const shuffledList = list;
    for (let i = shuffledList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledList[i], shuffledList[j]] = [shuffledList[j], shuffledList[i]];
    }
    return shuffledList;
  }

  function splitTeams(list) {
    setTeams([]);
    // Create an array, add empty array for each team
    const newTeams = Array.from({ length: numTeams }, () => []);
    // Take each player and iterate them into the teams in order
    list.forEach((player, index) => {
      newTeams[index % numTeams].push(player);
    });
    setTeams(newTeams);
  }

  return (
    <div className="h-full flex flex-col justify-start bg-primary p-5 rounded-lg border-2 border-tertiaryLight text-lg ">
      <TeamsForm
        numTeams={numTeams}
        setNumTeams={setNumTeams}
        shuffleType={shuffleType}
        setShuffleType={setShuffleType}
        onShuffle={handleShuffle}
      />
      <TeamsList teams={teams} />
    </div>
  );
}
