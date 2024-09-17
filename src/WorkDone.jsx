import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './WorkDone.css';

const WorkDone = () => {
  return (
    <div className="work-done">
     

      <main className="main-content">
        <h1>Work Done</h1>
        <p className='main-paragraph'>Explore our completed projects and the impact they have had on communities.</p>
        <div className="projects">
          <div className="project">
            <h2>Project 1</h2>
            <p>Description of Project 1.</p>
          </div>
          <div className="project">
            <h2>Project 2</h2>
            <p>Description of Project 2.</p>
          </div>
          <div className="project">
            <h2>Project 3</h2>
            <p>Description of Project 3.</p>
          </div>
        </div>
      </main>

      
    </div>
  );
};

export default WorkDone;
