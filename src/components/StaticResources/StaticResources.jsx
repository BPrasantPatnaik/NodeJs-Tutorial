import React from 'react'

function StaticResources() {
  return (
    <div className="introduction">
        <h1>Serving Static Resources in Node.js</h1>

        <h2>Serve Static Resources using Express.js</h2>
        <p>
            Serving static files in an Express.js application is straightforward using the built-in <code>express.static</code> middleware. You can directly serve static resources by specifying the folder name where your static files are located.
        </p>
        <pre>
            <code>
{`var express = require('express');
var app = express();

//setting middleware
app.use(express.static(__dirname + '/public')); // Serves resources from public folder

var server = app.listen(5000);`}
            </code>
        </pre>
        <p>
            The above code snippets show how you can serve static files from a <code>public</code> folder. You can also serve from multiple directories:
        </p>
        <pre>
            <code>
{`app.use(express.static('public'));
app.use('/images', express.static(__dirname + '/Images'));

var server = app.listen(5000);`}
            </code>
        </pre>
        <p>
            To hide the actual folder name in your URL paths, you can set a virtual path:
        </p>
        <pre>
            <code>app.use('/resources', express.static(__dirname + '/images'));</code>
        </pre>

        <h2>Serve Static Resources using Node-static Module</h2>
        <p>
            The <code>node-static</code> module can be used for serving static resources in a Node.js application. This module provides an HTTP static-file server with built-in file caching.
        </p>
        <p>Firstly, ensure you have the module installed:</p>
        <pre>
            <code>npm install node-static</code>
        </pre>
        <p>Here’s an example of using <code>node-static</code> to serve static files:</p>
        <pre>
            <code>
{`var http = require('http');
var nStatic = require('node-static');

var fileServer = new nStatic.Server('./public');

http.createServer(function (req, res) {
fileServer.serve(req, res);
}).listen(5000);`}
            </code>
        </pre>
        <p>
            The above setup will serve static files from the <code>public</code> folder. URL requests map directly to files in this folder.
        </p>
    </div>
);
}

export default StaticResources