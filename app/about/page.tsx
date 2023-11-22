import DetailsCard from "@/components/detailsCard"
export const metadata = {
  title: 'About',
  description: 'Learn some more about lil ol me',
}
export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-16">
      <DetailsCard/>
    </main>
  )
}
