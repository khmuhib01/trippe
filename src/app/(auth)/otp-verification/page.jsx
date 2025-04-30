'use client';
import React, {useState, useEffect} from 'react';
import {ArrowLeft} from '@/ui-share/Icon';
import {useRouter} from 'next/navigation';

export default function OtpVerificationPage() {
	const router = useRouter();
	const [otp, setOtp] = useState(['', '', '', '', '', '']);
	const [isVerifying, setIsVerifying] = useState(false);
	const [canResend, setCanResend] = useState(false);
	const [countdown, setCountdown] = useState(30);

	const phoneNumber = '+8801768090875'; // This would typically come from props or context

	// Handle OTP input change
	const handleOtpChange = (index, value) => {
		if (/^\d*$/.test(value)) {
			// Only allow numbers
			const newOtp = [...otp];
			newOtp[index] = value;
			setOtp(newOtp);

			// Auto focus to next input
			if (value && index < 5) {
				const nextInput = document.getElementById(`otp-${index + 1}`);
				if (nextInput) nextInput.focus();
			}
		}
	};

	// Handle backspace
	const handleKeyDown = (index, e) => {
		if (e.key === 'Backspace' && !otp[index] && index > 0) {
			const prevInput = document.getElementById(`otp-${index - 1}`);
			if (prevInput) prevInput.focus();
		}
	};

	// Verify OTP
	const handleVerify = (e) => {
		e.preventDefault();
		setIsVerifying(true);
		// Simulate verification
		setTimeout(() => {
			setIsVerifying(false);
			// Here you would verify the OTP
			console.log('Verifying OTP:', otp.join(''));
			router.push('/car-rental');
		}, 1500);
	};

	// Resend OTP
	const handleResend = () => {
		setCanResend(false);
		setCountdown(30);
	};

	// Countdown effect for resend OTP
	useEffect(() => {
		if (!canResend && countdown > 0) {
			const timer = setTimeout(() => {
				setCountdown((prev) => prev - 1);
			}, 1000);
			return () => clearTimeout(timer);
		} else if (countdown === 0) {
			setCanResend(true);
		}
	}, [countdown, canResend]);

	return (
		<div className=" bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
			<div className="sm:mx-auto sm:w-full sm:max-w-md">
				<div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10 relative">
					{/* Back button */}
					<button
						onClick={() => window.history.back()}
						className="absolute top-6 left-6 text-gray-500 hover:text-gray-700"
					>
						<ArrowLeft className="w-5 h-5" />
					</button>

					<div className="text-center mb-8">
						<h2 className="text-2xl font-bold text-gray-900">Verify Mobile</h2>
						<p className="mt-2 text-gray-600">
							We sent an SMS with your code to
							<br />
							<span className="font-medium">{phoneNumber}</span>
						</p>
					</div>

					<form className="space-y-6" onSubmit={handleVerify}>
						<div>
							<label htmlFor="otp" className="block text-sm font-medium text-gray-700 mb-2">
								Enter OTP
							</label>
							<div className="flex justify-center space-x-2">
								{otp.map((digit, index) => (
									<input
										key={index}
										id={`otp-${index}`}
										type="text"
										maxLength={1}
										value={digit}
										onChange={(e) => handleOtpChange(index, e.target.value)}
										onKeyDown={(e) => handleKeyDown(index, e)}
										className="w-12 h-12 text-center text-xl border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
										pattern="\d*"
										inputMode="numeric"
									/>
								))}
							</div>
						</div>

						<div className="space-y-4">
							<button
								type="submit"
								disabled={otp.some((digit) => digit === '') || isVerifying}
								className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
									otp.some((digit) => digit === '') || isVerifying
										? 'bg-blue-300 cursor-not-allowed'
										: 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
								}`}
							>
								{isVerifying ? (
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
										Verifying...
									</>
								) : (
									'Verify Code'
								)}
							</button>

							<div className="text-center">
								<button
									type="button"
									onClick={handleResend}
									disabled={!canResend}
									className={`text-sm font-medium ${
										canResend ? 'text-blue-600 hover:text-blue-500' : 'text-gray-400 cursor-not-allowed'
									}`}
								>
									Resend OTP {!canResend && `(${countdown}s)`}
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
