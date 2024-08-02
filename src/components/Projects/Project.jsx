import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./projects.css";
import one from "../../assets/Pranay_Projects/one.png";
import one1 from "../../assets/Pranay_Projects/E-com/one.png";
import one2 from "../../assets/Aniket_Projects/Railway/one.jpg";

export const projects = [
    {
        id: 7712113, // Unique random ID
        name: "KnowledgeFlow Platform",
        image: one,
        description: "The KnowledgeFlow Platform is a sophisticated Unified Learning Management System ,And",
        link: "#",
    },
    {
        id: 7712114, // Unique random ID
        name: "E-commerce Website",
        image: one1,
        description: "The E-commerce Website is designed to offer a seamless shopping experience with a user-friendly interface and advanced product management features. Built with a modern tech stack",
        link: "#",
    },
    {
        id: 7712115, // Unique random ID
        name: "Project Gamma",
        image: one2,
        description: "The Railway Reservation System is a robust and efficient web application designed to streamline the process of booking train tickets. This system caters to the needs of passengers by providing a s",
        link: "#",
    },
    // {
    //     id: 7712116, // Unique random ID
    //     name: "Project Delta",
    //     image: "https://via.placeholder.com/600x400",
    //     description: "A brief description of Project Delta. Innovations in cloud computing.",
    //     link: "#",
    // },
];

const truncateDescription = (text, wordLimit) => {
    const words = text.split(" ");
    if (words.length <= wordLimit) return text;
    return `${words.slice(0, wordLimit).join(" ")}...`;
};

const Projects = () => {
    const projectRefs = useRef([]);

    useEffect(() => {
        const options = {
            root: null, // Use the viewport
            rootMargin: '0px',
            threshold: 0.1 // Trigger when 10% of the element is visible
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                } else {
                    entry.target.classList.remove('visible');
                }
            });
        }, options);

        projectRefs.current.forEach(ref => observer.observe(ref));

        // Clean up the observer on component unmount
        return () => {
            projectRefs.current.forEach(ref => observer.unobserve(ref));
        };
    }, []);

    return (
        <section className="projects">
            <div className="container">
                <h2 className="projects-title">Our Projects</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <Link to={`/project/${project.id}`} key={project.id} className="project-link">
                            <div
                                className="project-card"
                                ref={el => projectRefs.current[index] = el}
                            >
                                <div className="project-image-container">
                                    <img
                                        src={project.image}
                                        alt={project.name}
                                        className="project-image"
                                    />
                                </div>
                                <div className="project-content">
                                    <h3 className="project-name">{project.name}</h3>
                                    <p className="project-description">
                                        {truncateDescription(project.description, 10)}
                                    </p>
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
