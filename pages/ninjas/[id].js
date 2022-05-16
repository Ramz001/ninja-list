export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    const paths = data.map(ninja => {
        return {
            params: {
                id: ninja.id.toString()
            }
        }
    })
    return {
        paths,
        fallback: false
    }
}
export const getStaticProps = async ({ params }) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const data = await res.json()
    return {
        props: {
            ninja: data
        }
    }
}


export default function Details({ ninja }) {
    return(
        <div>
            <h1>Details</h1>
            <p>{ninja.name}</p>
            <p>{ninja.email}</p>
            <p>{ninja.address.city}</p>
        </div>
    )
}