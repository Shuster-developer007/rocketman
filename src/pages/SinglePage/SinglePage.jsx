import { Link } from 'react-router-dom';
import './SinglePage.css';
import { GrEdit } from 'react-icons/gr';
import { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import { SModal } from '../../components/Modal/smodal';

export const SinglePage = () => {
	const [addModal, addSetModal] = useState(false);
	const [editModal, editSetModal] = useState(false);

	const obj = [
		{
			id: 1,
			name: 'LAVASH',
			count: 2,
			isActive: 'disabled',
		},
		{
			id: 2,
			name: 'Gamburger',
			count: 12,
			isActive: 'disabled',
		},
		{
			id: 3,
			name: 'Pizza',
			count: 5,
			isActive: 'enabled',
		},
		{
			id: 4,
			name: 'KFC',
			count: 5,
			isActive: 'disabled',
		},
		{
			id: 5,
			name: 'Ichimliklar',
			count: 5,
			isActive: 'enabled',
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
											TOVAR SONI
										</th>
										<th scope='col' className='jg text-center'>
											TAHRIRLASH
										</th>
										<th scope='col' className='jg text-center'>
											STATUS
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
													to={'food'}
													className='Item-link text-decoration-none text-dark'
												>
													{item.name}
												</Link>
											</td>
											<td className='jg text-center'>{item.count}</td>
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
							<SModal
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
