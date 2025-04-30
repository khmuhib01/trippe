'use client';
import {Back, Edit} from '@/ui-share/Icon';
import {stPay} from '@/ui-share/Image';
import Image from 'next/image';
import React, {useState} from 'react';
import {useRouter} from 'next/navigation';
import dayjs from 'dayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {DesktopDatePicker} from '@mui/x-date-pickers/DesktopDatePicker';
import {TimePicker} from '@mui/x-date-pickers/TimePicker';
import {DemoContainer} from '@mui/x-date-pickers/internals/demo';
import {Switch} from '@mui/material';

export default function RequestTripPage() {
	const router = useRouter();
	const [showViaPoint, setShowViaPoint] = useState(false);
	const [viaPoint, setViaPoint] = useState('');
	const [selectedDate, setSelectedDate] = useState(dayjs());
	const [selectedTime, setSelectedTime] = useState(dayjs());
	const [returnDate, setReturnDate] = useState(dayjs());
	const [returnTime, setReturnTime] = useState(dayjs());
	const [isRoundTrip, setIsRoundTrip] = useState(false);
	const [tripNote, setTripNote] = useState('');
	const [promoCode, setPromoCode] = useState('');

	const handleNext = () => {
		// You can add form validation here if needed
		router.push('/car-rental/review-trip-request'); // Navigate to review page
	};

	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<section className="bg-[#FEF8F7] py-8">
				<div className="container mx-auto">
					<div className="flex justify-center">
						<div className="w-full max-w-[600px] px-4">
							{/* Header with Back button */}
							<div className="mb-6">
								<button
									className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
									onClick={() => window.history.back()}
								>
									<Back /> Back
								</button>
							</div>

							{/* Main card */}
							<div className="bg-white rounded-lg shadow-md p-6">
								{/* Title section */}
								<div className="mb-6">
									<h1 className="text-2xl font-bold text-gray-800">Rental</h1>
									<h2 className="text-lg text-gray-600">Request a Trip</h2>
								</div>

								<hr className="my-4 border-gray-200" />

								{/* Vehicle selection */}
								<div className="mb-8">
									<div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
										<div className="flex items-center gap-4">
											<Image src={stPay} alt="Minibus" width={40} height={40} />
											<div>
												<p className="font-medium text-gray-800">Minibus</p>
												<p className="text-sm text-gray-500">22-28 Seats</p>
											</div>
										</div>
										<button className="text-blue-500 hover:text-blue-700">
											<Edit />
										</button>
									</div>
								</div>

								{/* Location inputs */}
								<div className="space-y-6">
									<div>
										<label className="block text-sm font-medium text-gray-700 mb-1">Pickup point</label>
										<input
											type="text"
											placeholder="Search pickup location"
											className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
										/>
									</div>

									{/* Via Point Toggle */}
									<div className="flex items-center">
										<input
											type="checkbox"
											id="viaPointToggle"
											checked={showViaPoint}
											onChange={() => setShowViaPoint(!showViaPoint)}
											className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
										/>
										<label htmlFor="viaPointToggle" className="ml-2 block text-sm text-gray-700">
											Add Via Point
										</label>
									</div>

									{/* Via Point Input (conditionally shown) */}
									{showViaPoint && (
										<div>
											<label className="block text-sm font-medium text-gray-700 mb-1">Via Point</label>
											<input
												type="text"
												placeholder="Search via location"
												value={viaPoint}
												onChange={(e) => setViaPoint(e.target.value)}
												className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
											/>
										</div>
									)}

									<div>
										<label className="block text-sm font-medium text-gray-700 mb-1">Drop off point</label>
										<input
											type="text"
											placeholder="Search drop off location"
											className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
										/>
									</div>
								</div>

								<hr className="my-6 border-gray-200" />

								{/* Round trip toggle */}
								<div className="flex items-center justify-between mb-6 p-3 bg-gray-50 rounded-lg">
									<div>
										<label className="block text-sm font-medium text-gray-700">Round trip</label>
										<p className="text-xs text-gray-500">Enable if you need return trip</p>
									</div>
									<Switch checked={isRoundTrip} onChange={(e) => setIsRoundTrip(e.target.checked)} color="primary" />
								</div>

								{/* Outbound Trip Date and Time */}
								<div className="mb-4">
									<h3 className="text-md font-medium text-gray-800 mb-3">Outbound Trip</h3>
									<div className="grid grid-cols-2 gap-4">
										<div>
											<label className="block text-sm font-medium text-gray-700 mb-1">Departure Date</label>
											<DemoContainer components={['DesktopDatePicker']}>
												<DesktopDatePicker
													value={selectedDate}
													onChange={(newValue) => setSelectedDate(newValue)}
													className="w-full"
													slotProps={{
														textField: {
															size: 'small',
															fullWidth: true,
															sx: {
																'& .MuiOutlinedInput-root': {
																	borderRadius: '0.5rem',
																	height: '44px',
																},
															},
														},
													}}
												/>
											</DemoContainer>
										</div>

										<div>
											<label className="block text-sm font-medium text-gray-700 mb-1">Departure Time</label>
											<DemoContainer components={['TimePicker']}>
												<TimePicker
													value={selectedTime}
													onChange={(newValue) => setSelectedTime(newValue)}
													className="w-full"
													slotProps={{
														textField: {
															size: 'small',
															fullWidth: true,
															sx: {
																'& .MuiOutlinedInput-root': {
																	borderRadius: '0.5rem',
																	height: '44px',
																},
															},
														},
													}}
												/>
											</DemoContainer>
										</div>
									</div>
								</div>

								{/* Return Trip Date and Time (shown when round trip is checked) */}
								{isRoundTrip && (
									<div className="mb-4">
										<h3 className="text-md font-medium text-gray-800 mb-3">Return Trip</h3>
										<div className="grid grid-cols-2 gap-4">
											<div>
												<label className="block text-sm font-medium text-gray-700 mb-1">Return Date</label>
												<DemoContainer components={['DesktopDatePicker']}>
													<DesktopDatePicker
														value={returnDate}
														onChange={(newValue) => setReturnDate(newValue)}
														minDate={selectedDate}
														className="w-full"
														slotProps={{
															textField: {
																size: 'small',
																fullWidth: true,
																sx: {
																	'& .MuiOutlinedInput-root': {
																		borderRadius: '0.5rem',
																		height: '44px',
																	},
																},
															},
														}}
													/>
												</DemoContainer>
											</div>

											<div>
												<label className="block text-sm font-medium text-gray-700 mb-1">Return Time</label>
												<DemoContainer components={['TimePicker']}>
													<TimePicker
														value={returnTime}
														onChange={(newValue) => setReturnTime(newValue)}
														className="w-full"
														slotProps={{
															textField: {
																size: 'small',
																fullWidth: true,
																sx: {
																	'& .MuiOutlinedInput-root': {
																		borderRadius: '0.5rem',
																		height: '44px',
																	},
																},
															},
														}}
													/>
												</DemoContainer>
											</div>
										</div>
									</div>
								)}

								<hr className="my-6 border-gray-200" />

								{/* Notes text area */}
								<div className="mb-6">
									<label className="block text-sm font-medium text-gray-700 mb-1">Trip Notes</label>
									<textarea
										placeholder="Add any special instructions for your trip..."
										value={tripNote}
										onChange={(e) => setTripNote(e.target.value)}
										rows={3}
										maxLength={230}
										className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
									/>
									<p className="text-xs text-gray-500 text-right mt-1">230 Character max.</p>
								</div>

								{/* Promo code field */}
								<div className="mb-8">
									<label className="block text-sm font-medium text-gray-700 mb-1">Promo Code</label>
									<div className="flex gap-2">
										<input
											type="text"
											placeholder="Enter promo code"
											value={promoCode}
											onChange={(e) => setPromoCode(e.target.value)}
											className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
										/>
									</div>
								</div>

								{/* Next button */}
								<button
									className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition duration-200"
									onClick={handleNext}
								>
									Next →
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</LocalizationProvider>
	);
}
