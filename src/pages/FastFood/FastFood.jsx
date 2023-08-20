// import { Item } from '../../components/Item';
import { Link, useNavigate } from 'react-router-dom';
import './FastFood.css';
import { GrEdit } from 'react-icons/gr';
import { useState } from 'react';
import Sidebar from './../../components/Sidebar';
import Header from '../../components/Header';
import { FastfoodModal } from '../../components/Modal/fastfoodModal';

export const FastFood = () => {
	const [addModal, addSetModal] = useState(false);
	const [editModal, editSetModal] = useState(false);

	const navigate = useNavigate();
	const obj = [
		{
			id: 1,
			markets: 'Fast food',
			count: 2,
			phoneNumber: +998937298025,
			address: 'Baliqchi',
			isActive: 'enabled',
		},
		{
			id: 2,
			markets: 'Texnika',
			count: 12,
			phoneNumber: +998937298025,
			address: 'Baliqchi',
			isActive: 'enabled',
		},
		{
			id: 3,
			markets: 'Gullar',
			count: 5,
			phoneNumber: +998937298025,
			address: 'Baliqchi',
			isActive: 'enabled',
		},
		{
			id: 4,
			markets: 'Gullar',
			count: 5,
			phoneNumber: +998937298025,
			address: 'Baliqchi',
			isActive: 'disabled',
		},
		{
			id: 5,
			markets: 'Gullar',
			count: 5,
			phoneNumber: +998937298025,
			address: 'Baliqchi',
			isActive: 'enabled',
		},
		{
			id: 6,
			markets: 'Gullar',
			count: 5,
			phoneNumber: +998937298025,
			address: 'Baliqchi',
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
											DO'KONLAR
										</th>
										<th scope='col' className='jg text-center'>
											TOVAR SONI
										</th>
										<th scope='col' className='jg text-center'>
											TELEFON RAQAM
										</th>
										<th scope='col' className='jg text-center'>
											MANZIL
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
									{obj.map((item) => (
										<tr key={item.id} className='table-borderless'>
											<th scope='row' className='jg text-center'>
												{item.id}
											</th>
											<td scope='row' className='jg text-center'>
												<Link
													to={'name'}
													className='Item-link text-decoration-none text-dark'
												>
													{item.markets}
												</Link>
											</td>
											<td className='jg text-center'>{item.count}</td>
											<td className='jg text-center'>{item.phoneNumber}</td>
											<td className='jg text-center'>{item.address}</td>
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
										</tr>
									))}
								</tbody>
							</table>
							<FastfoodModal
								editModal={editModal}
								editSetModal={editSetModal}
								addModal={addModal}
								addSetModal={addSetModal}
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
