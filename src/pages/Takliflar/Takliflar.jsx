import React from 'react'
import Sidebar from '../../components/Sidebar'
import Header from '../../components/Header'
import "../../styles/Takliflar/Takliflar.css"

const Takliflar = () => {
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
                                    <input type="text" className='form-control' placeholder='Assalomu aleykum, ....' id='dispatch' name='dispatch'/>
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
                            <div className="morke py-4  d-flex justify-content-between">
                                <div className='topmor d-flex gap-3'>
                                    <div className='user'>
                                        22
                                    </div>
                                    <div>
                                        <h5>Bobur Mavlonov</h5>
                                        <p className='text-secondary sana'>22/12/2021</p>
                                    </div>
                                </div>
                                <p className='parag'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis adipisci maiores eveniet nulla cupiditate incidunt earum porro voluptatum libero cumque fugiat voluptas, commodi eum, eius ratione animi? Quaerat, quibusdam sunt?</p>
                                <div className='icons d-flex align-items-center gap-4'>
                                    <div data-bs-toggle="modal" data-bs-target="#dispatchmodal" className='share'><i className="fa-solid fa-share "></i></div>
                                    <div className='delete'><i className="fa-solid fa-trash text-danger  deleteicon"></i></div>
                                </div>
                            </div>
                            <div className="morke py-4 d-flex justify-content-between">
                                <div className='topmor d-flex gap-3'>
                                    <div className='user'>
                                        19
                                    </div>
                                    <div>
                                        <h5>Timur Raxmatov</h5>
                                        <p className='text-secondary sana'>22/12/2021</p>
                                    </div>
                                </div>
                                <p className='parag'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia obcaecati provident ipsa deleniti excepturi harum, minus eos nisi placeat sint fuga corrupti quos dolor cum iste cupiditate earum culpa quibusdam, rem perspiciatis officia pariatur esse! Ea, molestias harum ipsum molestiae nisi tempore nemo praesentium, ab nihil non odio beatae impedit?</p>
                                <div className='icons d-flex align-items-center gap-4'>
                                    <div data-bs-toggle="modal" data-bs-target="#dispatchmodal" className='share'><i className="fa-solid fa-share "></i></div>
                                    <div className='delete'><i className="fa-solid fa-trash text-danger  deleteicon"></i></div>
                                </div>
                            </div>
                            <div className="morke py-4  d-flex justify-content-between">
                                <div className='topmor  d-flex gap-3'>
                                    <div className='user'>
                                        32
                                    </div>
                                    <div>
                                        <h5>Ali Valiey</h5>
                                        <p className='text-secondary sana'>22/12/2021</p>
                                    </div>
                                </div>
                                <p className='parag'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid distinctio, officiis perferendis rerum voluptate expedita nostrum numquam aut quidem earum rem, error quis quae dolor recusandae blanditiis, id nobis ex? Commodi ipsum quam dignissimos voluptate. Quam, corporis. Cupiditate rem suscipit cum sunt corrupti.</p>
                                <div className='icons d-flex align-items-center gap-4'>
                                    <div data-bs-toggle="modal" data-bs-target="#dispatchmodal" className='share'><i className="fa-solid fa-share "></i></div>
                                    <div className='delete'><i className="fa-solid fa-trash text-danger  deleteicon"></i></div>
                                </div>
                            </div>
                            <div className="morke py-4  d-flex justify-content-between">
                                <div className='topmor d-flex gap-3'>
                                    <div className='user'>
                                        22
                                    </div>
                                    <div>
                                        <h5>Bobur Mavlonov</h5>
                                        <p className='text-secondary sana'>22/12/2021</p>
                                    </div>
                                </div>
                                <p className='parag'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis adipisci maiores eveniet nulla cupiditate incidunt earum porro voluptatum libero cumque fugiat voluptas, commodi eum, eius ratione animi? Quaerat, quibusdam sunt?</p>
                                <div className='icons d-flex align-items-center gap-4'>
                                    <div data-bs-toggle="modal" data-bs-target="#dispatchmodal" className='share'><i className="fa-solid fa-share "></i></div>
                                    <div className='delete'><i className="fa-solid fa-trash text-danger  deleteicon"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Takliflar
