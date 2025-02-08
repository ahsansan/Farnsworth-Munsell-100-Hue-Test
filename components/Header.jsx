import Link from "next/link";

const Header = () => {
    return(
        <header className="my-5 py-5 px-2">
            <Link href="/">
                <h1 className="mb-4 text-3xl text-center font-extrabold leading-none tracking-tight text-gray-900">
                    <span className="underline underline-offset-3 decoration-8 decoration-blue-400">
                        Farnsworth-Munsell 100 Hue Test
                    </span>
                </h1>
            </Link>
        </header>
    )
}

export default Header;