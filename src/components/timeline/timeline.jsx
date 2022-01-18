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
      <h1 className='timeline-title'>My learning journey</h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='Dec 2021 - present'
          iconStyle={{ background: 'rebeccaPurple', color: 'whiteSmoke' }}
          icon={<FaReact />}
        >
          <h3 className='vertical-timeline-element-title'>Learning React</h3>
          <p className='subtitle'>Epic React - Kent C. Dodds</p>
          <span className='certificate-icon'>
            <a href='https://university.mongodb.com/course_completion/9b45cc19-2167-4df2-af9d-eee734a4f764?utm_source=copy&utm_medium=social&utm_campaign=university_social_sharing'>
              <GrCertificate />
            </a>
          </span>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className='vertical-timeline-element'
          date='Dec 21'
          iconStyle={{ background: 'rebeccaPurple', color: 'whiteSmoke' }}
          icon={<FaNodeJs />}
        >
          <h3 className='vertical-timeline-element-title'>MongoDB Basics</h3>

          <p className='subtitle'>MongoDB University</p>
          <span className='certificate-icon'>
            <a href='https://university.mongodb.com/course_completion/9b45cc19-2167-4df2-af9d-eee734a4f764?utm_source=copy&utm_medium=social&utm_campaign=university_social_sharing'>
              <GrCertificate />
            </a>
          </span>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className='vertical-timeline-element'
          date='Oct 21 - Dec 21'
          iconStyle={{ background: 'rebeccaPurple', color: 'whiteSmoke' }}
          icon={<FaNodeJs />}
        >
          <h3 className='vertical-timeline-element-title'>Node.js Bootcamp</h3>

          <p className='subtitle'>Jonas Schmedtmann - Udemy</p>
          <span className='certificate-icon'>
            <a href='https://udemy-certificate.s3.amazonaws.com/image/UC-790e0a3c-647c-4b2f-96dd-79d88b8d7b1a.jpg'>
              <GrCertificate />
            </a>
          </span>
          <span className='certificate-icon'>
            <a href='https://github.com/ninaokumura'>
              <FaGithub />
            </a>
          </span>
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

          <p className='subtitle'>Coding Bootcamp</p>
          <span className='certificate-icon'>
            <a href='https://github.com/ninaokumura'>
              <FaGithub />
            </a>
          </span>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element'
          date='Aug 21'
          iconStyle={{ background: 'rebeccaPurple', color: 'whiteSmoke' }}
          icon={<FaHtml5 />}
        >
          <h3 className='vertical-timeline-element-title'>HTML and CSS</h3>

          <p className='subtitle'>Jonas Schmedtmann</p>
          <span className='certificate-icon'>
            <a href='https://www.udemy.com/certificate/UC-f206e098-0f0a-4eb2-b3cd-42e896014218/'>
              <GrCertificate />
            </a>
          </span>
          <span className='certificate-icon'>
            <a href='https://github.com/ninaokumura'>
              <FaGithub />
            </a>
          </span>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element'
          // contentStyle={{ background: 'black', color: '#fff' }}
          date='Jun 21 - Aug 21'
          iconStyle={{ background: 'rebeccaPurple', color: 'whiteSmoke' }}
          icon={<SiJavascript />}
        >
          <h3 className='vertical-timeline-element-title'>JavaScript</h3>
          {/* <h4 className='vertical-timeline-element-subtitle'>Online Course</h4> */}
          <p className='subtitle'>Jonas Schmedtmann - Udemy</p>
          <span className='certificate-icon'>
            <a href='https://www.udemy.com/certificate/UC-554a1c02-21bb-415f-9893-dc77a85b2630/'>
              <GrCertificate />
            </a>
          </span>
          <span className='certificate-icon'>
            <a href='https://github.com/ninaokumura'>
              <FaGithub />
            </a>
          </span>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='Feb 21 - Mar 21'
          iconStyle={{ background: 'rebeccaPurple', color: 'whiteSmoke' }}
          icon={<FaFreeCodeCamp />}
        >
          <h3 className='vertical-timeline-element-title'>
            Responsive Web Design
          </h3>
          {/* <h4 className='vertical-timeline-element-subtitle'>Online Course</h4> */}
          <p className='subtitle'>FreeCodeCamp</p>
          <span className='certificate-icon'>
            <a href='https://www.freecodecamp.org/certification/elaine-okumura/responsive-web-design'>
              <GrCertificate />
            </a>
          </span>
          <span className='certificate-icon'>
            <a href='https://github.com/ninaokumura'>
              <FaGithub />
            </a>
          </span>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: 'rebeccaPurple', color: 'whiteSmoke' }}
          icon={<FaStar />}
        />
      </VerticalTimeline>
    </div>
  );
}

export default Timeline;
