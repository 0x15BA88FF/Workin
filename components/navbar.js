'use client'

import Link from "next/link";
import Image from "next/image";
import { useState } from 'react';

const Navbar = () => {
    const [ isLoggedIn, setIsLoggedIn ] = useState(true)
    const [ isNavDisplayed, setIsNavDisplayed ] = useState(false)
    const [ isProfileDropDisplayed, setIsProfileDropDisplayed ] = useState(false)

    const toogleNav = () => { setIsNavDisplayed(!isNavDisplayed) };
    const toogleProfileDropdown = () => { setIsProfileDropDisplayed(!isProfileDropDisplayed && isLoggedIn) };

	return (
		<>
			<nav className="flex flex-col gap-2 w-screen fixed top-0 z-10 px-6 p-4 bg-white">
				<div className="flex items-center justify-between">
					<div className="flex gap-4 items-center">
						<button onClick={ () => toogleNav() } className="p-2 rounded-md gap-2 flex flex-col items-center sm:hidden hover:bg-gray-200 focus:outline-3">
							<span className="block w-[22px] h-[2px] bg-black"></span>
							<span className="block w-[22px] h-[2px] bg-black"></span>
							<span className="block w-[22px] h-[2px] bg-black"></span>
						</button>
						<Link href="/">
							<Image src='/workin.svg' alt="Workin Logo" width={100} height={50} className="aspect-auto w-20" />
						</Link>
						<Link href="/" className="ml-2 hidden font-semibold sm:block">Find Job</Link>
						<Link href="/myjobs" className="hidden font-semibold sm:block">My Jobs</Link>
					</div>
					<div className="flex items-center gap-4">
                        {   !isLoggedIn?
                            <>
                                <Link href="/auth" className="hidden font-semibold sm:block">Log in</Link>
                                <Link href="/auth" className="px-4 py-3 text-white font-semibold bg-blue-500 rounded-md">Sign up</Link>
                            </>
                            :
                            <button onClick={ () => toogleProfileDropdown() } className="w-max h-mav bg-white rounded-full">
                                <Image alt="profile picture" src="/logo.png" width={30} height={30} className="rounded-full"/>
                            </button>
                        }
					</div>
				</div>
                <div className={`flex-col overflow-hidden md:hidden ${ isNavDisplayed? "hidden" : "flex" }`}>
                    <hr/>
            		<Link href="/" className="p-2 font-semibold rounded-md sm:block">Find Job</Link>
					<Link href="myjobs" className="p-2 font-semibold rounde-md sm:block">My Jobs</Link>
                </div>
			</nav>
            <div className={`top-[66px] right-[5px] p-2 border-2 w-max rounded-md shadow-lg bg-white fixed flex-col border-gray-300 overflow-hidden ${ isProfileDropDisplayed ? "hidden" : "flex" }`}>
                <Link href="/profile/me" className="w-[200px] p-2 font-semibold rounded-md sm:block">Profile</Link>
                <Link href="/logout" className="w-[200px] p-2 font-semibold rounde-md sm:block">Logout</Link>
            </div>
		</>
	);
}

export default Navbar;
