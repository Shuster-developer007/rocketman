import React from 'react'
import Sidebar from '../../components/Sidebar'
import Header from '../../components/Header'
import SettingsLinks from '../../components/SettingsLinks'
import "../../styles/Settings/SettingUsers.css"


const SettingsUsers = () => {
    return (
        <div>
            <Sidebar />
            <div className="ummumiy">
                <Header />
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form action="">
                                    <label htmlFor="admin_name" className='my-3'>Login</label>
                                    <input type="text" className='form-control' placeholder='admin_name' id='admin_name' name='admin_name'/>
                                    <label htmlFor="password" className=' my-3'>Password</label>
                                    <input type="password" className='form-control' placeholder='password' />
                                </form>
                            </div>
                            <div className="modal-footer d-flex justify-content-center align-items-center">
                                <button className="btn_modal">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
                <section className='py-4'>
                    <div className="container px-4">
                        <div className='d-flex justify-content-center'>
                            <SettingsLinks />
                        </div>
                        <div className='thor mt-5'>
                            <h2>Available users</h2>
                            <div className='setting_card_users'>
                                <div className='user_setting d-flex justify-content-between'>
                                    <div><h6>1. John Doe</h6></div>
                                    <div className='d-flex gap-3'>
                                        <div className='setting_icon_edit'>
                                            <i className="fa-solid fa-marker text-white"></i>
                                        </div>
                                        <div className='setting_icon_delete'>
                                            <i className="fa-solid fa-trash text-white"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className='user_setting d-flex justify-content-between'>
                                    <div><h6>1. Shuhrat</h6></div>
                                    <div className='d-flex gap-3'>
                                        <div className=" setting_icon_edit" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            <i className="fa-solid fa-marker text-white"></i>
                                        </div>
                                        <div className='setting_icon_delete'>
                                            <i className="fa-solid fa-trash text-white"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex justify-content-end'>
                                <button type="button" className="btn btn-success mt-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    Qo'shish
                                </button>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default SettingsUsers
