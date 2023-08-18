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
							<ul className='category-list'>
								<li className='category-item'>
									<h3>ID</h3>
									<h3>TOVAR</h3>
									<h3>TOVAR SONI</h3>
									<h3>TAHRIRLASH</h3>
									<h3>STATUS</h3>
								</li>
								{obj.map((item) => (
									<li key={item.id} className='Item'>
										<p>{item.id}</p>
										<Link to={'' + item.name} className='Item-link'>
											<p className='Item-text'>{item.name}</p>
										</Link>
										<p className='Item-text'>{item.count}</p>
										<p className='Item-text'>{item.isActive}</p>
										<p className='Item-text'>
											<button
												className='btn'
												onClick={() => editSetModal(true)}
											>
												<GrEdit color='green' size={20} />
											</button>
										</p>
									</li>
								))}
							</ul>
							<SModal
								addModal={addModal}
								addSetModal={addSetModal}
								editModal={editModal}
								editSetModal={editSetModal}
							/>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};
