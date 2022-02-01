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

import { timelineItems } from './timeline-data';

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
