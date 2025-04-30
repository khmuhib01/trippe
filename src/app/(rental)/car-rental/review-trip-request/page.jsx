'use client';
import React, {useState} from 'react';
import {Back} from '@/ui-share/Icon';
import {stPay} from '@/ui-share/Image';
import Image from 'next/image';
import {useRouter} from 'next/navigation';

export default function ReviewTripRequest() {
	const router = useRouter();
	const [showPromoPopup, setShowPromoPopup] = useState(false);
	const [promoCode, setPromoCode] = useState('');
	const [showFareInfo, setShowFareInfo] = useState(false);

	const handleApplyPromo = () => {
		// Handle promo code application logic here
		setShowPromoPopup(false);
		// You would typically validate the promo code here
	};

	return (
		<section className="bg-[#FEF8F7] min-h-screen py-8">
			<div className="container mx-auto">
				<div className="flex justify-center">
					<div className="w-full max-w-[600px] px-4">
						{/* Header with Back button */}
						<div className="mb-6">
							<button
								className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
								onClick={() => router.back()}
							>
								<Back /> Back
							</button>
						</div>

						{/* Main card */}
						<div className="bg-white rounded-lg shadow-md p-6">
							{/* Title section */}
							<div className="mb-6">
								<h1 className="text-2xl font-bold text-gray-800">Rental</h1>
							</div>

							<hr className="my-4 border-gray-200" />

							{/* Vehicle selection */}
							<div className="mb-8">
								<div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
									<Image src={stPay} alt="Minibus" width={40} height={40} />
									<div>
										<h2 className="text-lg font-medium text-gray-800">Minibus</h2>
										<p className="text-sm text-gray-500">22-28 Seats</p>
									</div>
								</div>
							</div>

							{/* Location details */}
							<div className="space-y-4 mb-6">
								<div>
									<h3 className="text-sm font-medium text-gray-500">Pickup location</h3>
									<p className="text-md font-medium text-gray-800">Mirpur DOHS, Dhaka, Bangladesh</p>
								</div>
								<div>
									<h3 className="text-sm font-medium text-gray-500">Via location</h3>
									<p className="text-md font-medium text-gray-800">Chawrasta, Bangladesh</p>
								</div>
								<div>
									<h3 className="text-sm font-medium text-gray-500">Drop off location</h3>
									<p className="text-md font-medium text-gray-800">Mymensingh, Bangladesh</p>
								</div>
							</div>

							<hr className="my-6 border-gray-200" />

							{/* Trip details */}
							<div className="mb-6">
								<h3 className="text-sm font-medium text-gray-500 mb-3">Trip Date & Time</h3>
								<p className="text-md text-gray-800 mb-4">03:15 AM, Thu 1 May 2025</p>

								<div className="grid grid-cols-2 gap-4 mb-4">
									<div>
										<h3 className="text-sm font-medium text-gray-500">Round Trip</h3>
										<p className="text-md font-medium text-gray-800">YES</p>
									</div>
									<div>
										<h3 className="text-sm font-medium text-gray-500">Return Date</h3>
										<p className="text-md font-medium text-gray-800">03:15 AM, 3 May, 2025</p>
									</div>
								</div>
							</div>

							{/* Promo code */}
							<div className="mb-6">
								<h3 className="text-sm font-medium text-gray-500">Promo</h3>
								<p className="text-md font-medium text-gray-800 mb-2">
									{promoCode ? `Applied: ${promoCode}` : 'No promo added'}
								</p>
								<button className="text-blue-500 hover:text-blue-700 text-sm" onClick={() => setShowPromoPopup(true)}>
									{promoCode ? 'Change Promo' : '+ Add Promo'}
								</button>
							</div>

							{/* Additional note */}
							<div className="mb-6">
								<h3 className="text-sm font-medium text-gray-500">Additional note</h3>
								<p className="text-md text-gray-800">sad asd asd sa</p>
							</div>

							<hr className="my-6 border-gray-200" />

							{/* Action section */}
							<div className="text-center">
								<div className="mb-6 p-4 bg-gray-50 rounded-lg text-left">
									<div
										className="flex justify-between items-center cursor-pointer"
										onClick={() => setShowFareInfo(!showFareInfo)}
									>
										<h3 className="text-sm font-medium text-gray-700">Looking for fare?</h3>
										<svg
											className={`w-5 h-5 text-gray-500 transition-transform ${
												showFareInfo ? 'transform rotate-180' : ''
											}`}
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
										</svg>
									</div>

									{showFareInfo && (
										<div className="mt-3 text-sm text-gray-600">
											<p>
												Once you place a trip request, our partners will bid on your trip. You can sort through the bids
												to find the best vehicle at a suitable price for your needs. This lets you receive multiple
												prices at once with the flexibility and freedom to choose.
											</p>
										</div>
									)}
								</div>

								<button
									className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition duration-200"
									onClick={() => router.push('/car-rental/confirmation')}
								>
									Send trip request →
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Promo Code Popup */}
			{showPromoPopup && (
				<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
					<div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
						<h2 className="text-xl font-bold text-gray-800 mb-4">Apply Promo Code</h2>
						<input
							type="text"
							value={promoCode}
							onChange={(e) => setPromoCode(e.target.value)}
							placeholder="Enter promo code"
							className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
						/>
						<div className="flex justify-end gap-3">
							<button
								className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100"
								onClick={() => setShowPromoPopup(false)}
							>
								Cancel
							</button>
							<button
								className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
								onClick={handleApplyPromo}
							>
								Apply
							</button>
						</div>
					</div>
				</div>
			)}
		</section>
	);
}
