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
                <div className="modal fade " id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Qo'shish</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form action="">
                                    <div className='d-flex  justify-content-between'>
                                        <div>
                                            <label htmlFor="driver_name" className='my-2'>Driver name</label>
                                            <input type="text" className='form-control' placeholder='name' id='driver_name' name='driver_name' />
                                        </div>
                                        <div>
                                            <label htmlFor="date" className=' my-2'>D.O.B</label>
                                            <input type="text" className='form-control 100' name='date' id='date' placeholder='masalan:22.11.1999' />
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <div>
                                            <label htmlFor="phone" className='my-2'>Telefon raqami</label>
                                            <input type="text" className='form-control' placeholder='+998 _ _ _ _ _ _ _ _ _' id='phone' name='phone' />
                                        </div>
                                        <div>
                                            <label htmlFor="auto_number" className=' my-2'>Autoraqam</label>
                                            <input type="text" className='form-control 100' name='auto_number' id='auto_number' placeholder='masalan:20 C 777 BB' />
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <div>
                                            <label htmlFor="type" className='my-2'>Turi</label>
                                            <input type="text" className='form-control' placeholder='masalan: Tico' id='type' name='type' />
                                        </div>
                                        <div className='input_cheks'>
                                            <label htmlFor="status" className='mt-4'>Holat</label>
                                            <div className='d-flex gap-4'>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                    <label class="form-check-label" for="flexRadioDefault1">
                                                        on
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                                    <label class="form-check-label" for="flexRadioDefault2">
                                                        of
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer d-flex justify-content-center align-items-center">
                                <button className="btn_modal">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade " id="editmodal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Tahrirlash</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form action="">
                                    <div className='d-flex  justify-content-between'>
                                        <div>
                                            <label htmlFor="driver_name" className='my-2'>Driver name</label>
                                            <input type="text" className='form-control' placeholder='name' id='driver_name' name='driver_name' />
                                        </div>
                                        <div>
                                            <label htmlFor="date" className=' my-2'>D.O.B</label>
                                            <input type="text" className='form-control 100' name='date' id='date' placeholder='masalan:22.11.1999' />
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <div>
                                            <label htmlFor="phone" className='my-2'>Telefon raqami</label>
                                            <input type="text" className='form-control' placeholder='+998 _ _ _ _ _ _ _ _ _' id='phone' name='phone' />
                                        </div>
                                        <div>
                                            <label htmlFor="auto_number" className=' my-2'>Autoraqam</label>
                                            <input type="text" className='form-control 100' name='auto_number' id='auto_number' placeholder='masalan:20 C 777 BB' />
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <div>
                                            <label htmlFor="type" className='my-2'>Turi</label>
                                            <input type="text" className='form-control' placeholder='masalan: Tico' id='type' name='type' />
                                        </div>
                                        <div className='input_cheks'>
                                            <label htmlFor="status" className='mt-4'>Holat</label>
                                            <div className='d-flex gap-4'>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                    <label class="form-check-label" for="flexRadioDefault1">
                                                        on
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                                    <label class="form-check-label" for="flexRadioDefault2">
                                                        of
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
                        <div className='d-flex justify-content-end'>
                            <button type="button" className="btn-add mt-3 d-flex gap-2 justify-content-center align-items-center" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Qo'shish
                                <div className='added_border'><i className="fa-solid fa-plus plus_icon"></i></div>
                            </button>
                        </div>
                        <div className="orab mt-4">
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
                                        <td data-bs-toggle="modal" data-bs-target="#editmodal"  className='jg d-flex align-items-center justify-content-center py-3'><div className='setting_icon_edit'>
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
                                        <td data-bs-toggle="modal" data-bs-target="#editmodal" className='jg d-flex align-items-center justify-content-center py-3'><div className='setting_icon_edit'>
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
                                        <td data-bs-toggle="modal" data-bs-target="#editmodal" className='jg d-flex align-items-center justify-content-center py-3'><div className='setting_icon_edit'>
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
                                        <td data-bs-toggle="modal" data-bs-target="#editmodal" className='jg d-flex align-items-center justify-content-center py-3'><div className='setting_icon_edit'>
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
                                        <td data-bs-toggle="modal" data-bs-target="#editmodal" className='jg d-flex align-items-center justify-content-center py-3'><div className='setting_icon_edit'>
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
