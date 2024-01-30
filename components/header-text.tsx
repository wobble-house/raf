export function H1({children}:{children: React.ReactNode}){
    return(
        <div className={`relative animate-wiggle active:animate-hardwiggle group-active:animate-hardwiggle ml-4 cursor-pointer active:brightness-200 group-active:invert`}>
            <h1 className={`prevent-selection z-60 text-4xl md:text-5xl text-left font-extrabold hover:invert group-active:brightness-200 group-hover:scale-105 transition-all ease-in-out font-sans animate-text bg-clip-text text-transparent bg-gradient-radial from-accent via-purple-500 to-secondary`}>{children}</h1>
        </div>
        )
}

export function H3({children, position}:{children: React.ReactNode, position?: string}){
    return(
        <div className={`group-hover:animate-wiggle group-active:animate-hardwiggle ${position == "right" ? "group-hover:mr-4":"group-hover:ml-4"} cursor-pointer`}>
            <h3 className={`prevent-selection text-2xl font-mono text-primary group-hover:animate-text hover:invert group-active:brightness-200 group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-radial group-hover:from-accent group-hover:via-purple-500 group-hover:to-secondary transition-all`}
            >{children}</h3>
        </div>
    )
}