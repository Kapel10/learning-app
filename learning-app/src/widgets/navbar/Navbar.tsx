import Search from '../Search/Search.tsx'
import { NotificationIcon, UserIcon } from '../../shared/icon/Icons.tsx'

const Navbar = () => {
  return (
    <div className='border-[1px] border-gray-400 w-full h-[60px] flex items-center'>
      <div className='border-r-[1px] border-gray-400 flex w-4/5 px-6 justify-between'>
        <Search />
        <NotificationIcon />
      </div>
      <div className='flex justify-center px-3 gap-x-3'>
        <UserIcon />
        <span>Rakhymzhan Turlybek</span>
      </div>
    </div>
  )
}

export default Navbar
