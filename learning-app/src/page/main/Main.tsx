import Sidebar from '../../widgets/sidebar/Sidebar.tsx'
import Navbar from '../../widgets/navbar/Navbar.tsx'

const Main = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <Navbar />
    </div>
  )
}

export default Main
