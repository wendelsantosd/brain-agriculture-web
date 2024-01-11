import { HiOutlineViewGrid, HiUserGroup } from 'react-icons/hi'

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'farmer',
		label: 'Produtores',
		path: '/farmer',
		icon: <HiUserGroup />
	}
]