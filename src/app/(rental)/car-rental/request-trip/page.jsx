'use client';
import {Back, Edit, X} from '@/ui-share/Icon';
import {stPay} from '@/ui-share/Image';
import Image from 'next/image';
import {useState, useEffect} from 'react';
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
	const [pickupPoint, setPickupPoint] = useState('');
	const [dropOffPoint, setDropOffPoint] = useState('');
	const [selectedDate, setSelectedDate] = useState(dayjs());
	const [selectedTime, setSelectedTime] = useState(dayjs());
	const [returnDate, setReturnDate] = useState(dayjs());
	const [returnTime, setReturnTime] = useState(dayjs());
	const [isRoundTrip, setIsRoundTrip] = useState(false);
	const [tripNote, setTripNote] = useState('');
	const [promoCode, setPromoCode] = useState('');
	const [showPromoPopup, setShowPromoPopup] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [appliedPromo, setAppliedPromo] = useState(null);
	const [formValid, setFormValid] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const [selectedVehicle, setSelectedVehicle] = useState('Minibus');
	const [isApplyingPromo, setIsApplyingPromo] = useState(false);
	const [isSavingVehicle, setIsSavingVehicle] = useState(false);

	const vehicles = [
		{name: 'Sedan Car', seats: '4 Seats'},
		{name: 'Premium Sedan', seats: '4 Seats'},
		{name: 'Mini Microbus', seats: '7 Seats'},
		{name: 'Microbus', seats: '10 Seats'},
		{name: 'Minibus', seats: '22-28 Seats'},
		{name: 'Luxury Car', seats: '4-7 Seats | BMW, Audi, SUVs & More'},
		{name: 'Chander Gari', seats: "8-10 Seats | Available at Cox's Bazar & Sreemangal"},
	];

	// Check form validation whenever mandatory fields change
	useEffect(() => {
		const isValid = pickupPoint.trim() !== '' && dropOffPoint.trim() !== '' && selectedDate && selectedTime;
		setFormValid(isValid);
	}, [pickupPoint, dropOffPoint, selectedDate, selectedTime]);

	const handleNext = () => {
		if (!formValid) return;

		setIsSubmitting(true);
		// Simulate form submission
		setTimeout(() => {
			router.push('/car-rental/review-trip-request');
		}, 1000);
	};

	const handleApplyPromo = () => {
		setIsApplyingPromo(true);
		// Simulate API call
		setTimeout(() => {
			setAppliedPromo(promoCode);
			setIsApplyingPromo(false);
			setShowPromoPopup(false);
		}, 800);
	};

	const handleSaveVehicle = () => {
		setIsSavingVehicle(true);
		// Simulate save operation
		setTimeout(() => {
			setIsSavingVehicle(false);
			setIsOpen(false);
		}, 600);
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
											<Image src={stPay} alt={selectedVehicle} width={40} height={40} />
											<div>
												<p className="font-medium text-gray-800">{selectedVehicle}</p>
												<p className="text-sm text-gray-500">
													{vehicles.find((v) => v.name === selectedVehicle)?.seats || '22-28 Seats'}
												</p>
											</div>
										</div>
										<button onClick={() => setIsOpen(true)} className="text-blue-500 hover:text-blue-700">
											<Edit />
										</button>
									</div>
								</div>

								{/* Location inputs */}
								<div className="space-y-6">
									<div>
										<label className="block text-sm font-medium text-gray-700 mb-1">
											Pickup point <span className="text-red-500">*</span>
										</label>
										<input
											type="text"
											placeholder="Search pickup location"
											value={pickupPoint}
											onChange={(e) => setPickupPoint(e.target.value)}
											className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
											required
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
										<label className="block text-sm font-medium text-gray-700 mb-1">
											Drop off point <span className="text-red-500">*</span>
										</label>
										<input
											type="text"
											placeholder="Search drop off location"
											value={dropOffPoint}
											onChange={(e) => setDropOffPoint(e.target.value)}
											className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
											required
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
											<label className="block text-sm font-medium text-gray-700 mb-1">
												Departure Date <span className="text-red-500">*</span>
											</label>
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
											<label className="block text-sm font-medium text-gray-700 mb-1">
												Departure Time <span className="text-red-500">*</span>
											</label>
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

								{/* Promo Code Section */}
								<div className="mb-6">
									<label className="block text-sm font-medium text-gray-700 mb-1">Promo Code</label>
									{appliedPromo ? (
										<div className="flex justify-between items-center">
											<span className="text-green-600 font-medium">Applied: {appliedPromo}</span>
											<button onClick={() => setAppliedPromo(null)} className="text-red-500 text-sm hover:text-red-700">
												Remove
											</button>
										</div>
									) : (
										<button
											onClick={() => setShowPromoPopup(true)}
											className="text-blue-500 hover:text-blue-700 text-sm flex items-center"
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

								{/* Next button with loading state and validation */}
								<button
									onClick={handleNext}
									disabled={!formValid || isSubmitting}
									className={`w-full bg-blue-600 text-white font-medium py-3 px-4 rounded-lg transition duration-200 flex items-center justify-center ${
										!formValid ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
									}`}
								>
									{isSubmitting ? (
										<>
											<svg
												className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
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
											Processing...
										</>
									) : (
										'Next →'
									)}
								</button>
							</div>
						</div>
					</div>
				</div>

				{/* Vehicle Selection Modal */}
				{isOpen && (
					<div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-opacity duration-300 backdrop">
						<div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden transform transition-all duration-300 scale-100">
							<div className="p-6">
								<div className="flex justify-between items-start">
									<div>
										<h2 className="text-2xl font-bold text-gray-900">Select Vehicle</h2>
										<p className="text-gray-500 mt-1">Choose your preferred vehicle type</p>
									</div>
									<button
										onClick={() => setIsOpen(false)}
										className="text-gray-400 hover:text-gray-500 transition-colors p-1 -mr-1"
									>
										<X className="w-6 h-6" />
									</button>
								</div>

								<div className="mt-6 space-y-3 max-h-[50vh] overflow-y-auto">
									{vehicles.map((vehicle, index) => (
										<div
											key={index}
											onClick={() => setSelectedVehicle(vehicle.name)}
											className={`p-4 rounded-lg border cursor-pointer transition-colors ${
												selectedVehicle === vehicle.name
													? 'border-blue-500 bg-blue-50'
													: 'border-gray-200 hover:bg-gray-50'
											}`}
										>
											<div className="flex justify-between items-center">
												<div>
													<p className="font-medium text-gray-900">{vehicle.name}</p>
													<p className="text-sm text-gray-500">{vehicle.seats}</p>
												</div>
												{selectedVehicle === vehicle.name && (
													<svg
														xmlns="http://www.w3.org/2000/svg"
														className="h-5 w-5 text-blue-500"
														viewBox="0 0 20 20"
														fill="currentColor"
													>
														<path
															fillRule="evenodd"
															d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
															clipRule="evenodd"
														/>
													</svg>
												)}
											</div>
										</div>
									))}
								</div>

								<div className="mt-6 grid grid-cols-2 gap-3">
									<button
										onClick={() => setIsOpen(false)}
										className="px-4 py-3 border border-gray-200 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors"
									>
										Cancel
									</button>
									<button
										onClick={handleSaveVehicle}
										disabled={!selectedVehicle || isSavingVehicle}
										className={`px-4 py-3 rounded-lg font-medium text-white transition-colors flex items-center justify-center ${
											!selectedVehicle || isSavingVehicle
												? 'bg-gray-300 cursor-not-allowed'
												: 'bg-blue-600 hover:bg-blue-700'
										}`}
									>
										{isSavingVehicle ? (
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
												Saving...
											</>
										) : (
											'Save Changes'
										)}
									</button>
								</div>
							</div>
						</div>
					</div>
				)}

				{/* Promo Code Popup */}
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
										<X className="w-6 h-6" />
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
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-5 w-5"
												viewBox="0 0 20 20"
												fill="currentColor"
											>
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
										disabled={!promoCode || isApplyingPromo}
										className={`px-4 py-3 rounded-lg font-medium text-white transition-colors flex items-center justify-center ${
											!promoCode || isApplyingPromo ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
										}`}
									>
										{isApplyingPromo ? (
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
		</LocalizationProvider>
	);
}
