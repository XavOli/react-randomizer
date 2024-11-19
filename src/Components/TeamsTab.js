import { useState } from 'react';
import TeamsForm from './Teams/TeamsForm';
export default function TeamsTab({ playerList }) {
  const [numTeams, setNumTeams] = useState(1);
  const [shuffleType, setShuffleType] = useState('random');
  const [teams, setTeams] = useState([]);

  function handleShuffle() {
    console.log('Shufflin! Teams: ', numTeams, ' Shuffle type: ', shuffleType);

    if (numTeams > playerList.length)
      alert('You need more players to make that many teams!');
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
    </div>
  );
}
