import React from 'react';
import './Npm.css';
import version from '../Assets/version.png';

const NPM = () => {
  return (
    <div className="npm-container">
      <h1>Node JS NPM</h1>
      <p>
        NPM (Node Package Manager) is the default package manager for Node and is written entirely in JavaScript. 
        Developed by Isaac Z. Schlueter, it was initially released in January 12, 2010. NPM manages all the packages 
        and modules for Node and consists of command line client npm.
      </p>
      <p>
        NPM gets installed into the system with installation of Node. The required packages and modules in Node projects 
        are installed using NPM. A package contains all the files needed for a module, and modules are the JavaScript libraries 
        that can be included in a Node project based on the requirements.
      </p>
      <p>
        NPM can install all the dependencies of a project through the <strong>package.json</strong> file. It can also update and uninstall packages. 
        In the <strong>package.json</strong> file, each dependency can specify a range of valid versions using the semantic versioning scheme, 
        allowing developers to auto-update their packages while avoiding unwanted breaking changes.
      </p>

      <h2>Some facts about NPM:</h2>
      <ul>
        <li>At the time of writing, NPM has 580,096 registered packages.</li>
        <li>The average rate of growth is 291 packages/day, outracing other package registries.</li>
        <li>NPM is open source.</li>
        <li>The top NPM packages are lodash, async, react, request, and express.</li>
      </ul>

      <h2>Installing NPM</h2>
      <p>
        To install NPM, it is required to install Node.js as NPM gets installed with Node.js automatically.
      </p>

      <h2>Checking and Updating NPM Version</h2>
      <p>Version of npm installed on system can be checked using following syntax:</p>
      <pre><code>npm -v</code></pre>
      <p>If the installed version is not latest, one can always update it using the given syntax:</p>
      <pre><code>npm update npm@latest -g</code></pre>
      <p>(As npm is a global package, use the -g flag to update it globally.)</p>

      <h2>Creating a Node Project</h2>
      <p>To create a Node project, npm init is used in the folder in which user want to create project. The npm command line will ask a number of questions like name, license, scripts, description, author, keywords, version, main file etc. After npm is done creating the project, a package.json file will be visible in project folder as a proof that the project has been initialized.</p>
      <pre><code>npm init</code></pre>
      <p>
        This will create a <strong>package.json</strong> file in your project folder, initializing the project with 
        details like name, version, and dependencies.
      </p>

      <h2>Installing Packages</h2>
      <p>After creating the project, next step is to incorporate the packages and modules to be used in the Node Project. To install packages and modules in the project use the following syntax:</p>
      <pre><code>npm install package_name</code></pre>
      <p>For example, to install the <strong>express</strong> package:</p>
      <pre><code>npm install express</code></pre>

      <h2>Using a Package in Node</h2>
      <p>To use an installed package in a Node project:</p>
      <pre><code>var express = require('express');</code></pre>

      <h2>Installing a Package Globally</h2>
      <p>To install a package globally (accessible to all projects on your system), use the -g flag:</p>
      <pre><code>npm install package_name -g</code></pre>
      <p>For example, to install the nodemon package globally:</p>
      <pre><code>npm install nodemon -g</code></pre>

      <h2>Controlling Where Packages Get Installed</h2>
      <p>To install a package and simultaneously save it in <strong>package.json</strong> file (in case using Node.js), add –save flag. The –save flag is default in npm install command so it is equal to npm install package_name command.</p>
      <pre><code>npm install package_name --save</code></pre>
      <p>This command saves the package as a project dependency. By default, npm install now does this automatically.</p>

      <h2>Usage of Flags</h2>
      <pre><code>
      <p><strong>--save:</strong></p>
      <p>This flag allows control over where the packages are installed.</p>

      <p><strong>--save-prod:</strong></p>
      <p>When using this flag, packages will appear in <strong>Dependencies</strong> (which is also the default behavior).</p>

      <p><strong>--save-dev:</strong></p>
      <p>When using this flag, packages will appear in <strong>devDependencies</strong> and will only be used in development mode.</p>

      <p><strong>Note:</strong> If there is a <strong>package.json</strong> file with all the packages already mentioned as dependencies, 
       you can simply type <code>npm install</code> in the terminal to install them.
      </p>
      </code></pre>

      <h2>Save Directory of Installed Modules</h2>
      <p>NPM installs the dependencies in local mode (Default) which go to the node_modules directory present in the folder of Node application. To see all the locally installed modules use npm ls command.</p>
      <pre><code>npm ls</code></pre>

      <h2>Uninstalling Packages</h2>
      <p>To uninstall a package from your Node project, use the following syntax:</p>
      <pre><code>npm uninstall package_name</code></pre>
      <p>To uninstall a global package:</p>
      <pre><code>npm uninstall package_name -g</code></pre>

      <h2>Using Semantic Versioning to Manage Packages</h2>
      <img src={version} alt="web" />
      <ul>
      <li>
      To install a package of a specific version, mention the full and exact version in the <strong>package.json</strong> file.
      </li>
      <li>
      To install the latest version of the package, mention <code>"*"</code> in front of the dependency or use <code>"latest"</code>. This will find the latest stable version of the module and install it.
      </li>
      <li>
      To install any version (stable one) above a given version, use the following syntax in the <strong>package.json</strong> file:
      <code>"express": "^4.1.1"</code>. The caret symbol (<code>^</code>) is used to tell NPM to find a version greater than <code>4.1.1</code> and install it.
      </li>
      </ul>
      <pre><code>"express": "^4.1.1"</code></pre>

      <p>
        NPM is an essential tool for managing Node.js projects, packages, and dependencies. Mastering its use will streamline your development workflow.
      </p>
    </div>
  );
};

export default NPM;
