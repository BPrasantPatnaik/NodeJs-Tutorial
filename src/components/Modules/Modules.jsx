import React from 'react';
import './Modules.css';

const Modules = () => {
  return (
    <div className="modules-container">
      <h1>Node.js Modules</h1>

      <section>
        <h2>Introduction</h2>
        <p>
          Modules in Node.js are reusable blocks of code that encapsulate various functionalities in a Node application. These modules can include functions, objects, and variables that are exported from the code files.
        </p>
      </section>

      <section>
        <h2>What are Node.js Modules?</h2>
        <p>
          Node.js Modules are blocks of encapsulated code that communicate with an external application based on their related functionality. Modules can be a single file or a collection of multiple files/folders. Modules provide reusability and allow breaking down complex pieces of code into manageable chunks.
        </p>
      </section>

      <section>
        <h2>Types of Node.js Modules</h2>
        <ul>
          <li>Core Modules</li>
          <li>Local Modules</li>
          <li>Third-party modules</li>
        </ul>
        <p>
          Note: Node.js modules are key to organizing your code in manageable chunks. To master module creation and usage in full-stack applications, the Full Stack Development with Node.js course offers practical lessons on building modular Node.js applications.
        </p>
      </section>

      <section>
        <h2>Core Modules</h2>
        <p>
          Node.js has many built-in modules that come with Node.js installation. These modules can be loaded into the program by using the `require()` function.
        </p>
        <pre>
          <code>{`const module = require('module_name');`}</code>
        </pre>
        <p>
          The `require()` function returns a JavaScript type depending on what the module returns. For example, the following shows how to use the Node.js `http` module to create a web server:
        </p>
        <pre>
          <code>{`
            const http = require('http');
            http.createServer(function (req, res) {
              res.writeHead(200, { 'Content-Type': 'text/html' });
              res.write('Welcome to this page!');
              res.end();
            }).listen(3000);
          `}</code>
        </pre>
        <p>The important core modules include:</p>
        <table>
          <thead>
            <tr>
              <th>Core Modules</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>http</td>
              <td>Creates an HTTP server in Node.js.</td>
            </tr>
            <tr>
              <td>assert</td>
              <td>Set of assertion functions useful for testing.</td>
            </tr>
            <tr>
              <td>fs</td>
              <td>Used to handle file systems.</td>
            </tr>
            <tr>
              <td>path</td>
              <td>Includes methods to deal with file paths.</td>
            </tr>
            <tr>
              <td>process</td>
              <td>Provides information and control about the current Node.js process.</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2>Local Modules</h2>
        <p>
          Local modules are created locally in your Node.js application. The following is a simple example of a local calculating module:
        </p>
        <pre>
          <code>{`
            // Filename: calc.js

            exports.add = function (x, y) {
              return x + y;
            };

            exports.sub = function (x, y) {
              return x - y;
            };

            exports.mult = function (x, y) {
              return x * y;
            };

            exports.div = function (x, y) {
              return x / y;
            };
          `}</code>
        </pre>
        <p>You can now use this module in another file as follows:</p>
        <pre>
          <code>{`
            // Filename: index.js

            const calculator = require('./calc');

            let x = 50, y = 10;

            console.log("Addition of 50 and 10 is " + calculator.add(x, y));
            console.log("Subtraction of 50 and 10 is " + calculator.sub(x, y));
            console.log("Multiplication of 50 and 10 is " + calculator.mult(x, y));
            console.log("Division of 50 and 10 is " + calculator.div(x, y));
          `}</code>
        </pre>
        <p>Run the program using the command:</p>
        <pre><code>node index.js</code></pre>
        <p>Output:</p>
        <pre>
          <code>{`
            Addition of 50 and 10 is 60
            Subtraction of 50 and 10 is 40
            Multiplication of 50 and 10 is 500
            Division of 50 and 10 is 5
          `}</code>
        </pre>
      </section>

      <section>
        <h2>Third-party Modules</h2>
        <p>
          Third-party modules are available via Node Package Manager (NPM). Some popular modules include Mongoose, Express, Angular, and React.
        </p>
        <p>For example, to install Express:</p>
        <pre><code>npm install express</code></pre>
        <p>Create a simple Express server:</p>
        <pre>
          <code>{`
            const express = require('express');
            const app = express();
            const port = 3000;

            app.get('/', (req, res) => {
              res.send('Hello World!');
            });

            app.listen(port, () => {
              console.log('Example app listening at http://localhost:' + port);
            });
          `}</code>
        </pre>
        <p>Run the server using:</p>
        <pre><code>node server.js</code></pre>
      </section>
    </div>
  );
};

export default Modules;
