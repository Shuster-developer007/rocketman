/* eslint-disable react/no-unknown-property */
// import { Item } from '../../components/Item';
import { Link, useParams } from 'react-router-dom';
import './Food.css';
import { GrEdit } from 'react-icons/gr';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import { useState } from 'react';
import { FoodModal } from '../../components/Modal/foodModal';
import React_Skeleton from '../../components/React_Skeleton/React_Skeleton';
import { api } from '../../API/api';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSubProduct } from '../../redux/subProduct/subProductAction';

export const Food = () => {
	const [addModal, addSetModal] = useState(false);
	const [editModal, editSetModal] = useState(false);

	const { id } = useParams();
	const dispatch = useDispatch();
	const subProducts = useSelector((state) => state.subProduct.subProduct);
	console.log(subProducts);

	const getSubProducts = async () => {
		const data = await api.getSubProducts(id);
		console.log(data);
		if (data.status === 200) {
			dispatch(setSubProduct(data.data.data));
		}
	};

	useEffect(() => {
		getSubProducts();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const title = ['ID', 'TOVAR', "MA'LUMOT", 'NARXI', 'HOLAT', 'TAHRIRLASH'];

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
										{title.map((el, i) => (
											// eslint-disable-next-line react/jsx-key
											<th key={i} scope='col' className='jg text-center'>
												{el}
											</th>
										))}
									</tr>
								</thead>
								<tbody className=''>
									{subProducts.length ? (
										subProducts.map((item) => (
											<tr key={item._id} className='table-borderless'>
												<th scope='row' className='jg text-center'>
													{item.id}
												</th>
												<td scope='row' className='jg text-center'>
													<Link
														to={'#'}
														className='Item-link text-decoration-none text-dark w-50'
													>
														{item.sub_product_name}
													</Link>
												</td>
												<td className='jg text-center w-50'>{item.description}</td>
												<td className='jg text-center'>{item.price}</td>
												<td className='jg text-center'>
													{item.status == true ? (
														<div className='d-flex justify-content-center align-items-center'>
															<div className='enabled d-flex align-items-center justify-content-center'>
																enabled
															</div>
														</div>
													) : (
														<div className='d-flex justify-content-center align-items-center '>
															<div className='disabled text-danger justify-content-center align-items-center d-flex'>
																disabled
															</div>
														</div>
													)}
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
							<FoodModal
								id={id}
								getSubProducts={getSubProducts}
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
