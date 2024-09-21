import Sidebar from '../../widgets/sidebar/Sidebar.tsx'

const Main = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='text-yellow-500'>some text</div>
    </div>
  )
}

export default Main
