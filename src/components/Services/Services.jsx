import React, { useEffect } from "react";
import "./services.css";

const services = [
    { name: "Web Development", icon: "🌐" },
    { name: "Full Stack Development", icon: "💻" },
    { name: "App Development", icon: "📱" },
    { name: "UI/UX Design", icon: "🎨" },
    { name: "Graphic Design", icon: "🖼️" },
    { name: "DevOps", icon: "⚙️" },
    { name: "Cloud Computing", icon: "☁️" },
    { name: "AI / ML", icon: "🤖" },
    { name: "Data Entry", icon: "⌨️" },
    { name: "Data Analytics - Power BI", icon: "📊" },
];

const Services = () => {
    useEffect(() => {
        if (window.innerWidth <= 768) { // Only add animations on small screens
            const items = document.querySelectorAll(".service-card1");

            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    const index = Array.from(items).indexOf(entry.target);

                    if (entry.isIntersecting) {
                        if (index % 2 === 0) {
                            entry.target.classList.add("fade-in-left");
                            entry.target.classList.remove("fade-in-right");
                        } else {
                            entry.target.classList.add("fade-in-right");
                            entry.target.classList.remove("fade-in-left");
                        }

                        // Once the element has been animated, unobserve it
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.5
            });

            items.forEach((item) => {
                observer.observe(item);
            });

            return () => {
                items.forEach((item) => {
                    observer.unobserve(item);
                });
            };
        }
    }, []);

    return (
        <section className="services">
            <div className="container">
                <h2 className="services-title">Our Services</h2>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div className="service-card service-card1" key={index}>
                            <div className="service-icon">{service.icon}</div>
                            <h3 className="service-name">{service.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
