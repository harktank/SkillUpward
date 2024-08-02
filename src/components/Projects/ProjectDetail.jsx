import React from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import "./projectDetail.css";
import { projects } from "./Project";

// Import your images
import one from "../../assets/Pranay_Projects/one.png";
import two from "../../assets/Pranay_Projects/two.png";
import three from "../../assets/Pranay_Projects/three.png";
import four from "../../assets/Pranay_Projects/four.png";
import five from "../../assets/Pranay_Projects/five.png";
import six from "../../assets/Pranay_Projects/six.png";
import seven from "../../assets/Pranay_Projects/seven.png";
import eight from "../../assets/Pranay_Projects/eight.png";
import nine from "../../assets/Pranay_Projects/nine.png";
import ten from "../../assets/Pranay_Projects/ten.png";
import one1 from "../../assets/Pranay_Projects/E-com/one.png";
import three1 from "../../assets/Pranay_Projects/E-com/three.png";
import five1 from "../../assets/Pranay_Projects/E-com/five.png";
import six1 from "../../assets/Pranay_Projects/E-com/six.png";
import seven1 from "../../assets/Pranay_Projects/E-com/seven.png";
import nine1 from "../../assets/Pranay_Projects/E-com/nine.png";
import eleven1 from "../../assets/Pranay_Projects/E-com/eleven.png";
import twelve1 from "../../assets/Pranay_Projects/E-com/twelve.png";
import thirteen1 from "../../assets/Pranay_Projects/E-com/thirteen.png";
import fourteen1 from "../../assets/Pranay_Projects/E-com/fourteen.png";
import one2 from "../../assets/Aniket_Projects/Railway/one.jpg";
import two2 from "../../assets/Aniket_Projects/Railway/two.jpg";
import three2 from "../../assets/Aniket_Projects/Railway/three.jpg";
import four2 from "../../assets/Aniket_Projects/Railway/four.jpg";
import five2 from "../../assets/Aniket_Projects/Railway/five.jpg";
import six2 from "../../assets/Aniket_Projects/Railway/six.jpg";
import seven2 from "../../assets/Aniket_Projects/Railway/seven.jpg";
// Import slick-carousel CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import icons
import { GrMysql } from "react-icons/gr";

import { FaReact, FaJava, FaNodeJs, FaDatabase, FaTrophy, FaAmazon } from "react-icons/fa";
import { SiExpress, SiNextdotjs, SiSpringboot } from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";


const projectDetails = {

    [projects[0].id]: {
        "name": "KnowledgeFlow Platform",
        "images": [one, two, three, four, five, six, seven, eight, nine, ten],
        "description": [
            "The KnowledgeFlow Platform is a sophisticated Unified Learning Management System (ULMS) designed to enhance educational experiences for both students and educators. Utilizing advanced technologies and machine learning, KnowledgeFlow provides a comprehensive, interactive, and personalized learning environment.<br /><br />Key Features:<br /><br />Comprehensive LMS:<br /><br />Course Management: Tools for designing, managing, and delivering courses with multimedia integration.<br />Student Enrollment: Streamlined process for course enrollment, schedule management, and academic tracking.<br />Collaborative Learning: Create quizzes, assignments, and exams with automated grading and analytics.<br /><br />Interactive Learning Tools:<br /><br />Content Repository: Access to virtual labs, simulations, and gamified content to enrich learning.<br />Progress Tracking: Personalized learning paths based on student performance and preferences.<br /><br />Advanced Features:<br /><br />Personalized Job Predictions: AI-driven career suggestions based on student skills and outcomes.<br />Voice Search: Enhanced navigation and information retrieval with voice search.<br />Calendar and Scheduling: Manage academic schedules and deadlines efficiently.<br />Chatbot Integration: AI-powered chatbot for real-time customer support and queries.<br />Industry News: Real-time updates on industry trends and job opportunities.<br /><br />Additional Features:<br /><br />Badging and Gamification: Reward achievements with badges and integrate gamification.<br />Process Tracking: Comprehensive monitoring of student progress throughout their learning journey.<br />Multilanguage Support: Catering to a diverse user base with multiple language options.<br />Third-Party Integration: Seamless integration with external systems and services.<br /><br />Transform your educational experience with KnowledgeFlow, where advanced technology meets personalized learning."
        ],
        "techStack": ["React.js", "Node.js", "Express.js", "MongoDB", "Next.js", "Machine Learning"],
        "awards": [
            "Best Innovation Award",
            "1st Place in College Project Exhibition"
        ]

    },

    [projects[1].id]: {
        "name": "E-commerce Website",
        "images": [
            one1, three1, five1, six1, seven1, nine1,
            eleven1, twelve1, thirteen1, fourteen1
        ],
        "description": [
            "The E-commerce Website is designed to offer a seamless shopping experience with a user-friendly interface and advanced product management features. Built with a modern tech stack, it integrates key functionalities for efficient product tracking and management.<br /><br />Key Features:<br /><br />Intuitive User Interface:<br /><br />Developed a user-friendly UI for easy navigation and enhanced customer experience.<br /><br />Unique Product Identification:<br /><br />Implemented a system for generating unique product IDs for precise tracking and management.<br />QR Code Integration: Enabled QR code generation for each product, facilitating easy identification and tracking.<br /><br />Admin Panel:<br /><br />Created a comprehensive admin panel for managing products and inventory efficiently, including functionalities for adding, editing, and removing products.<br /><br />Improved Inventory Tracking:<br /><br />Enhanced tracking capabilities for small-scale businesses with unique product IDs and QR codes, optimizing stock management and reducing errors.<br /><br />Scalable Infrastructure:<br /><br />Deployed the application on AWS EC2, with S3 for storage and RDS for database management, ensuring scalability and reliability."
        ],
        "techStack": ["React.js", "Java", "Spring Boot", "MySQL", "AWS (EC2, S3, RDS)"],
        "awards": [
            "1st Place in College Project Exhibition",
            "Top Innovation Award"
        ]

    }, [projects[2].id]: {
        "name": "Railway Reservation System",
        "images": [one2, two2, three2, four2, five2, six2, seven2,],
        "description": [
            "The Railway Reservation System is a robust and efficient web application designed to streamline the process of booking train tickets. This system caters to the needs of passengers by providing a seamless user experience for reserving seats, checking train schedules, and managing bookings.<br /><br />Key Features:<br /><br />User Authentication:<br /><br />Secure login and registration system for passengers.<br />Reservation Management: Easy-to-use interface for booking, canceling, and modifying reservations.<br />Train Schedules: Real-time access to train schedules and availability.<br />Payment Integration: Secure payment gateway integration for online ticket purchases.<br />Admin Panel: Administrative module for managing train schedules, seats, and user data.<br />Notifications: Email and SMS notifications for booking confirmations and updates.<br /><br />Impact:<br /><br />The system significantly improves the efficiency and user experience of train ticket booking, reducing the time and effort required for passengers to reserve seats and manage their travel plans. It also offers railway authorities a streamlined process for managing schedules and reservations."
        ],
        "techStack": ["Java", "JSP (JavaServer Pages)", "MySQL", "Java Servlets"],
        "awards": [
            "Runner-Up in College Project Exhibition",
            "Innovation in Transportation"
        ]
    }

};
const techIcons = {
    "React.js": <FaReact size={30} fill="blue" />,
    "Node.js": <FaNodeJs size={30} />,
    "Express.js": <SiExpress size={30} />,
    MongoDB: <FaDatabase size={30} />,
    "AWS (EC2, S3, RDS)": <FaAmazon fill="black" size={30} />,
    "MySQL": <GrMysql fill="blue" size={30} />,
    Java: <FaJava fill="red" size={30} />,
    "JSP (JavaServer Pages)": <FaJava fill="red" size={30} />,
    "Java Servlets": <FaJava fill="red" size={30} />,
    "Next.js": <SiNextdotjs size={30} />,
    "Machine Learning": <GiArtificialIntelligence size={30} />,
    "Spring Boot": <SiSpringboot fill="green" size={30} />
};

const ProjectDetail = () => {
    const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    // Simulate data fetching
    const fetchedProject = projectDetails[id];
    setProject(fetchedProject);
  }, [id]);

  if (!project) {
    return <div className="not-found">Loading...</div>;
  }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                },
            },
        ],
    };

    return (
        <section className="project-detail">
            <div className="container11">
                <h2 className="project-title">{project.name}</h2>
                <div className="project-carousel">
                    <Slider {...settings}>
                        {project.images.map((image, index) => (
                            <div key={index} className="carousel-slide">
                                <img
                                    src={image}
                                    alt={`Project ${id} Image ${index + 1}`}
                                    className="project-image"
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="project-content">
                    <div className="pd">
                        <br />
                        <br />
                        <h3>Description</h3>
                        <div dangerouslySetInnerHTML={{ __html: project.description }} />
                    </div>
                    <div className="project-tech-stack">
                        <br />
                        <br />
                        <h3>Tech Stack</h3>
                        <div className="tech-icons">
                            {project.techStack.map((tech, index) => (
                                <div
                                    key={index}
                                    className={`tech-icon ${tech.toLowerCase().replace(/[^a-z]/g, '')}`}
                                >
                                    {techIcons[tech]}
                                    <span className="tech-name">{tech}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="project-awards">
                        <br />
                        <br />
                        <h3>Awards</h3>
                        <ul>
                            {project.awards.map((award, index) => (
                                <li key={index} className="award-item">
                                    <FaTrophy size={30} fill="#ffea10" className="award-icon" />
                                    <span className="award-text">{award}</span>
                                </li>
                            ))}

                        </ul>
                    </div>
                </div>
                <br />
                <br />
            </div>
        </section>
    );
};

export default ProjectDetail;
