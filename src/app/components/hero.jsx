'use client';
import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';

const hero = () => {
	return (
		<>
			<div className='w-full'>
				<div className='grid grid-cols-1 lg:grid-cols-5'>
					<div className='col-span-1 lg:col-span-3 order-2 lg:order-1 '>
						<div className='grid grid-cols-3 relative w-full bg-[#222020]'>
							<motion.div
								initial={{ y: 0 }}
								animate={{ y: -1000 }}
								transition={{ duration: 0.7 }}
								className=" overflow-hidden transition-all absolute z-100 top-0 left-0 w-full h-screen"
							>
								<div className="absolute z-100 top-0 left-0 w-full h-screen bg-black p-10 hidden lg:block"></div>
							</motion.div>
							<div className='col-span-2 h-[80vh] lg:h-screen '>
								<div className="absolute z-1 top-0 left-0 w-full h-full bg-black/60 p-10"></div>
								<motion.div
									initial={{ scale: 1.1 }}
									animate={{ scale: 1 }}
									transition={{ duration: 1 }}
									className=" overflow-hidden transition-all"
								>
									<Image
										src='/images/rudraksha.jpg'
										alt='shiva img'
										width={400}
										height={250}
										className="w-full h-[70vw] lg:h-fit object-cover lg:object-contain overflow-hidden relative"
									/>
								</motion.div>
							</div>
							<div className='col-span-1 bg-black w-[45%] lg:w-[35%] h-[35%] lg:h-[50%] absolute bottom-0 right-0'>
							</div>
							<motion.div
								initial={{ y: 700 }}
								animate={{ y: 0 }}
								transition={{ duration: 1 }}
								className=" text-black flex absolute top-[22%] left-[13%] md:left-[20%] lg:left-[40%] z-10"
								style={{ backgroundImage: "url('/images/bg.jpg')" }}
							>
								<div className="bg-[#11171D] p-3 w-[75vw] md:w-[55vw] lg:w-[25vw] h-[95vw] md:h-[75vw] lg:h-[30vw] flex flex-col justify-between border-t border-r border-[#26546a]">
									<div className='flex justify-between text-[14px] md:text-[0.7vw] leading-[10px] md:leading-[0.7vw] font-semibold text-gray-500'>
										<div>Hidden Truths of the Gods</div>
										<div>Untold Stories</div>
									</div>
									<div className='flex items-center justify-center'>
										<Image
											src='/images/mainbg.jpg'
											alt='shiva img'
											width={400}
											height={250}
											className="w-[40vw] md:w-[5vw] h-[50vw] md:h-[10vw] object-cover overflow-hidden shadow-md shadow-stone-500/50"
										/>
										<Image
											src='/images/bg2.jpg'
											alt='shiva img'
											width={400}
											height={250}
											className="w-[40vw] md:w-[10vw] h-[50vw] md:h-[15vw] object-cover overflow-hidden shadow-md shadow-stone-500/50"
										/>
										<Image
											src='/images/krishna.jpg'
											alt='shiva img'
											width={400}
											height={250}
											className="w-[40vw] md:w-[5vw] h-[50vw] md:h-[10vw] object-cover overflow-hidden shadow-md shadow-stone-500/50"
										/>
									</div>
									<div>
										<div className='text-[16px] md:text-[0.9vw] pb-1 font-semibold text-gray-600'>Ancient Echoes</div>
										<div className='text-[32px] md:text-[2.7vw] leading-[33px] md:leading-[2.7vw] font-bold text-white italiana'>Whispers <br /> from the <span className='italianno text-[14vw] md:text-[4vw] tracking-wide'>puranas.</span></div>
									</div>
								</div>
							</motion.div>
						</div>

					</div>
					<div className='col-span-1 lg:col-span-2 relative overflow-hidden order-1 lg:order-2'>
						<div className="absolute z-1 top-0 left-0 w-full h-screen bg-black/60 p-10 flex flex-col items-center justify-center italiana">
							<h3 className='font-bold text-[38px] md:text-[3.5vw] pe-20 md:pe-28 leading-[42px] md:leading-[4vw]'>DIVINE</h3>
							<div className='flex gap-2'>
								<div className='leading-[28px] md:leading-[2vw]'>
									<h3 className='font-medium text-[24px] md:text-[1.7vw] text-end'>ECHOES:</h3>
									<h6 className='font-medium text-[20px] md:text-[1.9vw] text-end italianno'>Untold <span className='text-[18px] md:text-[2vw] font-semibold'>Stories</span> of</h6>
								</div>
								<div>
									<Image
										src='/images/krishna.jpg'
										alt='shiva img'
										width={400}
										height={250}
										className="w-[40vw] md:w-[10vw] h-[50vw] md:h-[15vw] object-cover overflow-hidden"
									/>
								</div>
								<div className='leading-[23px] md:leading-[2vw] pt-10'>
									<h3 className='font-bold text-[24px] md:text-[2.5vw] text-start'>GODS</h3>
									<h6 className='font-medium text-[20px] md:text-[1.9vw] text-start italianno'>and  <span className='text-[18px] md:text-[2vw] font-semibold'>ancient India</span></h6>
								</div>
							</div>
							<div className='absolute bottom-2 text-center leading-[10px] md:leading-[0.9vw]'>
								<h6 className='font-semibold text-[12px] md:text-[0.7vw] tracking-wide '>In the silence of the past, echoes the wisdom of the gods.</h6>
								<h6 className='font-semibold text-[12px] md:text-[0.7vw] tracking-wide'>When myths sleep, memory awakens.</h6>
							</div>
						</div>

						<motion.div
							initial={{ x: 0 }}
							animate={{ x: 2900 }}
							transition={{ duration: 2.1 }}
							className=" overflow-hidden transition-all absolute z-1 top-0 left-0 w-full h-screen"
						>
							<div className="absolute z-1 top-0 left-0 w-full h-screen bg-black p-10"></div>
						</motion.div>

						<motion.div
							initial={{ scale: 1.1 }}
							animate={{ scale: 1 }}
							transition={{ duration: 1 }}
							className=" overflow-hidden transition-all"
						>
							<Image
								src='/images/mainbg.jpg'
								alt='shiva img'
								width={400}
								height={250}
								className="w-full h-screen object-cover overflow-hidden"
							/>
						</motion.div>
					</div>
				</div >
			</div >

		</>
	);
}

export default hero