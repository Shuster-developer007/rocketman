import React, { useEffect, useRef, useState } from 'react';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import SettingsLinks from '../../components/SettingsLinks';
import '../../styles/Settings/SettingUsers.css';
import { api } from '../../API/api';
import { toast } from 'react-toastify';

const SettingsUsers = () => {
	const [data, setData] = useState([]);
	const [admin_id, setId] = useState('');
	const [loading, setLoading] = useState(false);
	const [admin, setAdmin] = useState({});
	const editUsernameRef = useRef();
	const editPasswordRef = useRef();
	const usernameRef = useRef();
	const passwordRef = useRef();

	const getOneAdmin = async (id) => {
		try {
			setId(id);
			const { data } = await api.getOneAdmin(id);
			setAdmin(data);
		} catch (error) {
			console.log(error);
		}
	};

	const handleUpdateAdmin = async () => {
		try {
			const body = {
				username: editUsernameRef.current.value,
				password: editPasswordRef.current.value,
			};
			const { data } = await api.editAdmin(admin_id, body);
			if (data.status == 400 && data.name == 'ValidationError') {
				toast("Iltimos ma'lumotlarni to'g'ri to'ldiring", { type: 'warning' });
			}
			if (data?.status == 202) {
				getAdmins();
				toast('Success updated admin', { type: 'success' });
			}
		} catch (error) {
			console.log(error);
		}
	};

	const getAdmins = async () => {
		try {
			setLoading(true);
			const { data } = await api.getAdmins();
			setData(data);
		} catch (error) {
			console.log(error.message);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		getAdmins();
	}, []);

	const handleDeleteAdmin = async (id) => {
		try {
			setLoading(true);
			const { data } = await api.deleteAdmin(id);
			toast('Success deleted admin', { type: 'success' });
			getAdmins();
		} catch (error) {
		} finally {
			setLoading(false);
		}
	};

	const handleCreateAdmin = async (event) => {
		try {
			event.preventDefault();
			const createAdmin = {
				username: usernameRef.current.value,
				password: passwordRef.current.value,
				role: 'admin',
			};
			const { data } = await api.createAdmin(createAdmin);
			if ((data?.status == 400, data?.name == 'ValidationError')) {
				toast("Iltimos ma'lumotlarni to'liq va to'gri kirgizing", {
					type: 'warning',
				});
			}
			if (data.status == 201) {
				toast('Success created admin', { type: 'success' });
			}
			getAdmins();
		} catch (error) {
			toast(error.response.data.message, { type: 'error' });
		}
	};

	return (
		<div>
			<Sidebar />
			<div className='ummumiy'>
				<Header />
				<div
					className='modal fade'
					id='exampleModal'
					tabIndex='-1'
					aria-labelledby='exampleModalLabel'
					aria-hidden='true'
				>
					<div className='modal-dialog'>
						<div className='modal-content'>
							<div className='modal-header'>
								<h1 className='modal-title fs-5' id='exampleModalLabel'>
									Qo'shish
								</h1>
								<button
									type='button'
									className='btn-close'
									data-bs-dismiss='modal'
									aria-label='Close'
								></button>
							</div>
							<div className='modal-body'>
								<form action='' onSubmit={handleCreateAdmin}>
									<label htmlFor='admin_name' className='my-3'>
										Username
									</label>
									<input
										type='text'
										ref={usernameRef}
										className='form-control'
										placeholder='admin_name'
										id='admin_name'
										name='admin_name'
									/>
									<label htmlFor='password' className=' my-3'>
										Password
									</label>
									<input
										ref={passwordRef}
										type='password'
										className='form-control'
										placeholder='password'
									/>
									<div className='modal-footer d-flex justify-content-center align-items-center p-0 mt-4'>
										<button className='btn_modal m-0'>Submit</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
				<div
					className='modal fade'
					id='editUserModal'
					tabIndex='-1'
					aria-labelledby='exampleModalLabel'
					aria-hidden='true'
				>
					<div className='modal-dialog'>
						<div className='modal-content'>
							<div className='modal-header'>
								<h1 className='modal-title fs-5' id='exampleModalLabel'>
									Tahrirlash
								</h1>
								<button
									type='button'
									className='btn-close'
									data-bs-dismiss='modal'
									aria-label='Close'
								></button>
							</div>
							<div className='modal-body'>
								<form action=''>
									<label htmlFor='admin_name' className='my-3'>
										Username
									</label>
									<input
										type='text'
										ref={editUsernameRef}
										className='form-control'
										defaultValue={admin.username}
										placeholder='admin_name'
										id='admin_name'
										name='admin_name'
									/>
									<label htmlFor='password' className=' my-3'>
										Password
									</label>
									<input
										ref={editPasswordRef}
										defaultValue={admin.password}
										type='password'
										className='form-control'
										placeholder='password'
									/>
								</form>
							</div>
							<div className='modal-footer d-flex justify-content-center align-items-center'>
								<button
									onClick={() => handleUpdateAdmin()}
									className='btn_modal'
								>
									Submit
								</button>
							</div>
						</div>
					</div>
				</div>
				<section className='py-4'>
					<div className='container px-4'>
						<div className='d-flex justify-content-center'>
							<SettingsLinks />
						</div>
						<div className='thor mt-5'>
							{loading ? <h2>Loading</h2> : <h2>Available users</h2>}
							<div className='setting_card_users'>
								{data?.data?.map((item, index) => (
									<div
										key={item._id}
										className='user_setting d-flex justify-content-between'
									>
										<div>
											<h6>
												{index + 1}.{item.username}
											</h6>
										</div>
										<div className='d-flex gap-3'>
											<div
												onClick={() => getOneAdmin(item._id)}
												className='setting_icon_edit'
												data-bs-toggle='modal'
												data-bs-target='#editUserModal'
											>
												<i className='fa-solid fa-marker text-white'></i>
											</div>
											<div
												onClick={() => handleDeleteAdmin(item._id)}
												className='setting_icon_delete'
											>
												<i className='fa-solid fa-trash text-white'></i>
											</div>
										</div>
									</div>
								))}
							</div>
							<div className='d-flex justify-content-end'>
								<button
									type='button'
									className='btn-add mt-3 d-flex gap-2 justify-content-center align-items-center'
									data-bs-toggle='modal'
									data-bs-target='#exampleModal'
								>
									Qo'shish
									<div className='added_border'>
										<i className='fa-solid fa-plus plus_icon'></i>
									</div>
								</button>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default SettingsUsers;
