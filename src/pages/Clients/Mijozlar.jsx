import React from 'react'
import Sidebar from '../../components/Sidebar'
import Header from '../../components/Header'
import "../../styles/Clients/Mijozlar.css"
import { Link } from 'react-router-dom'

const Mijozlar = () => {
    return (
        <div>
            <Sidebar />
            <div className="ummumiy">
                <Header />
                <section className="mijozlar">
                    <div className="container">
                        <div className='orab'>
                            <table className="mytable">
                                <thead className='thread'>
                                    <tr>
                                        <th className='jg text-center' scope="col">ID</th>
                                        <th className='jg text-center' scope="col">ISM</th>
                                        <th className='jg text-center' scope="col">TELEFON RAQAM</th>
                                        <th className='jg text-center' scope="col">BUYURTMALAR</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                    <tr className='tr'>
                                        <th className='jg text-center' cope="row">1</th>
                                        <td className='jg text-center'><Link to='/mijozlar/1' className='text-decoration-none link'>Alixanov Kimdir</Link></td>
                                        <td className='jg text-center'><Link to='/mijozlar/1' className='text-decoration-none link'>+998901342386</Link></td>
                                        <td className='jg text-center'>5</td>
                                    </tr>
                                    <tr className='tr'>
                                        <th className='jg text-center' cope="row">1</th>
                                        <td className='jg text-center'>Ali Valiey</td>
                                        <td className='jg text-center'>+998901342386</td>
                                        <td className='jg text-center'>1</td>
                                    </tr>
                                    <tr className='tr'>
                                        <th className='jg text-center' cope="row">1</th>
                                        <td className='jg text-center'>Asil Kalimov</td>
                                        <td className='jg text-center'>+998901342386</td>
                                        <td className='jg text-center'>2</td>
                                    </tr>
                                    <tr className='tr'>
                                        <th className='jg text-center' cope="row">1</th>
                                        <td className='jg text-center'>Ismsiz odam</td>
                                        <td className='jg text-center'>+998901342386</td>
                                        <td className='jg text-center'>1</td>
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

export default Mijozlar
