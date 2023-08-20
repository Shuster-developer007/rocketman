import Modal from 'react-modal';
Modal.setAppElement('#root');

export const CategoryModal = ({
	addModal,
	addSetModal,
	editModal,
	editSetModal,
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
			<Modal
				isOpen={editModal}
				onRequestClose={() => editSetModal(false)}
				style={{
					overlay: {
						backgroundColor: 'rgba(0,0,0,0.4)',
					},
					content: {
						width: '400px',
						height: '400px',
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
					<h1>Tahrirlash</h1>
					<p>Kategoriya nomi</p>
					<input
						className='rounded form-control'
						type='text'
						name=''
						id=''
						placeholder='masalan: texnika'
					/>
					<p className='mt-4'>Holat</p>
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
					<button
						className='btn btn-dark mt-5 w-100'
						onClick={() => editSetModal(false)}
					>
						Qo’shish
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
						width: '400px',
						height: '400px',
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
					<h1>Qo’shish</h1>
					<p>Kategoriya nomi</p>
					<input
						className='rounded form-control'
						type='text'
						name=''
						id=''
						placeholder='masalan: texnika'
					/>
					<p className='mt-4'>Holat</p>
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
					<button
						className='btn btn-dark mt-5 w-100'
						onClick={() => addSetModal(false)}
					>
						Qo’shish
					</button>
				</form>
				<button style={styledBtn} onClick={() => addSetModal(false)}>
					X
				</button>
			</Modal>
		</>
	);
};
