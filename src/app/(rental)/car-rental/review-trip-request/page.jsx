'use client';
import React, {useState, useEffect} from 'react';
import {Back} from '@/ui-share/Icon';
import {stPay} from '@/ui-share/Image';
import Image from 'next/image';
import {useRouter} from 'next/navigation';

export default function ReviewTripRequest() {
	const router = useRouter();
	const [showPromoPopup, setShowPromoPopup] = useState(false);
	const [promoCode, setPromoCode] = useState('');
	const [showFareInfo, setShowFareInfo] = useState(false);
	const [isApplying, setIsApplying] = useState(false);
	const [appliedPromo, setAppliedPromo] = useState(null);

	// Handle promo code application
	const handleApplyPromo = () => {
		setIsApplying(true);
		// Simulate API call
		setTimeout(() => {
			setAppliedPromo(promoCode);
			setIsApplying(false);
			setShowPromoPopup(false);
		}, 1000);
	};

	// Close popup when clicking outside
	useEffect(() => {
		const handleClickOutside = (e) => {
			if (showPromoPopup && e.target.classList.contains('backdrop')) {
				setShowPromoPopup(false);
			}
		};
		document.addEventListener('click', handleClickOutside);
		return () => document.removeEventListener('click', handleClickOutside);
	}, [showPromoPopup]);

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

							{/* Promo Code Section */}
							<div className="mb-6">
								<h3 className="text-sm font-medium text-gray-500">Promo Code</h3>
								{appliedPromo ? (
									<div className="flex justify-between items-center mt-1">
										<span className="text-green-600 font-medium">Applied: {appliedPromo}</span>
										<button onClick={() => setAppliedPromo(null)} className="text-red-500 text-sm hover:text-red-700">
											Remove
										</button>
									</div>
								) : (
									<button
										onClick={() => setShowPromoPopup(true)}
										className="mt-1 text-blue-500 hover:text-blue-700 text-sm flex items-center"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-4 w-4 mr-1"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M12 6v6m0 0v6m0-6h6m-6 0H6"
											/>
										</svg>
										Add Promo Code
									</button>
								)}
							</div>

							{/* Additional note */}
							<div className="mb-6">
								<h3 className="text-sm font-medium text-gray-500">Additional note</h3>
								<p className="text-md text-gray-800">sad asd asd sa</p>
							</div>

							<hr className="my-6 border-gray-200" />

							{/* Action section */}
							<div className="text-center">
								<div
									className="mb-6 p-4 bg-gray-50 rounded-lg text-left cursor-pointer"
									onClick={() => setShowFareInfo(!showFareInfo)}
								>
									<div className="flex justify-between items-center">
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

			{/* Modern Promo Popup */}
			{showPromoPopup && (
				<div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-opacity duration-300 backdrop">
					<div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden transform transition-all duration-300 scale-100">
						<div className="p-6">
							<div className="flex justify-between items-start">
								<div>
									<h2 className="text-2xl font-bold text-gray-900">Promo Code</h2>
									<p className="text-gray-500 mt-1">Enter your discount code</p>
								</div>
								<button
									onClick={() => setShowPromoPopup(false)}
									className="text-gray-400 hover:text-gray-500 transition-colors p-1 -mr-1"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-6 w-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
									</svg>
								</button>
							</div>

							<div className="mt-6 relative">
								<input
									type="text"
									value={promoCode}
									onChange={(e) => setPromoCode(e.target.value)}
									placeholder="e.g. SUMMER20"
									className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg font-medium placeholder-gray-400"
									autoFocus
								/>
								{promoCode && (
									<button
										onClick={() => setPromoCode('')}
										className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
									>
										<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
											<path
												fillRule="evenodd"
												d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
												clipRule="evenodd"
											/>
										</svg>
									</button>
								)}
							</div>

							{/* Promo Examples */}
							<div className="mt-4">
								<h4 className="text-sm font-medium text-gray-500 mb-2">Try these codes:</h4>
								<div className="flex flex-wrap gap-2">
									{['SUMMER20', 'FREERIDE', 'WELCOME10'].map((code) => (
										<button
											key={code}
											onClick={() => setPromoCode(code)}
											className="px-3 py-1.5 text-sm bg-white border border-gray-200 rounded-full hover:bg-gray-100 transition-colors hover:border-blue-300"
										>
											{code}
										</button>
									))}
								</div>
							</div>

							<div className="mt-6 grid grid-cols-2 gap-3">
								<button
									onClick={() => setShowPromoPopup(false)}
									className="px-4 py-3 border border-gray-200 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors"
								>
									Cancel
								</button>
								<button
									onClick={handleApplyPromo}
									disabled={!promoCode || isApplying}
									className={`px-4 py-3 rounded-lg font-medium text-white transition-colors flex items-center justify-center ${
										!promoCode || isApplying ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
									}`}
								>
									{isApplying ? (
										<>
											<svg
												className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
											>
												<circle
													className="opacity-25"
													cx="12"
													cy="12"
													r="10"
													stroke="currentColor"
													strokeWidth="4"
												></circle>
												<path
													className="opacity-75"
													fill="currentColor"
													d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
												></path>
											</svg>
											Applying...
										</>
									) : (
										'Apply Code'
									)}
								</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</section>
	);
}
