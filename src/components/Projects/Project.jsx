// Projects.js
import React from "react";
import { Link } from "react-router-dom";
import "./projects.css";

const projects = [
    {
        id: "alpha",
        name: "Project Alpha",
        image: "https://via.placeholder.com/600x400",
        description:
            "A brief description of Project Alpha. It involves innovative technology solutions.",
        link: "#",
    },
    {
        id: "beta",
        name: "Project Beta",
        image: "https://via.placeholder.com/600x400",
        description:
            "A brief description of Project Beta. This project focuses on sustainable energy.",
        link: "#",
    },
    {
        id: "gamma",
        name: "Project Gamma",
        image: "https://via.placeholder.com/600x400",
        description:
            "A brief description of Project Gamma. Enhancing digital transformation.",
        link: "#",
    },
    {
        id: "delta",
        name: "Project Delta",
        image: "https://via.placeholder.com/600x400",
        description:
            "A brief description of Project Delta. Innovations in cloud computing.",
        link: "#",
    },
];

const Projects = () => {
    return (
        <section className="projects">
            <div className="container">
                <h2 className="projects-title">Our Industrial Projects</h2>
                <div className="projects-grid">
                    {projects.map((project) => (
                        <Link to={`/project/${project.id}`} key={project.id}>
                            <div className="project-card">
                                <div className="project-image-container">
                                    <img
                                        src={project.image}
                                        alt={project.name}
                                        className="project-image"
                                    />
                                </div>
                                <div className="project-content">
                                    <h3 className="project-name">{project.name}</h3>
                                    <p className="project-description">{project.description}</p>
                                    <span className="read-more">Read More</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
