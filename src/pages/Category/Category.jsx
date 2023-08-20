import { Link } from 'react-router-dom';
import './Category.css';
import { GrEdit } from 'react-icons/gr';
import { BtnSlider } from '../../components/BtnSlider';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import { useState } from 'react';
import { CategoryModal } from '../../components/Modal/categoryModal';
import React_Skeleton from '../../components/React_Skeleton/React_Skeleton';

export const Category = () => {
	const [addModal, addSetModal] = useState(false);
	const [editModal, editSetModal] = useState(false);
	const obj = [
		{
			id: 1,
			category: 'Git hub ozgartirish',
			markets: 2,
			isComplated: false,
		},
		{
			id: 2,
			category: 'Texnika',
			markets: 12,
			isComplated: false,
		},
		{
			id: 3,
			category: 'Gullar',
			markets: 5,
			isComplated: false,
		},
		{
			id: 4,
			category: 'Gullar',
			markets: 5,
			isComplated: false,
		},
		{
			id: 5,
			category: 'Gullar',
			markets: 5,
			isComplated: false,
		},
		{
			id: 6,
			category: 'Gullar',
			markets: 5,
			isComplated: false,
		},
	];

	const title = ['KATEGORIYA', "DO'KONLAR", 'TAHRIRLASH', 'STATUS'];

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
						<div className='category mt-4 '>
							<table className='table table-hover table-borderless '>
								<thead className='thread '>
									<tr className='table-dark'>
										{title.map((el, i) => (
											// eslint-disable-next-line react/jsx-key
											<th key={i} scope='col' className='jg text-center'>
												{el}
											</th>
										))}
									</tr>
								</thead>
								<tbody className=''>
									{obj.length ? (
										obj.map((item) => (
											<tr key={item.id} className='table-borderless'>
												<th scope='row' className='jg text-center'>
													<Link
														to={'fastfood'}
														className='Item-link text-decoration-none text-dark'
													>
														{item.category}
													</Link>
												</th>
												<td className='jg text-center'>{item.markets}</td>
												<td className='jg text-center'>
													{' '}
													<button
														className='btn'
														onClick={() => editSetModal(true)}
													>
														<GrEdit color='green' size={20} />
													</button>
												</td>
												<td className='jg text-center'>
													{' '}
													<BtnSlider isComplated={item.isComplated} />
												</td>
											</tr>
										))
									) : (
										<tr>
											{title.map((el, i) => (
												// eslint-disable-next-line react/jsx-key
												<td>
													<React_Skeleton key={i} />
												</td>
											))}
										</tr>
									)}
								</tbody>
							</table>
							<CategoryModal
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
