import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
	return (
		<>
			<nav className="w-screen fixed top-0 px-6 p-4">
				<div className="flex items-center justify-between">
					<div className="flex gap-4 items-center">
						<button className="gap-2 flex flex-col items-center sm:hidden">
							<span className="block w-[22px] h-[2px] bg-black"></span>
							<span className="block w-[22px] h-[2px] bg-black"></span>
							<span className="block w-[22px] h-[2px] bg-black"></span>
						</button>
						<Link href="/">
							<Image src='/workin.svg' alt="Workin Logo" width={100} height={50} className="aspect-auto w-20" />
						</Link>
						<Link href="#" className="ml-2 hidden font-semibold sm:block">Find Job</Link>
						<Link href="#" className="hidden font-semibold sm:block">My Jobs</Link>
					</div>
					<div className="flex items-center gap-4">
						<Link href="#" className="hidden font-semibold sm:block">Log in</Link>
						<Link href="#" className="px-4 py-3 text-white font-semibold bg-blue-500 rounded-md">Sign up</Link>
					</div>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
