import React from 'react'
import "../styles/Header/Header.css"

const Header = () => {
    return (
        <header className='header'>
            <nav className="container px-4 d-flex align-items-center justify-content-between">
                <div>
                    <input type="text" className='inp' placeholder='Mijozni qidiring'/>
                </div>
                <div className='d-flex align-items-center  gap-3'>
                    <div className="doira d-flex align-items-center justify-content-center">
                        <i className="fa-regular fa-user fs-4 text-dark"></i>
                    </div>
                    <h6 className='text-white mt-1'>John Doe</h6>
                    <i className="fa-solid fa-caret-down fs-5 text-white"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header
