'use client'
import Image from "next/image"
export default function DetailsCard(){
    return(
    <div className={`relative flex flex-col max-w-lg mx-auto justify-center gap-10`}>
        <div className={`relative flex flex-col md:flex-row border-2 border-solid border-primary rounded-lg gap-8 md:gap-4 items-start justify-start z-30 group overflow-hidden`}>
            <Image src={'/images/rossalanford.jpg'} alt={'image'} fill style={{objectFit: 'cover', objectPosition: '50% 10%'}} className='z-10 absolute md:px-20'/>
            <div className={`z-20 relative flex flex-col bg-gradient-to-r from-background from-25% via-transparent via-55% to-background to-75% px-4 pt-2 pb-4 w-full group`}>
                <h1 className={`text-4xl md:text-5xl text-center font-extrabold text-primary hover:text-secondary group-hover:scale-105 transition-all ease-in-out`}>ROSS ALAN FORD</h1>
                <hr className={`border-[1px] border-accent border-solid rounded-full my-2 w-full group-hover:w-5/6 mx-auto transition-all ease-in-out`}></hr>
                <ul className="list-inside list-disc p-2 group-hover:scale-105">
                    <h3 className={`text-2xl font-mono text-foreground hover:scale-110 hover:text-primary hover:ml-6`}>Skills:</h3>
                    <li className={`text-foreground text-sm hover:scale-110 hover:ml-5 hover:text-primary`}>
                        Being Cool
                    </li>
                    <li className={`text-foreground text-sm hover:scale-110 hover:ml-5 hover:text-primary`}>
                        Being Cool
                    </li>
                    <h3 className={`text-foreground font-bold text-xl py-2 hover:scale-110 hover:ml-5 hover:text-secondary`}>&</h3>
                    <li className={`text-foreground text-smh over:scale-110 hover:ml-5 hover:text-primary`}>
                        Chillin&apos; out
                    </li>
                    <li className={`text-foreground text-sm hover:scale-110 hover:ml-5 hover:text-primary`}>
                        Maxin&apos;
                    </li>
                    <li className={`text-foreground text-sm hover:scale-110 hover:ml-5 hover:text-primary`}>
                        ..and Relaxxin&apos;
                    </li>
                </ul>
            </div>
        </div>
        <div className={`flex flex-col p-4 gap-1 bg-background pt-8 overflow-hidden border-2 border-solid border-primary rounded-lg group`}>
            <h2 className={`text-2xl font-extrabold text-primary hover:text-secondary group-hover:text-3xl transition-all ease-in-out`}>BIO</h2>
            <hr className="border-accent border-[1px] active:scale-110 w-full group-hover:w-4/5 my-2 transition-all ease-in-out"></hr>
            <p className={`font-mono`}>
            I am a Full-Stack Developer and overall Business Operations whiz with experience leading teams of varying sizes and scope. I come from an operations focused background, with the past 6 years working for a 501(c)6 not-for-profit trade organization called A2IM, which is focused within the US music business industry. At A2IM I established a modern, cloud-based IT and web infrastructure alongside managing live event production contractors & varying other teams. In conjunction with the development of new business operations with policies & procedures, I also participated in many of the numerous in-person networking events as well as moderated live panels & a few webinars.
<br></br>
<br></br>
Before working for A2IM I helped grow a chain of retail stores in an emerging disruptive technology located in Manhattan & Brooklyn. After originally taking a part-time position out of interest in a hobby, I ended up creating inventory and tracking systems that were scaled across 10+ stores as the industry exploded. I then took a position managing teams across multiple site locations.
<br></br>
<br></br>
In prior experience I have held various other operations & management roles within a few different industries including industrial fiber optics/network installation, medical insurance, big-box retail, and even unfortunately, the pawn shop industry. I have recently been working on a contract with an organization that focuses on physical therapy for traumatic brain injury patients.  I have been tasked to modernize their web infrastructure & create new features that integrate into their existing systems.
<br></br>
<br></br>
On a personal note: I&apos;m a father, musician and a gamer. I enjoy playing FPS games and tinkering with analogue synthesizers & various other electronic gadgets. Being a musician, live music originally brought me from my hometown in Tampa, Florida to Tennessee.  After spending a couple years there I eventually ventured to New York City to fulfill my creative destiny! I subsequently traveled back nearly a decade later during the covid-19 pandemic. Not long after moving back, my son Alan was born and we now enjoy our time outdoors together at our home in Chattanooga with our super cute cat named Dwayne.

            </p>
        </div>
    </div>
    )
}