import React from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion';

const DeityCards = ({ deity }) => {
	return (
		<motion.div
			whileHover={{ scale: 1.05 }}
			className="bg-black shadow-lg rounded-xl overflow-hidden transition-all"
		>
			<Image
				src={deity.image}
				alt={deity.title}
				width={400}
				height={250}
				className="w-full object-cover"
			/>
			<div className="p-4">
				<h3 className="text-xl font-bold">{deity.title}</h3>
				<p className="text-sm text-gray-600">{deity.summary}</p>
			</div>
		</motion.div>
	);
}

export default DeityCards