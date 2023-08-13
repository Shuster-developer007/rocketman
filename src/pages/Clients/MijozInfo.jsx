import React from 'react'
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import "../../styles/Clients/MijozInfo.css"
import { Link } from 'react-router-dom';

const MijozInfo = () => {
    return (
        <div>
            <Sidebar />
            <div className="ummumiy">
                <Header />
                <section className="info py-4">
                    <div className="container px-4">
                        <div className='hammasi'>
                            <div className="jadval">
                                <div className='topdiv  d-flex justify-content-between'>
                                    <div className="mijoz d-flex align-items-center gap-3">
                                        <Link to='/mijozlar' className='text-dark text-decoration-none '>
                                            <div className="bor">
                                                <i className="fa-solid fa-angle-left"></i>
                                            </div>
                                        </Link>
                                        <h4>Timur Raxmatov</h4>
                                    </div>
                                    <div>
                                        <p className='text-secondary'>Buyurtma vaqti:</p>
                                        <h6 className='buyutrma'>May 22, 11:23</h6>
                                    </div>
                                    <button className="phone-btn">
                                        +998901342386
                                    </button>
                                </div>
                            </div>
                            <div className='orta-dev align-items-center mt-3 d-flex justify-content-evenly'>
                                <div className='bh'>
                                    <div className='location'>
                                        <p>Manzil</p>
                                        <i className="fa-solid fa-location-dot text-danger fs-5"></i>
                                    </div>
                                    <p className='d-flex gap-1 align-items-center mt-2'><i className="fa-solid fa-paste fs-5"></i> Copy address link</p>
                                </div>
                                <div className='d-flex flex-column align-items-center'>
                                    <h5 className='text-center'>Holat</h5>
                                    <button className="holat-btn">
                                        yakun
                                    </button>
                                </div>
                                <div className='d-flex flex-column align-items-center'>
                                    <h5>Driver</h5>
                                    <button className="btn-driver">
                                        01 | S 777 AA
                                    </button>
                                </div>
                            </div>
                            <div className='table-brder mt-4'>
                                <table className="mytable">
                                    <thead className='top-thread'>
                                        <tr>
                                            <th className='jg text-center' scope="col">Do'kon nomi</th>
                                            <th className='hg text-center' scope="col">Mahsulotlar</th>
                                            <th className='hg text-center' scope="col">To'lov</th>
                                            <th className='hg text-center' scope="col">Soni</th>
                                            <th className='hg text-center' scope="col">NARXI</th>
                                            <th className='jg text-center' scope="col">Jami</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className='tr'>
                                            <th className='jg text-center' cope="row">KFC</th>
                                            <td className='hg text-center'>Tovuq qanoti</td>
                                            <td className='hg text-center'>Naqd pul</td>
                                            <td className='hg text-center'>2</td>
                                            <td className='hg text-center'>12000</td>
                                            <td className='jg text-center'>24000</td>
                                        </tr>
                                        <tr className='tr'>
                                            <th className='jg text-center' cope="row">Oqtepa</th>
                                            <td className='hg text-center'>Burger lavash</td>
                                            <td className='hg text-center'>Click</td>
                                            <td className='hg text-center'>4</td>
                                            <td className='hg text-center'>34000</td>
                                            <td className='jg text-center'>140 054 887</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className='py-3'>
                                    <p className='text-center text-secondary'>Jami:</p>
                                    <h5 className='text-center som'>54 000 so'm</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div >
        </div >
    )
}

export default MijozInfo
