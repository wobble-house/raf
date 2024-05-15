import {AboutDetails} from "../../components/details";
import { about } from "../../lib/aboutData";
import { getMDXComponents } from "../../components/mdx";

export const metadata = {
  title: 'About',
  description: 'Learn some more about lil ol me',
}

export default async function About() {
  const bio = await getMDXComponents('./lib/bio.mdx')
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-10 pb-20">
      <AboutDetails list={about.list} gitlink={about.gitlink} link={about.link} listTitle={about.listTitle} title={about.title} image={about.image}>
      <div id={`mdx`} dangerouslySetInnerHTML={{ __html: bio.value }} />
      </AboutDetails>
    </main>
  )
}
