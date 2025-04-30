'use client';
import Link from 'next/link';
import {useState} from 'react';
import {FiMenu, FiX, FiUser} from 'react-icons/fi';

export default function CarRentalHeader() {
	const [menuOpen, setMenuOpen] = useState(false);

	const menuItems = [
		{name: 'Favorite routes', href: '/car-rental'},
		{name: 'Book for events', href: '/ride-sharing'},
		{name: 'Business', href: '/ticketing'},
		{name: 'Drive with jatri', href: '/hotel-booking'},
	];

	return (
		<header className="bg-white border-b border-gray-200 h-[40px] sticky top-[69px] z-40">
			<div className="container mx-auto px-4 flex justify-between items-center h-full">
				{/* Left Side - Menu Items */}
				<nav className="hidden md:flex space-x-6">
					{menuItems.map((item) => (
						<Link key={item.name} href={item.href} className="text-sm text-gray-800 hover:text-black font-medium">
							{item.name}
						</Link>
					))}
				</nav>

				{/* Mobile Menu Button */}
				<div className="md:hidden">
					<button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-800">
						{menuOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
					</button>
				</div>

				{/* Right Side - Login */}
				<div className="flex items-center space-x-1 text-sm text-gray-800">
					<FiUser className="w-4 h-4" />
					<Link href="/login" className="hover:text-black font-medium">
						Log in
					</Link>
				</div>
			</div>

			{/* Mobile Dropdown Menu */}
			{menuOpen && (
				<div className="md:hidden px-4 py-2 bg-white border-t border-gray-200 space-y-2">
					{menuItems.map((item) => (
						<Link
							key={item.name}
							href={item.href}
							className="block text-sm text-gray-800 hover:text-black"
							onClick={() => setMenuOpen(false)}
						>
							{item.name}
						</Link>
					))}
				</div>
			)}
		</header>
	);
}
