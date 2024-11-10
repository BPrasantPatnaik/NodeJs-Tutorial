import React from 'react';
import './Debugging.css';

const Debugging = () => {
    return (
        <div className="debugging-container">
            <h1>Debugging Node.js Applications</h1>
            <p>This document provides a comprehensive guide to debugging Node.js applications, covering multiple debugging methods, configurations, and tools.</p>

            {/* Enable Inspector Section */}
            <h2>Enable Inspector</h2>
            <p>To start debugging, run the Node.js process with the <code>--inspect</code> switch. This opens the debugger on <code>127.0.0.1:9229</code> with a unique UUID for each process.</p>
            <p>To connect, clients require the host, port, and UUID, which forms a URL like <code>ws://127.0.0.1:9229/unique-UUID</code>.</p>

            {/* Security Implications Section */}
            <h2>Security Implications</h2>
            <p>The debugger grants full access to the Node.js environment, meaning an exposed port could allow arbitrary code execution.</p>
            <h3>Exposing the Debug Port Publicly is Unsafe</h3>
            <p>Using <code>node --inspect</code> defaults to binding on <code>127.0.0.1</code>. Exposing it by binding to <code>0.0.0.0</code> creates security vulnerabilities.</p>

            {/* Inspector Clients Section */}
            <h2>Inspector Clients</h2>
            <p>Different clients can connect to the debugger:</p>
            <ul>
                <li><strong>Chrome DevTools:</strong> Open <code>chrome://inspect</code> and add the target.</li>
                <li><strong>Visual Studio Code:</strong> In the Debug panel, select "Node.js".</li>
                <li><strong>Visual Studio:</strong> Start debugging by selecting Debug Start Debugging.</li>
                <li><strong>JetBrains WebStorm:</strong> Create a Node.js debug configuration.</li>
                <li><strong>Gitpod:</strong> Use the Debug view to start debugging.</li>
                <li><strong>Eclipse IDE:</strong> Debug as a Node program or attach to a running application with --inspect.</li>
            </ul>

            {/* Command-line Options Table */}
            <h2>Command-line Options</h2>
            <table>
                <thead>
                    <tr>
                        <th>Option</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>--inspect</code></td>
                        <td>Enables inspector, listening on 127.0.0.1:9229</td>
                    </tr>
                    <tr>
                        <td><code>--inspect=[host:port]</code></td>
                        <td>Binds inspector to specified host and port</td>
                    </tr>
                    <tr>
                        <td><code>--inspect-brk</code></td>
                        <td>Starts inspector, pausing execution before user code</td>
                    </tr>
                    <tr>
                        <td><code>--inspect-wait</code></td>
                        <td>Enables inspector and waits for client to attach before execution</td>
                    </tr>
                </tbody>
            </table>

            {/* Enabling Remote Debugging Section */}
            <h2>Enabling Remote Debugging Scenarios</h2>
            <p>Use SSH tunneling to securely access the debug port from a remote machine instead of exposing it publicly:</p>
            <pre>
                <code>ssh -L 9221:localhost:9229 user@remote.example.com</code>
            </pre>

            {/* Legacy Debugger Section */}
            <h2>Legacy Debugger</h2>
            <p>The legacy debugger is deprecated as of Node.js 7.7.0. Switch to using <code>--inspect</code> for a more stable debugging experience.</p>
        </div>
    );
};

export default Debugging;
