import Link from "next/link";

export default function Footer(){
    return (
        <div className="w-full border-t-2 py-1 border-primary border-solid flex bottom-0 mx-auto justify-center fixed bg-gradient-radial from-zinc-900 to-background">
            <div className="ml-2 my-auto">
        </div>
        <div className="flex flex-row justify-center gap-4 mx-auto">
            <Link
                href='https://github.com/wobble-house'
                className={`text-foreground hover:text-primary active:text-secondary font-sans`}
                passHref
                target="_blank"
                rel="noopener noreferrer">
Github
            </Link>
        </div>
    </div>
    )
}