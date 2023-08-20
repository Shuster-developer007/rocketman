import ContentLoader from 'react-content-loader';

const React_Skeleton = () => (
	<ContentLoader
		speed={2}
		width='100%'
		height={160}
		viewBox='0 0 400 160'
		backgroundColor='#757575'
		foregroundColor='#ffffff'
	>
		<rect x='0' y='0' rx='3' ry='3' width='100%' height='6' />
		<rect x='0' y='20' rx='3' ry='3' width='100%' height='6' />
		<rect x='0' y='40' rx='3' ry='3' width='100%' height='6' />
		<rect x='0' y='60' rx='3' ry='3' width='100%' height='6' />
		<rect x='0' y='80' rx='3' ry='3' width='100%' height='6' />
		<rect x='0' y='100' rx='3' ry='3' width='100%' height='6' />
	</ContentLoader>
);

export default React_Skeleton;
