import React from 'react'
import "../styles/Header/Header.css"
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';

const Header = () => {
    const items = [
        {
            key: '4',
            danger: true,
            label: 'log out',
        },
    ];
    return (
        <header className='header'>
            <nav className="container px-4 d-flex align-items-center justify-content-between">
                <div>
                    <input type="text" className='inp' placeholder='Mijozni qidiring' />
                </div>
                <div className='d-flex align-items-center  gap-3'>
                    <div className="doira d-flex align-items-center justify-content-center">
                        <i className="fa-regular fa-user fs-4 text-dark"></i>
                    </div>
                    <h6 className='text-white mt-1'>John Doe</h6>
                    <div className='d-flex align-items-center dropdown_icon'>
                        <Dropdown
                            menu={{
                                items,
                            }}
                        >
                            <a className='text-center text-decoration-none text-white ' onClick={(e) => e.preventDefault()}>
                                <Space>
                                    <DownOutlined />
                                </Space>
                            </a>
                        </Dropdown>
                    </div>

                </div>
            </nav>
        </header>
    )
}

export default Header
