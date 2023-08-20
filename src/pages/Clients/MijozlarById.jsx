import React from 'react'
import Sidebar from '../../components/Sidebar'
import Header from '../../components/Header'
import '../../styles/Clients/MijozlarByid.css'
import { Link } from 'react-router-dom'

const MijozlarById = () => {
  return (
    <div>
      <Sidebar />
      <div className="ummumiy">
        <Header />
        <section className="section py-4">
          <div className="container px-4">
            <div className="d-flex justify-content-between align-items-center gap-4">
              <div className="mijoz d-flex align-items-center gap-3">
                <Link to="/mijozlar" className="text-dark text-decoration-none ">
                  <div className="bor">
                    <i className="fa-solid fa-angle-left"></i>
                  </div>
                </Link>
                <h3>Timur Raxmatov</h3>
              </div>
              <select className="my-select" aria-label="Default select example">
                {/* <option selected></option> */}
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <div>
                <p>Jami:</p>
                <h4 className="buyutrma">4 ta buyurtma</h4>
              </div>
              <button className="phone-btn d-flex align-items-center justify-content-center gap-2">
                <i className="fa-solid fa-phone text-white"></i>
                <a className="text-decoration-none link" href="tel:">
                  +998901342386
                </a>
              </button>
            </div>
            <div className="orab">
              <table className="mytable">
                <thead className="thread">
                  <tr>
                    <th className="jg text-center" scope="col">
                      ID
                    </th>
                    <th className="jg text-center" scope="col">
                      SANA
                    </th>
                    <th className="jg text-center" scope="col">
                      SONI
                    </th>
                    <th className="jg text-center" scope="col">
                      NARXI
                    </th>
                    <th className="jg text-center" scope="col">
                      MANZIL
                    </th>
                    <th className="jg text-center" scope="col">
                      DRIVER
                    </th>
                    <th className="jg text-center" scope="col">
                      HOLAT
                    </th>
                    <th className="jg text-center" scope="col">
                      BATAFSIL
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="tr">
                    <th className="jg text-center" cope="row">
                      1
                    </th>
                    <td className="jg text-center">12.23.2009</td>
                    <td className="jg text-center">2</td>
                    <td className="jg text-center">12000</td>
                    <td className="jg text-center">
                      <i className="fa-solid fa-location-dot text-danger fs-5"></i>
                    </td>
                    <td className="jg">
                      <div className="d-flex align-items-center justify-content-center ">
                        <div className="auto_number">01 | S 777 AA</div>
                      </div>
                    </td>
                    <td className="jg text-center text-danger">bekor</td>
                    <td className="jg m-auto text-center fs-4">...</td>
                  </tr>
                  <tr className="tr">
                    <th className="jg text-center" cope="row">
                      1
                    </th>
                    <td className="jg text-center">12.23.2009</td>
                    <td className="jg text-center">2</td>
                    <td className="jg text-center">12000</td>
                    <td className="jg text-center">
                      <i className="fa-solid fa-location-dot text-danger fs-5"></i>
                    </td>
                    <td className="jg">
                      <div className="d-flex align-items-center justify-content-center ">
                        <div className="auto_number">01 | S 777 AA</div>
                      </div>
                    </td>
                    <td className="jg text-center yashil">yakun</td>
                    <td className="jg m-auto text-center fs-4">...</td>
                  </tr>
                  <tr className="tr">
                    <th className="jg text-center" cope="row">
                      1
                    </th>
                    <td className="jg text-center">12.23.2009</td>
                    <td className="jg text-center">2</td>
                    <td className="jg text-center">12000</td>
                    <td className="jg text-center">
                      <i className="fa-solid fa-location-dot text-danger fs-5"></i>
                    </td>
                    <td className="jg">
                      <div className="d-flex align-items-center justify-content-center ">
                        <div className="auto_number">01 | S 777 AA</div>
                      </div>
                    </td>
                    <td className="jg text-center text-warning">buyurtma</td>
                    <td className="jg m-auto text-center fs-4">...</td>
                  </tr>
                  <tr className="tr">
                    <th className="jg text-center" cope="row">
                      1
                    </th>
                    <td className="jg text-center">12.23.2009</td>
                    <td className="jg text-center">2</td>
                    <td className="jg text-center">12000</td>
                    <td className="jg text-center">
                      <i className="fa-solid fa-location-dot text-danger fs-5"></i>
                    </td>
                    <td className="jg">
                      <div className="d-flex align-items-center justify-content-center ">
                        <div className="auto_number">01 | S 777 AA</div>
                      </div>
                    </td>
                    <td className="jg text-center text-primary">qabul</td>
                    <td className="jg m-auto text-center fs-4">...</td>
                  </tr>
                  <tr className="tr">
                    <th className="jg text-center" cope="row">
                      1
                    </th>
                    <td className="jg text-center">12.23.2009</td>
                    <td className="jg text-center">2</td>
                    <td className="jg text-center">12000</td>
                    <td className="jg text-center">
                      <i className="fa-solid fa-location-dot text-danger fs-5"></i>
                    </td>
                    <td className="jg">
                      <div className="d-flex align-items-center justify-content-center ">
                        <div className="auto_number">01 | S 777 AA</div>
                      </div>
                    </td>
                    <td className="jg text-center text-success">tayyorlanmoqda</td>
                    <td className="jg m-auto text-center fs-4">...</td>
                  </tr>
                  <tr className="tr">
                    <th className="jg text-center" cope="row">
                      1
                    </th>
                    <td className="jg text-center">12.23.2009</td>
                    <td className="jg text-center">2</td>
                    <td className="jg text-center">12000</td>
                    <td className="jg text-center">
                      <i className="fa-solid fa-location-dot text-danger fs-5"></i>
                    </td>
                    <td className="jg">
                      <div className="d-flex align-items-center justify-content-center ">
                        <div className="auto_number">01 | S 777 AA</div>
                      </div>
                    </td>
                    <td className="jg text-center purple">yetkazish</td>
                    <td className="jg m-auto text-center fs-4">...</td>
                  </tr>
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
