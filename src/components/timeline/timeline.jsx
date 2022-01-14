import React from 'react';

import './timeline.css';

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Timeline() {
  return (
    <div className='timeline'>
      <VerticalTimeline>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          contentStyle={{ background: 'black', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  black' }}
          date='2011 - present'
          iconStyle={{ background: 'white', color: '#fff' }}
          // icon={<WorkIcon />}
        >
          <h3 className='vertical-timeline-element-title'>Learning React</h3>

          <p>Epic React - Kent C. Dodds</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='Oct 21 - Dec 21'
          iconStyle={{ background: 'black', color: '#fff' }}
          // icon={<WorkIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            Complete Node.js Bootcamp
          </h3>

          <p>Jonas Schmedtmann</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          contentStyle={{ background: 'black', color: '#fff' }}
          date='Aug 21 - Oct 21'
          iconStyle={{ background: 'white', color: '#fff' }}
          // icon={<WorkIcon />}
        >
          <h3 className='vertical-timeline-element-title'>Dev Academy</h3>
          <h4 className='vertical-timeline-element-subtitle'>
            Auckland - New Zealand
          </h4>
          <p>Coding Bootcamp</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='Jun 21 - Aug 21'
          iconStyle={{ background: 'black', color: '#fff' }}
          // icon={<WorkIcon />}
        >
          <h3 className='vertical-timeline-element-title'>HTML and CSS</h3>

          <p>Jonas Schmedtmann</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          contentStyle={{ background: 'black', color: '#fff' }}
          date='April 2013'
          iconStyle={{ background: 'white', color: '#fff' }}
          // icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>JavaScript course</h3>
          <h4 className='vertical-timeline-element-subtitle'>Online Course</h4>
          <p>Strategy, Social Media</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='November 2012'
          iconStyle={{ background: 'black', color: '#fff' }}
          // icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>Free CodeCamp</h3>
          <h4 className='vertical-timeline-element-subtitle'>Online Course</h4>
          <p>Learning Html and Css</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          // icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
}

export default Timeline;
