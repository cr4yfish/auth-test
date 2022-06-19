import Link from "next/Link";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Header() {
    const { data: session } = useSession();
    const loading = session === "loading";

    return (
        <header>
            
        </header>
    )
}