import { signIn } from "next-auth/react"

export default function SignInButton() {
	return (
		<button onClick={() => signIn()}>Sign in</button>
	)
}