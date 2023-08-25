import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import "../../styles/Clients/MijozInfo.css"
import { Link, useParams } from 'react-router-dom';
import { api } from '../../API/api';

const MijozInfo = () => {

    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({})
    const { id } = useParams()
    console.log(data);
    const orderfindInfo = async () => {
        try {
            setLoading(true)
            const { data } = await api.getOneOrderInfo(id)
            console.log(data);
            setData(data)
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        orderfindInfo();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
                                        <h4>{data?.data?.user?.username}</h4>
                                    </div>
                                    <div>
                                        <p className='text-secondary'>Buyurtma vaqti:</p>
                                        <h6 className='buyutrma'>{(data?.data?.created_at)?.slice(4, 10) + (data?.data?.created_at)?.slice(15, 25)}</h6>
                                    </div>
                                    <button className="phone-btn">
                                        {data?.data?.user?.phone}
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
                                    <button className={`holat-btn ${data?.data?.status} `}>
                                        {data?.data?.status}
                                    </button>
                                </div>
                                <div className='d-flex flex-column align-items-center'>
                                    <h5>Driver</h5>
                                    <button className="btn-driver">
                                        {data?.data?.driver == null ? ("no content") : (data?.data?.driver?.car_number)}
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
