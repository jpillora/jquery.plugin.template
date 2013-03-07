'use strict'

name = "jquery.my.plugin"

doStuff = ->
	42

$.fn[name] = ->
	$(@).html doStuff()
