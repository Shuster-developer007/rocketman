import Modal from 'react-modal';
import { useRef, useState } from 'react';
import { Radio } from 'antd';
import { api } from '../../API/api';
import './Modal.css';
import { toast } from 'react-toastify';

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
	const [value, setValue] = useState(1);
	const onChange = (e) => {
		setValue(e.target.value);
	};

	const categoryPost = async (category) => {
		try {
			const data = await api.postCategory(category);
			console.log(data);
			if (data.data?.status == 400 && data.data?.name == 'ValidationError') {
				toast("Iltimos ma'lumotlarni to'g'ri va to'liq to'ldiring", {
					type: 'warning',
				});
			}
			if (data.status === 201) {
				toast('Success created category', { type: 'success' });
				getCategories();
			}
		} catch (error) {
			toast(error.response.data.message, { type: 'error' });
		}
	};

	const handleEdit = async () => {
		try {
			const body = {
				category_name: editInputRef.current.value,
				status: value === 'on' ? true : false,
			};
			const { data } = await api.editCategory(oneId._id, body);
			console.log(data);
			if (data?.status == 400 && data?.name == 'ValidationError') {
				toast("Iltimos ma'lumotlarni to'g'ri va to'liq to'ldiring", {
					type: 'warning',
				});
			}
			if (data.status === 202) {
				toast('Success updated driver', { type: 'success' });
				getCategories();
				editSetModal(false);
			}
		} catch (error) {
			toast('Category update qilishda xatolik mavjud', { type: 'error' });
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
						defaultValue={oneId.category_name}
						className='rounded form-control'
						type='text'
						name='category'
						id='category'
						placeholder='masalan: texnika'
					/>
					<p className='mt-4'>Holat</p>
					<Radio.Group onChange={onChange} value={value}>
						<Radio value={1}>on</Radio>
						<Radio value={2}>off</Radio>
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
