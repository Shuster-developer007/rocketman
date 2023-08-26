import { Link } from 'react-router-dom';
import './Category.css';
import { GrEdit } from 'react-icons/gr';
import { BtnSlider } from '../../components/BtnSlider';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import { useState } from 'react';
import { CategoryModal } from '../../components/Modal/categoryModal';
import React_Skeleton from '../../components/React_Skeleton/React_Skeleton';
import { api } from '../../API/api';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../../redux/category/categoryAction';

export const Category = () => {
	const [addModal, addSetModal] = useState(false);
	const [editModal, editSetModal] = useState(false);

	const dispatch = useDispatch();
	const categories = useSelector((state) => state.category.category);

	const getCategories = async () => {
		const data = await api.getCategories();
		if (data.status === 200) {
			dispatch(setCategory(data.data.data));
		}
	};

	useEffect(() => {
		getCategories();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

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
									{categories.length ? (
										categories.map((item) => (
											<tr key={item._id} className='table-borderless'>
												<th scope='row' className='jg text-center'>
													<Link
														to={`${item._id}`}
														className='Item-link text-decoration-none text-dark'
													>
														{item.category_name}
													</Link>
												</th>
												<td className='jg text-center'>
													{item.subCategories.length}
												</td>
												<td className='jg text-center'>
													<button
														className='btn'
														onClick={() => editSetModal(true)}
													>
														<GrEdit color='green' size={20} />
													</button>
												</td>
												<td className='jg text-center'>
													<BtnSlider status={item.status} />
												</td>
											</tr>
										))
									) : (
										<tr>
											{title.map((el, i) => (
												// eslint-disable-next-line react/jsx-key
												<td key={i}>
													<React_Skeleton />
												</td>
											))}
										</tr>
									)}
								</tbody>
							</table>
							<CategoryModal
								getCategories={getCategories}
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
