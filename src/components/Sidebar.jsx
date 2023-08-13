import React from 'react'
import roscetmenIcon from "../assets/icon.png"
import "../styles/Sidebar/Sidebar.css"
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="container jk d-flex flex-column justify-content-between">
                <div className='d-flex flex-column align-items-center'>
                    <img className='imageicon' src={roscetmenIcon} alt="rosceticon" />
                </div>
                <ul className='d-flex ul flex-column  align-items-start justify-content-center'>
                    <NavLink className={({ isActive }) =>
                        isActive
                            ? 'text-decoration-none text-white'
                            : 'text-decoration-none seriy'
                    }
                        to='/'
                    >
                        <li className='d-flex gap-3 align-items-center hv fs-5'><i className="fa-solid fa-window-restore fs-5"></i>Buyurtmalar</li>
                    </NavLink>
                    <NavLink className={({ isActive }) =>
                        isActive
                            ? 'text-decoration-none text-white'
                            : 'text-decoration-none seriy'
                    }
                        to='/mijozlar'
                    >
                        <li className='d-flex gap-3 align-items-center hv fs-5'><i className="fa-solid fa-user-group fs-5"></i>Mijozlar</li>
                    </NavLink>
                    <NavLink className={({ isActive }) =>
                        isActive
                            ? 'text-decoration-none text-white'
                            : 'text-decoration-none seriy'
                    }
                        to='/category'
                    >
                        <li className='d-flex gap-3 align-items-center hv fs-5'><i className="fa-solid fa-pen-nib fs-5"></i>Mahsulotlar</li>
                    </NavLink>
                    <NavLink className={({ isActive }) =>
                        isActive
                            ? 'text-decoration-none text-white'
                            : 'text-decoration-none seriy'
                    }
                        to='/takliflar'
                    >
                        <li className='d-flex gap-3 align-items-center hv fs-5'><i className="fa-solid fa-thumbs-up fs-5"></i>Takliflar</li>
                    </NavLink>
                </ul>
                <div className='d-flex align-items-center setting'>
                    <NavLink className={({ isActive }) =>
                        isActive
                            ? 'd-flex gap-3 align-items-center seriy hv fs-5 text-decoration-none text-white'
                            : 'd-flex gap-3 align-items-center hv fs-5 text-decoration-none seriy'
                    }
                        to='/settings/users'
                    >
                        <i className="fa-solid fa-gear fs-5"></i>Sozlamalar
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
