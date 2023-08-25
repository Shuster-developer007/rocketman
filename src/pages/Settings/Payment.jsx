import React, { useEffect, useRef, useState } from 'react'
import "../../styles/Settings/Payment.css"
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import SettingsLinks from '../../components/SettingsLinks'
import { api } from '../../API/api'
import { toast } from 'react-toastify'
import { Radio } from 'antd'

const Payment = () => {
    const [data, setData] = useState([])
    const [payment, setPayment] = useState({})
    const [id, setId] = useState()
    const [loading, setLoading] = useState(false)
    const [value, setValue] = useState(false);

    const editPayment_typeRef = useRef()
    const editpayment_telegramRef = useRef()
    const editlinkRef = useRef()
    const payment_typeRef = useRef()
    const payment_telegramRef = useRef()
    const linkRef = useRef()


    const onChange = (e) => {
        setValue(e.target.value);
    };

    localStorage.setItem("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZGZmYmE1Zjc4OWE0Yjg1MzY1ODBhMCIsInJvbGUiOiJzdXBlcmFkbWluIiwiaWF0IjoxNjkyNzQ2MTA2fQ.7MZtuGzUggp2VLX1nCI4461qG6fcS1uopAKDoveHoPU")
    const getPayments = async () => {
        try {
            setLoading(true)
            const { data } = await api.getSettingsPayment();
            setData(data)
            // if (data.status === 200) {
            // 	dispatch(setCategory(data.data.data));
            // }
        } catch (error) {
            console.log(error.message);
        } finally {
            setLoading(false)
        }
    };

    useEffect(() => {
        getPayments();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const handleCreatePayment = async () => {
        try {
            const create_payment = {
                "payment_type": payment_typeRef.current.value,
                "telegram_payment": payment_telegramRef.current.value,
                "link": linkRef.current.value,
                "status": value === 'on' ? true : false
            }
            const { data } = await api.createPayment(create_payment)
            if (data.status == 201) {
                getPayments()
                toast("Success created Payment")
            }
        } catch (error) {
            console.log(error);
        }
    }
    const getOnePaymentOrEdit = async (id) => {
        try {
            setId(id)
            const { data } = await api.getOnePayment(id)
            setPayment(data)
        } catch (error) {
            console.log(error.message);
        }
    }

    const handleupdatedPayment = async () => {
        try {
            const update_payment = {
                "payment_type": editPayment_typeRef.current.value,
                "link": editlinkRef.current.value,
                "status": value == 'on' ? true : false,
                "telegram_payment": editpayment_telegramRef.current.value,
            }
            const data = await api.updatedPayment(id, update_payment)
            if (data.status == 202) {
                getPayments()
                toast("Success updated payment", { type: "success" })
            }
        } catch (error) {
            toast("Update qilishda xatolik yuz berdi")
        }
    }



    const handleDeletePayment = async (id) => {
        try {
            const { data } = await api.deletePayment(id)
            toast("Success deleted payment", { type: "success" })
            getPayments()
        } catch (error) {
            toast(error.response.data.message, { type: "error" })
        }
    }


    return (
        <div>
            <Sidebar />
            <div className="ummumiy">
                <Header />
                <div className="modal fade " id="editmodal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog d-flex justify-content-center">
                        <div className="modal-content ">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Tahrirlash</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form action="" >
                                    <label htmlFor="name" className='my-3'>Nomi</label>
                                    <input defaultValue={payment?.data?.payment_type} ref={editPayment_typeRef} type="text" className='form-control' placeholder={payment?.data?.payment_type} id='name' name='name' />
                                    <label htmlFor="telegram_btn_name" className=' my-3'>Telegram button name</label>
                                    <input defaultValue={payment?.data?.telegram_payment} ref={editpayment_telegramRef} type="text" className='form-control' id='telegram_btn_name' placeholder='masalan : click' />
                                    <label htmlFor="link" className=' my-3'>Link</label>
                                    <input defaultValue={payment?.data?.link} ref={editlinkRef} type="text" className='form-control' id='link' placeholder='link' />
                                    <div className=''>
                                        <label htmlFor="status" className='mt-3'>Holat</label>
                                        <div className='d-flex gap-4'>
                                            <Radio.Group onChange={onChange} value={value}>
                                                <Radio value={'on'}>on</Radio>
                                                <Radio value={'off'}>off</Radio>
                                            </Radio.Group>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer d-flex justify-content-center align-items-center">
                                <button type='submit' onClick={() => handleupdatedPayment()} className="btn_modal">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade " id="createmodal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog d-flex justify-content-center">
                        <div className="modal-content ">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Qo'shish</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form action="" >
                                    <label htmlFor="name" className='my-3'>Nomi</label>
                                    <input ref={payment_typeRef} type="text" className='form-control' placeholder='Payment name' id='name' name='name' />
                                    <label htmlFor="telegram_btn_name" className=' my-3'>Telegram button name</label>
                                    <input ref={payment_telegramRef} type="text" className='form-control' id='telegram_btn_name' placeholder='masalan : click' />
                                    <label htmlFor="link" className=' my-3'>Link</label>
                                    <input ref={linkRef} type="text" className='form-control' id='link' placeholder='link' />
                                    <div className=''>
                                        <label htmlFor="status" className='mt-3'>Holat</label>
                                        <div className='d-flex gap-4'>
                                            <Radio.Group onChange={onChange} value={value}>
                                                <Radio value={'on'}>on</Radio>
                                                <Radio value={'off'}>off</Radio>
                                            </Radio.Group>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer d-flex justify-content-center align-items-center">
                                <button type='submit' onClick={() => handleCreatePayment()} className="btn_modal">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
                <section className='py-4'>
                    <div className="container px-5">
                        <div className='d-flex justify-content-center'>
                            <SettingsLinks />
                        </div>

                        <div className='d-flex mt-5 justify-content-between align-items-center'>
                            {loading ? (<h2 className="title">Loading...</h2>) : (<h2 className="title">To'lov turlari</h2>)}
                            <button type="button" className="btn-add d-flex gap-2 justify-content-center align-items-center" data-bs-toggle="modal" data-bs-target="#createmodal">
                                Qo'shish
                                <div className='added_border'><i className="fa-solid fa-plus plus_icon"></i></div>
                            </button>
                        </div>
                        <div className="orab mt-3">
                            <table className="mytable">
                                <thead className='thread'>
                                    <tr>
                                        <th className='jg text-center' scope="col">NOMI</th>
                                        <th className='jg text-center' scope="col">TELEGRAM BUTTON NAME</th>
                                        <th className='jg text-center' scope="col">LINK</th>
                                        <th className='jg text-center' scope="col">HOLAT</th>
                                        <th className='jg text-center' scope="col">TAHRIRLASH</th>
                                        <th className='jg text-center' scope="col">O'CHIRISH</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data?.data?.map((item) => (
                                        <tr className='tr' key={item._id}>
                                            <th className='jg text-center' cope="row">{item.payment_type}</th>
                                            <td className='jg text-center d-flex align-items-center justify-content-center gap-2 py-4'><i className="fa-solid fa-credit-card text-warning"></i>{item.telegram_payment}</td>
                                            <td className='jg text-center'><a href={item.link} target='_blank'><i className="fa-solid fa-link"></i></a></td>
                                            <td className='jg '>{item.status == true ? (<div className='d-flex justify-content-center align-items-center'><div className='enabled text-success d-flex align-items-center justify-content-center'>enabled</div></div>) : (<div className='d-flex justify-content-center align-items-center '><div className="disabled text-danger justify-content-center align-items-center d-flex">disabled</div></div>)}</td>
                                            <td className="jg">
                                                <div onClick={() => getOnePaymentOrEdit(item._id)} className='d-flex justify-content-center align-items-center'>
                                                    <div data-bs-toggle="modal" data-bs-target="#editmodal" className='setting_icon_edit'>
                                                        <i className="fa-solid fa-marker text-white"></i>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="jg">
                                                <div className="d-flex justify-content-center align-items-center">
                                                    <div onClick={() => handleDeletePayment(item._id)} className='setting_icon_delete my-3'>
                                                        <i className="fa-solid fa-trash text-white"></i>
                                                    </div>
                                                </div>
                                            </td>

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

export default Payment
