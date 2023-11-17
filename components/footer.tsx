import Link from "next/link";

export default function Footer(){
    return (
        <div className="w-full flex bottom-0 mx-auto justify-center fixed bg-foreground">
            <div className="ml-2 my-auto">
        </div>
        <div className="flex flex-row justify-center gap-4 mx-auto">
            <Link
                href='https://github.com/wobble-house'
                className={`text-background`}
                passHref
                target="_blank"
                rel="noopener noreferrer">
Github
            </Link>
        </div>
    </div>
    )
}