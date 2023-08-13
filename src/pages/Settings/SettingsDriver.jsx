import React from 'react'
import Sidebar from '../../components/Sidebar'
import Header from '../../components/Header'
import "../../styles/Settings/SettingsDriver.css"
import SettingsLinks from '../../components/SettingsLinks'

const SettingsDriver = () => {
    return (
        <div>
            <Sidebar />
            <div className="ummumiy">
                <Header />
                <section className='py-4'>
                    <div className="container px-4">
                        <div className='d-flex justify-content-center'>
                            <SettingsLinks />
                        </div>
                        <div className="orab">
                            <table className="mytable">
                                <thead className='thread'>
                                    <tr>
                                        <th className='jg text-center' scope="col">ID</th>
                                        <th className='jg text-center' scope="col">FAMILIYA ISMI</th>
                                        <th className='jg text-center' scope="col">D.O.B</th>
                                        <th className='jg text-center' scope="col">TELEFON RAQAM</th>
                                        <th className='jg text-center' scope="col">AUTORAQAM</th>
                                        <th className='jg text-center' scope="col">TURI</th>
                                        <th className='jg text-center' scope="col">HOLAT</th>
                                        <th className='jg text-center' scope="col">TAHRIRLASH</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='tr'>
                                        <th className='jg text-center' cope="row">1</th>
                                        <td className='jg text-center'>Raxmatov Timur</td>
                                        <td className='jg text-center'>22.03.1934</td>
                                        <td className='jg text-center'>+99890234324</td>
                                        <td className='jg text-center'>20 A 000 CC</td>
                                        <td className='jg text-center'>Damas</td>
                                        <td className='jg text-success'><div className='d-flex justify-content-center align-items-center'><div className='enabled d-flex align-items-center justify-content-center'>enabled</div></div></td>
                                        <td className='jg d-flex align-items-center justify-content-center py-3'><div className='setting_icon_edit'>
                                            <i className="fa-solid fa-marker text-white"></i>
                                        </div></td>
                                    </tr>
                                    <tr className='tr'>
                                        <th className='jg text-center' cope="row">1</th>
                                        <td className='jg text-center'>Raxmatov Timur</td>
                                        <td className='jg text-center'>22.03.1934</td>
                                        <td className='jg text-center'>+99890234324</td>
                                        <td className='jg text-center'>20 A 000 CC</td>
                                        <td className='jg text-center'>Damas</td>
                                        <td className='jg text-success'><div className='d-flex justify-content-center align-items-center'><div className='enabled d-flex align-items-center justify-content-center'>enabled</div></div></td>
                                        <td className='jg d-flex align-items-center justify-content-center py-3'><div className='setting_icon_edit'>
                                            <i className="fa-solid fa-marker text-white"></i>
                                        </div></td>
                                    </tr>
                                    <tr className='tr'>
                                        <th className='jg text-center' cope="row">1</th>
                                        <td className='jg text-center'>Raxmatov Timur</td>
                                        <td className='jg text-center'>22.03.1934</td>
                                        <td className='jg text-center'>+99890234324</td>
                                        <td className='jg text-center'>20 A 000 CC</td>
                                        <td className='jg text-center'>Damas</td>
                                        <td className='jg text-center text-danger'><div className='d-flex justify-content-center align-items-center '><div className="disabled text-danger justify-content-center align-items-center d-flex">disabled</div></div></td>
                                        <td className='jg d-flex align-items-center justify-content-center py-3'><div className='setting_icon_edit'>
                                            <i className="fa-solid fa-marker text-white"></i>
                                        </div></td>
                                    </tr>
                                    <tr className='tr'>
                                        <th className='jg text-center' cope="row">1</th>
                                        <td className='jg text-center'>Raxmatov Timur</td>
                                        <td className='jg text-center'>22.03.1934</td>
                                        <td className='jg text-center'>+99890234324</td>
                                        <td className='jg text-center'>20 A 000 CC</td>
                                        <td className='jg text-center'>Damas</td>
                                        <td className='jg text-success'><div className='d-flex justify-content-center align-items-center'><div className='enabled d-flex align-items-center justify-content-center'>enabled</div></div></td>
                                        <td className='jg d-flex align-items-center justify-content-center py-3'><div className='setting_icon_edit'>
                                            <i className="fa-solid fa-marker text-white"></i>
                                        </div></td>
                                    </tr>
                                    <tr className='tr'>
                                        <th className='jg text-center' cope="row">1</th>
                                        <td className='jg text-center'>Raxmatov Timur</td>
                                        <td className='jg text-center'>22.03.1934</td>
                                        <td className='jg text-center'>+99890234324</td>
                                        <td className='jg text-center'>20 A 000 CC</td>
                                        <td className='jg text-center'>Damas</td>
                                        <td className='jg text-center text-danger'><div className='d-flex justify-content-center align-items-center '><div className="disabled text-danger justify-content-center align-items-center d-flex">disabled</div></div></td>
                                        <td className='jg d-flex align-items-center justify-content-center py-3'><div className='setting_icon_edit'>
                                            <i className="fa-solid fa-marker text-white"></i>
                                        </div></td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className='d-flex next'>
                                <div className="bor">
                                    <i className="fa-solid fa-angle-left"></i>
                                </div>
                                <div className="bor">
                                    <i className="fa-solid fa-angle-right "></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default SettingsDriver
