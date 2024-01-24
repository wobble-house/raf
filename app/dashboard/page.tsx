import { DashboardList } from "@/components/dashboardList"
export const metadata = {
  title: 'Dashboard',
  description: 'Learn some more about lil ol me',
}
export default function Dashboard() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-10 pb-20">
      <DashboardList/>
    </main>
  )
}
