import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

export default function DefaultLayout() {
  return (
    <div className="h-screen bg-color-board-white">
      <Sidebar />
      <Outlet />
    </div>
  )
}
