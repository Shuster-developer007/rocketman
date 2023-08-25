import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import "../../styles/Home/Home.css"
import { api } from '../../API/api';
import { toast } from 'react-toastify';

const Home = () => {
  const [modal, setModal] = useState(false)
  const [data, setData] = useState([])
  const [order_id, setId] = useState('')
  const [data_driver, setData_Driver] = useState([])
  const [loading, setLoading] = useState(false)

  const findOrders = async () => {
    try {
      setLoading(true)
      const { data } = await api.getOrders()
      setData(data)
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    findOrders();
  }, []);

  const getAllDriver = async () => {
    try {
      setLoading(true)
      const { data } = await api.getOrderDriver()
      setData_Driver(data.data)
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false)
    }
  }


  const addDriver = async (id) => {
    try {
      
      const body = {
        "driver": id
      }
      const { data } = await api.addDriverOrder(order_id, body)
      if (data.status == 201) {
        toast("Success added driver", { type: "success" })
      }
      getAllDriver()
      findOrders()
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllDriver();
  }, []);

  return (
    <div>
      <Sidebar />
      <div className='ummumiy'>
        <Header />
        <div className="offcanvas offcanvas-end bg-dark" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
          <div className="offcanvas-header">
            {loading ? (<h5 className="offcanvas-title text-white" id="offcanvasRightLabel">Loading..</h5>) : (<h5 className="offcanvas-title text-white" id="offcanvasRightLabel">All Drivers</h5>)}
            <button type="button" className="btn-close bg-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body d-flex flex-column gap-4">
            {data_driver?.map((item) => (
              <div key={item?._id} className="card_driver px-3 py-2 justify-content-between d-flex">
                <div className="tod_card_driver">
                  <h5 className='driver_name'>{item?.driver_full_name}</h5>
                  <p>holat: {item?.status == true ? (<span className='text-success'>enabled</span>) : <span className='text-danger'>disabled</span>}</p>
                  <p>turi: <span className='text-secondary turi_driver'>{item?.type}</span></p>

                </div>

                <div className="bottom_car_driver">
                  <div className='auto_number'>{item?.car_number}</div>
                  <p className='mt-3'><a href="" >{item?.driver_phone}</a></p>
                  <button onClick={() => addDriver(item?._id)} className='btn btn-success'>Add driver in order</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <section className='py-5'>
          <div className="container px-4">
            {loading ? (<h3>Loading ....</h3>) : (<select className="form-select w-50" aria-label="Default select example">
              <option >Barchasi</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>)}

            <div className="orab">
              <table className="mytable">
                <thead className='thread'>
                  <tr>
                    <th className='jg text-center' scope="col">ID</th>
                    <th className='jg text-center' scope="col">SANA</th>
                    <th className='jg text-center' scope="col">ISM</th>
                    <th className='jg text-center' scope="col">TELEFON RAQAM</th>
                    <th className='jg text-center' scope="col">SONI</th>
                    <th className='jg text-center' scope="col">NARXI</th>
                    <th className='jg text-center' scope="col">MANZIL</th>
                    <th className='jg text-center' scope="col">DRIVER</th>
                    <th className='jg text-center' scope="col">HOLAT</th>
                    <th className='jg text-center' scope="col">BATAFSIL</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.data?.map((item) => (
                    <tr className='tr' key={item._id}>
                      <th className='jg text-center' cope="row">1</th>
                      <td className='jg text-center'>{(item?.created_at)?.slice(4, 11) + (item?.created_at)?.slice(16, 21)}</td>
                      <td className='jg text-center'>{item?.user?.username}</td>
                      <td className='jg text-center'>{item?.user?.phone}</td>
                      <td className='jg text-center'>{item?.items?.map((item) => (
                        item.count
                      ))}</td>
                      <td className='jg text-center'>{item?.total_price}</td>
                      <td className='jg text-center'><i className="fa-solid fa-location-dot text-danger fs-5"></i></td>
                      <td className='jg'>{item?.driver == null ? (<div onClick={() => setId(item._id)} data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" className='d-flex align-items-center justify-content-center '><div className='auto_number'><i className="fa-solid fa-plus "></i></div></div>) : (<div className='d-flex align-items-center justify-content-center '><div className='auto_number'>{item.driver.car_number}</div></div>)}</td>
                      <td className={`jg text-center ${item?.status}`}>{item?.status}</td>
                      <td className='jg m-auto text-center fs-2'>...</td>
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

export default Home
