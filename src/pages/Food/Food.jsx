/* eslint-disable react/no-unknown-property */
// import { Item } from '../../components/Item';
import { Link } from 'react-router-dom';
import './Food.css';
import { GrEdit } from 'react-icons/gr';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import { useState } from 'react';
import { FoodModal } from '../../components/Modal/foodModal';
import React_Skeleton from '../../components/React_Skeleton/React_Skeleton';

export const Food = () => {
	const [addModal, addSetModal] = useState(false);
	const [editModal, editSetModal] = useState(false);

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
							onClick={() => addSetModal(true)}
						>
							Qo’shish +
						</button>
						<div className='category mt-3'>
							<table className='table table-hover table-borderless'>
								<thead className='thread'>
									<tr className='table-dark'>
										<th scope='col' className='jg text-center'>
											ID
										</th>
										<th scope='col' className='jg text-center'>
											TOVAR
										</th>
										<th scope='col' className='jg text-center'>
											MA'LUMOT
										</th>
										<th scope='col' className='jg text-center'>
											NARXI
										</th>
										<th scope='col' className='jg text-center'>
											HOLAT
										</th>
										<th scope='col' className='jg text-center'>
											TAHRIRLASH
										</th>
									</tr>
								</thead>
								<tbody className=''>
									{obj.length ? (
										obj.map((item) => (
											<tr key={item.id} className='table-borderless'>
												<th scope='row' className='jg text-center'>
													{item.id}
												</th>
												<td scope='row' className='jg text-center'>
													<Link
														to={'#'}
														className='Item-link text-decoration-none text-dark'
													>
														{item.name}
													</Link>
												</td>
												<td className='jg text-center'>{item.desc}</td>
												<td className='jg text-center'>{item.price}</td>
												<td
													className='jg text-center'
													style={
														item.isActive === 'enabled'
															? {
																	backgroundColor: '#D9FFDA',
																	color: '#008C06',
																	border: 'transparent',
															  }
															: {
																	backgroundColor: '#FFD9D9',
																	color: '#BE0707',
																	border: 'transparent',
															  }
													}
												>
													{item.isActive}
												</td>
												<td className='jg text-center'>
													{' '}
													<button
														className='btn'
														onClick={() => editSetModal(true)}
													>
														<GrEdit color='green' size={20} />
													</button>
												</td>
												<td></td>
											</tr>
										))
									) : (
										<tr>
											<td>
												<React_Skeleton />
											</td>
											<td>
												<React_Skeleton />
											</td>
											<td>
												<React_Skeleton />
											</td>
											<td>
												<React_Skeleton />
											</td>
											<td>
												<React_Skeleton />
											</td>
											<td>
												<React_Skeleton />
											</td>
										</tr>
									)}
								</tbody>
							</table>
							<FoodModal
								addModal={addModal}
								addSetModal={addSetModal}
								editModal={editModal}
								editSetModal={editSetModal}
							/>
							<div className='d-flex next border-top'>
								<div className='bor'>
									<i className='fa-solid fa-angle-left'></i>
								</div>
								<div className='bor'>
									<i className='fa-solid fa-angle-right '></i>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};
