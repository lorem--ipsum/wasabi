angular.module('wasabi', [])

.filter('fuzzy', ['$utils', function($utils) {
  return function(items, value) {
    return items.map(function(item) {
      item.score = $utils.distance(value, item.value);
      return item;
    }).sort(function(item_a, item_b) {
      return item_a.score - item_b.score;
    });
  }
}])

.factory('$utils', [function() {
  return {
    distance: function(s, t) {
      if (s === undefined || s === t) {
        return 0;
      }
      
      if (s.length === 0) {
        return t.length;
      }
      
      if (t.length === 0) {
        return s.length;
      }
      
      var v0 = [];
      var v1 = [];
      
      for (var a = 0; a <= t.length; a++) {
        v0.push(a);
      }
      
      for (var i = 0; i < s.length; i++) {
        v1[0] = i+1;
        
        for (var j = 0; j <= t.length; j++) {
          v1[j+1] = Math.min(v1[j] + 1, v0[j + 1] + 1, v0[j] + (s[i] == t[j] ? 0 : 1));
        }
        
        for (var k = 0; k < v0.length; k++) {
          v0[k] = v1[k];
        }
      }
      
      return v1[t.length];
    }
  };
}])
;