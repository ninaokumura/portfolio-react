import React from 'react';
import Card from '../components/card/card';

import './Projects.css';

const projects = [
  // {
  //   img: './images/survey.jpg',
  //   title: 'Survey',
  //   body: 'dxkhfldflkjdklsjfkl',
  // },
  // {
  //   img: './images/tribute-page.jpg',
  //   title: 'Tribute Page',
  //   body: 'djfhd jhfgdklsghlksdfjgl',
  // },
  // {
  //   img: './images/technical-page.jpg',
  //   title: 'Technical Page',
  //   body: 'djfhd jhfgdklsghlksdfjgl',
  // },
  // {
  //   img: './images/landing-page.jpg',
  //   title: 'Landing Page',
  //   body: 'djfhd jhfgdklsghlksdfjgl',
  // },
  {
    img: './images/portfolio.jpg',
    title: 'Personal Portfolio',
    body: 'Portfolio built as part of FreeCodeCamp course',
    codeUrl: 'https://codesandbox.io/s/personal-portfolio-764y8',
    demoUrl: 'https://764y8.csb.app/',
  },
  {
    img: './images/omnifood.jpg',
    title: 'Food App',
    body: 'djfhd jhfgdklsghlksdfjgl',
    codeUrl: 'https://github.com/ninaokumura/omnifood',
    demoUrl: 'https://omnifood-nina.netlify.app/',
  },
  {
    img: './images/guess-number.jpg',
    title: 'Guess the Number game',
    body: 'Guess the number between 1 and 20',
    codeUrl: 'https://github.com/ninaokumura/guess-the-number',
    demoUrl: 'https://ninaokumura.github.io/guess-the-number/',
  },
  {
    img: './images/forkify.jpg',
    title: 'Forkify',
    body: 'Recipe app',
    codeUrl: 'https://github.com/ninaokumura/forkify-app',
    demoUrl: 'https://forkify-nina.netlify.app/',
  },
  {
    img: './images/personal-blog.jpg',
    title: 'Personal blog',
    body: 'First project built as part of Bootcamp',
    codeUrl: 'https://github.com/ninaokumura/ninaokumura.github.io',
    demoUrl: 'https://ninaokumura.github.io/',
  },
  {
    img: './images/blog.jpg',
    title: 'Brogui',
    body: 'Just a blog.',
    codeUrl: 'https://github.com/ninaokumura/brogui',
    demoUrl: 'https://brogui.herokuapp.com/',
  },
  {
    img: './images/calculator.jpg',
    title: 'Calculator',
    body: 'Calculator buil with React',
    codeUrl: 'https://github.com/ninaokumura/react-calculator',
    demoUrl: 'https://ninaokumura.github.io/react-calculator/',
  },
  {
    img: './images/crown.jpg',
    title: 'Crown clothing',
    body: 'E-commerce app built using React',
    codeUrl: 'https://github.com/ninaokumura/react-crown-clothing',
    demoUrl: 'https://crown-clothing-42.herokuapp.com/',
  },
];

function Projects() {
  return (
    <div>
      <h1 className='title'>My Projects</h1>

      <div className='cards-container'>
        {projects.map(el => (
          <Card>
            <Card.Img src={el.img} />
            <Card.Body>
              <Card.Title>{el.title}</Card.Title>
              <Card.Text>{el.body}</Card.Text>
            </Card.Body>
            <a
              target='_blank'
              rel='noreferrer noopener'
              className='projects-btn'
              href={el.codeUrl}
            >
              Code
            </a>
            <a
              target='_blank'
              rel='noreferrer noopener'
              className='projects-btn'
              href={el.demoUrl}
            >
              Demo
            </a>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Projects;
