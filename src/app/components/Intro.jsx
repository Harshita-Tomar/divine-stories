import Image from 'next/image'
import React from 'react'

const Intro = () => {
	return (
		<>
			<div className="w-full bg-black py-32">
				<div className="mx-auto px-4 md:px-[13vw] text-center">
					<p className="leading-[28px] md:leading-[6.9vw] text-[28px] md:text-[6.5vw] text-white poppins font-bold uppercase">
						<span>Explore</span>
						<span className="inline-block align-middle mx-2">
							<Image
								src="/images/krishna1.jpg"
								alt="krishna image"
								width={400}
								height={250}
								className="w-[12vw] md:w-[10vw] h-[10vw] md:h-[6.5vw] object-cover rounded-lg md:rounded-2xl mb-2"
							/>
						</span>
						hidden
						<span className="inline-block align-middle mx-2">
							<Image
								src="/images/kaalimaa.jpg"
								alt="kaalimaa image"
								width={400}
								height={250}
								className="w-[12vw] md:w-[10vw] h-[10vw] md:h-[6.5vw] object-cover rounded-lg md:rounded-2xl mb-2"
							/>
						</span>
						tales from the <span className="italianno">Vedas</span> and
						<span className="inline-block align-middle mx-2">
							<Image
								src="/images/hanuman1.jpeg"
								alt="hanuman image"
								width={400}
								height={250}
								className="w-[12vw] md:w-[10vw] h-[10vw] md:h-[6.5vw] object-cover rounded-lg md:rounded-2xl mb-2"
							/>
						</span>
						Puranas
						<span className="inline-block align-middle mx-2">
							<Image
								src="/images/krishna2.jpg"
								alt="krishna image"
								width={400}
								height={250}
								className="w-[12vw] md:w-[10vw] h-[10vw] md:h-[6.5vw] object-cover rounded-lg md:rounded-2xl mb-2"
							/>
						</span>
						<span className="italianno">stories</span> whispered through
						<span className="inline-block align-middle mx-2">
							<Image
								src="/images/hanuman2.jpg"
								alt="hanuman image"
								width={400}
								height={250}
								className="w-[12vw] md:w-[10vw] h-[10vw] md:h-[6.5vw] object-cover rounded-lg md:rounded-2xl mb-2"
							/>
						</span>
						generations that <span className="italianno">unveil</span>
						<span className="inline-block align-middle mx-2">
							<Image
								src="/images/shanidev.jpg"
								alt="shanidev image"
								width={400}
								height={250}
								className="w-[12vw] md:w-[10vw] h-[10vw] md:h-[6.5vw] object-cover rounded-lg md:rounded-2xl mb-2"
							/>
						</span>
						the unseen
						<span className="inline-block align-middle mx-2">
							<Image
								src="/images/lakshmi.jpg"
								alt="lakshmi image"
								width={400}
								height={250}
								className="w-[12vw] md:w-[10vw] h-[10vw] md:h-[6.5vw] object-cover rounded-lg md:rounded-2xl mb-2"
							/>
						</span>
						sides of gods.
					</p>
				</div>
			</div>

			<div className='w-full relative overflow-hidden lg:sticky lg:top-4 self-start'>
				<div className="absolute z-1 top-0 left-0 w-full h-full bg-black/60 p-3 flex flex-col  italiana">
					<div className=" px-2 md:px-[3vw] pt-[2vw] md:pt-[20vw]">
						<div className='flex items-start justify-start'>
							<h5 className='text-[16px] md:text-[3.5vw] leading-[22px] md:leading-[3.8vw] text-gray-300 text-start poppins font-semibold'> Witness mythology<br /> beyond the mainstream.</h5>
						</div>

						<div className='flex items-start justify-end'>
							<h5 className='text-[16px] md:text-[3.5vw] leading-[22px] md:leading-[3.8vw] pt-8 lg:pt-[12vw] text-end poppins font-semibold text-gray-100 ps-[22vw] lg:ps-[38vw]'>Discover the mystical roots of Sanatan Dharma — a universe of untold stories, celestial legends, and divine wisdom. Journey beyond the scriptures to witness ancient India&apos;s spiritual heartbeat.</h5>
						</div>

						<div className='flex items-start justify-end pt-6 lg:pt-[6vw]'>
							<h5 className='text-[12px] md:text-[1.5vw] leading-[12px] md:leading-[1.8vw] text-end poppins font-semibold text-gray-300 ps-[22vw] lg:ps-[38vw]'>Every deity has a tale beyond the temples — stories whispered from yogis, passed down by elders, hidden in the folds of forgotten Puranas. We bring them to light, one story at a time.</h5>
						</div>
					</div>
				</div>
				<Image
					src='/images/krishna.jpg'
					alt='Intro Background'
					width={2920}
					height={2080}
					className='w-full h-fit object-contain'
				/>
			</div>
		</>
	)
}

export default Intro