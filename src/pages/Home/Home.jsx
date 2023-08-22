import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import "../../styles/Home/Home.css"

const Home = () => {
  const [modal, setModal] = useState(false)

  const data = [
    {
      id: "1",
      created_at: "12.23.1234",
      username: "Timur",
      phone: "998901342386",
      count: 2,
      total_price: 14000,
      location: "Toshkent",
      driver: "01 S 777 AA",
      status: "qabul"
    },
    {
      id: "2",
      created_at: "04.21.2000",
      username: "Ali",
      phone: "998901342673",
      count: 1,
      total_price: 11000,
      location: "Toshkent",
      driver: "01 S 134 SA",
      status: "yetkazish"
    },
    {
      id: "3",
      created_at: "2.31.2008",
      username: "Vali",
      phone: "998901342386",
      count: 5,
      total_price: 34000,
      location: "Toshkent",
      driver: "01 S 214 JJ",
      status: "buyurtma"
    },
    {
      id: "4",
      created_at: "1.12.2023",
      username: "Mahmud",
      phone: "998902345654",
      count: 3,
      total_price: 16000,
      location: "Toshkent",
      driver: "01 A 376 FR",
      status: "bekor"
    },
    {
      id: "5",
      created_at: "11.31.1954",
      username: "Kimdir",
      phone: "998901342386",
      count: 5,
      total_price: 17000,
      location: "Toshkent",
      driver: "01 D 134 AE",
      status: "yakun"
    },
  ]


  const data_driver = [
    {
      driver_full_name: 'Ali Valiey',
      driver_birthday: "12.12.1212",
      driver_phone: "+998901342386",
      car_number: "10 A 453 SS",
      type: "Captiva",
      status: true
    }, {
      driver_full_name: 'Salim qanqadir',
      driver_birthday: "12.12.1212",
      driver_phone: "+998901376766",
      car_number: "10 A 323 SS",
      type: "Captiva",
      status: true
    }, {
      driver_full_name: 'Karim Sali',
      driver_birthday: "12.12.1212",
      driver_phone: "+9989679567",
      car_number: "0 A 4ewr3 SS",
      type: "Captiva",
      status: true
    }
  ]

  return (
    <div>
      <Sidebar />
      <div className='ummumiy'>
        <Header />
        <div className="offcanvas offcanvas-end bg-dark" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title text-white" id="offcanvasRightLabel">All Drivers</h5>
            <button type="button" className="btn-close bg-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body d-flex flex-column gap-4">
            {data_driver?.map((item) => (
              <div className="card_driver px-3 py-2 justify-content-between d-flex">
                <div className="tod_card_driver">
                  <h5 className='driver_name'>{item.driver_full_name}</h5>
                  <p>holat: {item.status == true ? (<span className='text-success'>enabled</span>) : <span className='text-danger'>disabled</span>}</p>
                  <p>turi: <span className='text-secondary turi_driver'>{item.type}</span></p>

                </div>

                <div className="bottom_car_driver">
                  <div className='auto_number'>{item.car_number}</div>
                  <p className='mt-3'><a href="" >{item.driver_phone}</a></p>
                  <button className='btn btn-success'>Add driver in order</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <section className='py-5'>
          <div className="container px-4">
            <select className="form-select w-50" aria-label="Default select example">
              <option >Barchasi</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
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
                  {data.map((item) => (
                    <tr className='tr' key={item.id}>
                      <th className='jg text-center' cope="row">{item.id}</th>
                      <td className='jg text-center'>{item.created_at}</td>
                      <td className='jg text-center'>{item.username}</td>
                      <td className='jg text-center'>{item.phone}</td>
                      <td className='jg text-center'>{item.count}</td>
                      <td className='jg text-center'>{item.total_price}</td>
                      <td className='jg text-center'><i className="fa-solid fa-location-dot text-danger fs-5"></i></td>
                      <td className='jg'>{item.status == "buyurtma" ? (<div data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" className='d-flex align-items-center justify-content-center '><div className='auto_number'><i className="fa-solid fa-plus "></i></div></div>) : (<div className='d-flex align-items-center justify-content-center '><div className='auto_number'>{item.driver}</div></div>)}</td>
                      <td className={`jg text-center ${item.status}`}>{item.status}</td>
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
