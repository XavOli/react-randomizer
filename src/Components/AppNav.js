import { Link, NavLink } from 'react-router';

export default function AppNav() {
  return (
    <nav className="fixed w-full top-0 flex h-14 space-x-4 justify-center items-center bg-red-500 py-4">
      <Link to="/" className="font-bold ">
        Team Randomizer
      </Link>
      <NavLink to="players" className="text-blue-400 hover:text-blue-600">
        Players
      </NavLink>
      <NavLink to="teams" className="text-blue-400 hover:text-blue-600">
        Teams
      </NavLink>
    </nav>
  );
}
