import Bottombar from '@/components/shared/Bottombar'
import LeftSidebar from '@/components/shared/LeftSidebar'
import Topbar from '@/components/shared/Topbar'
import WeatherWidget from '@/components/WeatherWidget'
import Weather from '@/components/WeatherWidget'
import { Outlet, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'

const RootLayout = () => {
  return (
    <div className='w-full md:flex'>

      {/* <Route element={<RootLayout />}>
        <Route index element={<LandingPage />} />
        // ... other routes */}

      <Topbar />
      <LeftSidebar />

        <section className='flex flex-1 w-full'>
            <Outlet />
        </section>

        <Bottombar />

      {/* </Route> */}

        

        
    </div>      
  
  )
}

export default RootLayout
