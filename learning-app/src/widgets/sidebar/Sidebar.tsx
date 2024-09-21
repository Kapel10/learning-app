import {
  DashboardIcon,
  GrammarIcon,
  LogoIcon,
  SettingsIcon,
  TraslateIcon,
  VocabularyIcon,
} from '../../shared/icon/Icons.tsx'
import { useState } from 'react'
import { SidebarElement } from './model.ts'

const sidebarList: SidebarElement[] = [
  { title: 'Dashboard', icon: <DashboardIcon />, key: 1 },
  { title: 'Vocabulary', icon: <VocabularyIcon />, key: 2 },
  { title: 'Grammar', icon: <GrammarIcon />, key: 3 },
  { title: 'Translate', icon: <TraslateIcon />, key: 4 },
]

const Sidebar = () => {
  const [id, setId] = useState(1)

  return (
    <div className=' w-1/5 h-screen bg-purple text-gray-purple flex flex-col items-center justify-between gap-y-3 py-5'>
      <div className='w-5/6 flex flex-col'>
        <div className='w-5/6 mb-4'>
          <LogoIcon />
        </div>
        {sidebarList.map((sideBar) => (
          <div
            key={sideBar.key}
            className={`flex gap-x-3 hover:bg-dark-purple p-2 rounded-[5px] hover:text-white ${id === sideBar.key && 'bg-dark-purple'}`}
            onClick={() => setId(sideBar.key)}
          >
            {sideBar.icon} <span>{sideBar.title}</span>
          </div>
        ))}
      </div>
      <div className='w-5/6'>
        <div className='flex gap-x-3 hover:bg-dark-purple p-2 rounded-[5px] hover:text-white'>
          <SettingsIcon />
          <span>Settings</span>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
