import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar/Sidebar';
import { Header } from '../components/Header/Header';

export const Layout = (): React.ReactElement => {
  return <div className='flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden'>
    <Sidebar />
    <div className='flex-1'>
      <Header />
      <div className="flex-1 p-4 min-h-0 overflow-auto">
        {<Outlet />}
      </div>
    </div>
  </div>
}