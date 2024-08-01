// ProjectDetail.js
import React from "react";
import { useParams } from "react-router-dom";
import "./projectDetail.css"; // Ensure you have the correct path to the CSS file

// Sample detailed project data
const projectDetails = {
    alpha: {
        images: [
            "https://via.placeholder.com/600",
            "https://via.placeholder.com/600",
            "https://via.placeholder.com/600",
            "https://via.placeholder.com/600",
            "https://via.placeholder.com/600",
            "https://via.placeholder.com/600",
            "https://via.placeholder.com/600",
            "https://via.placeholder.com/600",
            "https://via.placeholder.com/600",
            "https://via.placeholder.com/600",
        ],
        description: [
            "Detail 1 about Project Alpha.",
            "Detail 2 about Project Alpha.",
            "Detail 3 about Project Alpha.",
            "Detail 4 about Project Alpha.",
            "Detail 5 about Project Alpha.",
        ],
        techStack: ["React", "Node.js", "AWS"],
        awards: ["Best Innovation Award"],
    },
    beta: {
        images: [
            "https://via.placeholder.com/600",
            "https://via.placeholder.com/600",
            "https://via.placeholder.com/600",
            "https://via.placeholder.com/600",
            "https://via.placeholder.com/600",
            "https://via.placeholder.com/600",
            "https://via.placeholder.com/600",
            "https://via.placeholder.com/600",
            "https://via.placeholder.com/600",
            "https://via.placeholder.com/600",
        ],
        description: [
            "Detail 1 about Project Beta.",
            "Detail 2 about Project Beta.",
            "Detail 3 about Project Beta.",
            "Detail 4 about Project Beta.",
            "Detail 5 about Project Beta.",
        ],
        techStack: ["Python", "Django", "Heroku"],
        awards: ["Green Energy Award"],
    },
    gamma: {
        images: [
            "https://via.placeholder.com/600",
            "https://via.placeholder.com/600",
            "https://via.placeholder.com/600",
            "https://via.placeholder.com/600",
            "https://via.placeholder.com/600",
            "https://via.placeholder.com/600",
            "https://via.placeholder.com/600",
            "https://via.placeholder.com/600",
            "https://via.placeholder.com/600",
            "https://via.placeholder.com/600",
        ],
        description: [
            "Detail 1 about Project Gamma.",
            "Detail 2 about Project Gamma.",
            "Detail 3 about Project Gamma.",
            "Detail 4 about Project Gamma.",
            "Detail 5 about Project Gamma.",
        ],
        techStack: ["Angular", "Java", "Azure"],
        awards: ["Digital Transformation Leader"],
    },
    delta: {
        images: [
            "https://via.placeholder.com/600",
            "https://via.placeholder.com/600",
            "https://via.placeholder.com/600",
            "https://via.placeholder.com/600",
            "https://via.placeholder.com/600",
            "https://via.placeholder.com/600",
            "https://via.placeholder.com/600",
            "https://via.placeholder.com/600",
            "https://via.placeholder.com/600",
            "https://via.placeholder.com/600",
        ],
        description: [
            "Detail 1 about Project Delta.",
            "Detail 2 about Project Delta.",
            "Detail 3 about Project Delta.",
            "Detail 4 about Project Delta.",
            "Detail 5 about Project Delta.",
        ],
        techStack: ["Kubernetes", "Docker", "GCP"],
        awards: ["Cloud Innovation Award"],
    },
};

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projectDetails[id];

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <section className="project-detail">
            <div className="container11">
                <h2 className="project-title">
                    Project {id.charAt(0).toUpperCase() + id.slice(1)}
                </h2>
                <div className="project-images">
                    {project.images.map((image, index) => (
                        <img
                            src={image}
                            alt={`Project ${id} Image ${index + 1}`}
                            key={index}
                            className="project-image"
                        />
                    ))}
                </div>
                <div className="project-description">
                    <h3>Description</h3>
                    <ul>
                        {project.description.map((detail, index) => (
                            <li key={index}>{detail}</li>
                        ))}
                    </ul>
                </div>
                <div className="project-tech-stack">
                    <h3>Tech Stack</h3>
                    <ul>
                        {project.techStack.map((tech, index) => (
                            <li key={index}>{tech}</li>
                        ))}
                    </ul>
                </div>
                <div className="project-awards">
                    <h3>Awards</h3>
                    <ul>
                        {project.awards.map((award, index) => (
                            <li key={index}>{award}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default ProjectDetail;
