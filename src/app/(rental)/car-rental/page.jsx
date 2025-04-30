'use client';
import Link from 'next/link';
import React from 'react';
import {FiArrowUpRight} from 'react-icons/fi';

export default function CarRental() {
	return (
		<section className="bg-gradient-to-b from-gray-200 to-white">
			<div className="container mx-auto py-10 px-5">
				<div className="grid sm:grid-cols-2">
					<div className="flex flex-col justify-center text-white">
						<h1 className="text-3xl font-bold mb-4 text-black">
							Fast Bookings, Trusted Cars & <br /> Smoother Journeys... <br />{' '}
							<span className="text-xl">Anytime, Anywhere!</span>
						</h1>
					</div>
					<div className="flex justify-end">
						<div className="sm:w-[600px] bg-white rounded-md p-10 shadow-md">
							<h1 className="text-xl font-semibold mb-4 text-black">Which vehicle are you looking for</h1>
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
							<div className="mt-4 flex justify-end">
								<Link
									href="/car-rental/request-trip"
									className="inline-flex items-center px-6 py-3 rounded-full bg-blue-500 text-white text-sm font-medium shadow hover:bg-orange-600 transition whitespace-nowrap"
									onClick={() => {
										Navigator('/request-trip');
									}}
								>
									Request Trip <FiArrowUpRight className="ml-2 w-4 h-4" />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
