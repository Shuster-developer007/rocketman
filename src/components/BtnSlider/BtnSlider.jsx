import './BtnSlider.css';

export const BtnSliderT = () => {
	return (
		<label className='switch'>
			<input type='checkbox' defaultChecked={true} />
			<span className='slider round' />
		</label>
	);
};

export const BtnSliderF = () => {
	return (
		<label className='switch'>
			<input type='checkbox' defaultChecked={false} />
			<span className='slider round' />
		</label>
	);
};
