'use strict';

var projectList = []

function Project (projectTitle, projectlastUpdated, gitHubURL, projectDescription) {
  this.projectTitle = projectTitle;
  this.projectlastUpdated = projectlastUpdated;
  this.gitHubURL = gitHubURL;
  this.projectDescription = projectDescription;
  projectList.push(this);
}
