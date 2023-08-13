// import { Item } from '../../components/Item';
import { Link } from 'react-router-dom';
import './FastFood.css';
import { GrEdit } from 'react-icons/gr';
import { useState } from 'react';
import RModal from 'react-modal';
RModal.setAppElement('#root');

export const FastFood = () => {
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
							width: '500px',
							height: '500px',
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
					<div className='d-flex align-items-center'>
						<span>
							{' '}
							<h4>Do’’kon nomi</h4>
							<input
								className='rounded me-3'
								type='text'
								name=''
								id=''
								placeholder='Evos'
							/>
						</span>
						<span>
							{' '}
							<h4>Telefon raqami</h4>
							<input
								className='rounded'
								type='text'
								name=''
								id=''
								placeholder='+998999999999'
							/>
						</span>
					</div>
					<div className='d-flex align-items-center mt-5'>
						<span>
							{' '}
							<h4>Long</h4>
							<input
								className='rounded me-3'
								type='text'
								name=''
								id=''
								placeholder='41.32554974771851|'
							/>
						</span>
						<span>
							{' '}
							<h4>Lang</h4>
							<input
								className='rounded'
								type='text'
								name=''
								id=''
								placeholder='41.32554974771851|'
							/>
						</span>
					</div>
					<div className='d-flex align-items-end mt-5'>
						<span>
							{' '}
							<h4>Manzil</h4>
							<input
								className='rounded me-4'
								type='text'
								name=''
								id=''
								placeholder='Qo’shtepa'
							/>
						</span>
						<div>
							<p className='m-0'>HOLAT</p>
							<span className='me-4 fs-5'>
								<input type='radio' name='status' id='' />
								on
							</span>
							<span className='fs-5'>
								<input type='radio' name='status' id='' />
								off
							</span>
						</div>
					</div>
					<button
						className='btn btn-dark mt-5 ms-5 w-50'
						onClick={() => edSetModal(false)}
					>
						Saqlash
					</button>

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
							width: '500px',
							height: '500px',
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
					<div className='d-flex align-items-center'>
						<span>
							{' '}
							<h4>Do’’kon nomi</h4>
							<input
								className='rounded me-3'
								type='text'
								name=''
								id=''
								placeholder='Evos'
							/>
						</span>
						<span>
							{' '}
							<h4>Telefon raqami</h4>
							<input
								className='rounded'
								type='text'
								name=''
								id=''
								placeholder='+998999999999'
							/>
						</span>
					</div>
					<div className='d-flex align-items-center mt-5'>
						<span>
							{' '}
							<h4>Long</h4>
							<input
								className='rounded me-3'
								type='text'
								name=''
								id=''
								placeholder='41.32554974771851|'
							/>
						</span>
						<span>
							{' '}
							<h4>Lang</h4>
							<input
								className='rounded'
								type='text'
								name=''
								id=''
								placeholder='41.32554974771851|'
							/>
						</span>
					</div>
					<div className='d-flex align-items-end mt-5'>
						<span>
							{' '}
							<h4>Manzil</h4>
							<input
								className='rounded me-4'
								type='text'
								name=''
								id=''
								placeholder='Qo’shtepa'
							/>
						</span>
						<div>
							<p className='m-0'>HOLAT</p>
							<span className='me-4 fs-5'>
								<input type='radio' name='status' id='' />
								on
							</span>
							<span className='fs-5'>
								<input type='radio' name='status' id='' />
								off
							</span>
						</div>
					</div>
					<button
						className='btn btn-dark mt-5 ms-5 w-50'
						onClick={() => rsetModal(false)}
					>
						Qo’shish
					</button>

					<button style={styledBtn} onClick={() => rsetModal(false)}>
						X
					</button>
				</RModal>
			</div>
		</>
	);
};
