import Modal from 'react-modal';
import { useRef, useState } from 'react';
import { Radio } from 'antd';
import { api } from '../../API/api';
import './Modal.css';

Modal.setAppElement('#root');

export const CategoryModal = ({
	addModal,
	addSetModal,
	editModal,
	editSetModal,
	getCategories,
	oneId,
}) => {
	const inputRef = useRef();
	const editInputRef = useRef();
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

	const handleEdit = async () => {
		const body = {
			category_name: editInputRef.current.value,
			status: value === 'on' ? true : false,
		};
		const { data } = await api.editCategory(oneId, body);
		if (data.status === 202) {
			getCategories();
			editSetModal(false);
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
				<div>
					<h1>Tahrirlash</h1>
					<p>Kategoriya nomi</p>
					<input
						ref={editInputRef}
						className='rounded form-control'
						type='text'
						name='category'
						id='category'
						placeholder='masalan: texnika'
					/>
					<p className='mt-4'>Holat</p>
					<Radio.Group onChange={onChange} value={value}>
						<Radio value={'on'}>on</Radio>
						<Radio value={'off'}>off</Radio>
					</Radio.Group>
					<button
						className='btn btn-dark mt-5 w-100'
						type='submit'
						onClick={() => handleEdit()}
					>
						Saqlash
					</button>
				</div>
				<button className='styledBtn' onClick={() => editSetModal(false)}>
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
				<button className='styledBtn' onClick={() => addSetModal(false)}>
					X
				</button>
			</Modal>
		</>
	);
};
