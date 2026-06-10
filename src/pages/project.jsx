import { projects } from '../utils/data'
import ProjectCard from '../component/ProjectCard'

function ProjectSection() {
  return (
    <div className="project-section">
      <h1 className="project-title">Projects <hr className='hamhana' /></h1>

      <div className="flex-baba">
        {projects.map((project) => (
          <div className="project-wrapper" key={project.id}>
            <ProjectCard data={project} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectSection