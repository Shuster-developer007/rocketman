import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar'
import Header from '../../components/Header'
import SettingsLinks from '../../components/SettingsLinks'
import "../../styles/Settings/SettingUsers.css"
import { api } from '../../API/api'


const SettingsUsers = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    const getAdmins = async () => {
        try {
            setLoading(true)
            const { data } = await api.getAdmins();
            setData(data)
            // if (data.status === 200) {
            // 	dispatch(setCategory(data.data.data));
            // }
        } catch (error) {
            console.log(error.message);
        } finally {
            setLoading(false)
        }
    };

    useEffect(() => {
        getAdmins();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const handleDeleteAdmin = async (id) => {
        try {
            setLoading(true)
            const { data } = await api.deleteAdmin(id);
            setData(data)
            getAdmins()
        } catch (error) {
            console.log(error.message);
        } finally {
            setLoading(false)
        }
    };

    return (
        <div>
            <Sidebar />
            <div className="ummumiy">
                <Header />
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Qo'shish</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form action="">
                                    <label htmlFor="admin_name" className='my-3'>Login</label>
                                    <input type="text" className='form-control' placeholder='admin_name' id='admin_name' name='admin_name' />
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
                <div className="modal fade" id="editUserModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Tahrirlash</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form action="">
                                    <label htmlFor="admin_name" className='my-3'>Login</label>
                                    <input type="text" className='form-control' placeholder='admin_name' id='admin_name' name='admin_name' />
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

                            {loading ? (<h2>Loading</h2>) : (<h2>Available users</h2>)}
                            <div className='setting_card_users'>
                                {data?.data?.map((item) => (
                                    <div key={item._id} className='user_setting d-flex justify-content-between'>
                                        <div><h6>1.{item.username}</h6></div>
                                        <div className='d-flex gap-3'>
                                            <div className='setting_icon_edit' data-bs-toggle="modal" data-bs-target="#editUserModal">
                                                <i className="fa-solid fa-marker text-white"></i>
                                            </div>
                                            <div onClick={() => handleDeleteAdmin(item._id)} className='setting_icon_delete'>
                                                <i className="fa-solid fa-trash text-white"></i>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className='d-flex justify-content-end'>
                                <button type="button" className="btn-add mt-3 d-flex gap-2 justify-content-center align-items-center" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    Qo'shish
                                    <div className='added_border'><i className="fa-solid fa-plus plus_icon"></i></div>
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
