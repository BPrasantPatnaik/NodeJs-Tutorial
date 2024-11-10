import React from 'react';
import './Introduction.css'; // Import your CSS for styling if needed

const Introduction = () => {
  return (
    <div className="introduction">
      <h1>Introduction to Node.js</h1>
      <p>
        Node.js is an open-source and cross-platform JavaScript runtime environment. It is a popular tool for almost any kind of project!
      </p>
      <p>
        Node.js runs the V8 JavaScript engine, the core of Google Chrome, outside of the browser. This allows Node.js to be very performant.
      </p>
      <p>
        A Node.js app runs in a single process, without creating a new thread for every request. Node.js provides a set of asynchronous I/O primitives in its standard library that prevent JavaScript code from blocking and generally, libraries in Node.js are written using non-blocking paradigms, making blocking behavior the exception rather than the norm.
      </p>
      <p>
        When Node.js performs an I/O operation, like reading from the network, accessing a database or the filesystem, instead of blocking the thread and wasting CPU cycles waiting, Node.js will resume the operations when the response comes back.
      </p>
      <p>
        This allows Node.js to handle thousands of concurrent connections with a single server without introducing the burden of managing thread concurrency, which could be a significant source of bugs.
      </p>
      <p>
        Node.js has a unique advantage because millions of frontend developers that write JavaScript for the browser are now able to write the server-side code in addition to the client-side code without the need to learn a completely different language.
      </p>
      <p>
        In Node.js, the new ECMAScript standards can be used without problems, as you don't have to wait for all your users to update their browsers - you are in charge of deciding which ECMAScript version to use by changing the Node.js version, and you can also enable specific experimental features by running Node.js with flags.
      </p>

      <h2>An Example Node.js Application</h2>
      <p>The most common example Hello World of Node.js is a web server:</p>
      
      <pre>
        <code>
          {`const { createServer } = require('node:http');
const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(\`Server running at http://\${hostname}:\${port}/\`);
});`}
        </code>
      </pre>

      <p>
        To run this snippet, save it as a <code>server.js</code> file and run <code>node server.js</code> in your terminal. If you use the mjs version of the code, you should save it as a <code>server.mjs</code> file and run <code>node server.mjs</code> in your terminal.
      </p>
      <p>
        This code first includes the Node.js http module. Node.js has a fantastic standard library, including first-class support for networking.
      </p>
      <p>
        The <code>createServer()</code> method of http creates a new HTTP server and returns it. The server is set to listen on the specified port and host name. When the server is ready, the callback function is called, in this case informing us that the server is running.
      </p>
      <p>
        Whenever a new request is received, the request event is called, providing two objects: a request (<code>http.IncomingMessage</code> object) and a response (<code>http.ServerResponse</code> object). Those two objects are essential to handle the HTTP call.
      </p>
      <p>
        The first provides the request details. In this simple example, this is not used, but you could access the request headers and request data.
      </p>
      <p>
        The second is used to return data to the caller. In this case with:
      </p>

      <pre>
        <code>
          {`res.statusCode = 200;`}
        </code>
      </pre>
      <p>
        we set the statusCode property to 200, to indicate a successful response.
      </p>
      <p>
        We set the Content-Type header: 
      </p>
      <pre>
        <code>
          {`res.setHeader('Content-Type', 'text/plain');`}
        </code>
      </pre>
      <p>
        and we close the response, adding the content as an argument to <code>end()</code>:
      </p>
      <pre>
        <code>
          {`res.end('Hello World\\n');`}
        </code>
      </pre>
      
    </div>
  );
};

export default Introduction;
