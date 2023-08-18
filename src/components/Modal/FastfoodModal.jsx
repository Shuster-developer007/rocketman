import Modal from 'react-modal';

export const FastfoodModal = ({
	editModal,
	editSetModal,
	addModal,
	addSetModal,
}) => {
	const styledBtn = {
		position: 'absolute',
		top: 0,
		right: 0,
		backgroundColor: 'green',
		color: 'white',
	};
	return (
		<>
			{' '}
			<Modal
				isOpen={editModal}
				onRequestClose={() => editSetModal(false)}
				style={{
					overlay: {
						backgroundColor: 'rgba(0,0,0,0.4)',
					},
					content: {
						width: '600px',
						height: '550px',
						top: 0,
						right: 0,
						left: 0,
						bottom: 0,
						margin: 'auto',
						color: 'black',
					},
				}}
			>
				<form action='' className='ps-5'>
					{' '}
					<h1>Tahrirlash</h1>
					<div className='d-flex align-items-center gap-5'>
						<span>
							{' '}
							<h4>Do’’kon nomi</h4>
							<input
								className='rounded me-3 form-control'
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
								className='rounded form-control'
								type='text'
								name=''
								id=''
								placeholder='+998999999999'
							/>
						</span>
					</div>
					<div className='d-flex align-items-center gap-5 mt-5'>
						<span>
							{' '}
							<h4>Long</h4>
							<input
								className='rounded me-3 form-control'
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
								className='rounded form-control'
								type='text'
								name=''
								id=''
								placeholder='41.32554974771851|'
							/>
						</span>
					</div>
					<div className='d-flex align-items-end gap-5 mt-5'>
						<span>
							{' '}
							<h4>Manzil</h4>
							<input
								className='rounded me-4 form-control'
								type='text'
								name=''
								id=''
								placeholder='Qo’shtepa'
							/>
						</span>
						<div>
							<p className='m-0'>HOLAT</p>
							<span className='me-4 fs-5'>
								<input
									type='radio'
									className='form-check-input'
									name='status'
									id=''
								/>
								on
							</span>
							<span className='fs-5'>
								<input
									type='radio'
									className='form-check-input'
									name='status'
									id=''
								/>
								off
							</span>
						</div>
					</div>
					<button
						className='btn btn-dark mt-5 ms-5 w-50'
						onClick={() => editSetModal(false)}
					>
						Saqlash
					</button>
				</form>

				<button style={styledBtn} onClick={() => editSetModal(false)}>
					X
				</button>
			</Modal>
			<Modal
				isOpen={addModal}
				onRequestClose={() => addSetModal(false)}
				style={{
					overlay: {
						backgroundColor: 'rgba(0,0,0,0.4)',
					},
					content: {
						width: '600px',
						height: '550px',
						top: 0,
						right: 0,
						left: 0,
						bottom: 0,
						margin: 'auto',
						color: 'black',
					},
				}}
			>
				<form action=''>
					{' '}
					<h1>Qo’shish</h1>
					<div className='d-flex align-items-center gap-5 mt-3'>
						<span>
							{' '}
							<h4>Do’’kon nomi</h4>
							<input
								className='rounded me-3 form-control'
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
								className='rounded form-control'
								type='text'
								name=''
								id=''
								placeholder='+998999999999'
							/>
						</span>
					</div>
					<div className='d-flex align-items-center gap-5 mt-5'>
						<span>
							{' '}
							<h4>Long</h4>
							<input
								className='rounded me-3 form-control'
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
								className='rounded form-control'
								type='text'
								name=''
								id=''
								placeholder='41.32554974771851|'
							/>
						</span>
					</div>
					<div className='d-flex align-items-end gap-5 mt-5'>
						<span>
							{' '}
							<h4>Manzil</h4>
							<input
								className='rounded me-4 form-control'
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
						onClick={() => addSetModal(false)}
					>
						Qo’shish
					</button>
				</form>

				<button
					className='rounded-0'
					style={styledBtn}
					onClick={() => addSetModal(false)}
				>
					X
				</button>
			</Modal>
		</>
	);
};
