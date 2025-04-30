import './../../globals.css';
import CarRentalHeader from '@/components/inc/car-rental/CarRentalHeader';
import CarRentalFooter from '@/components/inc/car-rental/CarRentalFooter';

export default function CarRentalLayout({children}) {
	return (
		<div>
			<CarRentalHeader />
			{children}
			<CarRentalFooter />
		</div>
	);
}
