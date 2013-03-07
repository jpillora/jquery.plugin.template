/** My Plugin - v0.0.1 - 2013/03/07
 * 
 * Copyright (c) 2013 Jaime Pillora - MIT
 */

(function(window,document,undefined) {
(function() {
  'use strict';
  var doStuff, name;

  name = "jquery.my.plugin";

  doStuff = function() {
    return 42;
  };

  $.fn[name] = function() {
    return $(this).html(doStuff());
  };

}).call(this);

}(window,document));