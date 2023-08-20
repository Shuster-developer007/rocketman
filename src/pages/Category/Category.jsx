import { Link } from 'react-router-dom';
import './Category.css';
import { GrEdit } from 'react-icons/gr';
import { BtnSlider } from '../../components/BtnSlider';
import { useState } from 'react';
import RModal from 'react-modal';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
RModal.setAppElement('#root');

export const Category = () => {
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
			category: 'Git hub uchun uzgarish',
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

	return (
		<>
			<Sidebar />
			<div className="ummumiy">
				<Header />
				<section className="py-4">
					<div className="container px-4">
						<button
							className='btn btn-success categoryBtn'
							onClick={() => rsetModal(true)}
						>
							Qo’shish +
						</button>
						<div className='category mt-3'>
							<ul className='category-list'>
								<li className='category-item'>
									<h3>KATEGORIYA</h3>
									<h3>DO'KONLAR</h3>
									<h3>TAHRIRLASH</h3>
									<h3>STATUS</h3>
								</li>
								{obj.map((item) => (
									<li key={item.id} className='Item'>
										<Link to={'fastfood'} className='Item-link'>
											<p className='Item-text'>{item.category}</p>
										</Link>
										<p className='Item-text'>{item.markets}</p>
										<p className='Item-text'>
											<button className='btn' onClick={() => edSetModal(true)}>
												<GrEdit color='green' size={20} />
											</button>
										</p>
										<p className='Item-text'>
											<BtnSlider isComplated={item.isComplated} />
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
										width: '300px',
										height: '300px',
										top: 0,
										right: 0,
										left: 0,
										bottom: 0,
										margin: 'auto',
										color: 'black',
									},
								}}
							>
								<h1>Tahrirlash</h1>
								<p>Kategoriya nomi</p>
								<input
									className='rounded'
									type='text'
									name=''
									id=''
									placeholder='masalan: texnika'
								/>
								<p className='mt-4'>Holat</p>
								<span className='me-4 fs-5'>
									<input type='radio' name='status' id='' />
									on
								</span>
								<span className='fs-5'>
									<input type='radio' name='status' id='' />
									off
								</span>
								<button style={styledBtn} onClick={() => edSetModal(false)}>
									X
								</button>
							</RModal>
							<RModal
								isOpen={rmodal}
								onRequestClose={() => rsetModal(false)}
								style={{
									overlay: {
										backgroundColor: 'rgba(0,0,0,0.4)',
									},
									content: {
										width: '300px',
										height: '300px',
										top: 0,
										right: 0,
										left: 0,
										bottom: 0,
										margin: 'auto',
										color: 'black',
									},
								}}
							>
								<h1>Qo’shish</h1>
								<p>Kategoriya nomi</p>
								<input
									className='rounded'
									type='text'
									name=''
									id=''
									placeholder='masalan: texnika'
								/>
								<p className='mt-4'>Holat</p>
								<span className='me-4 fs-5'>
									<input type='radio' name='status' id='' />
									on
								</span>
								<span className='fs-5'>
									<input type='radio' name='status' id='' />
									off
								</span>
								<button style={styledBtn} onClick={() => rsetModal(false)}>
									X
								</button>
							</RModal>
						</div>
					</div>
				</section>
			</div>

		</>
	);
};
