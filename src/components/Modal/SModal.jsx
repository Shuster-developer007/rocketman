import { useRef, useState } from 'react';
import Modal from 'react-modal';
import { Radio } from 'antd';
import { api } from '../../API/api';

export const SModal = ({
	addModal,
	addSetModal,
	editModal,
	editSetModal,
	id,
	getProducts,
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

	const productPost = async (product) => {
		const data = await api.postProduct(product);
		console.log(data);
		if (data.status === 201) {
			getProducts();
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
				<Radio.Group onChange={onChange} value={value}>
					<Radio value={'on'}>on</Radio>
					<Radio value={'off'}>off</Radio>
				</Radio.Group>
				<button
					className='btn btn-dark mt-5 w-100'
					onClick={() => addSetModal(false)}
				>
					Qo’shish
				</button>
				<button
					className='btn btn-success rounded-0'
					style={styledBtn}
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
					className='btn btn-success rounded-0'
					style={styledBtn}
					onClick={() => addSetModal(false)}
				>
					X
				</button>
			</Modal>
		</>
	);
};
