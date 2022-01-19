import React from 'react';
import Card from '../components/card/card';

import './Projects.css';

const projects = [
  {
    img: './images/survey.jpg',
    title: 'Survey',
    body: 'dxkhfldflkjdklsjfkl',
  },
  {
    img: './images/tribute-page.jpg',
    title: 'Tribute Page',
    body: 'djfhd jhfgdklsghlksdfjgl',
  },
  {
    img: './images/technical-page.jpg',
    title: 'Technical Page',
    body: 'djfhd jhfgdklsghlksdfjgl',
  },
  {
    img: './images/landing-page.jpg',
    title: 'Landing Page',
    body: 'djfhd jhfgdklsghlksdfjgl',
  },
  {
    img: './images/portfolio.jpg',
    title: 'Personal Portfolio',
    body: 'djfhd jhfgdklsghlksdfjgl',
  },
  {
    img: './images/omnifood.jpg',
    title: 'Food App',
    body: 'djfhd jhfgdklsghlksdfjgl',
  },
];

function Projects() {
  return (
    <div>
      <h1 style={{ fontSize: '5rem' }}>HTML & CSS</h1>
      <h3 style={{ fontSize: '3rem' }}>Responsive Web Design</h3>
      <div className='cards-container'>
        {projects.map(el => (
          <Card>
            <Card.Img src={el.img} />
            <Card.Body>
              <Card.Title>{el.title}</Card.Title>
              <Card.Text>{el.body}</Card.Text>
            </Card.Body>
            <button className='view-code'>Code</button>
            <button className='view-demo'>Demo</button>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Projects;
