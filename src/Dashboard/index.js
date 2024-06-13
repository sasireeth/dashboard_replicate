import React, { useState } from 'react';
import './index.css';

const Dashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const [completedVideos, setCompletedVideos] = useState([]);
    const [progress, setProgress] = useState(0);
    const [activeModule, setActiveModule] = useState(null);

    const modules = [
        {
            title: "Introduction to LLD BootCamp",
            videos: [
                { title: "Welcome to SUPRA Batch", url: "/videos/video1.mp4" },
                { title: "Steps to join Discord Group", url: "/videos/video2.mp4" }
            ]
        },
        {
            title: "Orientation Session",
            videos: [
                { title: "Week 1: Let's Learn C++", url: "/videos/video3.mp4" },
                { title: "Let's Learn Java", url: "/videos/video4.mp4" }
            ]
        },
        {
            title: "Object-Oriented Programming",
            videos: [
                { title: "Basics of OOP", url: "/videos/video5.mp4" },
                { title: "Classes and Objects", url: "/videos/video6.mp4" },
                { title: "Inheritance and Polymorphism", url: "/videos/video7.mp4" }
            ]
        },
        {
            title: "Design Patterns",
            videos: [
                { title: "Introduction to Design Patterns", url: "/videos/video8.mp4" },
                { title: "Singleton Pattern", url: "/videos/video9.mp4" },
                { title: "Factory Pattern", url: "/videos/video10.mp4" },
                { title: "Observer Pattern", url: "/videos/video11.mp4" }
            ]
        },
        {
            title: "Software Development Lifecycle",
            videos: [
                { title: "Overview of SDLC", url: "/videos/video12.mp4" },
                { title: "Agile Methodologies", url: "/videos/video13.mp4" },
                { title: "Waterfall Model", url: "/videos/video14.mp4" }
            ]
        },
        {
            title: "System Design",
            videos: [
                { title: "Introduction to System Design", url: "/videos/video15.mp4" },
                { title: "Scalability and Performance", url: "/videos/video16.mp4" },
                { title: "High Availability Systems", url: "/videos/video17.mp4" }
            ]
        },
        {
            title: "API Development",
            videos: [
                { title: "RESTful APIs", url: "/videos/video18.mp4" },
                { title: "GraphQL Basics", url: "/videos/video19.mp4" },
                { title: "Building APIs with Node.js", url: "/videos/video20.mp4" }
            ]
        },
        {
            title: "Testing and Debugging",
            videos: [
                { title: "Unit Testing", url: "/videos/video21.mp4" },
                { title: "Integration Testing", url: "/videos/video22.mp4" },
                { title: "Debugging Techniques", url: "/videos/video23.mp4" }
            ]
        },
        {
            title: "Version Control",
            videos: [
                { title: "Introduction to Git", url: "/videos/video24.mp4" },
                { title: "Branching and Merging", url: "/videos/video25.mp4" },
                { title: "Pull Requests and Code Reviews", url: "/videos/video26.mp4" }
            ]
        },
        {
            title: "Continuous Integration and Deployment",
            videos: [
                { title: "CI/CD Pipelines", url: "/videos/video27.mp4" },
                { title: "Automated Testing in CI", url: "/videos/video28.mp4" },
                { title: "Deploying to Production", url: "/videos/video29.mp4" }
            ]
        },
        {
            title: "Introduction to LLD BootCamp",
            videos: [
                { title: "Welcome to SUPRA Batch", url: "/videos/video1.mp4" },
                { title: "Steps to join Discord Group", url: "/videos/video2.mp4" }
            ]
        },
        {
            title: "Orientation Session",
            videos: [
                { title: "Week 1: Let's Learn C++", url: "/videos/video3.mp4" },
                { title: "Let's Learn Java", url: "/videos/video4.mp4" }
            ]
        },
        {
            title: "Object-Oriented Programming",
            videos: [
                { title: "Basics of OOP", url: "/videos/video5.mp4" },
                { title: "Classes and Objects", url: "/videos/video6.mp4" },
                { title: "Inheritance and Polymorphism", url: "/videos/video7.mp4" }
            ]
        },
        {
            title: "Design Patterns",
            videos: [
                { title: "Introduction to Design Patterns", url: "/videos/video8.mp4" },
                { title: "Singleton Pattern", url: "/videos/video9.mp4" },
                { title: "Factory Pattern", url: "/videos/video10.mp4" },
                { title: "Observer Pattern", url: "/videos/video11.mp4" }
            ]
        },
        {
            title: "Software Development Lifecycle",
            videos: [
                { title: "Overview of SDLC", url: "/videos/video12.mp4" },
                { title: "Agile Methodologies", url: "/videos/video13.mp4" },
                { title: "Waterfall Model", url: "/videos/video14.mp4" }
            ]
        },
        {
            title: "System Design",
            videos: [
                { title: "Introduction to System Design", url: "/videos/video15.mp4" },
                { title: "Scalability and Performance", url: "/videos/video16.mp4" },
                { title: "High Availability Systems", url: "/videos/video17.mp4" }
            ]
        },
        {
            title: "API Development",
            videos: [
                { title: "RESTful APIs", url: "/videos/video18.mp4" },
                { title: "GraphQL Basics", url: "/videos/video19.mp4" },
                { title: "Building APIs with Node.js", url: "/videos/video20.mp4" }
            ]
        },
        {
            title: "Testing and Debugging",
            videos: [
                { title: "Unit Testing", url: "/videos/video21.mp4" },
                { title: "Integration Testing", url: "/videos/video22.mp4" },
                { title: "Debugging Techniques", url: "/videos/video23.mp4" }
            ]
        },
        {
            title: "Version Control",
            videos: [
                { title: "Introduction to Git", url: "/videos/video24.mp4" },
                { title: "Branching and Merging", url: "/videos/video25.mp4" },
                { title: "Pull Requests and Code Reviews", url: "/videos/video26.mp4" }
            ]
        },
        {
            title: "Continuous Integration and Deployment",
            videos: [
                { title: "CI/CD Pipelines", url: "/videos/video27.mp4" },
                { title: "Automated Testing in CI", url: "/videos/video28.mp4" },
                { title: "Deploying to Production", url: "/videos/video29.mp4" }
            ]
        },
    ];


    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

    const handleModuleClick = (index) => {
        setActiveModule(activeModule === index ? null : index);
    };

    const handleVideoClick = (moduleIndex, videoIndex) => {
        setCurrentVideoIndex(videoIndex);
        setActiveModule(moduleIndex);
    };

    const handleNext = () => {
        if (activeModule === null) return;

        const module = modules[activeModule];
        const nextVideoIndex = currentVideoIndex + 1;

        if (nextVideoIndex < module.videos.length) {
            setCurrentVideoIndex(nextVideoIndex);
        } else {
            if (activeModule + 1 < modules.length) {
                setActiveModule(activeModule + 1);
                setCurrentVideoIndex(0);
            }
        }
    };

    const handleComplete = () => {
        if (activeModule === null) return;
        const currentVideoKey = `${activeModule}-${currentVideoIndex}`;
        if (!completedVideos.includes(currentVideoKey)) {
            setCompletedVideos([...completedVideos, currentVideoKey]);
            setProgress((completedVideos.length / getTotalVideos()) * 100); 
        }
        handleNext();
    };

    const handlePrevious = () => {
        if (currentVideoIndex > 0) {
            setCurrentVideoIndex(currentVideoIndex - 1);
        } else if (activeModule > 0) {
            const previousModuleIndex = activeModule - 1;
            const previousModule = modules[previousModuleIndex];
            setActiveModule(previousModuleIndex);
            setCurrentVideoIndex(previousModule.videos.length - 1);
        }
    };

    const getTotalVideos = () => {
        return modules.reduce((total, module) => total + module.videos.length, 0);
    };

    return (
        <div className={`dashboard-wrapper ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
            <div className="dashboard-container">
                <div className="top-bar-left">
                    <button className="back-button" onClick={toggleSidebar}>
                        {sidebarOpen ? 'Close Sidebar' : 'Open Sidebar'}
                    </button>
                    <div className="bar mt-2">
                        <div className="fill" style={{ width: `${progress}%` }}></div>
                    </div>
                    <div className="progress">
                        <span>{Math.floor(progress)}% completed</span>
                    </div>
                </div>
                <div className={`dashboard-header ${!sidebarOpen && 'closed'}`}>
                             <h4 className='h1'>Course Discussions</h4>
                            <h2 className='h2'>Contents</h2>
                </div>
                
                {sidebarOpen && (
                    <div className="sidebar">
                        
                        <ul>
                            {modules.map((module, moduleIndex) => (
                                <li key={moduleIndex}>
                                    <div onClick={() => handleModuleClick(moduleIndex)}>
                                        {module.title} {activeModule === moduleIndex ? '▼' : '▶'}
                                    </div>
                                    {activeModule === moduleIndex && (
                                        <ul>
                                            {module.videos.map((video, videoIndex) => (
                                                <li
                                                    key={videoIndex}
                                                    onClick={() => handleVideoClick(moduleIndex, videoIndex)}
                                                    className={`${completedVideos.includes(`${moduleIndex}-${videoIndex}`) ? 'completed ' : ''}${currentVideoIndex===videoIndex ? 'pre ' : ''} lx`}
                                                >
                                                    {video.title}
                                                    {completedVideos.includes(`${moduleIndex}-${videoIndex}`) && (
                                                        <span className="green-tick">✓</span>
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                )}
                <button className="certificate-button">Certificate</button>
            </div>
            <div className={`right-side ${sidebarOpen && 'dis'}`}>
                <div className="top-bar-right">
                    <button onClick={handlePrevious} disabled={currentVideoIndex === 0 && activeModule === 0}>
                        &lt; Previous
                    </button>
                    <button onClick={handleNext}>
                        Next &gt;
                    </button>
                    <button onClick={handleComplete}>
                        Complete
                    </button>
                </div>
                <div className={`main-content ${!sidebarOpen && 'increase-height'}`}>
                    {activeModule !== null && modules[activeModule].videos[currentVideoIndex] ? (
                        <video controls src={modules[activeModule].videos[currentVideoIndex].url} />
                    ) : (
                        <p>Please select a video.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
