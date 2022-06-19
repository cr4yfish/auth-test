import { signIn } from "next-auth/react";
import Link from "next/Link"

export default function AccessDenied() {
    return (
        <>
            <h1>Access Denied</h1>
            <p>You do not have access to this content.</p>
            <Link href="/api/auth/signin"
                onClick={(e) => {
                    e.preventDefault();
                    signIn();
                }}
            ><a>Sign in</a></Link>
        </>
    )
}