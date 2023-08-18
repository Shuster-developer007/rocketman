/* eslint-disable react/no-unknown-property */
// import { Item } from '../../components/Item';
import { Link } from 'react-router-dom';
import './Food.css';
import { GrEdit } from 'react-icons/gr';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import RModal from 'react-modal';
import { useState } from 'react';
import MOCKIMAGE from '../../assets/images/300.png';

export const Food = () => {
	RModal.setAppElement('#root');
	const [rmodal, rsetModal] = useState(false);
	const [edModal, edSetModal] = useState(false);
	const styledBtn = {
		position: 'absolute',
		top: 0,
		right: 0,
		backgroundColor: 'green',
		color: 'white',
	};

	const obj = [
		{
			id: 1,
			name: 'LAVASH',
			desc: 'In tellus leo eleifend ut mollis lorem...',
			price: '20 000 so’m',
			isActive: 'enabled',
		},
		{
			id: 2,
			name: 'LAVASH',
			desc: 'In tellus leo eleifend ut mollis lorem...',
			price: '20 000 so’m',
			isActive: 'enabled',
		},
		{
			id: 3,
			name: 'LAVASH',
			desc: 'In tellus leo eleifend ut mollis lorem...',
			price: '20 000 so’m',
			isActive: 'enabled',
		},
		{
			id: 4,
			name: 'LAVASH',
			desc: 'In tellus leo eleifend ut mollis lorem...',
			price: '20 000 so’m',
			isActive: 'disabled',
		},
	];

	return (
		<>
			<Sidebar />
			<div className='ummumiy'>
				<Header />
				<section className='py-4'>
					<div className='container px-4'>
						<button
							className='btn btn-success categoryBtn'
							onClick={() => rsetModal(true)}
						>
							Qo’shish +
						</button>
						<div className='category mt-3'>
							<ul className='category-list'>
								<li className='category-item'>
									<h3>ID</h3>
									<h3>TOVAR</h3>
									<h3>MA'LUMOT</h3>
									<h3>NARXI</h3>
									<h3>HOLAT</h3>
									<h3>TAHRIRLASH</h3>
								</li>
								{obj.map((item) => (
									<li key={item.id} className='Item'>
										<p>{item.id}</p>
										<Link to={''} className='Item-link'>
											<p className='Item-text'>{item.name}</p>
										</Link>
										<p className='Item-text'>{item.desc}</p>
										<p className='Item-text'>{item.price}</p>
										<p className='Item-text'>{item.isActive}</p>
										<p className='Item-text'>
											<button className='btn' onClick={() => edSetModal(true)}>
												<GrEdit color='green' size={20} />
											</button>
										</p>
									</li>
								))}
							</ul>
							<RModal
								isOpen={edModal}
								onRequestClose={() => edSetModal(false)}
								style={{
									overlay: {
										backgroundColor: 'rgba(0,0,0,0.4)',
									},
									content: {
										width: '800px',
										height: '350px',
										top: 0,
										right: 0,
										left: 0,
										bottom: 0,
										margin: 'auto',
										color: 'black',
									},
								}}
							>
								<div className='d-flex align-items-start gap-5'>
									<div className=''>
										<img
											src={MOCKIMAGE}
											alt='MOCK IMAGE'
											width={300}
											height={300}
										/>
									</div>

									<form className='d-flex align-items-center p-3 gap-3'>
										<div className='d-flex flex-column'>
											{' '}
											<span>
												{' '}
												<span className='d-flex flex-column mt-4'>
													<label for='product'>Tovar nomi</label>
													<input
														type='text'
														className='rounded form-control'
														name='product'
														id='product'
														placeholder='masalan: Lavash Big'
													/>
												</span>
												<span className='d-flex flex-column mt-4'>
													<label for='price'>Narxi</label>
													<input
														type='text'
														className='rounded form-control'
														name='price'
														id='price'
														placeholder='masalan: 20 000'
													/>
												</span>
											</span>
											<span>
												<p className='mt-4'>Holat</p>
												<span className='me-4 fs-5'>
													<input type='radio' name='status' id='' />
													on
												</span>
												<span className='fs-5'>
													<input type='radio' name='status' id='' />
													off
												</span>
											</span>
										</div>
										<div className='d-flex flex-column gap-5'>
											{' '}
											<span>
												{' '}
												<span className='d-flex flex-column mt-4'>
													<label for='product'>Tovar nomi</label>
													<input
														type='text'
														className='rounded form-control'
														name='product'
														id='product'
														placeholder='masalan: Lavash Big'
													/>
												</span>
												<span className='d-flex flex-column mt-4'>
													<label for='price'>Narxi</label>
													<input
														type='text'
														className='rounded form-control'
														name='price'
														id='price'
														placeholder='masalan: 20 000'
													/>
												</span>
											</span>
											<button className='btn btn-dark'>Saqlash</button>
										</div>
									</form>

									<button style={styledBtn} onClick={() => edSetModal(false)}>
										X
									</button>
								</div>
							</RModal>
							<RModal
								isOpen={rmodal}
								onRequestClose={() => rsetModal(false)}
								style={{
									overlay: {
										backgroundColor: 'rgba(0,0,0,0.4)',
									},
									content: {
										width: '800px',
										height: '350px',
										top: 0,
										right: 0,
										left: 0,
										bottom: 0,
										margin: 'auto',
										color: 'black',
									},
								}}
							>
								<div className='d-flex align-items-center gap-5'>
									<div>
										<img
											src={MOCKIMAGE}
											alt='MOCK IMAGE'
											width={300}
											height={300}
										/>
									</div>
									<form className='d-flex align-items-center p-3 gap-3'>
										<div className='d-flex flex-column'>
											{' '}
											<span>
												{' '}
												<span className='d-flex flex-column mt-4'>
													<label for='product'>Tovar nomi</label>
													<input
														type='text'
														className='rounded form-control'
														name='product'
														id='product'
														placeholder='masalan: Lavash Big'
													/>
												</span>
												<span className='d-flex flex-column mt-4'>
													<label for='price'>Narxi</label>
													<input
														type='text'
														className='rounded form-control'
														name='price'
														id='price'
														placeholder='masalan: 20 000'
													/>
												</span>
											</span>
											<span>
												<p className='mt-4'>Holat</p>
												<span className='me-4 fs-5'>
													<input
														type='radio'
														className='form-check-input'
														name='status'
														id=''
													/>
													on
												</span>
												<span className='fs-5'>
													<input
														type='radio'
														className='form-check-input'
														name='status'
														id=''
													/>
													off
												</span>
											</span>
										</div>
										<div className='d-flex flex-column gap-5'>
											{' '}
											<span>
												{' '}
												<span className='d-flex flex-column mt-4'>
													<label for='product'>Tovar nomi</label>
													<input
														type='text'
														className='rounded form-control'
														name='product'
														id='product'
														placeholder='masalan: Lavash Big'
													/>
												</span>
												<span className='d-flex flex-column mt-4'>
													<label for='price'>Narxi</label>
													<input
														type='text'
														className='rounded form-control'
														name='price'
														id='price'
														placeholder='masalan: 20 000'
													/>
												</span>
											</span>
											<button className='btn btn-dark'>Saqlash</button>
										</div>
									</form>

									<button style={styledBtn} onClick={() => rsetModal(false)}>
										X
									</button>
								</div>
							</RModal>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};
