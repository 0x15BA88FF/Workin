import GoogleSignInButton from "@/app/components/googleSignInButton";

const SignUp = () => {
	return (
		<div className="container mx-auto w-full mt-20 flex md:items-center justify-center">
			<div className="flex flex-col w-full p-4 bg-white gap-2 rounded-lg">
				<GoogleSignInButton/>
				<hr/>
				<label htmlFor="email">Email</label>
				<input type="email" name="email" id="email" />
				<label htmlFor="password">Password</label>
				<input type="password" name="password" id="password" />
				
			</div>
		</div>
	);
}

export default SignUp;