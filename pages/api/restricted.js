import { getSession } from "next-auth/react";

const getAuth = async (req, res) => {
    const session = await getSession({ req });

    if(session) {
        res.send({
            content:
            "This is protected content. You can access this content because you are signed in.",
        })
    } else {
        res.send({
            error: "You must be signed in to view the protected content.",
        })
    }
}

export default getAuth;