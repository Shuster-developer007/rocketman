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
                                    <div className='share'><i className="fa-solid fa-share "></i></div>
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
                                    <div className='share'><i className="fa-solid fa-share "></i></div>
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
                                    <div className='share'><i className="fa-solid fa-share "></i></div>
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
                                    <div className='share'><i className="fa-solid fa-share "></i></div>
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
