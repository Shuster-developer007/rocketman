import Modal from 'react-modal';
import { useRef, useState } from 'react';
import { Radio } from 'antd';
import { api } from '../../API/api';

Modal.setAppElement('#root');

export const CategoryModal = ({
	addModal,
	addSetModal,
	editModal,
	editSetModal,
	getCategories,
}) => {
	const styledBtn = {
		position: 'absolute',
		top: 0,
		right: 0,
		backgroundColor: 'green',
		color: 'white',
	};
	const inputRef = useRef();
	const [value, setValue] = useState(false);

	const onChange = (e) => {
		setValue(e.target.value);
	};

	const categoryPost = async (category) => {
		const data = await api.postCategory(category);
		if (data.status === 201) {
			getCategories();
		}
	};

	const handleEdit = async (id, category) => {
		const newText = inputRef.current.value;
		value === 'on' ? true : false;
		if (newText !== '' && newText.trim()) {
			category.category_name = newText;
		}
		const data = await api.updateTodo(id, category);
		if (data.status === 200) {
			getCategories();
		}
	};

	const handleSubmit = (evt) => {
		evt.preventDefault();

		const data = {
			category_name: inputRef.current.value,
			status: value === 'on' ? true : false,
		};

		categoryPost(data);
		inputRef.current.value = '';
		addSetModal(false);
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
				<form action='' onSubmit={handleSubmit}>
					<h1>Qo’shish</h1>
					<p>Kategoriya nomi</p>
					<input
						ref={inputRef}
						className='rounded form-control'
						type='text'
						name='category'
						id='category'
						placeholder='masalan: texnika'
						required
					/>
					<p className='mt-4'>Holat</p>
					<Radio.Group onChange={onChange} value={value}>
						<Radio value={'on'}>on</Radio>
						<Radio value={'off'}>off</Radio>
					</Radio.Group>
					<button className='btn btn-dark mt-5 w-100' type='submit'>
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
