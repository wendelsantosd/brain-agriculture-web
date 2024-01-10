import { Outlet } from 'react-router-dom';

export const Layout = (): React.ReactElement => {
  return <div>
    <div className='bg-sky-100'>sidebar</div>
    <div className='bg-teal-200'>header</div>
    <div>{<Outlet/>}</div>
    <p>footer</p>
  </div>
}