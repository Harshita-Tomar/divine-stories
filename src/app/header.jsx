"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const header = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className="w-full bg-transparent fixed top-0 left-0 z-50">
			<div className="w-full px-4 sm:px-6 lg:px-20">
				<div className="flex justify-between items-center h-20 2xl:h-[6vw]">

					{/* Logo */}
					<div className="text-xl font-bold text-white">
						{/* <Image src='/images/krishna.jpg' width={132} height={57} className='w-[100px] lg:w-[8vw]' priority quality={100} alt='header scholar metrik logo' /> */}
						<div className='rounded-full bg-black p-1 text-[10px] md:text-[1vw]'>ht.</div>
					</div>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center space-x-10 italiana tracking-wide">
						<a href="/" className="text-white hover:font-bold text-md xl:text-[1.1vw] transition">Home</a>
						<a href="/stories" className="text-white hover:font-bold transition text-md xl:text-[1.1vw]">Stories</a>
						<a href="/" className="text-white hover:font-bold transition text-md xl:text-[1.1vw]">Ancient India</a>
						{/* <button className="bg-transparent text-white px-8 py-2 border border-white hover:bg-[#0C182D] transition cursor-pointer text-md xl:text-[1.1vw]">
							Contact Us
						</button> */}
					</div>

					{/* Mobile Toggle Button */}
					<div className="md:hidden">
						<button onClick={() => setIsOpen(!isOpen)}>
							{isOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			{isOpen && (
				<div className="md:hidden bg-black/80 italiana tracking-wide">
					<div className="px-6 py-3 space-y-2">
						<a href="/" className="block text-white hover:font-bold transition text-md xl:text-[1.1vw]">Home</a>
						<a href="/stories" className="block text-white hover:font-bold transition text-md xl:text-[1.1vw]">Stories</a>
						<a href="/" className="block text-white hover:font-bold transition text-md xl:text-[1.1vw]">Ancient India</a>
						{/* <button className="text-white px-8  py-2 border border-white hover:bg-[#0C182D] transition text-md xl:text-[1.1vw]">
							Contact Us
						</button> */}
					</div>
				</div>
			)}
		</header>
	);
};

export default header;
