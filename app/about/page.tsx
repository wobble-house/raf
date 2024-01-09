import DetailsCard from "@/components/detailsCard"
import { about } from "../../lib/data";
export const metadata = {
  title: 'About',
  description: 'Learn some more about lil ol me',
}
export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-16">
      <DetailsCard details={about.details} link={about.link} list={about.list} listTitle={about.listTitle} title={about.title} image={about.image}/>
    </main>
  )
}
