import { Link } from 'react-router-dom';
import './SinglePage.css';
import { GrEdit } from 'react-icons/gr';
import { useState } from 'react';
import RModal from 'react-modal';
RModal.setAppElement('#root');

export const SinglePage = () => {
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
			<button
				className='btn btn-success categoryBtn'
				onClick={() => rsetModal(true)}
			>
				Qo’shish +
			</button>
			<div className='category mt-5'>
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
								<button className='btn' onClick={() => edSetModal(true)}>
									<GrEdit color='green' size={20} />
								</button>
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
		</>
	);
};
