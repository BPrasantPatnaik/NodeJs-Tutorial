import React from 'react';
import './WebServer.css'; // CSS file

const WebServer = () => {
  return (
    <div className="webserver-page">
      <h1>Creating a Web Server with Node.js</h1>

      <section className="intro-section">
        <h2>Introduction</h2>
        <p>
          Node.js allows you to create a scalable and efficient web server using JavaScript. It's event-driven and non-blocking, meaning it can handle multiple requests at the same time without blocking execution. This tutorial will take you through the process of creating a basic web server in Node.js, covering everything from handling requests to sending responses.
        </p>
      </section>

      <section className="anatomy-section">
        <h2>Anatomy of an HTTP Transaction</h2>
        <p>
          When creating a web server in Node.js, you work with two main objects: 
          <strong>request</strong> and <strong>response</strong>. The request object contains all the information about the client's request, such as URL, HTTP method, and headers. The response object allows you to send data back to the client, like headers, status codes, and content.
        </p>
        <p>
          The interaction flow is simple: a client sends an HTTP request, and the server processes it and responds with appropriate data. Here's a quick look at the basic HTTP transaction cycle:
        </p>
        <ul>
          <li>Client sends an HTTP request (GET, POST, etc.)</li>
          <li>Server listens for requests and processes them</li>
          <li>Server sends an appropriate HTTP response</li>
        </ul>
      </section>

      <section className="setup-section">
        <h2>Setting Up Node.js</h2>
        <p>
          Before creating a server, ensure that Node.js is installed on your system. You can download Node.js from the official website, and verify the installation by running the following commands in your terminal:
        </p>
        <pre>
          <code>
            {`
$ node -v   // Check Node.js version
$ npm -v    // Check npm version
            `}
          </code>
        </pre>
        <p>
          To start creating the server, initialize a new Node.js project using:
        </p>
        <pre>
          <code>
            {`
$ mkdir my-web-server
$ cd my-web-server
$ npm init -y
            `}
          </code>
        </pre>
        <p>This will create a new Node.js project with a basic setup. Now, create a file named <code>server.js</code> to start coding the web server.</p>
      </section>

      <section className="code-example">
        <h3>Step 1: Creating a Simple Web Server</h3>
        <p>
          The basic idea of a web server is to handle requests and send responses. Here’s how to create a simple HTTP server in Node.js using the <code>http</code> module:
        </p>
        <pre>
          <code>
            {`
const http = require('http');

// Create server object
const server = http.createServer((req, res) => {
  // Set response header
  res.setHeader('Content-Type', 'text/plain');

  // Send response
  res.end('Hello, World!');
});

// Start the server on port 8080
server.listen(8080, () => {
  console.log('Server is running on port 8080');
});
            `}
          </code>
        </pre>
        <p>
          In this code, the <code>http.createServer</code> method is used to create a server that listens on port 8080. The server sends a simple "Hello, World!" message as a response to every incoming request.
        </p>
      </section>

      <section className="handling-section">
        <h3>Step 2: Handling Requests and Routing</h3>
        <p>
          The server created above is very basic. Now, let's enhance it by adding the ability to handle different types of requests (GET, POST, etc.) and routes (URLs).
        </p>
        <p>
          You can parse the URL and method of the incoming request to handle specific routes. Here’s how you can handle a simple GET request:
        </p>
        <pre>
          <code>
            {`
const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const reqUrl = url.parse(req.url, true);

  if (reqUrl.pathname === '/' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome to the Home Page');
  } else if (reqUrl.pathname === '/about' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('About Page');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

server.listen(8080, () => {
  console.log('Server is listening on port 8080');
});
            `}
          </code>
        </pre>
        <p>
          This code handles two routes: the home page (<code>/</code>) and the about page (<code>/about</code>). If the requested URL doesn’t match any of these, it responds with a 404 Not Found message.
        </p>
      </section>

      <section className="advanced-section">
        <h3>Step 3: Sending HTML and JSON Responses</h3>
        <p>
          In real-world scenarios, you won’t just send plain text responses. Let’s look at how to send HTML and JSON data from your server.
        </p>
        <pre>
          <code>
            {`
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Welcome to My Web Server</h1><p>This is a simple HTML response.</p>');
  } else if (req.url === '/api' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Hello, this is a JSON response' }));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

server.listen(8080, () => {
  console.log('Server is running on port 8080');
});
            `}
          </code>
        </pre>
        <p>
          Here, we added two different responses: one for HTML content and another for JSON. This demonstrates how to serve different types of data based on the request.
        </p>
      </section>

      <section className="response-section">
        <h3>Step 4: Sending HTTP Headers and Status Codes</h3>
        <p>
          In addition to sending data, it's essential to include HTTP headers and proper status codes in your responses. For instance, use status codes like 200 for success, 404 for not found, and 500 for server errors.
        </p>
        <pre>
          <code>
            {`
res.writeHead(200, { 'Content-Type': 'application/json' });
res.end(JSON.stringify({ message: 'Success' }));
            `}
          </code>
        </pre>
        <p>
          You can set different types of headers using the <code>res.writeHead</code> method, specifying the content type, caching headers, or security headers.
        </p>
      </section>

      <section className="conclusion-section">
        <h2>Conclusion</h2>
        <p>
          In this guide, we’ve explored the fundamentals of creating a Node.js web server. From setting up a basic server to handling different routes, request methods, and serving different data types (HTML, JSON), you now have a good starting point to build more advanced and scalable applications.
        </p>
        <p>
          Node.js, with its asynchronous nature, is an excellent choice for building fast and scalable network applications. By combining it with other frameworks like Express.js, you can take this knowledge further and create full-featured web applications.
        </p>
      </section>
    </div>
  );
};

export default WebServer;
