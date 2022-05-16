import Link from "next/link"
import styles from "../styles/Home.module.css"
import { useEffect } from "react"
import { useRouter } from "next/router"

export default function FourOhFour() {
    const router = useRouter()

    useEffect(() => {
        setTimeout( 
            () => router.push("/"),
            3000
        )
    },[])

    return (
        <div className="not-found">
            <h1>Oooops...</h1>
            <h2>Page cannot be found!</h2>
            <p>Go back to the <Link href='/'><a>Homepage</a></Link>
            </p>
            <h4>You are being redirected</h4>
        </div>
    )
}
