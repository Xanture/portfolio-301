'use strict';

var projects = [];

function Project (rawDataObj) {
  for (var key in rawDataObj) {
    this[key] = rawDataObj[key];
  }
}

Project.prototype.toHtml = function() {
  var template = $('#project-template').html();
  var templateRender = Handlebars.compile(template);
  return templateRender(this);
};

Project.loadAll = function(projectData) {
  projectData.forEach(function(projectObject) {
    projects.push(new Project(projectObject));
  });

  projects.forEach(function(project) {
    $('#project-div').append(project.toHtml());
  });
}

Project.fetchAll = function() {
  if (localStorage.projectData) {
    Project.loadAll(JSON.parse(localStorage.projectData));
  } else {
    $.getJSON('appData.json')
    .then(function(data) {
      Project.loadAll(data);
      localStorage.projectData = JSON.stringify(data);
    },
    function(err) {
      console.log(err);
    })
  }
}
