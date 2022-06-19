import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "@nextui-org/react";

export default function LoginButton() {
    const { data: session } = useSession();

    if(session) {
        return (
            <>
            Signed in as {session.user.name} <br />
            <Button color="warn" onClick={() => signOut()}>Sign out</Button>
            </>
        )
    }
    return (
        <>
        <Button shadow onClick={() => signIn()}>Sign in</Button>
        </>
    )
}