import {AboutDetails} from "@/components/details"
import { about } from "../../lib/data";
export const metadata = {
  title: 'About',
  description: 'Learn some more about lil ol me',
}
export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-10 pb-20">
      <AboutDetails details={about.details} link={about.link} list={about.list} listTitle={about.listTitle} title={about.title} image={about.image}/>
    </main>
  )
}
