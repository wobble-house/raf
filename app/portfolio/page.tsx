
import ProjectList from "../../components/projectList";
import { projects } from "../../lib/data";
export const metadata = {
  title: 'Portfolio',
  description: 'Here are some of the Projects I have worked on',
}
export default function Portfolio() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-16">
      <ProjectList projects={projects}/>
    </main>
  )
}
