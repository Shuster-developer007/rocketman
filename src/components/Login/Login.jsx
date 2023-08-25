import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Logo } from '../../assets/images';
import './Login.css';

export const Login = () => {
	const initialValues = {
		email: '',
		password: '',
	};
	const onSubmit = (values) => {
		console.log(values);
	};

	const validationSchema = Yup.object({
		email: Yup.string()
			.email('Invalid format your email')
			.required('Required!'),
		password: Yup.string()
			.min(3, 'Password must be longer then 3')
			.max(8, 'Password must be shorter then 8')
			.required('Required!'),
	});

	return (
		<div className='container w-25 mx-auto'>
			<span className='d-block text-center mt-5'>
				<Logo />
			</span>
			<div className='my-5 p-5 shadow login-form'>
				<h1 className='text-center logo-title'>Kirish</h1>
				<Formik
					onSubmit={onSubmit}
					initialValues={initialValues}
					validationSchema={validationSchema}
				>
					<Form className='position-relative'>
						<div className='mb-4 loginIcon'>
							<Field
								className='form-control ps-4'
								type='email'
								name='email'
								id='email'
								placeholder='Login...'
							/>
							<ErrorMessage
								component={'div'}
								className='text-danger position-absolute'
								name='email'
							/>
						</div>
						<div className='mb-4 passIcon'>
							<Field
								className='form-control ps-4'
								type='password'
								name='password'
								id='password'
								placeholder='Parol...'
							/>
							<ErrorMessage
								component={'div'}
								className='text-danger position-absolute'
								name='password'
							/>
						</div>
						<button className='btn btn-dark form-control' type='submit'>
							Kirish
						</button>
					</Form>
				</Formik>
			</div>
		</div>
	);
};
