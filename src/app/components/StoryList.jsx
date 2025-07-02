'use client';
import React from 'react'
import stories from '../data/stories.json';
import DeityCards from './DeityCards';

const StoryList = () => {
	return (
		<section className="px-6 lg:px-20 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			{stories.map((story) => (
				<DeityCards key={story.id} deity={story} />
			))}
		</section>
	);
}

export default StoryList