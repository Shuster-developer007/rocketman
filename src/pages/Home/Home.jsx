import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import "../../styles/Home/Home.css"

const Home = () => {
  const [modal, setModal] = useState(false)



  return (
    <div>
      <Sidebar />
      <div className='ummumiy'>
        <Header />
        <section className='py-5'>
          <div className="container px-4">
            <select className="form-select w-50" aria-label="Default select example">
              <option selected>Barchasi</option>
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
                  <tr className='tr'>
                    <th className='jg text-center' cope="row">1</th>
                    <td className='jg text-center'>12.23.2009</td>
                    <td className='jg text-center'>Timur</td>
                    <td className='jg text-center'>+99890234324</td>
                    <td className='jg text-center'>2</td>
                    <td className='jg text-center'>12000</td>
                    <td className='jg text-center'><i className="fa-solid fa-location-dot text-danger fs-5"></i></td>
                    <td className='jg'><div className='d-flex align-items-center justify-content-center '><div className='auto_number'>01 | S 777 AA</div></div></td>
                    <td className='jg text-center text-danger'>bekor</td>
                    <td className='jg m-auto text-center fs-2'>...</td>
                  </tr>
                  <tr className='tr'>
                    <th className='jg text-center' cope="row">1</th>
                    <td className='jg text-center'>12.23.2009</td>
                    <td className='jg text-center'>Timur</td>
                    <td className='jg text-center'>+99890234324</td>
                    <td className='jg text-center'>2</td>
                    <td className='jg text-center'>12000</td>
                    <td className='jg text-center'><i className="fa-solid fa-location-dot text-danger fs-5"></i></td>
                    <td className='jg'><div className='d-flex align-items-center justify-content-center '><div className='auto_number'>01 | S 777 AA</div></div></td>
                    <td className='jg text-center yashil'>yakun</td>
                    <td className='jg m-auto text-center fs-2'>...</td>
                  </tr>
                  <tr className='tr'>
                    <th className='jg text-center' cope="row">1</th>
                    <td className='jg text-center'>12.23.2009</td>
                    <td className='jg text-center'>Timur</td>
                    <td className='jg text-center'>+99890234324</td>
                    <td className='jg text-center'>2</td>
                    <td className='jg text-center'>12000</td>
                    <td className='jg text-center'><i className="fa-solid fa-location-dot text-danger fs-5"></i></td>
                    <td className='jg'><div className='d-flex align-items-center justify-content-center '><div className='auto_number'>01 | S 777 AA</div></div></td>
                    <td className='jg text-center text-warning'>buyurtma</td>
                    <td className='jg m-auto text-center fs-2'>...</td>
                  </tr>
                  <tr className='tr'>
                    <th className='jg text-center' cope="row">1</th>
                    <td className='jg text-center'>12.23.2009</td>
                    <td className='jg text-center'>Timur</td>
                    <td className='jg text-center'>+99890234324</td>
                    <td className='jg text-center'>2</td>
                    <td className='jg text-center'>12000</td>
                    <td className='jg text-center'><i className="fa-solid fa-location-dot text-danger fs-5"></i></td>
                    <td className='jg'><div className='d-flex align-items-center justify-content-center '><div className='auto_number'>01 | S 777 AA</div></div></td>
                    <td className='jg text-center text-primary'>qabul</td>
                    <td className='jg m-auto text-center fs-2'>...</td>
                  </tr>
                  <tr className='tr'>
                    <th className='jg text-center' cope="row">1</th>
                    <td className='jg text-center'>12.23.2009</td>
                    <td className='jg text-center'>Timur</td>
                    <td className='jg text-center'>+99890234324</td>
                    <td className='jg text-center'>2</td>
                    <td className='jg text-center'>12000</td>
                    <td className='jg text-center'><i className="fa-solid fa-location-dot text-danger fs-5"></i></td>
                    <td className='jg'><div className='d-flex align-items-center justify-content-center '><div className='auto_number'>01 | S 777 AA</div></div></td>
                    <td className='jg text-center text-success'>tayyorlanmoqda</td>
                    <td className='jg m-auto text-center fs-2'>...</td>
                  </tr>
                  <tr className='tr'>
                    <th className='jg text-center' cope="row">1</th>
                    <td className='jg text-center'>12.23.2009</td>
                    <td className='jg text-center'>Timur</td>
                    <td className='jg text-center'>+99890234324</td>
                    <td className='jg text-center'>2</td>
                    <td className='jg text-center'>12000</td>
                    <td className='jg text-center'><i className="fa-solid fa-location-dot text-danger fs-5"></i></td>
                    <td className='jg'><div className='d-flex align-items-center justify-content-center '><div className='auto_number'>01 | S 777 AA</div></div></td>
                    <td className='jg text-center purple'>yetkazish</td>
                    <td className='jg m-auto text-center fs-2'>...</td>
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

export default Home
