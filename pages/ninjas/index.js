import styles from '../../styles/Ninjas.module.css'
import Link from 'next/link'

export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json()
    return {
        props: {
            Ninjas: data
        }
    }
}

function Ninjas(props){
    return (
        <div>
            Ninjas
            {
                props.Ninjas.map(ninja => (
                    <Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
                        <a className={styles.single}>
                            <h3>{ninja.name}</h3>
                        </a>

                    </Link>
                ))

            }
        </div>

    )
}
export default Ninjas;