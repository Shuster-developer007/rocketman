// import { Item } from '../../components/Item';
import { Link } from 'react-router-dom';
import './FastFood.css';
import { GrEdit } from 'react-icons/gr';
import { useState } from 'react';
import Sidebar from './../../components/Sidebar';
import Header from '../../components/Header';
import { FastfoodModal } from '../../components/Modal/fastfoodModal';

export const FastFood = () => {
	const [addModal, addSetModal] = useState(false);
	const [editModal, editSetModal] = useState(false);

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
							<ul className='category-list'>
								<li className='category-item'>
									<h3>ID</h3>
									<h3>DO'KONLAR</h3>
									<h3>TOVAR SONI</h3>
									<h3>TELEFON RAQAM</h3>
									<h3>MANZIL</h3>
									<h3>HOLAT</h3>
									<h3>TAHRIRLASH</h3>
								</li>
								{obj.map((item) => (
									<li key={item.id} className='Item'>
										<p>{item.id}</p>
										<Link to={'name'} className='Item-link'>
											<p className='Item-text'>{item.markets}</p>
										</Link>
										<p className='Item-text'>{item.count}</p>
										<p className='Item-text'>{item.phoneNumber}</p>
										<p className='Item-text'>{item.address}</p>
										<p className='Item-text'>{item.isActive}</p>
										<p className='Item-text'>
											<button className='btn' onClick={() => editSetModal(true)}>
												<GrEdit color='green' size={20} />
											</button>
										</p>
									</li>
								))}
							</ul>
							<FastfoodModal
								editModal={editModal}
								editSetModal={editSetModal}
								addModal={addModal}
								addSetModal={addSetModal}
							/>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};
