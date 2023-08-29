import { useRef, useState } from 'react';
import Modal from 'react-modal';
import { api } from '../../API/api';
import { Radio } from 'antd';
import './Modal.css';
import { toast } from 'react-toastify';

export const FastfoodModal = ({
	editModal,
	editSetModal,
	addModal,
	addSetModal,
	getSubCategories,
	id,
	Id,
	sub,
	setSub,
	setPhone,
	phone,
	setLong,
	long,
	setLang,
	lang,
	setLoc,
	loc,
}) => {
	const inputRef = useRef();
	const locInputRef = useRef();
	const phoneInputRef = useRef();
	const longInputRef = useRef();
	const langInputRef = useRef();
	const [value, setValue] = useState(false);

	const onChange = (e) => {
		setValue(e.target.value);
	};

	const subCategoryPost = async (subCategory) => {
		try {
			const data = await api.postSubCategory(subCategory);
			if (data.data?.status == 400 && data.data?.name == 'ValidationError') {
				toast("Iltimos ma'lumotlarni to'g'ri va to'liq to'ldiring", {
					type: 'warning',
				});
			}
			if (data.status === 201) {
				toast('Success created subcategory', { type: 'success' });
				getSubCategories();
			}
		} catch (error) {
			toast(error.response.data.message, { type: 'error' });
		}
	};

	const handleEdit = async () => {
		try {
			const body = {
				sub_category_name: sub,
				location: loc,
				long: long,
				lang: lang,
				phone: phone,
				status: value === 'on' ? true : false,
			};
			const { data } = await api.editSubCategory(Id, body);
			if (data?.status == 400 && data?.name == 'ValidationError') {
				toast("Iltimos ma'lumotlarni to'g'ri va to'liq to'ldiring", {
					type: 'warning',
				});
			}

			if (data.status === 202) {
				toast('Success updated subcategory', { type: 'success' });
				getSubCategories();
				editSetModal(false);
			}
		} catch (error) {
			toast('Subcategory update qilishda xatolik mavjud', { type: 'error' });
		}
	};

	const handleSubmit = (evt) => {
		evt.preventDefault();

		subCategoryPost({
			sub_category_name: inputRef.current.value,
			location: locInputRef.current.value,
			long: longInputRef.current.value,
			lang: langInputRef.current.value,
			phone: phoneInputRef.current.value,
			status: value === 'on' ? true : false,
			category: id,
		});
		inputRef.current.value = '';
		locInputRef.current.value = '';
		longInputRef.current.value = '';
		langInputRef.current.value = '';
		phoneInputRef.current.value = '';
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
						width: '600px',
						height: '550px',
						top: 0,
						right: 0,
						left: 0,
						bottom: 0,
						margin: 'auto',
						color: 'black',
						padding: '2rem 2rem'
					},
				}}
			>
				<div className=''>
					{' '}
					<h2>Tahrirlash</h2>
					<div className='d-flex align-items-center justify-content-between gap-5'>
						<span>
							{' '}
							<h5 className='mt-4'>Do’’kon nomi</h5>
							<input
								value={sub}
								onChange={(e) => setSub(e.target.value)}
								className='rounded mt-3 me-3 form-control'
								type='text'
								name='sub_category_name'
								id='sub_category_name'
								placeholder='Evos'
							/>
						</span>
						<span>
							{' '}
							<h5>Telefon raqami</h5>
							<input
								value={phone}
								onChange={(e) => setPhone(e.target.value)}
								className='rounded mt-3 form-control'
								type='text'
								name='phone'
								id='phone'
								placeholder='+998999999999'
							/>
						</span>
					</div>
					<div className='d-flex align-items-center justify-content-between  gap-5 mt-5'>
						<span>
							{' '}
							<h5>Long</h5>
							<input
								value={long}
								onChange={(e) => setLong(e.target.value)}
								className='rounded mt-3 me-3 form-control'
								type='text'
								name='long'
								id='long'
								placeholder='41.32554974771851|'
							/>
						</span>
						<span>
							{' '}
							<h5>Lang</h5>
							<input
								value={lang}
								onChange={(e) => setLang(e.target.value)}
								className='rounded mt-3 form-control'
								type='text'
								name='lang'
								id='lang'
								placeholder='41.32554974771851|'
							/>
						</span>
					</div>
					<div className='d-flex align-items-end  gap-5 mt-5'>
						<span>
							{' '}
							<h5>Manzil</h5>
							<input
								value={loc}
								onChange={(e) => setLoc(e.target.value)}
								className='rounded mt-3 me-4 form-control'
								type='text'
								name='loc'
								id='loc'
								placeholder='Qo’shtepa'
							/>
						</span>
						<div>
							<p className='m-0'>HOLAT</p>
							<Radio.Group onChange={onChange} value={value}>
								<Radio value={'on'}>on</Radio>
								<Radio value={'off'}>off</Radio>
							</Radio.Group>
						</div>
					</div>
					<div className='d-flex justify-content-center align-items-center'>
					<button
						className='btn btn-dark mt-5 w-100'
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
				<form onSubmit={handleSubmit}>
					{' '}
					<h1>Qo’shish</h1>
					<div className='d-flex align-items-center gap-5 mt-3'>
						<span>
							{' '}
							<h4>Do’’kon nomi</h4>
							<input
								ref={inputRef}
								className='rounded me-3 form-control'
								type='text'
								name='sub_category_name'
								id='sub_category_name'
								placeholder='Evos'
							/>
						</span>
						<span>
							{' '}
							<h4>Telefon raqami</h4>
							<input
								ref={phoneInputRef}
								className='rounded form-control'
								type='text'
								name='phone'
								id='phone'
								placeholder='+998999999999'
							/>
						</span>
					</div>
					<div className='d-flex align-items-center gap-5 mt-5'>
						<span>
							{' '}
							<h4>Long</h4>
							<input
								ref={longInputRef}
								className='rounded me-3 form-control'
								type='text'
								name='long'
								id='long'
								placeholder='41.32554974771851|'
							/>
						</span>
						<span>
							{' '}
							<h4>Lang</h4>
							<input
								ref={langInputRef}
								className='rounded form-control'
								type='text'
								name='lang'
								id='lang'
								placeholder='41.32554974771851|'
							/>
						</span>
					</div>
					<div className='d-flex align-items-end gap-5 mt-5'>
						<span>
							{' '}
							<h4>Manzil</h4>
							<input
								ref={locInputRef}
								className='rounded me-4 form-control'
								type='text'
								name='location'
								id='location'
								placeholder='Qo’shtepa'
							/>
						</span>
						<div>
							<p className='m-0'>HOLAT</p>
							<Radio.Group onChange={onChange} value={value}>
								<Radio value={'on'}>on</Radio>
								<Radio value={'off'}>off</Radio>
							</Radio.Group>
						</div>
					</div>
					<button className='btn btn-dark mt-5 ms-5 w-50' type='submit'>
						Qo’shish
					</button>
				</form>

				<button
					className='rounded-0 styledBtn'
					onClick={() => addSetModal(false)}
				>
					X
				</button>
			</Modal>
		</>
	);
};
