import { useRef, useState } from 'react';
import Modal from 'react-modal';
import MOCKIMAGE from '../../assets/images/300.png';
import { Radio } from 'antd';
import { api } from '../../API/api';
import './Modal.css';
import { toast } from 'react-toastify';

export const FoodModal = ({
	addModal,
	addSetModal,
	editModal,
	editSetModal,
	id,
	getSubProducts,
	oneId,
	setOneId,
}) => {
	const [value, setValue] = useState(false);
	const onChange = (e) => {
		setValue(e.target.value);
	};

	const inputRef = useRef();
	const eInputRef = useRef();
	const descRef = useRef();
	const eDescRef = useRef();
	const priceRef = useRef();
	const ePriceRef = useRef();
	const linkRef = useRef();
	const eLinkRef = useRef();

	const subProductPost = async (subProduct) => {
		try {
			const data = await api.postSubProduct(subProduct);
			console.log(data);

			if (data.data?.status == 400 && data.data?.name == 'ValidationError') {
				toast("Iltimos ma'lumotlarni to'g'ri va to'liq to'ldiring", {
					type: 'warning',
				});
			}

			if (data.status === 201) {
				toast('Success created subproduct', { type: 'success' });
				getSubProducts();
			}
		} catch (error) {
			toast(error.response.data.message, { type: 'error' });
		}
	};

	const handleEdit = async () => {
		try {
			const body = {
				sub_product_name: eInputRef.current.value,
				description: eDescRef.current.value,
				status: value === 'on' ? true : false,
				price: +ePriceRef.current.value,
				image: eLinkRef.current.value,
			};
			const { data } = await api.editSubProduct(oneId._id, body);
			console.log(data);
			if (data?.status == 400 && data?.name == 'ValidationError') {
				toast("Iltimos ma'lumotlarni to'g'ri va to'liq to'ldiring", {
					type: 'warning',
				});
			}
			if (data.status === 202) {
				toast('Success updated subproduct', { type: 'success' });
				getSubProducts();
				editSetModal(false);
			}
		} catch (error) {
			toast('Subproduct update qilishda xatolik mavjud', { type: 'error' });
		}
	};

	const handleSubmit = (evt) => {
		evt.preventDefault();

		subProductPost({
			sub_product_name: inputRef.current.value,
			description: descRef.current.value,
			status: value === 'on' ? true : false,
			price: +priceRef.current.value,
			image: linkRef.current.value,
			product: id,
		});

		inputRef.current.value = '';
		descRef.current.value = '';
		priceRef.current.value = '';
		linkRef.current.value = '';
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
						width: '800px',
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
				<div className='d-flex align-items-center gap-5'>
					<div className=''>
						<img
							src={oneId.image}
							className='rounded'
							alt='MOCK IMAGE'
							width={200}
							height={300}
						/>
					</div>

					<div className='d-flex align-items-center p-3 gap-3'>
						<div className='d-flex flex-column'>
							{' '}
							<span>
								{' '}
								<span className='d-flex flex-column mt-4'>
									<label htmlFor='product'>Tovar nomi</label>
									<input
										ref={eInputRef}
										value={oneId.sub_product_name}
										onChange={(e) => setOneId.sub_product_name(e.target.value)}
										type='text'
										className='rounded form-control'
										name='product'
										id='product'
										placeholder='masalan: Lavash Big'
									/>
								</span>
								<span className='d-flex flex-column mt-4'>
									<label htmlFor='price'>Narxi</label>
									<input
										ref={ePriceRef}
										value={oneId.price}
										onChange={(e) => setOneId.price(e.target.value)}
										type='text'
										className='rounded form-control'
										name='price'
										id='price'
										placeholder='masalan: 20 000'
									/>
								</span>
							</span>
							<span>
								<p className='mt-4'>Holat</p>
								<Radio.Group onChange={onChange} value={value}>
									<Radio value={'on'}>on</Radio>
									<Radio value={'off'}>off</Radio>
								</Radio.Group>
							</span>
						</div>
						<div className='d-flex flex-column gap-5'>
							{' '}
							<span>
								{' '}
								<span className='d-flex flex-column mt-4'>
									<label htmlFor='product'>Ma’lumot</label>
									<input
										ref={eDescRef}
										value={oneId.description}
										onChange={(e) => setOneId.description(e.target.value)}
										type='text'
										className='rounded form-control'
										name='product'
										id='product'
										placeholder='info...'
									/>
								</span>
								<span className='d-flex flex-column mt-4'>
									<label htmlFor='price'>Rasmga link</label>
									<input
										ref={eLinkRef}
										value={oneId.image}
										onChange={(e) => setOneId.image(e.target.value)}
										type='text'
										className='rounded form-control'
										name='price'
										id='price'
										placeholder='type the link here'
									/>
								</span>
							</span>
							<button
								className='btn btn-dark'
								type='submit'
								onClick={() => handleEdit()}
							>
								Saqlash
							</button>
						</div>
					</div>

					<button className='styledBtn' onClick={() => editSetModal(false)}>
						X
					</button>
				</div>
			</Modal>

			<Modal
				isOpen={addModal}
				onRequestClose={() => addSetModal(false)}
				style={{
					overlay: {
						backgroundColor: 'rgba(0,0,0,0.4)',
					},
					content: {
						width: '800px',
						height: '350px',
						top: 0,
						right: 0,
						left: 0,
						bottom: 0,
						margin: 'auto',
						color: 'black',
					},
				}}
			>
				<form
					className='d-flex align-items-center gap-5'
					onSubmit={handleSubmit}
				>
					<div>
						<img src={MOCKIMAGE} alt='MOCK IMAGE' width={300} height={300} />
					</div>
					<div className='d-flex align-items-center p-3 gap-3'>
						<div className='d-flex flex-column'>
							{' '}
							<span>
								{' '}
								<span className='d-flex flex-column mt-4'>
									<label htmlFor='product'>Tovar nomi</label>
									<input
										ref={inputRef}
										type='text'
										className='rounded form-control'
										name='product'
										id='product'
										placeholder='masalan: Lavash Big'
									/>
								</span>
								<span className='d-flex flex-column mt-4'>
									<label htmlFor='price'>Narxi</label>
									<input
										ref={priceRef}
										type='text'
										className='rounded form-control'
										name='price'
										id='price'
										placeholder='masalan: 20 000'
									/>
								</span>
							</span>
							<span>
								<p className='mt-4'>Holat</p>
								<Radio.Group onChange={onChange} value={value}>
									<Radio value={'on'}>on</Radio>
									<Radio value={'off'}>off</Radio>
								</Radio.Group>
							</span>
						</div>
						<div className='d-flex flex-column gap-5'>
							{' '}
							<span>
								{' '}
								<span className='d-flex flex-column mt-4'>
									<label htmlFor='product'>Ma’lumot</label>
									<input
										ref={descRef}
										type='text'
										className='rounded form-control'
										name='product'
										id='product'
										placeholder='info...'
									/>
								</span>
								<span className='d-flex flex-column mt-4'>
									<label htmlFor='price'>Rasmga link</label>
									<input
										ref={linkRef}
										type='text'
										className='rounded form-control'
										name='price'
										id='price'
										placeholder='type the link here'
									/>
								</span>
							</span>
							<button className='btn btn-dark' type='submit'>
								Qo’shish
							</button>
						</div>
					</div>

					<button className='styledBtn' onClick={() => addSetModal(false)}>
						X
					</button>
				</form>
			</Modal>
		</>
	);
};
