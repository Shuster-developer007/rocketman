import { useState } from 'react'
import { Route , Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Takliflar from './pages/Takliflar/Takliflar'
import Mijozlar from './pages/Clients/Mijozlar'
import MijozlarById from './pages/Clients/MijozlarById'
import MijozInfo from './pages/Clients/MijozInfo'
import Payment from './pages/Settings/Payment'
import SettingChange from './pages/Settings/SettingChange'
import SettingsUsers from './pages/Settings/SettingsUsers'
import SettingsDriver from './pages/Settings/SettingsDriver'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/takliflar' element={<Takliflar />}/>
        <Route path='/mijozlar' element={<Mijozlar />}/>
        <Route path='/mijozlar/:id' element={<MijozlarById />}/>
        <Route path='/mijozlar/info' element={<MijozInfo />}/>
        <Route path='/settings/payment' element={<Payment/>}/>
        <Route path='/settings/change' element={<SettingChange/>}/>
        <Route path='/settings/users' element={<SettingsUsers/>}/>
        <Route path='/settings/drivers' element={<SettingsDriver/>}/>
      </Routes>
    </>
  )
}

export default App
