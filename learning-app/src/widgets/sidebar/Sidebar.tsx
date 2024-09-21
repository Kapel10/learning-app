import {
  DashboardIcon,
  ExamIcon,
  GrammarIcon,
  LogoIcon,
  SettingsIcon,
  TraslateIcon,
  VocabularyIcon,
} from '../../shared/icon/Icons.tsx'

const sideBarComponent =
  'flex gap-x-3 hover:bg-dark-purple p-2 rounded-[5px] hover:text-white'

const Sidebar = () => {
  return (
    <div className='fixed w-1/5 h-screen bg-purple text-gray-purple flex flex-col items-center justify-between gap-y-3 py-5'>
      <div className='w-5/6 flex flex-col'>
        <div className='w-5/6 mb-4'>
          <LogoIcon />
        </div>
        <div className={sideBarComponent}>
          <DashboardIcon />
          <div className=''>Dashboard</div>
        </div>
        <div className={sideBarComponent}>
          <VocabularyIcon />
          <span>Vocabulary</span>
        </div>
        <div className={sideBarComponent}>
          <GrammarIcon />
          <span>Grammar</span>
        </div>
        <div className={sideBarComponent}>
          <TraslateIcon />
          <span>Translate</span>
        </div>
        <div className={sideBarComponent}>
          <ExamIcon />
          <span>Test</span>
        </div>
      </div>
      <div className='w-5/6'>
        <div className={sideBarComponent}>
          <SettingsIcon />
          <span>Settings</span>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
