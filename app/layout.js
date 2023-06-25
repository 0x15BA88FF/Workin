import './globals.css'
import Navbar from '@/components/navbar'

export const metadata = {
	title: 'Workin | Find A Job For You',
}
export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className='w-screen bg-gray-100'>
				<Navbar/>
				<div className='mt-20 md:w'>
					{children}
				</div>
			</body>
		</html>
	)
}