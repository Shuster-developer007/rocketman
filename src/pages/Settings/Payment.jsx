import React from 'react'
import "../../styles/Settings/Payment.css"
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import SettingsLinks from '../../components/SettingsLinks'

const Payment = () => {
    return (
        <div>
            <Sidebar />
            <div className="ummumiy">
                <Header />
                <div className="modal fade " id="editmodal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog d-flex justify-content-center">
                        <div className="modal-content ">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Tahrirlash</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form action="">
                                    <label htmlFor="name" className='my-3'>Nomi</label>
                                    <input type="text" className='form-control' placeholder='Payment name' id='name' name='name' />
                                    <label htmlFor="telegram_btn_name" className=' my-3'>Telegram button name</label>
                                    <input type="text" className='form-control' id='telegram_btn_name' placeholder='masalan : click' />
                                </form>
                            </div>
                            <div className="modal-footer d-flex justify-content-center align-items-center">
                                <button className="btn_modal">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade " id="createmodal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog d-flex justify-content-center">
                        <div className="modal-content ">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Qo'shish</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form action="">
                                    <label htmlFor="name" className='my-3'>Nomi</label>
                                    <input type="text" className='form-control' placeholder='Payment name' id='name' name='name' />
                                    <label htmlFor="telegram_btn_name" className=' my-3'>Telegram button name</label>
                                    <input type="text" className='form-control' id='telegram_btn_name' placeholder='masalan : click' />
                                </form>
                            </div>
                            <div className="modal-footer d-flex justify-content-center align-items-center">
                                <button className="btn_modal">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
                <section className='py-4'>
                    <div className="container px-5">
                        <div className='d-flex justify-content-center'>
                            <SettingsLinks />
                        </div>

                        <div className='d-flex mt-5 justify-content-between align-items-center'>
                            <h2 className="title">To'lov turlari</h2>
                            <button type="button" className="btn-add d-flex gap-2 justify-content-center align-items-center" data-bs-toggle="modal" data-bs-target="#createmodal">
                                Qo'shish
                                <div className='added_border'><i className="fa-solid fa-plus plus_icon"></i></div>
                            </button>
                        </div>
                        <div className="orab mt-3">
                            <table className="mytable">
                                <thead className='thread'>
                                    <tr>
                                        <th className='jg text-center' scope="col">NOMI</th>
                                        <th className='jg text-center' scope="col">TELEGRAM BUTTON NAME</th>
                                        <th className='jg text-center' scope="col">LINK</th>
                                        <th className='jg text-center' scope="col">HOLAT</th>
                                        <th className='jg text-center' scope="col">TAHRIRLASH</th>
                                        <th className='jg text-center' scope="col">O'CHIRISH</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='tr'>
                                        <th className='jg text-center' cope="row">Click</th>
                                        <td className='jg text-center d-flex align-items-center justify-content-center gap-2 py-4'><i className="fa-solid fa-credit-card text-warning"></i>Click</td>
                                        <td className='jg text-center'><i className="fa-solid fa-link"></i></td>
                                        <td className='jg text-success'><div className='d-flex justify-content-center align-items-center'><div className='enabled d-flex align-items-center justify-content-center'>enabled</div></div></td>
                                        <td className="jg">
                                            <div className='d-flex justify-content-center align-items-center'>
                                                <div data-bs-toggle="modal" data-bs-target="#editmodal" className='setting_icon_edit'>
                                                    <i className="fa-solid fa-marker text-white"></i>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="jg">
                                            <div className="d-flex justify-content-center align-items-center">
                                                <div className='setting_icon_delete my-3'>
                                                    <i className="fa-solid fa-trash text-white"></i>
                                                </div>
                                            </div>
                                        </td>

                                    </tr>
                                    <tr className='tr'>
                                        <th className='jg text-center' cope="row">Payme</th>
                                        <td className='jg text-center d-flex align-items-center justify-content-center gap-2 py-4'><i className="fa-solid fa-credit-card text-warning"></i>Payme</td>
                                        <td className='jg text-center'><i className="fa-solid fa-link"></i></td>
                                        <td className='jg text-success'><div className='d-flex justify-content-center align-items-center'><div className='enabled d-flex align-items-center justify-content-center'>enabled</div></div></td>
                                        <td className="jg">
                                            <div className='d-flex justify-content-center align-items-center'>
                                                <div className='setting_icon_edit'>
                                                    <i className="fa-solid fa-marker text-white"></i>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="jg">
                                            <div className="d-flex justify-content-center align-items-center">
                                                <div className='setting_icon_delete my-3'>
                                                    <i className="fa-solid fa-trash text-white"></i>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    )
}

export default Payment
