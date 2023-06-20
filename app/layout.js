import './globals.css'
import Navbar from '@/components/navbar'

export const metadata = {
    title: 'Workin | Find A Job For You',
}
export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className='w-screen'>
                <Navbar/>
                <div className='mt-20'>
                    {children}
                </div>
            </body>
        </html>
    )
}