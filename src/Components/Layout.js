import Footer from './Footer';
import AppNav from './AppNav';
import { Outlet } from 'react-router';

export default function Layout() {
  return (
    <div className="container mx-auto min-h-screen flex flex-col justify-center items-center font-poppins text-white">
      <AppNav />
      <Outlet />
      <Footer />
    </div>
  );
}
