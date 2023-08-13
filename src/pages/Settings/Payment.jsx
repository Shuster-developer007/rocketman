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
                <section className='py-4'>
                    <div className="container px-5">
                        <div className='d-flex justify-content-center'>
                            <SettingsLinks />
                        </div>
                        <h2 className="title mt-5">To'lov turlari</h2>
                        <div className="orab">
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
