import React from 'react'
import Sidebar from '../../components/Sidebar'
import Header from '../../components/Header'
import "../../styles/Settings/SettingChange.css"
import SettingsLinks from '../../components/SettingsLinks'

const SettingChange = () => {
    return (
        <div>
            <Sidebar />
            <div className="ummumiy">
                <Header />
                <section className='py-4'>
                    <div className="container px-5">
                        <div className='d-flex justify-content-center'>
                            <SettingsLinks />
                        </div>
                        <h1 className="title mt-5">Change client info</h1>
                        <form className="form" action="">
                            <div className="item">
                                <label className="label" htmlFor="companyName">
                                    Nomi
                                </label>
                                <input
                                    className="input"
                                    id="companyName"
                                    name="companyName"
                                    type="text"
                                    placeholder="Kompaniya nomi"
                                />
                            </div>
                            <div className="item">
                                <label className="label" htmlFor="mediaLink">
                                    Media Link
                                </label>
                                <input
                                    className="input"
                                    id="mediaLink"
                                    type="url"
                                    placeholder="Media uchun link kiriting"
                                />
                            </div>
                            <div className="item">
                                <label className="label" htmlFor="deliveryPlace">
                                    Yetkazib berish narxi
                                </label>
                                <input
                                    className="input"
                                    id="deliveryPlace"
                                    type="text"
                                    placeholder="masalan: 10 000 so’m"
                                />
                            </div>
                            <div className="item">
                                <label className="label" htmlFor="catalogLink">
                                    Katalog link
                                </label>
                                <input
                                    className="input"
                                    id="catalogLink"
                                    type="url"
                                    placeholder="Katalog uchun link kiriting"
                                />
                            </div>
                            <div className='item'>
                                <label className="label" htmlFor="numberPhone">
                                    Telefon raqam
                                </label>
                                <input
                                    className="input"
                                    id="numberPhone"
                                    type="phone"
                                    placeholder="+998 _ _  _ _ _  _ _  _ _"
                                />
                            </div>
                            <button className="btn_change " type="submit">
                                Yangilash
                            </button>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default SettingChange
