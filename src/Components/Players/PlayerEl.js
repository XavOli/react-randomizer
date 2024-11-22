import Button from '../Shared/Button';
import '@fortawesome/fontawesome-free/js/all';

export default function PlayerEl({ player, onDelPlayer, onSelectPlayer }) {
  const classList = `flex border border-primary justify-between items-center rounded-md bg-secondary pl-2 text-xl  ${
    !player.active ? 'text-blue-400 line-through ' : ''
  }`;
  return (
    <div className={classList}>
      <i
        className={
          player.sex === 'male'
            ? 'fa-solid fa-mars pr-2'
            : 'fa-solid fa-venus pr-2'
        }
      ></i>{' '}
      <p
        onClick={() => onSelectPlayer(player.id)}
        className="cursor-pointer overflow-x-auto"
      >
        {player.name}
      </p>{' '}
      <button onClick={() => onDelPlayer(player.id)}>
        <i className="fa-solid fa-xmark fa-lg text-red-600 p-1 pl-2"></i>
      </button>
    </div>
  );
}
