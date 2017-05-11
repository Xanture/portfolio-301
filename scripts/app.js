'use strict';

console.log('hello world');

var projectList = []

function Project (projectTitle, projectlastUpdated, gitHubURL) {
  this.projectTitle = projectTitle;
  this.projectlastUpdated = projectlastUpdated;
  this.gitHubURL = gitHubURL;
  projectList.push(this);
}
