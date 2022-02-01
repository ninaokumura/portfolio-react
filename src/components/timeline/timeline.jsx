import React from 'react';

// Icons
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

// Components
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';

// Styles
import 'react-vertical-timeline-component/style.min.css';
import './timeline.css';

const icons = {
  react: FaReact,
  certificate: GrCertificate,
  mongodb: SiMongodb,
  node: FaNodeJs,
  github: FaGithub,
  graduation: FaGraduationCap,
  html: FaHtml5,
  javascript: SiJavascript,
  freecodecamp: FaFreeCodeCamp,
};

const timelineItems = [
  {
    timelineIconId: 'react',
    duration: 'Dec 2021 - present',
    title: 'Learning React',
    subtitle: 'Epic React - Kent C. Dodds',
    footerIcons: [
      {
        id: 'certificate',
        url: 'https://university.mongodb.com/course_completion/9b45cc19-2167-4df2-af9d-eee734a4f764?utm_source=copy&utm_medium=social&utm_campaign=university_social_sharing',
      },
    ],
  },
  {
    timelineIconId: 'mongodb',
    duration: 'Dec 2021 - Dec 2021',
    title: 'MongoDB Basics',
    subtitle: 'MongoDB University',
    footerIcons: [
      {
        id: 'certificate',
        url: 'https://university.mongodb.com/course_completion/9b45cc19-2167-4df2-af9d-eee734a4f764?utm_source=copy&utm_medium=social&utm_campaign=university_social_sharing',
      },
    ],
  },
  {
    timelineIconId: 'node',
    duration: 'Oct 2021 - Dec 2021',
    title: 'Node.js Bootcamp',
    subtitle: 'Jonas Schmedtmann - Udemy',
    footerIcons: [
      {
        id: 'certificate',
        url: 'https://udemy-certificate.s3.amazonaws.com/image/UC-790e0a3c-647c-4b2f-96dd-79d88b8d7b1a.jpg',
      },
      { id: 'github', url: 'https://github.com/ninaokumura' },
    ],
  },
  {
    timelineIconId: 'graduation',
    duration: 'Aug 2021 - Oct 2021',
    title: 'Enspiral Dev Academy',
    subtitle: 'Coding Bootcamp',
    footerIcons: [{ id: 'github', url: 'https://github.com/ninaokumura' }],
  },
  {
    timelineIconId: 'html',
    duration: 'Aug 2021 - Aug 2021',
    title: 'HTML & CSS',
    subtitle: 'Jonas Schmedtmann - Udemy',
    footerIcons: [
      {
        id: 'certificate',
        url: 'https://www.udemy.com/certificate/UC-f206e098-0f0a-4eb2-b3cd-42e896014218/',
      },
      { id: 'github', url: 'https://github.com/ninaokumura' },
    ],
  },
  {
    timelineIconId: 'javascript',
    duration: 'Jun 2021 - Aug 2021',
    title: 'JavaScript',
    subtitle: 'Jonas Schemdtmann - Udemy',
    footerIcons: [
      {
        id: 'certificate',
        url: 'https://www.udemy.com/certificate/UC-554a1c02-21bb-415f-9893-dc77a85b2630/',
      },
      { id: 'github', url: 'https://github.com/ninaokumura' },
    ],
  },
  {
    timelineIconId: 'freecodecamp',
    duration: 'Feb 2021 - Mar 2021',
    title: 'Responsive Web Design',
    subtitle: 'FreeCodeCamp',
    footerIcons: [
      {
        id: 'certificate',
        url: 'https://www.freecodecamp.org/certification/elaine-okumura/responsive-web-design',
      },
      { id: 'github', url: 'https://github.com/ninaokumura' },
    ],
  },
];

function Timeline() {
  return (
    <div className='timeline'>
      <h1 className='timeline-title'>My learning journey</h1>
      <VerticalTimeline>
        {timelineItems.reverse().map(item => {
          const TimelineIcon = icons[item.timelineIconId];
          return (
            <VerticalTimelineElement
              key={item.title}
              date={item.duration}
              iconStyle={{ background: '#f45d48', color: 'whiteSmoke' }}
              icon={<TimelineIcon />}
            >
              <h3 className='vertical-timeline-element-title'>{item.title}</h3>
              <p className='subtitle'>{item.subtitle}</p>
              <div className='icons-container'>
                {item.footerIcons.map(icon => {
                  const Icon = icons[icon.id];
                  return (
                    <span key={icon.id} className='certificate-icon'>
                      <a href={icon.url}>
                        <Icon />
                      </a>
                    </span>
                  );
                })}
              </div>
            </VerticalTimelineElement>
          );
        })}

        <VerticalTimelineElement
          iconStyle={{ background: '#f45d48', color: 'whiteSmoke' }}
          icon={<FaStar />}
        />
      </VerticalTimeline>
    </div>
  );
}

export default Timeline;
