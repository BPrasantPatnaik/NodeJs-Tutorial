import React from 'react';
import './Express.css';

const ExpressComponent = () => {
    return (
        <div className="express-container">
            <h1>Express.js</h1>
            <p>
                Express.js is a minimal and flexible web application framework that provides a robust set of features 
                to develop Node.js-based web and mobile applications. It's popular in the Node.js ecosystem for 
                providing templating, static file handling, and connectivity with SQL and NoSQL databases.
            </p>

            <h3>Core Features</h3>
            <ul>
                <li>Set up middlewares for HTTP Requests.</li>
                <li>Define a routing table for different actions based on HTTP Method and URL.</li>
                <li>Dynamically render HTML pages with templating.</li>
            </ul>

            <h3>Installing Express</h3>
            <pre>
                <code>
                    {"D:\\expressApp> npm init\nD:\\expressApp> npm install express --save"}
                </code>
            </pre>

            <h3>Hello World Example</h3>
            <pre>
                <code>
                    {`var express = require('express');\nvar app = express();\n\napp.get('/', (req, res) => res.send('Hello World'));\n\nvar server = app.listen(5000, () => {\n   console.log("Express App running at http://127.0.0.1:5000/");\n});`}
                </code>
            </pre>

            <h3>First Application</h3>
            <p>
                Express provides an Application object to handle HTTP requests, render HTML, and configure middleware.
                This object is created as shown below:
            </p>
            <pre>
                <code>{`var express = require('express');\nvar app = express();`}</code>
            </pre>

            <h3>Basic Routing</h3>
            <p>
            The app object handles HTTP requests GET, POST, PUT and DELETE with app.get(), app.post(), app.put() and app.delete() method respectively. The HTTP request and HTTP response objects are provided as arguments to these methods by the NodeJS server.
             The first parameter to these methods is a string that represents the endpoint of the URL.
              These methods are asynchronous, and invoke a callback by passing the request and response objects.
            </p>
            <pre>
                <code>{`app.get('/', (req, res) => res.send('Hello World'));`}</code>
            </pre>

            <h3>Serving Static Files</h3>
            <p>Express provides a built-in middleware express.static to serve static files, such as images, CSS, JavaScript, etc.
              You simply need to pass the name of the directory where you keep your static assets,
              to the express.static middleware to start serving the files directly. For example, if you keep your images, CSS, and JavaScript files in a directory named public, you can do this −</p>
            <pre>
                <code>{`app.use(express.static('public'));`}</code>
            </pre>
        </div>
    );
};

export default ExpressComponent;
