import React from "react";
import "./FileSystem.css";

const FileSystem = () => {
  return (
    <div className="file-system-container">
      <h1>Node.js File System</h1>
      <p>Last Updated : 09 Oct, 2024</p>
      <p>
        The fs (File System) module in Node.js provides an API for interacting
        with the file system. It allows you to perform operations such as
        reading, writing, updating, and deleting files and directories, which
        are essential for server-side applications and scripts.
      </p>

      <h2>Table of Content</h2>
      <ul>
        <li>Node.js file system</li>
        <li>Key Features</li>
        <li>What is Synchronous and Asynchronous approach?</li>
        <li>Open a File</li>
        <li>Reading a File</li>
        <li>Writing to a File</li>
        <li>Appending to a File</li>
        <li>Closing the File</li>
        <li>Delete a File</li>
        <li>Benefits</li>
        <li>Summary</li>
      </ul>

      <h3>Node.js file system</h3>
      <p>
        To handle file operations like creating, reading, deleting, etc.,
        Node.js provides an inbuilt module called FS (File System). Node.js
        gives the functionality of file I/O by providing wrappers around the
        standard POSIX functions. All file system operations can have
        synchronous and asynchronous forms depending upon user requirements.
      </p>
      <pre>
        <code>const fs = require('fs');</code>
      </pre>

      <h3>Key Features</h3>
      <ul>
        <li>Asynchronous and Synchronous Methods: Provides both non-blocking and blocking methods for various file operations.</li>
        <li>Error Handling: Includes robust error handling to manage issues such as file not found or permission errors.</li>
        <li>Directory Management: Allows creation, deletion, and listing of directories.</li>
      </ul>

      <h3>What is Synchronous and Asynchronous approach?</h3>
      <p><strong>Synchronous approach:</strong> Blocking functions that wait for each operation to complete before executing the next.</p>
      <p><strong>Asynchronous approach:</strong> Non-blocking functions that don’t wait for each operation to complete, allowing parallel execution.</p>

      <h4>Example of asynchronous and synchronous:</h4>
      <p>Create a text file named <code>input.txt</code> with the following content:</p>
      <pre><code>GeeksforGeeks: A computer science portal</code></pre>
      <p>Example code:</p>
      <pre>
        <code>
          {`
const fs = require("fs");

// Asynchronous read
fs.readFile("input.txt", function (err, data) {
    if (err) {
        return console.error(err);
    }
    console.log("Asynchronous read: " + data.toString());
});

// Synchronous read
const data = fs.readFileSync('input.txt');
console.log("Synchronous read: " + data.toString());
          `}
        </code>
      </pre>

      <h3>Open a File</h3>
      <pre>
        <code>
          {`
const fs = require("fs");

// Asynchronous - Opening File
console.log("opening file!");
fs.open("input.txt", "r+", function (err, fd) {
    if (err) {
        return console.error(err);
    }
    console.log("File open successfully");
});
          `}
        </code>
      </pre>

      <h3>Reading a File</h3>
      <pre>
        <code>
          {`
const fs = require("fs");
const buf = new Buffer(1024);

console.log("opening an existing file");
fs.open("input.txt", "r+", function (err, fd) {
    if (err) {
        return console.error(err);
    }
    console.log("File opened successfully!");
    console.log("reading the file");

    fs.read(fd, buf, 0, buf.length, 0, function (err, bytes) {
        if (err) {
            console.log(err);
        }
        console.log(bytes + " bytes read");

        if (bytes > 0) {
            console.log(buf.slice(0, bytes).toString());
        }
    });
});
          `}
        </code>
      </pre>

      <h3>Writing to a File</h3>
      <pre>
        <code>
          {`
const fs = require("fs");

console.log("writing into existing file");
fs.writeFile("input.txt", "Geeks For Geeks", function (err) {
    if (err) {
        return console.error(err);
    }

    console.log("Data written successfully!");
    console.log("Let's read newly written data");

    fs.readFile("input.txt", function (err, data) {
        if (err) {
            return console.error(err);
        }
        console.log("Asynchronous read: " + data.toString());
    });
});
          `}
        </code>
      </pre>

      <h3>Appending to a File</h3>
      <pre>
        <code>
          {`
const fs = require("fs");

let data = "\\nLearn Node.js";
fs.appendFile("input.txt", data, "utf8", function (err) {
    if (err) throw err;
    console.log("Data is appended to file successfully.");
});
          `}
        </code>
      </pre>

      <h3>Closing the File</h3>
      <pre>
        <code>
          {`
// Close the opened file.
fs.close(fd, function (err) {
    if (err) {
        console.log(err);
    }
    console.log("File closed successfully.");
});
          `}
        </code>
      </pre>

      <h3>Delete a File</h3>
      <pre>
        <code>
          {`
const fs = require("fs");

console.log("deleting an existing file");
fs.unlink("input.txt", function (err) {
    if (err) {
        return console.error(err);
    }
    console.log("File deleted successfully!");
});
          `}
        </code>
      </pre>

      <h3>Benefits</h3>
      <ul>
        <li>Efficient reading, writing, and updating of files.</li>
        <li>Supports a wide range of file system operations.</li>
        <li>Detailed error messages to help with troubleshooting.</li>
      </ul>

      <h3>Summary</h3>
      <p>
        The fs module is a fundamental tool for file operations in Node.js,
        offering a range of methods to handle files and directories effectively.
        Its versatility and robust error handling make it essential for building
        reliable server-side applications.
      </p>
    </div>
  );
};

export default FileSystem;
