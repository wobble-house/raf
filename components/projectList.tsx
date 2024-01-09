'use client';
import ProjectModal from "./projectModal"

export default function ProjectList({projects}){

    return(
        <ul className={`grid grid-cols-1 md:grid-cols-3 justify-center gap-8 z-10`}>
            {projects.map((project, index) => (
                <ProjectModal key={index} id={project.index} title={project.title} listTitle={project.listTitle} image={project.image} list={project.list} link={project.link} details={project.details} />
            ))}
        </ul>
    )
}