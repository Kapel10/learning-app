import { MenuOutlined } from '@ant-design/icons'
import { useSideBarStore } from '../../shared/store/SideBar.ts'

const SideBar = () => {
  const state = useSideBarStore((state) => state)

  return (
    <div className='max-h-screen'>
      <MenuOutlined
        onClick={() => state.setIsSideBarVisible(!state.isSideBarVisible)}
      />
      {state.isSideBarVisible && <div className='text-red-900'>opened</div>}
    </div>
  )
}

export default SideBar
