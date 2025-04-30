import React from 'react';
import {FiArrowUpRight} from 'react-icons/fi';
import Link from 'next/link';

export default function CarRentalFooter() {
	return (
		<section
			className="h-[200px] bg-no-repeat bg-cover bg-center text-white relative"
			style={{backgroundImage: "url('/assets/images/rental-car/footer-bg.png')"}}
		>
			<div className="absolute inset-0 bg-black/60 flex items-center justify-center px-4 py-8 md:py-0">
				<div className="container mx-auto">
					<div className="flex flex-col md:flex-row justify-between items-center gap-4">
						<div className="text-center md:text-left max-w-lg">
							<h2 className="text-2xl font-semibold mb-2">Join as a partner!</h2>
							<p className="text-sm">
								Take your rental business to the next level with the lowest commission in the market.
							</p>
						</div>

						<Link
							href="/partner-signup"
							className="inline-flex items-center px-6 py-3 rounded-full bg-white text-black text-sm font-medium shadow hover:bg-gray-100 transition whitespace-nowrap"
						>
							Sign up as a partner <FiArrowUpRight className="ml-2 w-4 h-4" />
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
