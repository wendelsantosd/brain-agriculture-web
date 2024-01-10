import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar/Sidebar';
import { Header } from '../components/Header/Header';

export const Layout = (): React.ReactElement => {
  return <div className='flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden'>
    <Sidebar />
    <div className='p-4'>
      <Header />
      <div>{<Outlet />}</div>
    </div>
  </div>
}