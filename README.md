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

You needs to install phonegap, and grunt-cli as well
```
    npm install phonegap -g
    npm install -g grunt-cli
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
### How to integrate with phonegap

After cloning from cd angularjs-common-code-sharing repository, go to its folder
```
cd angularjs-common-code-sharing
```
Create phonegap package
```
phonegap create phonegap
```
If you want to use your own name, remember to change the phonegap folder in gruntfile. I will
update the new tasks that automatically create phonegap and mapping the name soon.

Next, you need to update dependencies by executing npm install. When the depend

```
npm install
```

Executing 'grunt phonegap' - the task that specified for mifiying, copying needed codes into www phonegap.
It also creates app folder and all your AngularJS code will be stored here.
```
grunt phonegap
```

In phonegap package, opening config.xml and changing this setting
```
    <content src="index.html" />
```

to
```
    <content src="app/index.html" />
```

You also need to modify the index.html, so it can load the minification resource as well. Or just copying
the code below

```
<!DOCTYPE html>
<!--[if lt IE 7]>      <html lang="en" ng-app="myApp" class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html lang="en" ng-app="myApp" class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html lang="en" ng-app="myApp" class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html lang="en" ng-app="myApp" class="no-js"> <!--<![endif]-->
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>My AngularJS App</title>
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="css/normalize.min.css">
  <link rel="stylesheet" href="css/main.min.css">
  <link rel="stylesheet" href="css/app.min.css">
</head>
<body>
  <ul class="menu">
    <li><a href="#/view1">view1</a></li>
    <li><a href="#/view2">view2</a></li>
  </ul>

  <!--[if lt IE 7]>
      <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
  <![endif]-->

  <div ng-view></div>

  <div>Angular seed app: v<span app-version></span></div>

  <!-- In production use:
  <script src="//ajax.googleapis.com/ajax/libs/angularjs/x.x.x/angular.min.js"></script>
  -->
  <script src="libs/angular.min.js"></script>
  <script src="libs/angular-route.min.js"></script>
  <script src="main.js"></script>
</body>
</html>

```