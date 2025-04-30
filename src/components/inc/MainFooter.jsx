'use client';
import Image from 'next/image';
import {FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn} from 'react-icons/fa';
import {stPay, amexCard, bkash, dbbl, dinnersClub, masterCard, nagad, ok, tap, upay, visaCard} from '@/ui-share/Image';
import {useEffect, useRef} from 'react';

export default function MainFooter() {
	const canvasRef = useRef(null);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const canvas = canvasRef.current;
			if (!canvas) return;

			const ctx = canvas.getContext('2d');
			const resizeCanvas = () => {
				canvas.width = canvas.offsetWidth;
				canvas.height = canvas.offsetHeight;
			};
			resizeCanvas();

			class Bubble {
				constructor() {
					this.reset();
					this.y = Math.random() * canvas.height;
				}

				reset() {
					this.x = Math.random() * canvas.width;
					this.y = canvas.height + Math.random() * 100;
					this.radius = Math.random() * 15 + 5;
					this.speed = Math.random() * 1 + 0.5;
					this.opacity = Math.random() * 0.2 + 0.05;
					this.wobble = Math.random() * 2;
					this.wobbleSpeed = Math.random() * 0.02 + 0.01;
				}

				update() {
					this.y -= this.speed;
					this.x += Math.sin(this.y * this.wobbleSpeed) * this.wobble;

					if (this.y < -this.radius * 2) {
						this.reset();
					}
				}

				draw() {
					ctx.beginPath();
					ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
					ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
					ctx.fill();
				}
			}

			const bubbles = Array.from({length: 20}, () => new Bubble());
			let animationId;

			const animate = () => {
				ctx.clearRect(0, 0, canvas.width, canvas.height);
				bubbles.forEach((bubble) => {
					bubble.update();
					bubble.draw();
				});
				animationId = requestAnimationFrame(animate);
			};

			animate();

			const handleResize = () => {
				resizeCanvas();
			};

			window.addEventListener('resize', handleResize);
			return () => {
				window.removeEventListener('resize', handleResize);
				cancelAnimationFrame(animationId);
			};
		}
	}, []);

	return (
		<footer className="relative overflow-hidden bg-gradient-to-br from-blue-50/70 to-blue-100/70 text-gray-800 pt-10">
			{/* Bubble animation canvas */}
			<canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-70" />

			<div className="container mx-auto px-4 relative z-10">
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-8">
					{/* Company Info */}
					<div>
						<h4 className="text-lg font-semibold mb-4">Company Info</h4>
						<p className="text-sm">
							ShareTrip is the country's first and leading online travel aggregator (OTA). Since our inception, we have
							dreamt of making travel easier for people of all ages and we move forward to make that dream into reality.
						</p>
					</div>

					{/* Explore */}
					<div>
						<h4 className="text-lg font-semibold mb-4">Explore</h4>
						<ul className="space-y-2 text-sm">
							<li>
								<a href="#" className="hover:text-blue-600">
									About Us
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-blue-600">
									Terms & Conditions
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-blue-600">
									FAQ
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-blue-600">
									Hotel Sitemap
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-blue-600">
									Medical Tourism
								</a>
							</li>
						</ul>
					</div>

					{/* Services */}
					<div>
						<h4 className="text-lg font-semibold mb-4">Services</h4>
						<ul className="space-y-2 text-sm">
							<li>
								<a href="#" className="hover:text-blue-600">
									Flight
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-blue-600">
									Hotel
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-blue-600">
									Holiday
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-blue-600">
									Visa
								</a>
							</li>
						</ul>
					</div>

					{/* Useful Links */}
					<div>
						<h4 className="text-lg font-semibold mb-4">Useful Links</h4>
						<ul className="space-y-2 text-sm">
							<li>
								<a href="#" className="hover:text-blue-600">
									Travel Guide
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-blue-600">
									Travel Advisory
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-blue-600">
									Visa Guide
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-blue-600">
									Visa Application
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-blue-600">
									ST Pay
								</a>
							</li>
						</ul>
					</div>

					{/* Promotions */}
					<div>
						<h4 className="text-lg font-semibold mb-4">Promotions</h4>
						<ul className="space-y-2 text-sm">
							<li>
								<a href="#" className="hover:text-blue-600">
									News
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-blue-600">
									Promotions
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-blue-600">
									VAS
								</a>
							</li>
						</ul>
					</div>

					{/* Payment icons */}
					<div className="col-span-2 sm:col-span-1 md:col-span-2 lg:col-span-1">
						<h4 className="text-lg font-semibold mb-4">We accept</h4>
						<div className="flex flex-wrap items-center gap-3">
							<Image src={stPay} alt="ST Pay" className="border-1 border-gray-200 rounded-md" height={50} width={50} />
							<Image
								src={amexCard}
								alt="Amex Card"
								className="border-1 border-gray-200 rounded-md"
								height={50}
								width={50}
							/>
							<Image src={bkash} alt="Bkash" className="border-1 border-gray-200 rounded-md" height={50} width={50} />
							<Image src={dbbl} alt="DBBL" className="border-1 border-gray-200 rounded-md" height={50} width={50} />
							<Image
								src={dinnersClub}
								alt="Dinners Club"
								className="border-1 border-gray-200 rounded-md"
								height={50}
								width={50}
							/>
							<Image
								src={masterCard}
								alt="Master Card"
								className="border-1 border-gray-200 rounded-md"
								height={50}
								width={50}
							/>
							<Image src={nagad} alt="Nagad" className="border-1 border-gray-200 rounded-md" height={50} width={50} />
							<Image src={ok} alt="OK" className="border-1 border-gray-200 rounded-md" height={50} width={50} />
							<Image src={tap} alt="Tap" className="border-1 border-gray-200 rounded-md" height={50} width={50} />
							<Image src={upay} alt="Upay" className="border-1 border-gray-200 rounded-md" height={50} width={50} />
							<Image
								src={visaCard}
								alt="Visa Card"
								className="border-1 border-gray-200 rounded-md"
								height={50}
								width={50}
							/>
						</div>
					</div>
				</div>

				{/* Contact & Offices */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
					<div className="space-y-2">
						<h4 className="text-lg font-semibold mb-4">Contact Us</h4>
						<p className="text-sm">
							Email:{' '}
							<a href="mailto:ask@sharetrip.net" className="text-blue-600">
								ask@sharetrip.net
							</a>
						</p>
						<p className="text-sm">
							Phone:{' '}
							<a href="tel:+8809617617617" className="text-blue-600">
								+880 9617 617617
							</a>
						</p>
						<p className="text-sm">
							WhatsApp:{' '}
							<a href="#" className="text-blue-600">
								Message us
							</a>
						</p>
						<div className="flex space-x-4 mt-4">
							<a href="#">
								<FaFacebookF className="w-5 h-5 hover:text-blue-600" />
							</a>
							<a href="#">
								<FaTwitter className="w-5 h-5 hover:text-blue-600" />
							</a>
							<a href="#">
								<FaInstagram className="w-5 h-5 hover:text-blue-600" />
							</a>
							<a href="#">
								<FaYoutube className="w-5 h-5 hover:text-blue-600" />
							</a>
							<a href="#">
								<FaLinkedinIn className="w-5 h-5 hover:text-blue-600" />
							</a>
						</div>
					</div>

					<div className="space-y-2">
						<h4 className="text-lg font-semibold mb-4">ShareTrip Lounge (Dhaka)</h4>
						<p className="text-sm">
							3rd Floor, House 1,
							<br />
							Road 17, Block C, Banani,
							<br />
							Dhaka 1213, Bangladesh
						</p>
						<a href="#" className="flex items-center text-blue-600 text-sm mt-2">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
								<path d="M5 8a7 7 0 1114 0c0 5-7 11-7 11S5 13 5 8z" />
								<path d="M8 8a2 2 0 104 0 2 2 0 00-4 0z" />
							</svg>
							View Map
						</a>
					</div>

					<div className="space-y-2">
						<h4 className="text-lg font-semibold mb-4">Chattogram Office</h4>
						<p className="text-sm">
							BM Height 5th Floor,
							<br />
							318 Sheikh Mujib Road,
							<br />
							Chattogram 4100, Bangladesh
						</p>
						<a href="#" className="flex items-center text-blue-600 text-sm mt-2">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
								<path d="M5 8a7 7 0 1114 0c0 5-7 11-7 11S5 13 5 8z" />
								<path d="M8 8a2 2 0 104 0 2 2 0 00-4 0z" />
							</svg>
							View Map
						</a>
					</div>
				</div>

				{/* Certifications */}
				<div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-6 text-center">
					<div className="text-sm">Accredited Member</div>
					<div className="text-sm">Verified by</div>
					<div className="text-sm">Our Partners</div>
					<div className="text-sm">Authorised by</div>
					<div className="text-sm">Registered at</div>
					<div className="text-sm">Certified By</div>
				</div>

				{/* Bottom Links */}
				<div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 mb-4">
					<a href="#" className="hover:text-blue-600">
						Support Center
					</a>
					<a href="#" className="hover:text-blue-600">
						Payment Security
					</a>
					<a href="#" className="hover:text-blue-600">
						Privacy Policy
					</a>
					<a href="#" className="hover:text-blue-600">
						EMI
					</a>
				</div>

				{/* Copyright */}
				<div className="text-center text-xs text-gray-500 py-4 border-t">
					Copyright © 2025.{' '}
					<a href="#" className="text-blue-600">
						ShareTrip
					</a>
					. All rights reserved.
				</div>
			</div>
		</footer>
	);
}
