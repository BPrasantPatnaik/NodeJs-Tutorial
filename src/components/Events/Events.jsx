import React from 'react'
import './Events.css'

function Events() {
  return (
    <div className='events-container'>
      <h1>Understanding Events in Node.js</h1>
      <p>
        Every action on a computer is an event. For example, when a connection is made or a file is opened.
      </p>
      <h2>Node.js and Events</h2>
      <p>
        Objects in Node.js can fire events. For example, the <code>readStream</code> object fires events
        when opening and closing a file. Here’s an example:
      </p>
      <pre>
        <code>
          {`var fs = require('fs');
          var rs = fs.createReadStream('./demofile.txt');
          rs.on('open', function () {
            console.log('The file is open');
          });`}
        </code>
      </pre>
      <h2>Events Module</h2>
      <p>
        Node.js has a built-in module, called "Events", where you can create, fire,
        and listen for your own events. To include the built-in Events module, use the
        <code>require()</code> method.
      </p>
      <pre>
        <code>
          {`var events = require('events');
          var eventEmitter = new events.EventEmitter();`}
        </code>
      </pre>
      <h2>The EventEmitter Object</h2>
      <p>
        You can assign event handlers to your own events with the EventEmitter object. For example, we can
        create an event handler that will be executed when a "scream" event is fired.
      </p>
      <pre>
        <code>
          {`var events = require('events');
          var eventEmitter = new events.EventEmitter();

          // Create an event handler:
          var myEventHandler = function () {
            console.log('I hear a scream!');
          }

          // Assign the event handler to an event:
          eventEmitter.on('scream', myEventHandler);

          // Fire the 'scream' event:
          eventEmitter.emit('scream');`}
        </code>
      </pre>
      <p>
        This example demonstrates how to use the <code>emit()</code> method to fire an event,
        and the <code>on()</code> method to assign an event handler to an event.
      </p>
    </div>
  );
}

export default Events