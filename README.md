# AngularJS common code sharing, base on the seed for AngularJS apps


The scenario to create this project that I need to share the common codes (directives, services)
that between web version and phonegap version. This project also supports grunt tasks that minify,
deploy to phonegap workspace, so you can build the mobile app quickly.

## Getting Started

To get you started you can simply clone the angularjs-common-code-sharing repository and install
the dependencies.

### Prerequisites

You need git to clone the angular-seed repository. You can get git from
[http://git-scm.com/](http://git-scm.com/).

We also use a number of node.js tools to initialize and test angular-seed. You must have node.js and
its package manager (npm) installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).

You needs to install phonegap as well,
```
    npm install phonegap -g
```
### Clone angularjs-common-code-sharing

Clone the angularjs-common-code-sharing repository using [git][git]:

```
git clone https://github.com/dothanhlam/angularjs-common-code-sharing.git
cd angularjs-common-code-sharing
```


## Directory Layout

```
app/                    --> all of the source files for the application
  app.css               --> default stylesheet
  common                --> sharing code
  components/           --> all app specific modules
    version/              --> version related components / sharing code
      version.js                 --> version module declaration and basic "version" value service
      version_test.js            --> "version" value service tests
      version-directive.js       --> custom directive that returns the current app version
      version-directive_test.js  --> version directive tests
      interpolate-filter.js      --> custom interpolation filter
      interpolate-filter_test.js --> interpolate filter tests
  profiles
    phone               --> phonegap version
      view1/                --> the view1 view template and logic
        view1.html            --> the partial template
        view1.js              --> the controller logic
        view1_test.js         --> tests of the controller
      view2/                --> the view2 view template and logic
        view2.html            --> the partial template
        view2.js              --> the controller logic
        view2_test.js         --> tests of the controller
      app.js                --> main application module
      index.html            --> app layout file (the main html template file of the app)
    web                --> web version
      view1/                --> the view1 view template and logic
        view1.html            --> the partial template
        view1.js              --> the controller logic
        view1_test.js         --> tests of the controller
      view2/                --> the view2 view template and logic
        view2.html            --> the partial template
        view2.js              --> the controller logic
        view2_test.js         --> tests of the controller
      app.js                --> main application module
      index.html            --> app layout file (the main html template file of the app)
      index-async.html      --> just like index.html, but loads js files asynchronously


karma.conf.js         --> config file for running unit tests with Karma
e2e-tests/            --> end-to-end tests
  protractor-conf.js    --> Protractor config file
  scenarios.js          --> end-to-end scenarios to be run by Protractor
```