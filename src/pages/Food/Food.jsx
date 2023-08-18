/* eslint-disable react/no-unknown-property */
// import { Item } from '../../components/Item';
import { Link } from 'react-router-dom';
import './Food.css';
import { GrEdit } from 'react-icons/gr';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import { useState } from 'react';
import { FoodModal } from '../../components/Modal/foodModal';

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
							<FoodModal
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
