import {Chrono} from 'react-chrono'

import './index.css'
import CourseTimeLineCard from '../CourseTimelineCard'
import ProjectTimeLineCard from '../ProjectTimelineCard'

const TimelineView = props => {
  const {timelineItemsList} = props

  return (
    <div className="timeline-container">
      <div className="responsive-container">
        <div className="heading-container">
          <h1 className="heading">
            MY JOURNEY OF <br />
            <span className="ccbpHeading">CCBP 4.0</span>
          </h1>
        </div>
        <Chrono
          theme={{secondary: 'white'}}
          items={timelineItemsList}
          mode="VERTICAL_ALTERNATING"
        >
          {timelineItemsList.map(eachItem => {
            if (eachItem.categoryId === 'PROJECT') {
              return (
                <ProjectTimeLineCard
                  key={eachItem.id}
                  projectDetails={eachItem}
                />
              )
            }
            return (
              <CourseTimeLineCard key={eachItem.id} courseDetails={eachItem} />
            )
          })}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
