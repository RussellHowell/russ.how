import { h } from 'preact';
import style from './style.css';
import { useState } from 'preact/hooks';
import useCategoryImages  from '../../effects/useCategoryImages';

const Home = () => {
	const [images, error] = useCategoryImages();

	return	(
		<div class={style.home}>
			<h1>Home</h1>
			{error !== undefined
				? <p>Error fetching images: {error}</p>
				: JSON.stringify( images ) }
		</div>
	)
	
	};

export default Home;
