import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar'
import Header from '../../components/Header'
import "../../styles/Clients/Mijozlar.css"
import { Link } from 'react-router-dom'
import { api } from '../../API/api'

const Mijozlar = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const getClients = async () => {
        try {
            setLoading(true)
            const { data } = await api.getClient()
            setData(data)
        } catch (error) {
            console.log(error.message);
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getClients();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <Sidebar />
            <div className="ummumiy">
                <Header />
                <section className="mijozlar">
                    <div className="container px-4">
                        {loading ? (<h3 className='mt-5'>Loading...</h3>) : (<h3 className='mt-5'>Bizning Mijozlar</h3>)}
                        <div className='orab mt-4'>
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

                                    {data?.data?.map((item) => (
                                        <tr key={item._id} className='tr'>
                                            <th className='jg text-center' cope="row">{item.second_id}</th>
                                            <td className='jg text-center'><Link to={`/mijozlar/${item._id}`} className='text-decoration-none link'>{item.username}</Link></td>
                                            <td className='jg text-center'><Link to={`/mijozlar/${item._id}`} className='text-decoration-none link'>{item.phone}</Link></td>
                                            <td className='jg text-center'>{item.orders.length}</td>
                                        </tr>
                                    ))}
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
