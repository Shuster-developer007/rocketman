import './BtnSlider.css';

export const BtnSlider = ({ status }) => {
	return (
		<label className='switch'>
			<input type='checkbox' defaultChecked={status} />
			<span className='slider round' />
		</label>
	);
};
