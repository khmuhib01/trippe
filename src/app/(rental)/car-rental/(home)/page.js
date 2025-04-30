'use client';
import React from 'react';

export default function CarRental() {
	return (
		<section className="bg-gradient-to-b from-gray-500 via-gray-300 to-white">
			<div className="container mx-auto bg-green-300 p-10">
				<div className="grid grid-cols-2">
					<div className="flex flex-col justify-center text-white">
						<h1 className="text-3xl font-bold mb-4">
							Fast Bookings, Trusted Cars & <br /> Smoother Journeys... <br />{' '}
							<span className="text-xl">Anytime, Anywhere!</span>
						</h1>
					</div>
					<div className="flex justify-end">
						<div className="w-[600px] bg-white rounded-md p-10 shadow-md">
							<h1 className="text-xl font-semibold mb-4">Which vehicle are you looking for</h1>
							<div className="grid grid-col-3 gap-5 overflow-x-auto h-[300px]">
								<div className="flex gap-5 flex-wrap">
									<div className="w-[100px] h-[100px] bg-gray-400 rounded-md"></div>
									<div className="w-[100px] h-[100px] bg-gray-400 rounded-md"></div>
									<div className="w-[100px] h-[100px] bg-gray-400 rounded-md"></div>
									<div className="w-[100px] h-[100px] bg-gray-400 rounded-md"></div>
									<div className="w-[100px] h-[100px] bg-gray-400 rounded-md"></div>
									<div className="w-[100px] h-[100px] bg-gray-400 rounded-md"></div>
									<div className="w-[100px] h-[100px] bg-gray-400 rounded-md"></div>
									<div className="w-[100px] h-[100px] bg-gray-400 rounded-md"></div>
									<div className="w-[100px] h-[100px] bg-gray-400 rounded-md"></div>
									<div className="w-[100px] h-[100px] bg-gray-400 rounded-md"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
