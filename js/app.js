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

  function RouterFuction($stateProvider) {
    $stateProvider
      .state("postIndex", {
        url: "/posts",
        templateUrl: "js/index.html",
        controller: "PostIndexController",
        controllerAs: "indexVm"
      })
      .state("postShow", {
          url: "/posts/:id",
          templateUrl: "js/show.html",
          controller: "PostShowController",
          controllerAs: "showVm"
      });
    }


    var posts = [
      {author: "Tyler"},
      {author: "Andy"},
      {author: "Adam"}
    ]

    function PostIndexControllerFunc() {
      var indexVm = this;
      indexVm.posts = posts;
      indexVm.newPost = "";


    indexVm.create = function(){
      posts.unshift({author: indexVm.newPost});
      indexVm.newPost = "";
    };
  }

      PostShowControllerFunc.$inject = [ "$stateParams" ];
        function PostShowControllerFunc($stateParams) {
        var showVm = this;
        showVm.post = posts[ $stateParams.id];
        };

    })();
