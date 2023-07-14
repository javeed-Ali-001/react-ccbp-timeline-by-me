import {AiFillCalendar} from 'react-icons/ai'

import './index.css'

const ProjectTimeLineCard = props => {
  const {projectDetails} = props
  const {
    imageUrl,
    projectTitle,
    description,
    projectUrl,
    duration,
  } = projectDetails

  return (
    <div className="projectCardContainer">
      <img src={imageUrl} alt="project" className="project-Image" />
      <div className="project-And-duration">
        <h1 className="project-title">{projectTitle}</h1>
        <div className="duration-container">
          <AiFillCalendar color="#171f46" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="project-description">{description}</p>
      <a className="visitUrl" href={projectUrl}>
        Visit
      </a>
    </div>
  )
}

export default ProjectTimeLineCard
