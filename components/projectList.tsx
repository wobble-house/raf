'use client';
import ProjectModal from "./projectModal"

export default function ProjectList({projects}){

    return(
        <ul className={`grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-8 z-10 py-10 mx-auto`}>
            {projects.map((project, index) => (
                <ProjectModal key={index} id={project.index} title={project.title} listTitle={project.listTitle} image={project.image} list={project.list} link={project.link} details={project.details} />
            ))}
        </ul>
    )
}