import LoginButton from "./LoginButton";

export default function AccessDenied() {
    return (
        <>
            <h1>Access Denied</h1>
            <p>You do not have access to this content.</p>
            <LoginButton />
        </>
    )
}