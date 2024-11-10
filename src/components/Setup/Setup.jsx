import React from 'react';
import './Setup.css';
import officialwebsite from '../Assets/official-website.jpg';
import wizard from '../Assets/nodejs-setup-wizard.jpg'; 
import PowerShell from '../Assets/windows-powershell.jpg';

const Setup = () => {
  return (
    <div className="setup-container">
      <h1>Setup Development Environment</h1>

      <section>
        <h2>Node.js Installation</h2>
        <p>
          Node.js can be installed on different OS platforms such as Windows, Linux, Mac OS X, etc. You need the following tools on your computer:
        </p>
        <ul>
          <li>The Node.js binary installer</li>
          <li>Node Package Manager (NPM)</li>
          <li>IDE or Text Editor</li>
        </ul>

        <p>
          Binaries for various OS platforms are available on the downloads page of the official website of Node.js. Visit <a href="https://nodejs.org/en/download" target="_blank" rel="noopener noreferrer">Node.js Downloads</a> to get the list.
        </p>
      </section>

      <section>
        {/* <h2>Official Website</h2> */}
        <img src={officialwebsite} alt="web" />
        <p>
          This page shows two sets of binaries for different OS platforms, one for the current or latest version, and the other a version with LTS (Long Term Support), which is recommended for a normal user. 32-bit and 64-bit installers as well as ZIP archives for Windows, macOS installer, tar archives, and binaries for Linux OS on x64 and ARM architecture are available.
        </p>
      </section>

      <section>
        <h2>Installation on Windows</h2>
        <p>
          Assuming that you are working with a Windows 10/Windows 11 powered computer, download the 64-bit installer for Windows from <a href="https://nodejs.org/dist/v20.9.0/node-v20.9.0-x64.msi" target="_blank" rel="noopener noreferrer">here</a>, and start the installation by double-clicking the downloaded file.
        </p>
        {/* <h3>Node.js Setup Wizard</h3> */}
        <img src={wizard} alt="web" />
        <p>
          The installation takes you through a few steps of the installation wizard. It also adds the installation directory of the Node.js executable to the system path.
        </p>
        <p>
          To verify if Node.js has been successfully installed, open the command prompt and type <code>node -v</code>. If Node.js is installed successfully, it will display the version of Node.js installed on your machine, as shown below:
        </p>
        {/* <pre><code>Windows PowerShell</code></pre> */}
        <img src={PowerShell} alt="web" />
      </section>

      <section>
        <h2>Installation on Ubuntu Linux</h2>
        <p>
          First, download the tar file corresponding to the Linux binary from <a href="https://nodejs.org/dist/v20.9.0/node-v20.9.0-linux-x64.tar.xz" target="_blank" rel="noopener noreferrer">here</a> and then extract the binary using the following command:
        </p>
        <pre><code>tar -xf node-v20.9.0-linux-x64.tar.gz</code></pre>
        <p>Move the extracted files to the installation directory:</p>
        <pre><code>sudo mv node-v20.9.0 /usr/local/node-v20.9.0</code></pre>
        <p>Create a symlink to the executable in the `/usr/bin` directory:</p>
        <pre><code>sudo ln -s /usr/local/node-v20.9.0/bin/node /usr/bin/node</code></pre>
        <p>Verify the correct installation with:</p>
        <pre><code>node -v</code></pre>

        <h3>Using Ubuntu Package Manager</h3>
        <p>Refresh your local package index:</p>
        <pre><code>sudo apt update</code></pre>
        <p>Then install Node.js:</p>
        <pre><code>sudo apt install nodejs</code></pre>
        <p>Verify the installation:</p>
        <pre><code>node -v</code></pre>
      </section>

      <section>
        <h2>NPM (Node Package Manager)</h2>
        <p>
          NPM is included in Node.js binaries from its official website since Node version 0.6.0., so you are not required to install it separately.
        </p>
      </section>

      <section>
        <h2>Text Editor/IDE</h2>
        <p>
          You can use any text editor available in your OS (Notepad in Windows, vi or nano in Ubuntu) to write and save the Node.js script. However, it is recommended that you use a suitable IDE for the purpose, such as Visual Studio Code (VS Code), which has out-of-the-box support for JavaScript and Node.js.
        </p>
      </section>
    </div>
  );
};

export default Setup;
