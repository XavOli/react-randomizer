import Button from '../Shared/Button';
import '@fortawesome/fontawesome-free/js/all';

export default function PlayerEl({ player, onDelPlayer, onSelectPlayer }) {
  const classList = `border border-primary flex justify-between items-center bg-secondary pl-2 text-xl  ${
    !player.active ? 'text-blue-400 line-through ' : ''
  }`;
  return (
    <div className={classList}>
      <i
        className={
          player.sex === 'male' ? 'fa-solid fa-mars' : 'fa-solid fa-venus'
        }
      ></i>{' '}
      <p onClick={() => onSelectPlayer(player.id)} className="cursor-pointer">
        {player.name}
      </p>{' '}
      <button onClick={() => onDelPlayer(player.id)}>
        <i className="fa-solid fa-xmark fa-lg text-red-600"></i>
      </button>
    </div>
  );
}
