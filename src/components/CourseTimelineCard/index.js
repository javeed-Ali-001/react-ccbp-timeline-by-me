import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimeLineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList} = courseDetails

  return (
    <>
      <div className="course-title-and-duration-container">
        <h1 className="title">{courseTitle}</h1>
        <div className="duration-container">
          <AiFillClockCircle color="#171f46" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <ul className="tagsListContainer">
        {tagsList.map(eachTag => (
          <li className="tag" key={eachTag}>
            <p>{eachTag.name}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default CourseTimeLineCard
