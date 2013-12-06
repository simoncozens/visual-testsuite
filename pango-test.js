#!/usr/local/bin/node

require("./renderings.jsonp");
require("shelljs");
mkdir("pango");

tests.forEach(function(t) {
	console.log(t.description);
	var font = (t.font || "Times New Roman") + " 30px";
	var cmd = "pango-view " +
		'--font="' + font +'" ' +
		'--language=' + t.language + ' ' +
		'-t "' + t.utf8 + '" ' +
		'-o pango/'+t.image + ' -q' 
	exec(cmd);
});