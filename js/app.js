"use strict";

(function(){
  angular
  .module("wdinstagram", [
    "ui.router"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ])
  .controller("PostIndexController", PostIndexControllerFunc)
  .controller("PostShowController", PostShowControllerFunc)
  .factory("PostFactory", PostFactoryFunc);

  var posts = [
    {author: "Tyler"},
    {author: "Andy"},
    {author: "Adam"}
  ]

  function PostIndexControllerFunc() {
    var indexVm = this;
    indexVm.posts = posts;
  }


function RouterFuction($stateProvider) {
  $stateProvider
    .state("postIndex", {
      url: "/posts",
      templateUrl: "js/index.html",
      controller: "PostIndexController",
      controllerAs: "indexVm"
    })
    .state("PostsShow", {
        url: "/posts/:id",
        templateUrl: "js/show.html",
        controller: "PostShowController",
        controllerAs: "showVm"
    });
  }


}


})();
