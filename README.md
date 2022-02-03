# Automation Test Site

A port of the server-side rendered ASP.NET MVC automation test site to a static Gatsby site that can be served from any basic HTTP server. 

## Usage

There are two supported configurations — deploying to GitHub pages or running in a Docker container behind NGINX.

### Deploying to GitHub pages

The NPM package [gh-pages](https://www.npmjs.com/package/gh-pages) is used to deploy to GitHub pages. It contains logic to easily publish a collection of files to a seperate Git branch that does not share a common history with the main branch.

To deploy to GitHub pages using gh-pages, within the `/automation-test-site/` directory:

**The below assumes that Node.js (node and npx) is installed and is in the PATH for your respective shell**
1. Install the required packages with `npm install`, and copy over the jQuery and jQuery-ui packages to the static folder, using `npx shx cp node_modules/jquery/dist/jquery.min.js node_modules/jqueryui/jquery-ui.min.js node_modules/jqueryui/jquery-ui.min.css static/`
2. Build the Gatsby site using `npx gatsby build --prefix-paths`, the prefix paths attribute is required so the Gatsby links generate with the `/AutomationTestSite/` directory prefix.
3. Create/Update the GitHub pages branch in git under the branch name `gh-pages` and push to origin using `npx gh-pages -f -d public`.

### Running Docker container

The `Dockerfile` contains logic for standing up an NGINX container that has the Gatsby site running at the `/AutomationTestSite/`. 

To build the docker container:

**The below assumes that Node.js (node and npx) is installed and is in the PATH for your respective shell**
1. Within the `/automation-test-site/` directory, install the required packages with `npm install`, and copy over the jQuery and jQuery-ui packages to the static folder, using `npx shx cp node_modules/jquery/dist/jquery.min.js node_modules/jqueryui/jquery-ui.min.js node_modules/jqueryui/jquery-ui.min.css static/`.
2. Within the `/automation-test-site/` directory, build the Gatsby site using `npx gatsby build --prefix-paths`, the prefix paths attribute is required so the Gatsby links generate with the `/AutomationTestSite/` directory prefix.
3. Within the root directory, build the docker container using the Dockerfile in the root directory, using `docker build -t automation-test-site --label automation-test-site .`.
4. Run the docker container using the following to run the service on port 8080, using `docker run -d -p 8080:80 --name automation-test-suite automation-test-site`.
5. To shutdown the service, use `docker container stop automation-test-suite && docker rm automation-test-suite`.

## Implementation Details

When moving from SGML documents generated at requrest time to pre-generated documents generated at compile time, some changes in the architecture of the application are required. For instance, to maintain application state, a database is no longer accessed by the service serving the documents, and instead JavaScript is ran by the client browser to fetch JSON documents and insert nodes into the tree based off the content of those documents. To maintain application state, [React contexts](https://reactjs.org/docs/context.html) are used instead.

### Known Issues/Changes

* An additional div tag is inserted between the body node and the page content nodes, when in the original MVC site the page content nodes were direct children of the body.
* Deploying the site to the subdirectory `/AutomationTestSite/` is required. This is because some static assets have this directory prefix hardcoded.
* The document type declaration is present at the top of the document, when in the MVC application it is not.

### Migration Guide

__In progress__
