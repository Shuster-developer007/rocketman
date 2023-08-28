import { useRef, useState } from 'react';
import Modal from 'react-modal';
import { Radio } from 'antd';
import { api } from '../../API/api';
import './Modal.css';
import { toast } from 'react-toastify';

export const SModal = ({
	addModal,
	addSetModal,
	editModal,
	editSetModal,
	id,
	getProducts,
	oneId,
	setOneId,
}) => {
	const inputRef = useRef();
	const eInputRef = useRef();
	const [value, setValue] = useState(false);

	const onChange = (e) => {
		setValue(e.target.value);
	};

	const productPost = async (product) => {
		try {
			const data = await api.postProduct(product);
			if (data.data?.status == 400 && data.data?.name == 'ValidationError') {
				toast("Iltimos ma'lumotlarni to'g'ri va to'liq to'ldiring", {
					type: 'warning',
				});
			}
			if (data.status === 201) {
				toast('Success created product', { type: 'success' });
				getProducts();
			}
		} catch (error) {
			toast(error.response.data.message, { type: 'error' });
		}
	};

	const handleEdit = async () => {
		try {
			const body = {
				product_name: eInputRef.current.value,
				status: value === 'on' ? true : false,
			};
			const { data } = await api.editProduct(oneId._id, body);
			if (data?.status == 400 && data?.name == 'ValidationError') {
				toast("Iltimos ma'lumotlarni to'g'ri va to'liq to'ldiring", {
					type: 'warning',
				});
			}
			if (data.status === 202) {
				toast('Success updated product', { type: 'success' });
				getProducts();
				editSetModal(false);
			}
		} catch (error) {
			toast('Subcategory update qilishda xatolik mavjud', { type: 'error' });
		}
	};

	const handleSubmit = (evt) => {
		evt.preventDefault();

		productPost({
			product_name: inputRef.current.value,
			status: value === 'on' ? true : false,
			sub_category: id,
		});
		inputRef.current.value = '';
		addSetModal(false);
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
						width: '370px',
						height: '370px',
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
					{' '}
					<h1>Tahrirlash</h1>
					<p>Kategoriya nomi</p>
					<input
						ref={eInputRef}
						value={oneId.product_name}
						onChange={(e) => setOneId.product_name(e.target.value)}
						className='rounded form-control'
						type='text'
						name='product'
						id='product'
						placeholder='masalan: texnika'
					/>
					<p className='mt-4'>Holat</p>
					<Radio.Group onChange={onChange} value={value}>
						<Radio value={'on'}>on</Radio>
						<Radio value={'off'}>off</Radio>
					</Radio.Group>
					<button
						className='btn btn-dark mt-5 w-100'
						onClick={() => handleEdit()}
					>
						Saqlash
					</button>
				</div>
				<button
					className='btn btn-success rounded-0 styledBtn'
					onClick={() => editSetModal(false)}
				>
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
				<form onSubmit={handleSubmit}>
					<h1>Qo’shish</h1>
					<p>Kategoriya nomi</p>
					<input
						ref={inputRef}
						className='rounded form-control'
						type='text'
						name='product'
						id='product'
						placeholder='masalan: texnika'
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
				<button
					className='btn btn-success rounded-0 styledBtn'
					onClick={() => addSetModal(false)}
				>
					X
				</button>
			</Modal>
		</>
	);
};
