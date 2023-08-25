import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar'
import Header from '../../components/Header'
import "../../styles/Takliflar/Takliflar.css"
import { api } from '../../API/api'
import { toast } from 'react-toastify'

const Takliflar = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const getComplaints = async () => {
        try {
            setLoading(true)
            const { data } = await api.getComplaitns();
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
        getComplaints();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const handleDeleteComplaint = async (id) => {
        try {
            const data = await api.deleteTakliflar(id)
            if (data.status == 204) {
                getComplaints()
                toast("Success deleted complaint", { type: "success" })
            }
        } catch (error) {
            toast("Delete qilishda xatolik mavjud", { type: "error" })
        }
    }

    return (
        <div>
            <Sidebar />
            <div className="ummumiy">
                <Header />
                <div className="modal fade" id="dispatchmodal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Javob yo'llang</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form action="">
                                    <input type="text" className='form-control' placeholder='Assalomu aleykum, ....' id='dispatch' name='dispatch' />
                                </form>
                            </div>
                            <div className="modal-footer d-flex justify-content-center align-items-center">
                                <button className="btn_modal">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
                <section>
                    <div className="container px-4 py-5">
                        <div className="div">
                            <h3>Taklif va Shifoyatlar </h3>
                            {data?.data?.map((item) => (
                                <div key={item._id} className="morke py-4  d-flex justify-content-between">
                                    <div className='topmor d-flex gap-3'>
                                        <div className='user'>
                                            22
                                        </div>
                                        <div>
                                            <h5>{item.username}</h5>
                                            <p className='text-secondary sana'>{(item.createdAt).slice(0, 4)}/{(item.createdAt).slice(5, 7)}/{(item.createdAt).slice(8, 10)}</p>
                                        </div>
                                    </div>
                                    <p className='parag'>{item.description}</p>
                                    <div className='icons d-flex align-items-center gap-4'>
                                        <div data-bs-toggle="modal" data-bs-target="#dispatchmodal" className='share'><i className="fa-solid fa-share "></i></div>
                                        <div onClick={() => handleDeleteComplaint(item._id)} className='delete'><i className="fa-solid fa-trash text-danger  deleteicon"></i></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Takliflar
