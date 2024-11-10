import React from 'react';
import './Home.css'; // Import your CSS for styling if needed

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to the Node.js Tutorial</h1>
      <p>
        This tutorial will guide you through the fundamentals of Node.js,
        covering essential concepts and hands-on examples. You will learn how
        to set up a development environment, work with modules, manage packages,
        create web servers, and connect to databases.
      </p>
      <h2>What You'll Learn:</h2>
      <ul>
        <li>Introduction to Node.js</li>
        <li>Setting Up Your Development Environment</li>
        <li>Understanding Node.js Modules</li>
        <li>Using Node Package Manager (NPM)</li>
        <li>Creating a Web Server</li>
        <li>Working with the File System</li>
        <li>Debugging Node.js Applications</li>
        <li>Handling Events</li>
        <li>Building Applications with Express.js</li>
        <li>Serving Static Resources</li>
        <li>Database Connectivity</li>
      </ul>
      <p>
        Get started by navigating through the sections above, and let’s build
        something great together!
      </p>
    </div>
  );
};

export default Home;
