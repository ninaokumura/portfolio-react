import React from 'react';
import {
  FaNodeJs,
  FaReact,
  FaHtml5,
  FaFreeCodeCamp,
  FaGraduationCap,
  FaStar,
  FaGithub,
} from 'react-icons/fa';
import { SiJavascript, SiMongodb } from 'react-icons/si';
import { GrCertificate } from 'react-icons/gr';

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './timeline.css';

function Timeline() {
  return (
    <div className='timeline'>
      <VerticalTimeline>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='Dec 2021 - present'
          iconStyle={{ background: 'rebeccaPurple', color: 'whiteSmoke' }}
          icon={<FaReact />}
        >
          <h3 className='vertical-timeline-element-title'>Learning React</h3>
          <p>Epic React - Kent C. Dodds</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className='vertical-timeline-element'
          date='Oct 21 - Dec 21'
          iconStyle={{ background: 'rebeccaPurple', color: 'whiteSmoke' }}
          icon={<FaNodeJs />}
        >
          <h3 className='vertical-timeline-element-title'>MongoDB Basics</h3>

          <p>MongoDB University</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className='vertical-timeline-element'
          date='Oct 21 - Dec 21'
          iconStyle={{ background: 'rebeccaPurple', color: 'whiteSmoke' }}
          icon={<FaNodeJs />}
        >
          <h3 className='vertical-timeline-element-title'>Node.js Bootcamp</h3>

          <p>Jonas Schmedtmann - Udemy</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element'
          date='Aug 21 - Oct 21'
          iconStyle={{ background: 'rebeccaPurple', color: 'whiteSmoke' }}
          icon={<FaGraduationCap />}
        >
          <h3 className='vertical-timeline-element-title'>
            Enspiral Dev Academy
          </h3>

          <p>Coding Bootcamp</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element'
          date='Jun 21 - Aug 21'
          iconStyle={{ background: 'rebeccaPurple', color: 'whiteSmoke' }}
          icon={<FaHtml5 />}
        >
          <h3 className='vertical-timeline-element-title'>HTML and CSS</h3>

          <p>Jonas Schmedtmann</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element'
          // contentStyle={{ background: 'black', color: '#fff' }}
          date='April 2013'
          iconStyle={{ background: 'rebeccaPurple', color: 'whiteSmoke' }}
          icon={<SiJavascript />}
        >
          <h3 className='vertical-timeline-element-title'>JavaScript</h3>
          {/* <h4 className='vertical-timeline-element-subtitle'>Online Course</h4> */}
          <p>Jonas Schmedtmann - Udemy</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='November 2012'
          iconStyle={{ background: 'rebeccaPurple', color: 'whiteSmoke' }}
          icon={<FaFreeCodeCamp />}
        >
          <h3 className='vertical-timeline-element-title'>
            Responsive Web Design
          </h3>
          {/* <h4 className='vertical-timeline-element-subtitle'>Online Course</h4> */}
          <p>FreeCodeCamp</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: 'black', color: 'white' }}
          icon={<FaStar />}
        />
      </VerticalTimeline>
    </div>
  );
}

export default Timeline;
