import Button from '../Common/Button';
import '@fortawesome/fontawesome-free/js/all';

export default function PlayerEl({ player }) {
  return (
    <div className="border border-primary flex justify-between items-center bg-secondary pl-2 text-xl text-white">
      <i
        className={
          player.sex === 'male' ? 'fa-solid fa-mars' : 'fa-solid fa-venus'
        }
      ></i>{' '}
      {player.name}{' '}
      <Button>
        <i className="fa-solid fa-xmark fa-lg text-red-600"></i>
      </Button>
    </div>
  );
}
