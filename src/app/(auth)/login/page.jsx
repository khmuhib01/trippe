'use client';
import React, {useState} from 'react';
import {Send} from '@/ui-share/Icon';
import {useRouter} from 'next/navigation';

export default function LoginPage() {
	const router = useRouter();
	const [phoneNumber, setPhoneNumber] = useState('');
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsSubmitting(true);
		// Simulate sending verification code
		setTimeout(() => {
			setIsSubmitting(false);
			// Here you would typically handle the verification code sending
			console.log('Verification code sent to:', phoneNumber);
			router.push('/otp-verification');
		}, 1500);
	};

	return (
		<div className="bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
			<div className="sm:mx-auto sm:w-full sm:max-w-md">
				<div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
					<div className="text-center mb-8">
						<h2 className="text-2xl font-bold text-gray-900">Verify Mobile</h2>
						<p className="mt-2 text-gray-600">We will send an SMS with a code to verify your mobile number.</p>
					</div>

					<form className="space-y-6" onSubmit={handleSubmit}>
						<div>
							<label htmlFor="phone" className="block text-sm font-medium text-gray-700">
								Mobile Number
							</label>
							<div className="mt-1 relative rounded-md shadow-sm">
								<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
									<span className="text-gray-500 sm:text-sm">+880</span>
								</div>
								<input
									type="tel"
									id="phone"
									name="phone"
									value={phoneNumber}
									onChange={(e) => setPhoneNumber(e.target.value)}
									placeholder="Input your mobile no"
									className="block w-full pl-16 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
									required
								/>
							</div>
						</div>

						<div>
							<button
								type="submit"
								disabled={!phoneNumber || isSubmitting}
								className={`w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
									!phoneNumber || isSubmitting
										? 'bg-blue-300 cursor-not-allowed'
										: 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
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
										Sending...
									</>
								) : (
									<>
										<Send className="w-5 h-5 mr-2" />
										Send Code
									</>
								)}
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
