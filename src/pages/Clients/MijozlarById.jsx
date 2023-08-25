import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar'
import Header from '../../components/Header'
import "../../styles/Clients/MijozlarByid.css"
import { Link, useParams } from 'react-router-dom'
import { api } from '../../API/api'

const MijozlarById = () => {
    const { id } = useParams()
    const [data, setData] = useState([])
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(false)

    const userGetOne = async () => {
        try {
            setLoading(true)
            const { data } = await api.getOneUser(id)
            setUser(data)
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        userGetOne();
    }, []);


    const orderfind = async () => {
        try {
            setLoading(true)
            const { data } = await api.getOrder_user(id)
            setData(data)
        } catch (error) {
            console.log(error.message);
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        orderfind();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <Sidebar />
            <div className="ummumiy">
                <Header />
                <section className="section py-4">
                    <div className="container px-4">
                        <div className='d-flex justify-content-between align-items-center gap-4'>
                            <div className="mijoz d-flex align-items-center gap-3">
                                <Link to='/mijozlar' className='text-dark text-decoration-none '>
                                    <div className="bor">
                                        <i className="fa-solid fa-angle-left"></i>
                                    </div>
                                </Link>
                                {loading ? (<h3>Loading...</h3>) : <h3>{user?.data?.username}</h3>}
                            </div>
                            <select className="my-select" aria-label="Default select example">
                                {/* <option selected></option> */}
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            <div>
                                <p>Jami:</p>
                                <h4 className='buyutrma'>{data?.data?.length}</h4>
                            </div>
                            <button className="phone-btn d-flex align-items-center justify-content-center gap-2">
                                <i className="fa-solid fa-phone text-white"></i>
                                <a className='text-decoration-none link' href="tel:">{user?.data?.phone}</a>
                            </button>
                        </div>
                        <div className="orab">
                            <table className="mytable">
                                <thead className='thread'>
                                    <tr>
                                        <th className='jg text-center' scope="col">ID</th>
                                        <th className='jg text-center' scope="col">SANA</th>
                                        <th className='jg text-center' scope="col">SONI</th>
                                        <th className='jg text-center' scope="col">NARXI</th>
                                        <th className='jg text-center' scope="col">MANZIL</th>
                                        <th className='jg text-center' scope="col">DRIVER</th>
                                        <th className='jg text-center' scope="col">HOLAT</th>
                                        <th className='jg text-center' scope="col">BATAFSIL</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data?.data?.map((item , index) => (
                                        <tr key={item._id} className='tr'>
                                            <th className='jg text-center' cope="row">{index + 1}</th>
                                            <td className='jg text-center'>{(item.createdAt).slice(0, 10)}</td>
                                            <td className='jg text-center'>{item.items.map((price) => (
                                                (price.count + price.count)
                                            ))}</td>
                                            <td className='jg text-center'>{item.total_price}</td>
                                            <td className='jg text-center'><i className="fa-solid fa-location-dot text-danger fs-5"></i></td>
                                            <td className='jg'>{item.driver == null ? (<div className='d-flex align-items-center justify-content-center '><div className='auto_number'>no connected</div></div>) : <div className='d-flex align-items-center justify-content-center '><div className='auto_number'>01 | S 777 AA</div></div>}</td>
                                            <td className={`jg text-center ${item.status}`}>{item.status}</td>
                                            <td className='jg m-auto text-center fs-4'><Link to={`/mijozlar/info/${item._id}`} className='text-decoration-none text-dark'>...</Link></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default MijozlarById
