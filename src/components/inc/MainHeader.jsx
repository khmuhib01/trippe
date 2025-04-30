'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {useState} from 'react';
import {FiChevronDown, FiMenu, FiX} from 'react-icons/fi';

export default function MainHeader() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [openSubMenu, setOpenSubMenu] = useState(null);
	const pathname = usePathname();

	const menuItems = [
		{name: 'Car Rental', href: '/car-rental'},
		{name: 'Ride Sharing', href: '/ride-sharing'},
		{name: 'Ticketing', href: '/ticketing'},
		{name: 'Hotel Booking', href: '/hotel-booking'},
		{name: 'Food Delivery', href: '/food-delivery'},
		{name: 'Holiday', href: '/holiday'},
		{
			name: 'Visa',
			href: '/visa',
			submenu: [
				{name: 'Visa Application', href: '/visa/application'},
				{name: 'Visa Guide', href: '/visa/guide'},
				{name: 'Visa Transit', href: '/visa/transit'},
			],
		},
	];

	return (
		<header className="bg-white text-gray-900 py-4 border-b border-gray-200 transition-colors duration-300 sticky top-0 z-50">
			<div className="container mx-auto flex items-center justify-between px-4">
				<Link href="/" className="flex items-center">
					<h1 className="text-xl font-bold">My Booking</h1>
				</Link>

				{/* Desktop Menu */}
				<nav className="hidden lg:flex space-x-6 items-center mx-auto">
					{menuItems.map((item) => {
						const isActive = item.href === pathname || item.submenu?.some((sub) => sub.href === pathname);

						return (
							<div key={item.name} className="relative group">
								{item.submenu ? (
									<>
										<button
											type="button"
											className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
												isActive ? 'text-blue-600 font-semibold' : 'text-gray-900 hover:text-blue-600'
											}`}
										>
											{item.name}
											<FiChevronDown className="ml-1 w-4 h-4" />
										</button>
										<div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 bg-white shadow-md rounded-md overflow-hidden min-w-[180px] hidden group-hover:block z-20">
											{item.submenu.map((subitem) => (
												<Link
													key={subitem.name}
													href={subitem.href}
													className={`block px-4 py-2 text-sm hover:bg-gray-100 ${
														subitem.href === pathname ? 'text-blue-600 font-semibold' : 'text-gray-700'
													}`}
												>
													{subitem.name}
												</Link>
											))}
										</div>
									</>
								) : (
									<Link
										href={item.href}
										className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
											isActive ? 'text-blue-600 font-semibold' : 'text-gray-900 hover:text-blue-600'
										}`}
									>
										{item.name}
									</Link>
								)}
							</div>
						);
					})}
				</nav>

				{/* Right Side Buttons */}
				<div className="flex items-center">
					<div className="relative">
						<button className="flex items-center space-x-1 bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-md">
							<span className="text-sm font-medium">EN</span>
							<FiChevronDown className="w-4 h-4" />
						</button>
					</div>
					{/* Mobile Menu Button */}
					<button
						className="lg:hidden p-2 rounded-full text-gray-700 hover:bg-gray-100"
						onClick={() => setMobileMenuOpen(true)}
					>
						<FiMenu className="w-6 h-6" />
					</button>
				</div>
			</div>

			{/* Mobile Sidebar */}
			<div
				className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
					mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
				} sm:hidden`}
			>
				<div className="flex justify-end p-4">
					<button className="p-2 text-gray-700 hover:bg-gray-100" onClick={() => setMobileMenuOpen(false)}>
						<FiX className="w-6 h-6" />
					</button>
				</div>
				<nav className="flex flex-col px-6 space-y-2">
					{menuItems.map((item) => {
						const isActive = item.href === pathname || item.submenu?.some((sub) => sub.href === pathname);
						return (
							<div key={item.name}>
								{item.submenu ? (
									<>
										<button
											className={`bg-none flex justify-between w-full items-center px-3 py-2 rounded-md text-sm transition-colors ${
												isActive ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:bg-gray-100'
											}`}
											onClick={() => setOpenSubMenu(openSubMenu === item.name ? null : item.name)}
										>
											<span>{item.name}</span>
											<FiChevronDown
												className={`ml-2 w-4 h-4 transition-transform ${openSubMenu === item.name ? 'rotate-180' : ''}`}
											/>
										</button>
										{openSubMenu === item.name && (
											<div className="pl-4">
												{item.submenu.map((subitem) => (
													<Link
														key={subitem.name}
														href={subitem.href}
														className={`block py-2 text-sm rounded-md ${
															subitem.href === pathname
																? 'text-blue-600 font-semibold'
																: 'text-gray-600 hover:bg-gray-100'
														}`}
														onClick={() => setMobileMenuOpen(false)}
													>
														{subitem.name}
													</Link>
												))}
											</div>
										)}
									</>
								) : (
									<Link
										href={item.href}
										className={`block px-3 py-2 rounded-md text-sm transition-colors ${
											isActive ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:bg-gray-100'
										}`}
										onClick={() => setMobileMenuOpen(false)}
									>
										{item.name}
									</Link>
								)}
							</div>
						);
					})}
				</nav>
			</div>

			{/* Overlay */}
			{mobileMenuOpen && (
				<div
					className="fixed inset-0 bg-black bg-opacity-40 z-40 lg:hidden"
					onClick={() => setMobileMenuOpen(false)}
				></div>
			)}
		</header>
	);
}
