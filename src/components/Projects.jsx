import React, { useState } from 'react';
import '../styles/Projects.css';

// Importing images for the projects
import HT1 from '../assets/HT1.png';
import PL1 from '../assets/PL1.png';
import PL2 from '../assets/PL2.png';
import WLP1 from '../assets/WLP1.png';
import WLP2 from '../assets/WLP2.png';
import WLP3 from '../assets/WLP3.png';
import WLP4 from '../assets/WLP4.png';
import WLP5 from '../assets/WLP5.png';
import WLP6 from '../assets/WLP6.png';
import WLP7 from '../assets/WLP7.png';

// Array of project data
const projects = [
  {
    title: 'Health Challenge Tracker',
    description: 'A health challenge tracker application built using Angular and Tailwind CSS.',
    images: [HT1],
    link: 'https://github.com/Pranay01101/health-challenge-tracker',
  },
  {
    title: 'Pet Listing',
    description: 'A pet listing website built using React.js, CSS, HTML, and JavaScript.',
    images: [PL1, PL2],
    link: 'https://github.com/Pranay01101/pet-listing-website',
  },
  {
    title: 'Website Landing Page',
    description: 'A website landing page built using CSS and HTML.',
    images: [WLP1, WLP2, WLP3, WLP4, WLP5, WLP6, WLP7],
    link: 'https://github.com/Pranay01101/landing-page',
  },
  {
    title: 'E-commerce Website',
    description: 'An e-commerce website built using HTML, CSS, JavaScript, Python, and Django.',
    images: [],
    link: 'https://github.com/Pranay01101/e-commerce',
  },
];

const Projects = () => {
  // State to manage the currently selected project for the modal
  const [selectedProject, setSelectedProject] = useState(null);

  // Function to open the modal with the selected project
  const openModal = (project) => {
    setSelectedProject(project);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="projects">
      {/* Section heading for the Projects section */}
      <h2>Projects</h2>
      <div className="project-list">
        {/* Mapping through the projects array to display each project card */}
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            onClick={() => openModal(project)} // Open modal on card click
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p className="more-info">Click for more details</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="github-link">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
      {/* Conditionally render the modal if a project is selected */}
      {selectedProject && (
        <div className="modal">
          <div className="modal-content">
            {/* Button to close the modal */}
            <button className="modal-close" onClick={closeModal}>
              &times;
            </button>
            <h3>{selectedProject.title}</h3>
            <p>{selectedProject.description}</p>
            <div className="images">
              {/* Mapping through the images of the selected project */}
              {selectedProject.images.map((image, index) => (
                <img key={index} src={image} alt={selectedProject.title} />
              ))}
            </div>
            <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
