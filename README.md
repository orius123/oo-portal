### Intro
This is a sample implementation for creating an end user portal mobile application for HP's Operation Orchestration.

### Try it out
If you want to try it out using mock responses (hard coded in static .json files")

```
$ git clone https://github.com/mzruya/oo-portal.git
$ cd oo-portal
$ npm install
$ gulp bower
$ gulp server
```

now open your favorite browser (chrome) at http://localhost:8080/src.

### Building a single html
There is also an option of creating a single output in the form of an html file you can throw under the /oo web-server.
```
$ git clone https://github.com/mzruya/oo-portal.git
$ cd oo-portal
$ npm install
$ gulp bower
$ gulp
$ cp dist/index.html /PATH/TO/OO
```