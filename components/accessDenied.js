import LoginButton from "./LoginButton";
import { Container, Spacer } from "@nextui-org/react"

export default function AccessDenied() {
    return (
        <Container>
            <Spacer />
            <h1>Access Denied</h1>
            <p>You do not have access to this content.</p>
            <LoginButton />
        </Container>
    )
}