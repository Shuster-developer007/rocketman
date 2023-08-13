import React from 'react'
import "../styles/Settings/SettingLinks.css"
import { Link, NavLink, useParams } from 'react-router-dom'


const SettingsLinks = () => {
    return (
        <div className='d-flex settings'>
            <NavLink className={({ isActive }) =>
                        isActive
                            ? 'text-decoration-none setting_active_link  '
                            : 'link setting_link text-decoration-none'
                    }
                        to='/settings/users'
                    >
                        <div className='fw-bold'>Users</div>
                    </NavLink>
                    <NavLink className={({ isActive }) =>
                        isActive
                            ? 'text-decoration-none setting_active_link  '
                            : 'link setting_link text-decoration-none'
                    }
                        to='/settings/drivers'
                    >
                        <div className='fw-bold'>Drivers</div>
                    </NavLink>
                    <NavLink className={({ isActive }) =>
                        isActive
                            ? 'text-decoration-none setting_active_link  '
                            : 'link setting_link text-decoration-none'
                    }
                        to='/settings/change'
                    >
                        <div className='fw-bold'>Info</div>
                    </NavLink>
                    <NavLink className={({ isActive }) =>
                        isActive
                            ? 'text-decoration-none setting_active_link  '
                            : 'link setting_link text-decoration-none'
                    }
                        to='/settings/payment'
                    >
                        <div className='fw-bold'>Payment</div>
                    </NavLink>
            {/* <Link to='/settings' className='text-decoration-none link setting_link '><div className='fw-bold'>Users</div></Link>
            <Link to='/settings/' className='text-decoration-none link setting_link'><div className=' fw-bold'>Drivers</div></Link>
            <Link to='/settings/change' className='text-decoration-none link setting_link'><div className=' fw-bold'>Infos</div></Link>
            <Link to='/settings/payment' className='text-decoration-none link setting_link'><div className=' fw-bold'>Payment</div></Link> */}
        </div>
    )
}

export default SettingsLinks
