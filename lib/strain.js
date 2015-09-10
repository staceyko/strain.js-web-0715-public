'use strict';

var strain = {
    keep: function(array, func){
      var result = [];
      array.forEach(function(element){
        func(element) ? result.push(element) : null;
      })
      return result
    },
    discard: function(array, func){
      var result = []
      array.forEach(function(element){
        !func(element) ? result.push(element) : null;
      })
      return result
    }
};
