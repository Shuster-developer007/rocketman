import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import "../../styles/Home/Home.css"

const Home = () => {
  const [modal, setModal] = useState(false)

  const data = [
    {
      id: "1",
      sana: "12.23.1234",
      ism: "Timur",
      phone: "998901342386",
      soni: 2,
      narxi: 14000,
      location: "Toshkent",
      driver: "01 S 777 AA",
      holat: "qabul"
    },
    {
      id: "2",
      sana: "04.21.2000",
      ism: "Ali",
      phone: "998901342673",
      soni: 1,
      narxi: 11000,
      location: "Toshkent",
      driver: "01 S 134 SA",
      holat: "yetkazish"
    },
    {
      id: "3",
      sana: "2.31.2008",
      ism: "Vali",
      phone: "998901342386",
      soni: 5,
      narxi: 34000,
      location: "Toshkent",
      driver: "01 S 214 JJ",
      holat: "buyurtma"
    },
    {
      id: "4",
      sana: "1.12.2023",
      ism: "Mahmud",
      phone: "998902345654",
      soni: 3,
      narxi: 16000,
      location: "Toshkent",
      driver: "01 A 376 FR",
      holat: "bekor"
    },
    {
      id: "5",
      sana: "11.31.1954",
      ism: "Kimdir",
      phone: "998901342386",
      soni: 5,
      narxi: 17000,
      location: "Toshkent",
      driver: "01 D 134 AE",
      holat: "yakun"
    },
  ]

  return (
    <div>
      <Sidebar />
      <div className='ummumiy'>
        <Header />
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
                      <td className='jg text-center'>{item.sana}</td>
                      <td className='jg text-center'>{item.ism}</td>
                      <td className='jg text-center'>{item.phone}</td>
                      <td className='jg text-center'>{item.soni}</td>
                      <td className='jg text-center'>{item.narxi}</td>
                      <td className='jg text-center'><i className="fa-solid fa-location-dot text-danger fs-5"></i></td>
                      <td className='jg'><div className='d-flex align-items-center justify-content-center '><div className='auto_number'>01 | S 777 AA</div></div></td>
                      <td className={`jg text-center ${item.holat}`}>{item.holat}</td>
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
