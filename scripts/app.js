'use strict';

var projectList = []

function Project (projectTitle, projectlastUpdated, gitHubURL, projectDescription) {
  this.projectTitle = projectTitle;
  this.projectlastUpdated = projectlastUpdated;
  this.gitHubURL = gitHubURL;
  this.projectDescription = projectDescription;
  projectList.push(this);
}
$(document).ready(function(){
  $('.fa-bars').on('click', function() {
    $('.full-nav').slideToggle('slow', function() {
      
    })
  });
})
