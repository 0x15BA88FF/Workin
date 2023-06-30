import './globals.css'
import Navbar from '@/app/components/navbar'
import Provider from '@/app/components/Provider'

export const metadata = {
	title: 'Workin | Find A Job For You',
}
export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className='w-screen bg-gray-100 h-screen'>
				<Provider>
					<Navbar/>
					<div className='h-full pt-24'>
						{children}
					</div>
				</Provider>
			</body>
		</html>
	)
}