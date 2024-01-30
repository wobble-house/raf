import ProjectList from "../../components/projectList";
import { projects } from "../../lib/projectsData";
import { H1 } from "@/components/header-text";
import Line from "@/components/line";
export const metadata = {
  title: 'Portfolio',
  description: 'Here are some of the Projects I have worked on',
}
export default function Portfolio() {
  return (
    <main className="flex min-h-screen flex-col max-w-3xl mx-auto gap-12">
      <div className="relative flex flex-col justify-between pt-8 px-8 bg-gradient-radial from-zinc-900 to-background/75 rounded-md z-50">
        <H1>Professional Projects</H1>
        <Line direction="left"/>
        <ProjectList projects={projects}/>
      </div>
      <div className="relative flex flex-col justify-between pt-8 px-8 bg-gradient-radial from-zinc-900 to-background/75 rounded-md z-40">
        <H1>Personal Projects</H1>
        <Line direction="left"/>
        <ProjectList projects={projects}/>
      </div>
    </main>
  )
}
