import Link from 'next/link'
import Image from 'next/image';

function Navbar(){
    return (
        <nav>
            <div className="logo">
                <Image width='128' height='72' src='/logo.png' alt="logo" />
            </div>

            <Link href='/'>Home</Link>
            <Link href='/about'><a>About</a></Link>
            <Link href='/ninjas'><a>Ninja Listing</a></Link>
        </nav>
    )
}

export default Navbar;
