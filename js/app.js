"use strict";

(function(){
  angular
  .module("app", ["ui.router"])
  .config([ "$stateProvider", RouterFunction ])

  .controller("PostIndexController", PostIndexControllerFunc)
  .controller("PostShowController", PostShowControllerFunc)

  function RouterFunction($stateProvider) {
    $stateProvider
      .state("postIndex", { url: "/posts", templateUrl: "js/index.html", controller: "PostIndexController", controllerAs: "indexVm" })

      .state("postShow", { url: "/posts/:id", templateUrl: "js/show.html", controller: "PostShowController", controllerAs: "showVm" });
  }


    var posts = [
      {author: "Vivie"},
      {author: "Noe"},
      {author: "Habby"}
    ]

    function PostIndexControllerFunc() {
      var indexVm = this;
      indexVm.posts = posts;
      indexVm.newPost = "";

    indexVm.create = function(){
      indexVm.posts.unshift(indexVm.newPost);
    };
  }

      PostShowControllerFunc.$inject = [ "$stateParams" ];
        function PostShowControllerFunc($stateParams) {
        var showVm = this;
        showVm.post = posts[ $stateParams.id];

        showVm.update = function() {
            posts[$stateParams.id].author = showVm.post;
        };
        showVm.delete = function() {
          posts.splice( $stateParams.id, 1);
        }
      };

    })();
