'use strict';

angular.module('app.directives', []).
  directive('blockInput', function() {
    return function(scope, elm, attrs) {
      elm.css({
        'text-align': 'center',
        'background-color': 'rgba(255, 255, 255, 0.8)',
        'z-index': 5001,
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
      });
    };
  });