import DetailsCard from "@/components/detailsCard"
import Nav from "@/components/nav"
export const metadata = {
  title: 'About',
  description: 'Learn some more about lil ol me',
}
export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <DetailsCard/>
    </main>
  )
}
