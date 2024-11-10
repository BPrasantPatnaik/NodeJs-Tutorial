import React from 'react'
import './Database.css'

function Database() {

  return (
    <div className='database-connectivity'>
      <h1>Database Connectivity with Node.js</h1>
      <p>
        This example demonstrates how you can connect a Node.js application to a MySQL database. 
        First, ensure that you have MySQL installed on your machine. You can download it from 
        <a href="https://www.mysql.com/downloads/" target="_blank" rel="noopener noreferrer"> here</a>.
      </p>
      <h2>Step 1: Install MySQL Driver</h2>
      <p>
        To use MySQL with Node.js, you need to install the MySQL driver from npm. Run the following command in your terminal:
      </p>
      <pre>npm install mysql</pre>

      <h2>Step 2: Create a Connection</h2>
      <p>
        Next, create a connection to your MySQL database using the 'mysql' module. Below is an example code for establishing the connection:
      </p>
      <pre>
{`var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});`}
      </pre>

      <h2>Step 3: Query the Database</h2>
      <p>
        After establishing the connection, you can start querying the database with SQL statements. 
        Here's an example of querying the database:
      </p>
      <pre>
{`con.query('SELECT * FROM your_table', function (err, result) {
  if (err) throw err;
  console.log("Result: " + result);
});`}
      </pre>

      <h2>Node.js Server Example</h2>
      <p>Here's a simple server code that establishes a connection and listens for API requests:</p>
      <pre>
{`const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 5000;

const con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected to MySQL!");
});

app.get('/api/connect', (req, res) => {
  con.query('SELECT * FROM your_table', (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

app.listen(port, () => {
  console.log('Server running on http://localhost:' + port);
});`}
      </pre>
      <p>This sets up a basic Node.js server with a connection to a MySQL database that responds to GET requests.</p>

      <h2>Conclusion</h2>
      <p>
        You can now connect to a MySQL database using Node.js and query it using SQL statements. 
        Make sure to adjust database connection parameters and table names as per your setup.
      </p>
    </div>
  );
}

export default Database

